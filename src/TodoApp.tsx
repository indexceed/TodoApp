import { useEffect, useReducer } from 'react'

import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'
import './styles.css'


const initialState = [
    {
        id: new Date().getTime()+10,
        description: 'walk the dog',
        done: false
    },
    {
        id: new Date().getTime()+100,
        description: 'authenticate with passport-js',
        done: false
    },
    {
        id: new Date().getTime()+1000,
        description: ' validate register input ',
        done: false
    },
    {
        id: new Date().getTime()*10,
        description: ' create reddit wesite ',
        done: false
    },
    {
        id: new Date().getTime()*100,
        description: ' store sessions on mongodb ',
        done: false
    }
]
const init = ()=> { return JSON.parse(localStorage.getItem('todos') || '' ) || [] }

interface TodoItem {
    id: number;
    description: string;
    done: boolean;
} 

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    useEffect(()=> {
        localStorage.setItem('todos',JSON.stringify(todos))
    },[todos])
    
    const handleNewTodo = (todo:TodoItem) => {

        const action = {
            type: 'addTodo',
            payload: todo
        }
        dispatch(action)
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: 'checkTodo',
            payload: id
        })
    }

  return (
    <>
        <div>
            <div className='container'>
                <div className="mainContainer">

                    <div className="headContainer">
                        <h3>Todos ({todos.length})</h3>
                    </div>

                    <div>
                            <TodoAdd onNewTodo={handleNewTodo}/>
                            <TodoList 
                                todos={todos}
                                onToggleTodo={handleToggleTodo}
                            />
                    </div>
                </div>
            </div>
        </div>
        
    </>
    
  )
}
