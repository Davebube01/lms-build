import React from 'react'

function Hero() {
  return (
    <div className='h-[45vh] relative w-full'>
      <div className='absolute inset-0 bg-gradient-to-b from-black/10 to-black/55 dark:from-white/30 dark:to-white/44'/>
      <div className='absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20'/>

      <div className='relative container mx-auto px-4 h-full flex flex-col justify-center'>
        <div className='max-w-3xl'>
            <h1 className='text-4xl md:text-6xl font-semibold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent'>
                Fuel Your Curiosity & Transform Your Expertise
            </h1>
            <p className='text-lg text-muted-foreground'>
                Learn from the best, explore groundbreaking concepts, and take your abilities further than ever before.
            </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
