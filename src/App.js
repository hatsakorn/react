// import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [input,setInput] = useState('')
  return (
    <button className="btn btn-danger"><i className='fa-solid fa-check'/></button>
    // <div>
    //   <form 
    //   action='https"//localhost:3000' 
    //   method='Post' 
    //   //GET is send input to browser POST send to server
    //   onSubmit={event => event.preventDefault()}
    //   // ยกเลิก submit action default ที่ submit form จะส่งไปยัง server
    //   > 
    //     <input name='email' value={input} onChange={event => setInput(event.target.value)}/>
    //     <input name='password'/>
    //     <input type = 'file' onChange={event => console.log(event)}/>
    //     <button>Submit form</button>
    //   {/* type = 'submit' will send data to server but other type eg. type = 'reset' will not send data to server */}
    //   </form>
    //     <button>Submit form outside</button>
    //     {/* submit outside form จะไม่ส่งค่าไปยัง server */}
    // </div>
  );
}

export default App;
