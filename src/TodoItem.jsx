import { useForm } from "./useForm"
import { TodoEdit } from "./TodoEdit";

export const TodoItem = ({todo, onToggleTodo, onDeleteTodo, onEditTodo}) => {
  return (
  
        <li>
            <label className='checkContainer' id='c1'>
                <input 
                  type="checkbox" 
                  defaultChecked={todo.done}
                  onClick={() => onToggleTodo(todo.id)}
                />
                <span className='checkmark' ></span>
            </label>


            <div className='spanTodo' >
              {
                !todo.edit ?
                <span     
                  style={{textDecoration: todo.done ?  'line-through' : ''}}
                  > 
                  {todo.description} 
                </span>
                :
                <TodoEdit/>
              }
            </div>
            
                

            <button 
              className='editButton'
              onClick={() => onEditTodo(todo.id)}
              
              ><i className="bi bi-pencil-square"></i></button>
              
            <button 
              className='deleteButton'
              onClick={() => onDeleteTodo(todo.id)}
            ><i className="bi bi-trash"></i></button>
        </li>  
  )
}
