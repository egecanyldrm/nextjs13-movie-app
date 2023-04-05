import Link from 'next/link'
import React from 'react'
import Search from './Search'


function Header() {

  return (
    <header >
      <div className='md:px-24 px-8 pt-8 pb-4 flex flex-col md:flex-row justify-between'>
        <Link href='/' className='md:text-3xl text-2xl  font-bold'> Movie App</Link>
        <div className='flex flex-col-reverse md:flex-row'>
          <Search />
          <nav className='flex justify-between gap-12 font-bold  align-center'>
            <Link href='https://github.com/egecanyldrm' target='_blank' className=' items-center justify-center flex py-3 md:py-0'> <span>GITHUB</span> </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header