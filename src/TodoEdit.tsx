import { useForm } from "./useForm"

interface TodoItem {
    id: number;
    description: string;
    done: boolean;
    edit:boolean;
} 
interface Props {

    onNewTodo: (item: TodoItem) => void
}

export const TodoAdd = ({onNewTodo}:Props) => {


    const { description, onInputChange, onResetForm} = useForm({

        description: ''

    })

    const onFormSubmit = (event:React.FormEvent) => {
        event.preventDefault()

        if(description.length <= 1) return

        const newTodo = {
            
            id: new Date().getTime()+10,
            done: false,
            description: description,
            edit: false,
        }

        onNewTodo(newTodo)
        onResetForm()
        
    }

    return (
        <>
            <form className='editContainer' onSubmit={onFormSubmit}>
                <input 
                    className='inputTodo' 
                    type="text" 
                    placeholder='Enter todo here'
                    name='description'
                    value={ description }
                    onChange={onInputChange}
                />
                <button className='onEditButton' onClick={onFormSubmit}>Agregar</button>
            </form>
        </>
      )

}




