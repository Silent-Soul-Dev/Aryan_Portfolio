import React, { useState } from 'react'
import Intro from './Intro'
import Education from './Education'
import Experience from './Experience'

const TextFolder = ({ link, appName }) => {
  const [textFileOpen, setTextFileOpen] = useState(false)
  return (
    <>
      <div className='flex flex-col items-center justify-center cursor-pointer hover:bg-zinc-200 active:bg-zinc-300 transition-all ease-linear px-3 pb-1 rounded-lg active:scale-90 duration-100' onClick={() => setTextFileOpen(!textFileOpen)} >
        <img src="src/assets/TextFile.svg" alt="" className='w-24' />
        <p>{appName}</p>
      </div>

      {textFileOpen && appName === 'intro.txt' ? (<Intro />) : null}
      {textFileOpen && appName === 'education.txt' ? (<Education />) : null}
      {textFileOpen && appName === 'experience.txt' ? (<Experience />) : null}
    </>
  )
}

export default TextFolder;
