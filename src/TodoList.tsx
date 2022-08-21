import {TodoItem} from './TodoItem'


export const TodoList = ({todos = [], onToggleTodo, onDeleteTodo, onEditTodo}) => {

  
  return (
     <ul className='listcontainer'>
        {
            todos.map( todo => (
              
              <TodoItem 
                key={ todo.id } 
                todo={todo}
                onToggleTodo={ onToggleTodo }
                onDeleteTodo= {onDeleteTodo}
                onEditTodo= {onEditTodo}
              />
                  
            ))
        }                
    </ul>
  )
}
