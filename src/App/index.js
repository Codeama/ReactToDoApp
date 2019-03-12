import React, { Component } from 'react';
import './App.css';
import Input from "../Input";
import TodoList from "../TodoList";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
       todos: []
    }
  }

  //takes input from Input component
  AddItem = (newItem)=>{
    const copiedItems = this.state.todos.slice();
    copiedItems.push({title: newItem, completed: false});
    this.setState({todos: copiedItems})
  }

  //for TodoList/TodoItems
  deleteATodo = index => {
    this.setState(state => ({
      todos: [...state.todos.slice(0, index), ...state.todos.slice(index + 1)]
    }));
  };

  //for TodoList/TodoItems
  completeATodo = index => {
    const toChange = this.state.todos[index];
    this.setState(state => ({
      todos: [
        ...state.todos.slice(0, index),
        { ...toChange, complete: !toChange.complete },
        ...state.todos.slice(index + 1)
      ]
    }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
            My TODO APP
            <Input addToDo={this.AddItem}></Input>
            
        </header>
        <TodoList todos={this.state.todos} onComplete={this.completeATodo} onDelete={this.deleteATodo}></TodoList>
      </div>
    );
  }
}

export default App;
