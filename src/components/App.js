import React from 'react'
import Navbar from './Navbar'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <Navbar />
    <AddTodo />
    <VisibleTodoList />
  </div>
);

export default App
