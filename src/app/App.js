import React, {Component} from 'react';
import { Prompt } from '../components/prompt';
import { OptionButton } from '../components/option-button';
import { Counter } from '../components/counter';
import { generateColors } from '../utils/generateColors';

export class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            colors: ['red', 'orange', 'yellow', 'green', 'blue', 'purple'],
            textColor: null,
            textStyleColor: null,
            buttonColors: [],
            score: 0
        };
        this.handleButtonClick = this.handleButtonClick.bind(this)
        
    }

    handleButtonClick({target}){

        if(target.style.backgroundColor === this.state.textStyleColor){
            // I'm not loving having to reuse all of this code for my true case. Extract into another function ?
            this.setState({score: this.state.score += 1})
            const {textColor, styleColor, buttonColors} = generateColors(this.state.colors);
            this.setState({textColor: textColor});
            this.setState({textStyleColor: styleColor});
            this.setState({buttonColors: buttonColors});
        } else {
            console.log('incorrect.');
        }

    }

    render(){

        return (
            <div>
                <Prompt textColor={this.state.textColor} styleColor={this.state.textStyleColor}/>
                {this.state.buttonColors.map((color, index) => {
                    return <OptionButton key={"color" + index} style={color} handleClick={this.handleButtonClick}/>;
                    })}
                <Counter score={this.state.score}/>
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