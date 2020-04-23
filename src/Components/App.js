import React from "react";
import Form from "./Form";
import Todo from "./Todo";
import FilterRow from "./FilterRow";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            show: 'all',
            items: [],
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onCompleteAll = this.onCompleteAll.bind(this);
        this.onFilterButtonClicked = this.onFilterButtonClicked.bind(this);
        this.onItemInputChecked = this.onItemInputChecked.bind(this);
    }

    onItemInputChecked(value, item_id) {
        this.setState(state => ({
            items: state.items.map(item => item.id === item_id ? {...item, completed: value} : item),
            text: state.text,
            show: state.show
        }))
    }


    onFilterButtonClicked(value) {
        this.setState({show: value})
    }

    onCompleteAll(value) {
        this.setState(state => ({
            items: state.items.map(item => {
                return {...item, completed: value}
            }),
            text: this.state.text
        }))
    }

    onInputChange(value) {
        this.setState({text: value})
    }

    onFormSubmit(e) {
        e.preventDefault();
        if (this.state.text.length === 0) {
            return;
        }

        const newItem = {
            text: this.state.text,
            id: new Date(),
            completed: false,
        };

        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }))
    }

    render() {
        return (
            <div>
                <Form
                    text={this.state.text}
                    onInputChange={this.onInputChange}
                    onFormSubmit={this.onFormSubmit}
                    onCompleteAll={this.onCompleteAll}
                />
                <Todo
                    items={this.state.items}
                    show={this.state.show}
                    onRowChecked={this.onItemInputChecked}
                />
                <FilterRow
                    itemCount={this.state.items.length}
                    onFilterButtonClicked={this.onFilterButtonClicked}
                    currentFilter={this.state.show}
                />
            </div>
        )
    }
}
