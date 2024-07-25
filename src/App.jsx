import { useState } from 'react'
import './App.css'

function App() {
  const [fact, setFact] = useState("Meow")
  const [imageURL, setImageURL] = useState("https://cataas.com/cat")



  return (
    <>
      <div>
        
      <img src={imageURL} style={{ width: '300px', height: 'auto' }}/>
      
      </div>
      <h1>{fact}</h1>
      <div className="card">
        <button onClick={
          async () => {
            
            const response = await fetch ('https://meowfacts.herokuapp.com', {
              method: "GET"
            })

            const json = await response.json();
            
            const fact = json.data[Math.floor(Math.random() * json.data.length)]

            setFact(fact)

            setImageURL(`https://cataas.com/cat?${Date.now()}`);

          }
        }>
          Click for Cat Fact
        </button>
      </div>
    </>
  )
}

export default App
