import React, {Component} from 'react';


class Input extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: ""
        }
    }

    takeInput = (event)=>{
        const {value} = event.target;
        this.setState({value});
       // console.log(this.state.value);
    }

    handleClick = ()=>{
        this.props.addToDo(this.state.value); //addToDo from parent component App
    }

    render(){
        return (
        <div>
            <input type="text" placeholder="Enter text here" onChange={this.takeInput}></input>
            <button onClick={this.handleClick}>Add a todo</button>
        </div>)
    }
}

export default Input;