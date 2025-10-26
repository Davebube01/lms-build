import React from 'react'
import DarkModeToggle from './DarkModeToggle'
import SearchInputA from './SearchInputA'
import Link from 'next/link'
import { Bookmark, Navigation } from 'lucide-react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { Button } from './ui/button'
import SerachInput from './SerachInput'

function Header() {
  return (
    <header className='sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border py-2'>
        <div className='container mx-auto px-4'>
            <div className='flex items-center justify-between gap-4'>

                {/* left */}
                <div className='flex items-center gap-2'>
                    <Link 
                        href={"/"}
                        className='flex items-center space-x-2 hover:opacity-90 transition-opacity'
                    >
                        <Navigation  className='h-6 w-6 text-primary/80'/>
                        <span className='text-md md:text-xl font-semibold text-primary/80'>ACTIVE LEARNERS</span>
                    </Link>
                    {/* <SearchInputA/> */}
                    <SerachInput />
                </div>

                {/* right */}
                <div className='flex space-x-2 md:space-x-4 items-center'>
                    <nav>
                        <SignedIn>
                            <Link href={"/my-courses"} prefetch={false} className='flex items-center space-x-2 md:space-x-4 hover:opacity-90 transition-opacity'>
                                <Bookmark/>
                                <span className='text-sm font-semibold'>My courses</span>
                            </Link>
                        </SignedIn>
                    </nav>
                    <DarkModeToggle />

                    <SignedIn>
                        <UserButton/>
                    </SignedIn>

                    <SignedOut>
                        <SignInButton mode='modal'>
                            <Button variant="outline">
                                Sign in
                            </Button>
                        </SignInButton>
                    </SignedOut>
                </div>
            </div>
            
        </div>
      
    </header>
  )
}

export default Header
