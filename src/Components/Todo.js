import React from "react";

function TodoItem(props) {
    const text = props.item.text;
    const item = props.item.completed ? <s>{text}</s> : <span>{text}</span>;

    return (
        <li>
            <label>
                <input type="checkbox" value={props.value}/>
            </label>
            {item}
        </li>
    )
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
                <TodoItem key={item.id} item={item}/>
            )
        });

        return (
            <ul>{rows}</ul>
        )
    }
}


export default Todo;
