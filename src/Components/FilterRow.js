import React from "react";

import './FilterRow.css';

export default class FilterRow extends React.Component {
    constructor(props) {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }


    handleButtonClick(e) {
        this.props.onFilterButtonClicked(e.target.value)
    }

    render() {
        const current = this.props.currentFilter;

        return (
            <div>
                <span>{this.props.itemCount} left</span>
                <button onClick={this.handleButtonClick} value="all"
                        className={current === 'all' ? `current` : ''}>All
                </button>
                <button onClick={this.handleButtonClick} value="active"
                        className={current === 'active' ? `current` : ''}>Active
                </button>
                <button onClick={this.handleButtonClick} value="completed"
                        className={current === 'completed' ? `current` : ''}>Completed
                </button>
            </div>
        )
    }
}


