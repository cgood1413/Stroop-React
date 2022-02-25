import {React, Component} from 'react';
import ReactDOM from 'react-dom';
import { Prompt } from './prompt';
import { OptionButton } from './option-button';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            colors: ['red', 'orange', 'yellow', 'green', 'blue', 'purple'],
            textColor: null,
            textStyleColor: null,
            buttonColors: []
        };
    }

    render(){
        return (
            <div>
                <Prompt textColor={this.state.textColor} styleColor={this.state.textStyleColor}/>
                {this.state.buttonColors.map((color, index) => {
                    return <OptionButton key={"color" + index} style={color}/>
                    })}
            </div>
        )
    }

    componentDidMount(){

        const colors = this.state.colors
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        this.setState({textColor: randomColor});

        const colorsCopy = [...colors];
        colorsCopy.splice(colorsCopy.indexOf(randomColor), 1);
        const randomStyleColor = colorsCopy[Math.floor(Math.random() * colorsCopy.length)];
        this.setState({textStyleColor: randomStyleColor});

        const buttonColors = [randomColor, randomStyleColor];
        while(buttonColors.length < 4){
            const buttonColor = colorsCopy[Math.floor(Math.random() * colorsCopy.length)];
            if (!buttonColors.includes(buttonColor)){
                buttonColors.push(buttonColor);
            }
        }
        this.setState({buttonColors: this.shuffle(buttonColors)});

    }

    // Fisher–Yates shuffle
    shuffle(arr){
        let m = arr.length, t, i;
        while(m){
            i = Math.floor(Math.random() * m--);
            t = arr[m];
            arr[m] = arr[i];
            arr[i] = t;
        }
        return arr;
    }

}

ReactDOM.render(<App/>, document.getElementById('root'));