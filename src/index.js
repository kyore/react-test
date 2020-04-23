import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';


function Example() {
    const [count, setCount] = useState(0);

    function handleCount() {
        setCount(count + 1)
    }

    return (
        <div>
            <h6>Count is: {count}</h6>
            <button onClick={handleCount}>Plus</button>
        </div>
    )
}


ReactDOM.render(
    <Example/>,
    document.getElementById('root')
);

serviceWorker.unregister();
