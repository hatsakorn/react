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
const [searchText,setSearchText]= useState("");
const [searchTimeout,setSearchTimeout]= useState(searchText);


// console.log(searchText);
useEffect(function(){
  axios.get('http://localhost:8080/todos/').then(function(res){
    setTodos(res.data.todos);
  })
},[])

useEffect(()=>{
  const timer = setTimeout(()=>{
      setSearchText(searchTimeout)
  },2000)
  return (()=> clearTimeout(timer))
  
})

const createTodo = async (title) => {
const newTodo = {id:uuidv4(), title, completed: false};
console.log(newTodo);
const abcObj = await axios.post('http://localhost:8080/todos',newTodo);
console.log(abcObj)
setTodos([abcObj.data.todo, ...todos]);
// setTodos([newTodo, ...todos]);
}

const deleteTodo = (id) => {
  const idx = todos.findIndex(el => el.id === id);
  const newTodoState = [...todos];
  // console.log(idx);
  // console.log(newTodoState);
  axios.delete(`http://localhost:8080/todos/${id}`);
  newTodoState.splice(idx,1);
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
  console.log(newTodoState);
  axios.put(`http://localhost:8080/todos/${id}`,newTodoState[idx]);
  setTodos(newTodoState);
}

const deleteSearch = (e) => {
  setSearchTimeout("");
  const newTodoState = [...todos];
  setTodos(newTodoState);
}







  const filteredData = todos.filter((el)=> el.title.toLowerCase().includes(searchText.toLowerCase()))


  return (
  <div className='container py-5' style={{maxWidth: 576}}>
    <TodoForm createTodo={createTodo} />
    <br/>
    <SearchForm todos={todos} setSearchText={setSearchText} deleteSearch={deleteSearch} searchText={searchText} setSearchTimeout={setSearchTimeout} searchTimeout={searchTimeout}/>
    <br/>
    <ul className="list-group">
      {filteredData.map(el => (
      <TodoItem key={el.id} todo = {el} deleteTodo={deleteTodo} updateTodo={updateTodo}/>))}
    </ul>
    
  </div>

)
  }

export default App;