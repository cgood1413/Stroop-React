import {React, Component} from 'react';
import ReactDOM from 'react-dom';

export const OptionButton = props => {

    return (
        <div>
            <button style={{backgroundColor: props.style}}>This will be a buttton with a color</button>
        </div>
    );
    
}