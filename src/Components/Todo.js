import React from "react";

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleItemChecked = this.handleItemChecked.bind(this);
    }

    handleItemChecked(e) {
        this.props.onItemChecked(e.target.checked, this.props.item.id)
    }

    render() {
        const text = this.props.item.text;
        const item = this.props.item.completed ? <s>{text}</s> : <span>{text}</span>;

        return (
            <li>
                <label>
                    <input type="checkbox"
                           checked={this.props.item.completed}
                           onChange={this.handleItemChecked}/>
                </label>
                {item}
            </li>
        )
    }
}


class Todo extends React.Component {
    render() {
        const items = this.props.items;
        const show = this.props.show;
        const rows = [];

        const newItems = items.filter(item => {
            if (show === 'completed') {
                return item.completed
            } else if (show === 'active') {
                return !item.completed
            }
            return item
        });

        newItems.forEach(item => {
            rows.push(
                <TodoItem key={item.id} item={item} onItemChecked={this.props.onRowChecked}/>
            )
        });

        return (
            <ul>{rows}</ul>
        )
    }
}


export default Todo;
