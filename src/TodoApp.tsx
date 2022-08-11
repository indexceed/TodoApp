import './styles.css'

export const TodoApp = () => {



  return (
    <>
        <div>
            <div className='container'>
                <div className="mainContainer">

                    <div className="headContainer">
                        <h4>Todos (5)</h4>
                    </div>

                    <div>

                        <div className='submitContainer'>
                            <input type="text" placeholder='Enter todo here'/>
                            <button>Submit</button>
                        </div>
                        
                        <div>
                            <ul className='listcontainer'>
                                <li>walk the dog</li>
                                <li>authenticate with passport-js</li>
                                <li>validate register input</li>
                                <li>create reddit wesite</li>
                                <li>store sessions on mongodb</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        
    </>
    
  )
}

