import { useState, useEffect } from 'react'

import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'

import './styles.css'

//const initialState = [] as any

const init = ()=> { return JSON.parse(localStorage.getItem('todos') || '' ) || [] }

interface TodoItem {
    id: number;
    description: string;
    done: boolean;
} 

export const TodoApp = () => {

    const [todos, setTodos] = useState<TodoItem[]> (init)
    const [currentTodo, setCurrentTodo] = useState<string>('')
    const [editable, setEditable] = useState<boolean>(false)
    const [editableIndex, setEditableIndex] = useState<number>(0)
    const [done, setDone] = useState<TodoItem[]>([])

    useEffect(()=> {
        localStorage.setItem('todos',JSON.stringify(todos))
    },[todos])

    
    const handleNewTodo = (todo:TodoItem) => {
       const todosTMP = [...todos];
       todosTMP.push(todo)
       setTodos(todosTMP)
    }

    const handleToggleTodo = (index:number) => {
        
        

    }

    const handleDeleteTodo = (index:number) => {
        const todosTMP = [...todos];
        todosTMP.splice(index, 1)
        setTodos(todosTMP)
    }

    const handleEditTodoActive = (index:number) => {
        setCurrentTodo(todos[index].description)
        setEditable(true)
        setEditableIndex(index)
}

    const handleEditTodoText = () => {
        const todosTMP = [...todos]
        todosTMP[editableIndex].description=currentTodo
        setTodos(todosTMP)
        
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
                                    onDeleteTodo={handleDeleteTodo}
                                    activeEdit={handleEditTodoActive}
                                    editable ={editable}
                                    setEditable={setEditable}
                                    editableIndex={editableIndex}
                                    currentTodo={currentTodo}
                                    saveEdit={handleEditTodoText}
                                    setCurrentTodo={setCurrentTodo}
                                    toggleTodo={handleToggleTodo}
                                />
                        </div>
                </div>
            </div>
        </div>
        
    </>
    
  )
}
