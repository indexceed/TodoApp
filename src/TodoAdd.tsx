import React, { useState } from "react";
import {TodoItem} from './types'


interface Props {

    onNewTodo: (item: TodoItem) => void
}

export const TodoAdd = ({onNewTodo}:Props) => {

    const [description, setDescription] = useState<string>('')

    const onFormSubmit = (event:React.FormEvent) => {
        event.preventDefault()

        if(description.length <= 1) return

        const newTodo = {
            
            id: Date.now(),
            done: false,
            description: description,
        } 

        onNewTodo(newTodo)
        setDescription('')
        
    }

  return (
    <>
        <form className='submitContainer' onSubmit={onFormSubmit}>
            <input 
                className='inputTodo' 
                type="text" 
                placeholder='Enter todo here'
                name='description'
                value={ description }
                onChange={(e:React.FormEvent)=> setDescription((e.target as HTMLInputElement).value)}
            />
            <button className='submitButton' onClick={onFormSubmit}>Agregar</button>
        </form>
    </>
  )
}
