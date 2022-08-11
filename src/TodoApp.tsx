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
                                <li className='lineGray'>
                                    <label className='checkContainer' id='c1'>
                                        <input type="checkbox"  />
                                        <span className='checkmark'></span>
                                    </label>
                                    <span className='spanTodo'> walk the dog </span>
                                    <button className='editButton'><i className="bi bi-pencil-square"></i></button>
                                    <button className='deleteButton'><i className="bi bi-trash"></i></button>
                                </li>
                                <li>
                                    <label className='checkContainer' id='c1'>
                                        <input type="checkbox"  />
                                        <span className='checkmark'></span>
                                    </label>
                                    <span className='spanTodo'> authenticate with passport-js </span>
                                    <button className='editButton'><i className="bi bi-pencil-square"></i></button>
                                    <button className='deleteButton'><i className="bi bi-trash"></i></button>
                                </li >
                                <li className='lineGray'>
                                    <label className='checkContainer' id='c1'>
                                        <input type="checkbox"  />
                                        <span className='checkmark'></span>
                                    </label>
                                    <span className='spanTodo'> validate register input </span>
                                    <button className='editButton'><i className="bi bi-pencil-square"></i></button>
                                    <button className='deleteButton'><i className="bi bi-trash"></i></button>
                                </li>
                                <li>
                                    <label className='checkContainer' id='c1'>
                                        <input type="checkbox"  />
                                        <span className='checkmark'></span>
                                    </label>
                                    <span className='spanTodo'> create reddit wesite </span>
                                    <button className='editButton'><i className="bi bi-pencil-square"></i></button>
                                    <button className='deleteButton'><i className="bi bi-trash"></i></button>
                                </li>
                                <li className='lineGray'>
                                    <label className='checkContainer' id='c1'>
                                        <input type="checkbox"  />
                                        <span className='checkmark'></span>
                                    </label>
                                    <span className='spanTodo'> store sessions on mongodb </span>
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

