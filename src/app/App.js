import React, {Component} from 'react';
import './App.css'
import { Prompt } from '../components/prompt';
import { OptionButton } from '../components/option-button';
import { Counter } from '../components/counter';
import { Timer } from '../components/timer';
import { generateColors } from '../utils/generateColors';

export class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            colors: ['red', 'orange', 'yellow', 'green', 'blue', 'purple'],
            textColor: null,
            textStyleColor: null,
            buttonColors: [],
            score: 0,
            testTime: 30
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

        return (this.state.testTime >= 0 ? 
            <div className='card'>
                <Prompt textColor={this.state.textColor} styleColor={this.state.textStyleColor}/>
                {this.state.buttonColors.map((color, index) => {
                    return <OptionButton key={"color" + index} style={color} handleClick={this.handleButtonClick}/>;
                    })}
                <Counter score={this.state.score}/>
                <Timer countdown={this.state.testTime}/>
            </div>
        : 
            <div className='card'>
                <h3>Your score is {this.state.score} </h3>
                <button onClick={() => this.setState({testTime: 30, score: 0})}>Replay?</button>
            </div>
        );
        
    }

    componentDidMount(){

        const {textColor, styleColor, buttonColors} = generateColors(this.state.colors);
        this.setState({textColor: textColor});
        this.setState({textStyleColor: styleColor});
        this.setState({buttonColors: buttonColors});

        this.interval = setInterval(() => {
            if(this.state.testTime >= 0){
                this.setState({testTime: this.state.testTime - 1})
            }
        }, 1000);

    }

    componentWillUnmount(prevProps, prevState) {
        clearInterval(this.interval);
    }    

}

/* 
AE2012 - Red
F88E0D - Orange
FFD500 - Yellow
659339 - Green
00509D - Blue
6930C3 - Purple

272530 - Dark
F4F4F6 - Light
*/