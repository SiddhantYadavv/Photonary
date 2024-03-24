"use client"
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import {navLinks} from "../../../constants/index.js"
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'

const Sidebar = () => {
    const pathName = usePathname()
  return (
    <aside className='sidebar'>
        <div className='flex side-full flex-col gap-4'>
            <Link href="/" className='sidebar-logo'>
                <Image src="/photonary.png" alt="photonary" width={150} height={150} />
            </Link>
            <nav className='sidebar-nav'>
            <SignedIn>
                <ul className='sidebar-nav_elements'>
                    {navLinks.map((link) => {
                        const isActive = link.route === pathName
                        return(
                        <li key={link.label} className={`sidebar-nav_element groups ${
                            isActive ? 'bg-purple-gradient text-white'  : 'text-gray-700'
                        }`}>
                            <Link className='sidebar-link' href={link.route}>
                                <Image src={link.icon}
                                alt={link.label}
                                width={24}
                                height={24}
                                className={`${isActive && "brightness-200"}`}/>

                                {link.label}
                                </Link>
                        </li>
                        )
                    })} 
                    <li className='flex-center cursor-pointer p-2 px-5 gap-4' >
                        <UserButton showName afterSignOutUrl='/'/>
                    </li>
                </ul>
            </SignedIn>

            <SignedOut>
                <Button asChild className='button bg-purple-gradient bg-cover'> 
                    <Link href="/sign-in">Login</Link>
                </Button>
            </SignedOut>
            </nav>
        </div>
    </aside>
    )
}

export default Sidebar