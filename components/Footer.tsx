import Link from 'next/link'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    return (
        <footer className='py-8 mt-12 text-center font-bold' >
            Made by <Link href='https://github.com/egecanyldrm' target='_blank' className='underline underline-offset-2'>Egecan Yıldırım</Link>🙋‍♂️
        </footer>
    )
}

export default Footer