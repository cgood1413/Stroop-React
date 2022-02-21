import React, {Component} from 'react';


export class Prompt extends Component {
    // constructor(props){
    //     super(props);
    // }

    render(){

        return (
            <h2 style={{color: this.props.styleColor}}>{this.props.textColor}</h2>
        )

    }
}