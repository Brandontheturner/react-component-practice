import React, { Component } from "react";
import Header from "./Components/Layout/Header";
import "./App.css";
import Todos from "./Components/Todos";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "take out the trash",
        completed: false
      },
      {
        id: 2,
        title: "Take Alexis out for dinner",
        completed: false
      },
      {
        id: 3,
        title: "Go buy a new house",
        completed: false
      },
      {
        id: 4,
        title: "Get a great new job",
        completed: false
      }
    ]
  };
  // Toggle Complete
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
    console.log(id);
  };
  // Delete Todo
  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  render() {
    // console.log(this.state.todos);

    return (
      <div className="App">
        <Header />

        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
      </div>
    );
  }
}
export default App;
