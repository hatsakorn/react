// import logo from './logo.svg';
import './App.css';
import {v4 as uuidv4} from 'uuid';
import { useState , useEffect } from "react";
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import SearchForm from './components/SearchForm';
import axios from 'axios';

const initialTodos = [
  {id: uuidv4(),title:'Play Game',completed: false},
  {id: uuidv4(),title:'Shopping',completed: true},
  {id: uuidv4(),title:'meet Dentist',completed: false},
]

function App() {
const [todos,setTodos] = useState(initialTodos);
const [searchText,setSerchText]= useState("");

// console.log(searchText);
useEffect(function(){
  axios.get('http://localhost:8080/todos/').then(function(res){
    setTodos(res.data.todos);
  })
},[])

const createTodo = (title) => {

const newTodo = {id:uuidv4(), title, completed: false};
axios.post('http://localhost:8080/todos',newTodo);
setTodos([newTodo, ...todos]);
}

const deleteTodo = (id) => {
  const idx = todos.findIndex(el => el.id === id)
  const newTodoState = [...todos];
  // console.log(idx);
  // console.log(newTodoState);
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
  newTodoState[idx] = {...newTodoState[idx], ...updateValue};
  setTodos(newTodoState);
}

const deleteSearch = (event) => {
  setSerchText("");
  const newTodoState = [...todos];
  setTodos(newTodoState);
}


  const filteredData = todos.filter((el)=> el.title.toLowerCase().includes(searchText.toLowerCase()))


  return (
  <div className='container py-5' style={{maxWidth: 576}}>
    <TodoForm createTodo={createTodo} />
    <br/>
    <SearchForm todos={todos} setSerchText={setSerchText} deleteSearch={deleteSearch} searchText={searchText}/>
    <br/>
    <ul className="list-group">
      {filteredData.map(el => (
      <TodoItem key={el.id} todo = {el} deleteTodo={deleteTodo} updateTodo={updateTodo}/>))}
    </ul>
    
  </div>

)
  }

export default App;