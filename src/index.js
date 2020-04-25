import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import * as serviceWorker from './serviceWorker';

class CardItem extends React.Component {
    render() {
        return (
            <div className="CardItem">
                <h3>{this.props.title}</h3>
                <p>{this.props.body}</p>
            </div>
        )
    }
}

class Card extends React.Component {
    render() {
        const product = this.props.product;

        return (
            <div className="Card">
                <CardItem title={product.title} body={product.body}/>
            </div>
        )
    }
}


class ListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                this.setState({products: data})
            })
    }

    render() {
        let cards = [];
        this.state.products.forEach(item => {
            cards.push(<Card product={item} key={item.id}/>)
        });

        return (
            <div className="ListContainer">
                {cards}
            </div>
        )
    }
}

ReactDOM.render(
    <ListContainer/>,
    document.getElementById('root')
);

serviceWorker.unregister();
