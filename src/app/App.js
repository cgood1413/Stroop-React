import React, {Component} from 'react';
import { Prompt } from '../components/prompt';
import { OptionButton } from '../components/option-button';
import { generateColors } from '../utils/generateColors';

export class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            colors: ['red', 'orange', 'yellow', 'green', 'blue', 'purple'],
            textColor: null,
            textStyleColor: null,
            buttonColors: [],
        };
        
    }

    handleButtonClick(){
        // I want to check if the color of the button clicked matches this.state.textColor

        // If it does match, re-generate the colors and console.log('correct!')

        // If it does not match, simply console.log('incorrect')
    }

    render(){

        return (
            <div>
                <Prompt textColor={this.state.textColor} styleColor={this.state.textStyleColor}/>
                {this.state.buttonColors.map((color, index) => {
                    return <OptionButton key={"color" + index} style={color}/>;
                    })}
            </div>
        );
        
    }

    componentDidMount(){

        const {textColor, styleColor, buttonColors} = generateColors(this.state.colors);
        this.setState({textColor: textColor});
        this.setState({textStyleColor: styleColor});
        this.setState({buttonColors: buttonColors});

    }

}