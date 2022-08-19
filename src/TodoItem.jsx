

export const TodoItem = ({todo, onToggleTodo, onDeleteTodo}) => {
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
            <span 
              className='spanTodo' 
              style={{textDecoration: todo.done ?  'line-through' : ''}}> 
                {todo.description} 
            </span>
            <button className='editButton'><i className="bi bi-pencil-square"></i></button>
            <button 
              className='deleteButton'
              onClick={() => onDeleteTodo(todo.id)}
            ><i className="bi bi-trash"></i></button>
        </li>  
  )
}
