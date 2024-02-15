import Link from 'next/link'
import React from 'react'

export default function Footer() {

  let date = new Date()
  let year = date.getFullYear()

  return (
    <footer>
      <p>Copyright<sup>&copy;</sup>{year} <Link href={'/'}>Rockai Dev</Link> | All Rights Reserved.</p>
      <p><Link href="/">Teams {`&`} conditions</Link> <Link href="/">Privacy Policy</Link></p>
    </footer>
  )
}
