import TodoForm  from "./todoForm";
import TodoContent from './todoContent';

export default function TodoItem(){
return <li className="list-group-item p-3 text-bg-success">
    {/* <TodoForm/> */}
    <TodoContent/>
</li>

}