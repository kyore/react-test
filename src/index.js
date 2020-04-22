import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

function Row(props) {
    return (
        <div>
            <label>{props.label}</label>
            {props.children}
        </div>
    )
}


function Greeting(props) {
    const name = useFormInput('Mary');
    const surname = useFormInput('Clark');

    const width = useWindowResize();
    useDocumentTitle(name.value + ' ' + surname.value);


    return (
        <div>
            <Row label="Name">
                <input {...name}/>
            </Row>
            <Row label="Surname">
                <input {...surname} />
            </Row>

            <Row label="Width">
                {width}
            </Row>
        </div>
    )
}


function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    function handleChange(e) {
        setValue(e.target.value)
    }

    return {
        value: value,
        onChange: handleChange
    }
}


function useDocumentTitle(title) {
    useEffect(() => {
        document.title = title
    });
}

function useWindowResize() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    });

    return width
}


ReactDOM.render(
    <Greeting/>,
    document.getElementById('root')
);

serviceWorker.unregister();
