"use client";

import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { FormEvent } from 'react'
import { useState } from 'react'

function SearchInputA() {
    const router = useRouter()
    const [searchQuery, setSearchQuery] = useState("")

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // this trims the search query input and then uses it on the url, removes space and shows %20 
        if (searchQuery.trim()) {
            router.push(`/search/${encodeURIComponent(searchQuery.trim())}`); 
        }
    }

  return (
    <form 
        onSubmit={handleSubmit}
        className='relative w-full max-w-[300px] flex-1'
    >
        <input 
            type="text" 
            placeholder='Search courses'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='w-full rounded-full bg-secondary/80 px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary'
        />
        <Search className='absolute h-4 w-4 top-1/2 left-3 -translate-y-1/2 text-muted-foreground'/>
    </form>
  )
}

export default SearchInputA
