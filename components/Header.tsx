import Link from 'next/link'
import React from 'react'

type Props = {}

function Header({ }: Props) {
  return (
    <header className='  '>
      <div className='container mx-auto pt-8 pb-4 flex justify-between'>
        <Link href='/' className='text-3xl  font-bold'> Movie App</Link>
        <nav className='flex justify-between gap-12 font-bold'>
          <Link href='/'> MOVIES</Link>
          <Link href='https://github.com/egecanyldrm' target='_blank'> GITHUB</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header