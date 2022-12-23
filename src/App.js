// import logo from './logo.svg';
import './App.css';
import {v4 as uuidv4} from 'uuid';
import { useState } from "react";
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

const initialTodos = [
  {id: uuidv4(),title:'Play Game',completed: false},
  {id: uuidv4(),title:'Shopping',completed: true},
  {id: uuidv4(),title:'meet Dentist',completed: false},
]

function App() {
const [todos,setTodos] = useState(initialTodos);

const createTodo = (title) => {
const newTodo = {id:uuidv4(), title, completed: false};
setTodos([newTodo, ...todos])
}

const deleteTodo = (id) => {
  const idx = todos.findIndex(el => el.id === id)
  const newTodoState = [...todos];
  newTodoState.splice(idx,1)
  setTodos(newTodoState);
  // const cloneTodo = todos
  // const newTodos = cloneTodo.filter((el)=> el.id !== id )
  // setTodos(newTodos)
  }

const updateTodo = (id,updateValue) => {
  // console.log("click update")
  const idx = todos.findIndex(el => el.id === id)
  const newTodoState = [...todos];
  newTodoState[idx] = {...newTodoState[idx], ... updateValue};
  setTodos(newTodoState);
}

  return (
  <div className='container py-5' style={{maxWidth: 576}}>
    <TodoForm createTodo={createTodo} />
    <br/>
    <ul className="list-group">
      {todos.map(el => (
      <TodoItem key={el.id} todo = {el} deleteTodo={deleteTodo} updateTodo={updateTodo}/>))}
    </ul>
    
  </div>

)
  }

export default App;