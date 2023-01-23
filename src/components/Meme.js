import React, { useState, useEffect } from 'react'

export default function Meme() {

  // const [memeImage, setMemeImage] = useState('')
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"

  })




  const [allMemes, setAllMemes] = useState()

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))
  }, [])
  function showMeme(e) {
    e.preventDefault();
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url,
    }))
    // const url = memesArray[randomNumber].url


  }

  function handleChange(event) {
    const { name, value } = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))

  }
  return (
    <main>
      <form className='form'>
        <input
          type="text"
          placeholder='Top text'
          className='form-inputs'
          name="topText"
          onChange={handleChange}
          value={meme.topText}
        />
        <input
          type="text"
          placeholder='Bottom text'
          className='form-inputs'
          name='bottomText'
          onChange={handleChange}
          value={meme.bottomText}
        />
        <button className='form-button' onClick={showMeme}><img src={require("../images/meme-image.png")} alt="" id='img' /></button>
      </form>
      <div className="meme">
        <img src={meme.randomImage} alt="" className='meme-image' />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>

    </main>
  )
}
