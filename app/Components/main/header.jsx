import React from 'react'
import logoRockAi from '../../../public/logo-Rockai.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header id='header'>
      <div className="logo">
        <Image src={logoRockAi} alt="Rockai Dev's Logo" width={50} height={50} />
        <h1>Rockai<span>Dev</span></h1>
      </div>

      <nav>
        <ul>
          <li><Link href={'/'}>Home</Link></li>
          <li><Link href={'/projects'}>Projects</Link></li>
          <li><Link href={'/addOrder'}>Order</Link></li>
          <li><Link href={'contact_us'}>Contact</Link></li>
        </ul>
        <div className="brgIcon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  )
}
