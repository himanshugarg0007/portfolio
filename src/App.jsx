
import './App.css'
import Navbar from './Components/Navbar'
import Maincomp from './Components/Maincomp'
import ScrollButton from './Components/Scrollbtn'
import { useState, useEffect } from 'react'

function App() {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    if (document.querySelector('#root') !== null) {
      setIsRendered(true);
    }
  }, []);

  if (isRendered) {
    const script = document.createElement("script");

    script.src = "https://embeddable-chatbot.s3.ap-south-1.amazonaws.com/index.js";
    script.async = true;

    document.body.appendChild(script);
  }


  return (
    <>
    <Navbar />
     <Maincomp />
     <ScrollButton/>
     <div id="megachatbot"></div>
    </>
  )
}

export default App