import React, {Component} from "react";
import AddForm from "./components/AddForm";
import Todos from "./components/Todos";
import Container from "@material-ui/core/Container";
class App extends Component {
  state = {
    todos: [
      {id: 1, content: "Learn React"},
      {id: 2, content: "Learn Redux"},
      {id: 3, content: "Learn Bootstrap"},
    ],
    open: false,
  };

  deleteTodo = (id) => {
    let todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });

    this.setState({
      todos: todos,
      open: true,
    });
  };

  handleClose = () => {
    this.setState({open: false});
  };

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos,
    });
  };

  render() {
    return (
      <div>
        <Container maxWidth="sm">
          <h1>TODO APP</h1>
          <AddForm addTodo={this.addTodo} />
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        </Container>
      </div>
    );
  }
}

export default App;
