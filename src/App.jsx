import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [fact, setFact] = useState([])
  const [imageURL, setImageURL] = useState([])
  const [currentFact, setCurrentFact] = useState("Meow")
  const [currentImgUrl, setCurrentImgUrl] = useState("")

  useEffect(() => {
    const fetchFacts = async () => {
      const response = await fetch('https://meowfacts.herokuapp.com/?count=50', {
        method: 'GET',
      });
      const json = await response.json();
      setFact(json.data);
    };

    const fetchImages = async () => {
      const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=50', {
        method: 'GET',
      });
      const json = await response.json();
      setImageURL(json);
    };

    fetchFacts();
    fetchImages();
  }, []);



  return (
    <>
      <div>
        
      <img src={currentImgUrl} style={{ width: '300px', height: 'auto' }}/>
      
      </div>
      <h1>{currentFact}</h1>
      <div className="card">
        <button onClick={() => {
          setCurrentFact(fact[Math.floor(Math.random() * 50)])
          setCurrentImgUrl(imageURL[Math.floor(Math.random() * imageURL.length)].url)
        }
        }>
          Click for Cat Fact
        </button>
      </div>
    </>
  )
}

export default App
