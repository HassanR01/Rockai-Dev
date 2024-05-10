'use client'
import React from 'react'
import { useState } from 'react';

export default function ContactForm() {
 const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [reason, setreason] = useState('Review');
  const [pProject, setPProject] = useState('')
  const [message, setMessage] = useState('');
  const [alert, setAlert] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name && phone && message) {
      setAlert('Processing..')
      try {
        const res = await fetch(`/api/asks`, {
          method: "POST",
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({ name, phone, pProject, email, reason, message })
        })

        if (res.ok) {
          setAlert('Thank you for your Message, We will contact with you as soon as possible.')
          setName('')
          setEmail('')
          setPhone('')
          setreason('Review')
          setMessage('')
        } else {
          setAlert('Technical Problem')
        }

      } catch (error) {
        console.log(error);
      }
    }
  };


  return (
<>
      <section className='formsec'>
        <form onSubmit={handleSubmit}>
          <div className='div1'>
            <div><label htmlFor="name">Name</label></div>
            <input type="text" id="input" value={name} onChange={(e) => setName(e.target.value)} required />
            <div><label htmlFor="email">Email</label></div>
            <input type="email" id="input" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className='div3'>
            <div><label htmlFor="phone">phone</label></div>
            <input type="pers" id="input" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className='div2'>
            <div><label htmlFor="title">Title</label></div>
            <select name="title" id="title" value={reason} onChange={(e) => setreason(e.target.value)} required>
              <option value="">Subject</option>
              <option value="Review">Review</option>
              <option value="Ask">Ask</option>
              <option value="Jobs">Jobs</option>
              <option value="Problem">Problem</option>
            </select>
          </div>
          {reason === 'Review' ? (
            <div>
            <div><label htmlFor="project">Your Project</label></div>
              <input type="text" name="project" id="project" value={pProject} onChange={(e) => setPProject(e.target.value)} />
            </div>
          ): null}
          <div className='div4'>
            <div><label htmlFor="message">Message</label></div>
            <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
          </div>
          <p className={`text-lg font-semibold text-rose-600 text-center`}>{alert}</p>
          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  )
}
