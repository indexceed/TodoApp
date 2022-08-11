import './styles.css'

export const TodoApp = () => {



  return (
    <>
        <div>
            <div className='container'>
                <div className="mainContainer">

                    <div className="headContainer">
                        <h3>Todos (5)</h3>
                    </div>

                    <div>

                        <div className='submitContainer'>
                            <input className='inputTodo' type="text" placeholder='Enter todo here'/>
                            <button className='submitButton'>Submit</button>
                        </div>
                        
                        <div>
                            <ul className='listcontainer'>
                                <li className='gray'>
                                    <input className='checkbox' type="checkbox"/>
                                    <span> walk the dog </span>
                                    <button className='editButton'><i className="bi bi-pencil-square"></i></button>
                                    <button className='deleteButton'><i className="bi bi-trash"></i></button>
                                </li>
                                <li>
                                    <input className='checkbox' type="checkbox"/>
                                    <span> authenticate with passport-js </span>
                                    <button className='editButton'><i className="bi bi-pencil-square"></i></button>
                                    <button className='deleteButton'><i className="bi bi-trash"></i></button>
                                </li >
                                <li className='gray'>
                                    <input className='checkbox' type="checkbox"/>
                                    <span> validate register input </span>
                                    <button className='editButton'><i className="bi bi-pencil-square"></i></button>
                                    <button className='deleteButton'><i className="bi bi-trash"></i></button>
                                </li>
                                <li>
                                    <input className='checkbox' type="checkbox"/>
                                    <span> create reddit wesite </span>
                                    <button className='editButton'><i className="bi bi-pencil-square"></i></button>
                                    <button className='deleteButton'><i className="bi bi-trash"></i></button>
                                </li>
                                <li className='gray'>
                                    <input className='checkbox' type="checkbox"/>
                                    <span> store sessions on mongodb </span>
                                    <button className='editButton'><i className="bi bi-pencil-square"></i></button>
                                    <button className='deleteButton'><i className="bi bi-trash"></i></button>
                                </li>
                                
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        
    </>
    
  )
}

