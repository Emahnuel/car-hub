"use client"

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'

const Navbar = () => {
    const handleScroll = () => {
        alert('It\'s working');
    }
    
  return (
    <header className='absolute z-10 w-full'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
            <Link href='/' className='flex items-center justify-center'>
                <Image src='/logo.svg' alt='Car Hub logo' width={118} height={118} className='object-contain' />
            </Link>
            
            <CustomButton title="Sign In" type='button' containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]" handleClick={handleScroll} />
        </nav>
    </header>
  )
}

export default Navbar