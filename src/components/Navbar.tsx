import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <div className='Navbar text-white'>
      <ul className='flex text-white text-sm gap-5 justify-center'>
        <Link href={"/"}><li>Page d'accueil</li></Link>
        <Link href={"/Places"}><li>Lieux</li></Link>
        <Link href={"/About"}><li>À propos de nous</li></Link>
        <Link href={"/Contact"}><li>Contactez-nous</li></Link>
      </ul>
    </div>
  )
}

export default Navbar
