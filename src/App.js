// import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import {v4 as uuidv4} from 'uuid';
import TodoForm from './components/todoForm';
import TodoItem from './components/todoItem';

function App() {


  return (
  <div className='container py-5' style={{maxWidth: 576}}>
    <TodoForm/>
    <ul className="list-group"></ul>
    <TodoItem/>
  </div>

)}

export default App;