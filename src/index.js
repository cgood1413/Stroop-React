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
        };
    }

    render(){
        return (
            <div>
                <Prompt textColor={this.state.textColor} styleColor={this.state.textStyleColor}/>
                <OptionButton style="red" />
                <OptionButton style="blue" />
                <OptionButton stlye="green"/>
                <OptionButton style="yellow"/>
            </div>
        )
    }

    componentDidMount(){

        const colors = this.state.colors
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        this.setState({textColor: randomColor});

        const colorsCopy = colors.slice();
        colorsCopy.splice(colorsCopy.indexOf(randomColor), 1);
        const randomStyleColor = colorsCopy[Math.floor(Math.random() * colorsCopy.length)];
        this.setState({textStyleColor: randomStyleColor});

    }

}

ReactDOM.render(<App/>, document.getElementById('root'));