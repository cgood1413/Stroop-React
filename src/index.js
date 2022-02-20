import {React, Component} from 'react';
import ReactDOM from 'react-dom';
import { Prompt } from './prompt';
import { OptionButton } from './option-button';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <div>
                <Prompt/>
                <OptionButton style="red" />
                <OptionButton style="blue" />
                <OptionButton stlye="green"/>
                <OptionButton style="yellow"/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));