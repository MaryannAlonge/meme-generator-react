import React, {useState} from 'react'
import memesData from "../memesData"

export default function Meme() {
  // const [memeImage, setMemeImage] = useState('')
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: ""

  })
  const [allMemeImages, setAllMemeImages] = useState(memesData)
  function showMeme(e) {
    e.preventDefault();
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
    // const url = memesArray[randomNumber].url
    
   
  }
  return (
    <main>
      <form className='form'>
        <input
          type="text"
          placeholder='Top text'
          className='form-inputs'
        />
        <input
          type="text"
          placeholder='Bottom text'
          className='form-inputs'
        />
        <button className='form-button' onClick={showMeme}><img src={require("../images/meme-image.png")} alt="" id='img'/></button>
      </form>
      <img src={meme.randomImage} alt="" className='meme-image'/>

    </main>
  )
}
