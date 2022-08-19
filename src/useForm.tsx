import React, { useState } from "react"

export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm)

    let description: string

   
    const onInputChange = ( { target }: React.ChangeEvent<HTMLInputElement> ) => {
        
        const {name, value} = target

        
        setFormState({
            ...formState,
            [name]:value,
        })
    }

    const onResetForm = () => {

        setFormState(initialForm)

    }
        
  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,

  }
}
