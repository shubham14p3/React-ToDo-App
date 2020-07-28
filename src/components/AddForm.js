import React, {Component} from "react";
import TextField from "@material-ui/core/TextField";

class AddForm extends Component {
  state = {
    content: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="content"
            label="Add ToDo"
            helperText="Add ToDo so you don't forget your work!"
            fullWidth
            margin="normal"
            onChange={this.handleChange}
            value={this.state.content}
          />
        </form>
      </div>
    );
  }
}

export default AddForm;
