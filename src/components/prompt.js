import React, {Component} from 'react';


export const Prompt = props => {

    return (
        <h2 id='prompt' style={{color: props.styleColor}}>{props.textColor}</h2>
    );

}