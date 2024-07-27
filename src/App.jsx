import { useState, useEffect } from 'react'
import './App.css'
// import welcome from 'src/assets/welcome.jpeg';

function App() {
  const [fact, setFact] = useState([])
  const [imageURL, setImageURL] = useState([])
  const [currentFact, setCurrentFact] = useState("Meow")
  const [currentImgUrl, setCurrentImgUrl] = useState("src/assets/welcome.jpeg")

  useEffect(() => {
    const fetchFacts = async () => {
      const response = await fetch('https://meowfacts.herokuapp.com/?count=50', {
        method: 'GET',
      });
      const json = await response.json();
      setFact(json.data);
    };

    const fetchImages = async () => {
      const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=15', {
        method: 'GET',
        headers: {
          'x-api-key': 'live_fXmHYRaBfbiC0HNMQ1IkPgJazPYb27ddM24DVfc7IYrVETfHinPiTno87Kaz8B0Y'
        }
      });
      const json = await response.json();
      const urls = json.map(img => img.url);
      setImageURL(urls);

      urls.forEach(url => {
        const img = new Image();
        img.src = url;
      });
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
          setCurrentImgUrl(imageURL[Math.floor(Math.random() * imageURL.length)])
        }
        }>
          Click for Cat Fact
        </button>
      </div>
    </>
  )
}

export default App
