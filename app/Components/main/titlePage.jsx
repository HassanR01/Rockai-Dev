import React from 'react'
import bgTitI from '../../../public/bgTit.png'
export default function TitlePage({ title }) {

  return (
    <>
      <section style={{
        backgroundImage: `url(${bgTitI.src})`,
      }} className={'TPage'}>
        <h1>{title}</h1>
      </section>
    </>
  )
}
