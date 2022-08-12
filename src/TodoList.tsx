import {TodoItem} from './TodoItem'


export const TodoList = ({todos = []}) => {

  
  return (
     <ul className='listcontainer'>
        {
            todos.map( todo => (
              
              <TodoItem key={ todo.id } todo={todo}/>
                  
            ))
        }                
    </ul>
  )
}
