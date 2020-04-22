import React from "react";

export default class FilterRow extends React.Component {
    constructor(props) {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick(e) {
        this.props.onFilterButtonClicked(e.target.value)
    }

    render() {
        return (
            <div>
                <span>{this.props.itemCount} left</span>
                <button onClick={this.handleButtonClick} value="all">All</button>
                <button onClick={this.handleButtonClick} value="active">Active</button>
                <button onClick={this.handleButtonClick} value="completed">Completed</button>
            </div>
        )
    }
}

