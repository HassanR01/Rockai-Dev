'use client'
import React from 'react'
import TitlePage from '../Components/main/titlePage'
import "./contact.css"
import { useState } from 'react';

export default function Contactus() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setorganization] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [phone, setphone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <>
      <TitlePage title={'Contact Us'} />
      <section className='formsec'>
        <form onSubmit={handleSubmit}>
          <div className='div1'>
            <div><label htmlFor="name">Name <span className='span'>*</span></label></div>
            <input
              type="text"
              id="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <div><label htmlFor="email">Email <span className='span'>*</span></label></div>
            <input
              type="email"
              id="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='div2'>
            <div><label htmlFor="organization">organization</label></div>
            <input
              type="text"
              id="pers"
              value={organization}
              onChange={(e) => setorganization(e.target.value)}
              required
            />
            <div><label htmlFor="job title">job title</label></div>
            <input
              type="text"
              id="pers"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              required
            />
          </div>
          <div className='div3'>
            <div><label htmlFor="phone">phone</label></div>
            <input
              type="pers"
              id="input"
              value={phone}
              onChange={(e) => setphone(e.target.value)}
            />
          </div>
          <div className='div4'>
            <div><label htmlFor="message">Message</label></div>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  )
}
