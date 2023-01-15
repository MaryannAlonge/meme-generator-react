import React from 'react'

export default function Meme() {
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
        <button className='form-button'><img src={require("../images/meme-image.png")} alt="" id='img'/></button>
      </form>

    </main>
  )
}
