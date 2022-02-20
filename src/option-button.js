import {React, Component} from 'react';
import ReactDOM from 'react-dom';

export class OptionButton extends Component {

    constructor(props){
        super(props);
        this.state = {
            backgroundColor: props.style
        };
    }

    render(){
        return (
            <div>
                <button style={this.state}>This will be a buttton with a color</button>
            </div>
        );
    }
    
}