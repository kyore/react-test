import React from "react";
import * as ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  handleChange = (e) => this.setState({ text: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const { text } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">
          Name: {text}
          <input
            type="text"
            name="name"
            id="name"
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    );
  }
}

ReactDOM.render(<User />, document.getElementById("root"));
serviceWorker.unregister();
