


export const TodoItem = ({todo}) => {
  return (
  
        <li>
            <label className='checkContainer' id='c1'>
                <input type="checkbox"  />
                <span className='checkmark'></span>
            </label>
            <span className='spanTodo'> {todo.description} </span>
            <button className='editButton'><i className="bi bi-pencil-square"></i></button>
            <button className='deleteButton'><i className="bi bi-trash"></i></button>
        </li>  
  )
}
