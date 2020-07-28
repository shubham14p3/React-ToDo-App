import React from "react";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from "@material-ui/icons/Delete";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

const Todos = ({todos, deleteTodo}) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <ListItem dense button key={todo.id}>
          <ListItemIcon>
            <Checkbox disableRipple />
          </ListItemIcon>
          <ListItemText primary={todo.content} />
          <ListItemSecondaryAction>
            <Tooltip>
              <IconButton
                onClick={() => {
                  deleteTodo(todo.id);
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </ListItemSecondaryAction>
        </ListItem>
      );
    })
  ) : (
    <ListItem>
      <ListItemText primary="No todos left." />
    </ListItem>
  );
  return (
    <div>
      <List>{todoList}</List>
    </div>
  );
};

export default Todos;
