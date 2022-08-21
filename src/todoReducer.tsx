import { TodoAdd } from "./TodoAdd"
import { useForm } from "./useForm"
TodoAdd


export const todoReducer = (initialState, action) => {
 
    switch (action.type) {
        case 'addTodo':
            return[...initialState,action.payload]

        case 'deleteTodo':
            return initialState.filter(todo => todo.id !== action.payload)

        case 'editTodo':
            return initialState.map( todo => {

                if(todo.id === action.payload){
                    return {...todo, edit: !todo.edit}
                }

                return todo
            })
            
        case 'checkTodo':
            return initialState.map( todo => {

                if(todo.id === action.payload){
                    return{...todo, done: !todo.done}
                }

                return todo
            })
            
           
        default:
            return initialState;

    }

}


