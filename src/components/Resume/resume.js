import React from 'react'
import resume from "../../images/RajatGangwani-FullStackEngineer.pdf"
import "./resumestyle.css"

export default function Resume() {
  return (
      <>
        <iframe title="resume" className='iframe' src={resume + "#toolbar=0" } width="100%" height="100%"  allowfullscreen="true" />
    </>
  )
}
