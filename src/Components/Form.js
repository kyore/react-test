import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCompleteAll = this.handleCompleteAll.bind(this);
    }

    handleChange(e) {
        this.props.onInputChange(e.target.value)
    }

    handleSubmit(e) {
        this.props.onFormSubmit(e);
    }

    handleCompleteAll(e) {
        this.props.onCompleteAll(e.target.checked);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="What do you want to add?" onChange={this.handleChange}
                       value={this.props.text}/>
                <p>
                    <input type="checkbox" onChange={this.handleCompleteAll}/>
                    Mark all as completed
                </p>
            </form>
        );
    }
}

export default Form
