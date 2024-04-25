'use client'
import React, { useState } from 'react'
import TitlePage from '../Components/main/titlePage'
import './addOrder.css'

export default function AddOrder() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNum, setPhoneNum] = useState('')
  const [bName, setBName] = useState('')
  const [service, setService] = useState('')
  const [details, setDetails] = useState('')
  const [exLink, setExLink] = useState('')
  const [cDate, setCDate] = useState('')
  const [hunous, setHunous] = useState('')
  const [alert, setAlert] = useState('')

  const handelOrderForm = async (e) => {
    e.preventDefault()

    if (name && email && phoneNum && bName && service && details && exLink && cDate && hunous) {

      try {
        const res = await fetch('/api/orders', {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify({ name, email, phoneNum, bName, service, details, exLink, cDate, hunous })
        })

        if (res.ok) {
          setAlert(`Thank You Mr. ${name}, Wait for a Call within 24 hours`)

          setName(''); setEmail(''); setPhoneNum(''); setBName(''); setService(''); setDetails(''); setExLink(''); setCDate(''); setHunous('');

          setTimeout(() => {
            setAlert('')
          }, 10000);
        }

      } catch (error) {
        console.log(error);
      }

    } else {
      setAlert('All Data Are Required')
      setTimeout(() => {
        setAlert('')
      }, 10000);
    }
  }

  return (
    <>
      <TitlePage title={'Add Order'} />
      <section className="addOrder">
        <h2>Hello Mr. {name}</h2>
        <form onSubmit={handelOrderForm} onChange={() => setAlert('')}>
          <div className="sender">
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name..' />
            <input type="text" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email..' />
            <input type="tel" name='phone' value={phoneNum} onChange={(e) => setPhoneNum(e.target.value)} placeholder='Phone Number..' />
            <input type="time" name="Contact Date" value={cDate} onChange={(e) => setCDate(e.target.value)} placeholder='Contact Time' />
          </div>

          <div className="business">
            <input type="text" name="Business Name" value={bName} onChange={(e) => setBName(e.target.value)} placeholder='Business Name..' />
            <select type="text" name='service' value={service} onChange={(e) => setService(e.target.value)} placeholder='Type Of Service..'>
              <option value="Web Development" >Web Development</option>
              <option value="Mobile App Development" >Mobile App Development</option>
              <option value="Desktop App Development" >Desktop App Development</option>
              <option value="AI Development" >AI Development</option>
              <option value="Systems" >Systems</option>
              <option value="SEO" >SEO</option>
            </select>
            <input type="text" name="link" value={exLink} onChange={(e) => setExLink(e.target.value)} placeholder='Example Link' />
            <input type="text" name="info" list='hunous' value={hunous} onChange={(e) => setHunous(e.target.value)} placeholder='How You Know Rockai Dev' />
            <datalist id="hunous">
              <option value="Facebook" >Facebook</option>
              <option value="Instagram" >Instagram</option>
              <option value="Tiktok" >Tiktok</option>
              <option value="Relations" >Relations</option>
              <option value="Word Of Mouth" >Word Of Mouth</option>
              <option value="Others" >Others</option>
            </datalist>
            <textarea name="details" value={details} onChange={(e) => setDetails(e.target.value)} placeholder='Add Some Information about your idea'></textarea>
          </div>

          <h3>{alert}</h3>
          <button type="submit">Send</button>
        </form>
      </section>
    </>
  )
}
