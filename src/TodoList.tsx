import {TodoItem} from './TodoItem'


export const TodoList = ({todos = [], onToggleTodo}) => {

  
  return (
     <ul className='listcontainer'>
        {
            todos.map( todo => (
              
              <TodoItem 
                key={ todo.id } 
                todo={todo}
                onToggleTodo={ onToggleTodo }
              />
                  
            ))
        }                
    </ul>
  )
}
