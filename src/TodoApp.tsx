import './styles.css'

export const TodoApp = () => {



  return (
    <>
        <div className="container">
            <div className="head">
                <h4>Todos (5)</h4>
            </div>
            <div>
                <input type="text" placeholder='Enter todo here'/>

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
    </>
    
  )
}

