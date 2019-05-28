// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText(){
    return 'Click on me!';
}

// Create a react component
const App = () => {
    const buttonText = 'Click Me!';
    const buttonText2 = {text: 'Click me'};
    const style = {backgroundColor: 'blue', color: 'white'};
    const labelText = 'Enter name:';

    return (
        <div>
            <label className="label" htmlFor="name">Enter name:</label>
            <label className="label" htmlFor="name">{labelText}</label>
            <input id="name" type="text"/>
            <button style={{backgroundColor: 'blue', color: 'white'}}>{getButtonText()}</button>
            <button style={{backgroundColor: 'blue', color: 'white'}}>{buttonText}</button>
            <button style={style}>{buttonText2.text}</button>
            {/*/!*<button style={{backgroundColor: 'blue', color: 'white'}}>{buttonText2}</button>*!/ nu merge asa - we can't call a js object as text*/}
        </div>
    );
};

// Take the react component and show it on the screen
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);