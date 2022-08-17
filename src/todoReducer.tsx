

 


export const todoReducer = (initialState, action) => {
 
    switch (action.type) {
        case 'addTodo':
            return[...initialState,action.payload]

        case 'deletTodo':

            throw new Error('action.Type = deletTodo no esta implementado')

        case 'editTodo':

            throw new Error('action.Type = editTodo no esta implementado')

        case 'checkTodo':

            throw new Error('action.Type = checkTodo no esta implementado')
            
           
        default:
            return initialState;

    }

}


