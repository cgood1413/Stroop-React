import {React, Component} from 'react';
import ReactDOM from 'react-dom';

export const OptionButton = props => {

    return (
        <div>
            <button key={props.key} style={{backgroundColor: props.style}} onClick={props.handleClick}>This will be a buttton with a color</button>
        </div>
    );
    
}