import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


function Item(props) {
    const i = props.i;

    return (
        <div className="Item">
            <span>{i.symbol}</span>
            <span>{i.title}</span>
        </div>
    )
}


class ItemList extends React.Component {
    render() {
        const emojis = this.props.emojis;
        const text = this.props.text;

        const items = [];

        emojis.forEach(item => {
            let t = item.title.toLowerCase();

            if (t.indexOf(text.toLowerCase()) === -1) {
                return;
            }

            items.push(<Item i={item}/>)
        });

        return (
            <div>
                {items.slice(0, 20)}
            </div>
        );
    }
}

class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        this.props.onInputChange(e.target.value)
    }

    render() {
        return (
            <div className="Search">
                <input type="text" onChange={this.handleInputChange} value={this.props.text}/>
            </div>
        );
    }
}

class Emoji extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            emojiList: []
        };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(value) {
        this.setState({text: value})
    }

    componentDidMount() {
        let emojis = require('./emojiList');
        this.setState({emojiList: emojis})
    }

    render() {
        return (
            <div className="Emoji">
                <SearchInput onInputChange={this.onInputChange} text={this.state.text}/>
                <ItemList emojis={this.state.emojiList} text={this.state.text}/>
            </div>
        );
    }
}

ReactDOM.render(
    <Emoji/>,
    document.getElementById('root')
);

serviceWorker.unregister();
