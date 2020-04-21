import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


class ProductCategoryRow extends React.Component {
    render() {
        const category = this.props.category;
        return (
            <tr>
                <th colSpan="2">{category}</th>
            </tr>
        )
    }
}

class ProductRow extends React.Component {
    render() {
        const product = this.props.product;
        const name = product.stocked ? product.name : <span style={{color: "red"}}>{product.name}</span>;

        return (
            <tr>
                <td>{name}</td>
                <td>{product.price}</td>
            </tr>
        )
    }
}

class ProductTable extends React.Component {
    render() {
        const rows = [];
        let lastCategory = null;

        // filter products
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;

        this.props.products.forEach((product) => {
            const name = product.name.toLowerCase();

            if (name.indexOf(filterText.toLowerCase()) === -1) {
                return;
            }
            if (inStockOnly && !product.stocked) {
                return;
            }
            if (product.category !== lastCategory) {
                rows.push(
                    <ProductCategoryRow
                        category={product.category}
                        key={product.category}
                    />
                )
            }
            rows.push(
                <ProductRow product={product} key={product.name}/>
            );

            lastCategory = product.category
        });

        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </table>
        )
    }
}

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockOnlyChange = this.handleInStockOnlyChange.bind(this);
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }

    handleInStockOnlyChange(e) {
        this.props.onInStockOnlyChange(e.target.checked)
    }

    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;

        return (
            <form className="SearchBar">
                <input type="text"
                       placeholder="Search..."
                       onChange={this.handleFilterTextChange}
                       value={filterText}/>
                <p>
                    <input type="checkbox"
                           onChange={this.handleInStockOnlyChange}
                           checked={inStockOnly}/>
                    Only show products in stock
                </p>
            </form>
        );
    }
}

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        };
        this.onFilterTextChange = this.onFilterTextChange.bind(this);
        this.onInStockOnlyChange = this.onInStockOnlyChange.bind(this);
    }

    onFilterTextChange(value) {
        this.setState({filterText: value})
    }

    onInStockOnlyChange(value) {
        this.setState({inStockOnly: value})
    }


    render() {
        return (
            <div className="FilterableProductTable">
                <SearchBar
                    filterText={this.state.filterText}
                    onFilterTextChange={this.onFilterTextChange}
                    onInStockOnlyChange={this.onInStockOnlyChange}
                    inStockOnly={this.state.inStockOnly}/>

                <ProductTable
                    products={this.props.products}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />
            </div>
        );
    }
}

const PRODUCTS = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

ReactDOM.render(
    <FilterableProductTable products={PRODUCTS}/>,
    document.getElementById('root')
);

serviceWorker.unregister();
