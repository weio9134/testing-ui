"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import './style.css'

const backgrounds = [
  '/nature_bg/forest.jpg',
  '/nature_bg/grassland.jpg',
  '/nature_bg/mountain.jpg',
]

const Page = () => {
  let active = 0

  const setDiameter = () => {
    const slider = document.getElementById('slider')
    if (!slider) return;

    const width = slider.offsetWidth
    const height = slider.offsetHeight
    const diameter = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2))
    document.documentElement.style.setProperty('--diameter', `${diameter}px`)
  }

  const setSlider = () => {
    const activatedItems = document.querySelectorAll('.item.active')
    console.log(activatedItems)
    if (activatedItems) activatedItems.forEach(elem => elem.classList.remove('active'))

    const items = document.querySelectorAll('.item')
    items[active].classList.add('active')
    console.log(items)
  }

  const goNext = () => {
    active = active === backgrounds.length - 1 ? 0 : active + 1
    setSlider()
  }

  const goPrev = () => {
    active = active === 0 ? backgrounds.length - 1 : active - 1
    setSlider()
  }

  useEffect(() => {
    setSlider()
    setDiameter()
    const handleResize = () => setDiameter()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="w-screen h-screen m-0 bg-[#2f4f4f] text-[15px]">
      <header className='w-[var(--width-df)] h-[70px] m-auto flex justify-between items-center relative z-[1]'>
        <Image
          src={'/personal_logo.png'}
          width={50}
          height={50}
          alt={'logo'}
        />
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h10"/>
        </svg>
      </header>

      <div id='slider' className='text-white w-full h-screen overflow-hidden mt-[-70px] relative'>
        <div className='list'>
          {backgrounds.map((url, index) => (
            <div
              key={url + index}
              className={`item absolute inset-0 flex justify-center items-center`}
            >
              <div className="image" style={{ '--url': `url(${url})` } as React.CSSProperties} />
              <div className="content absolute top-[20%] w-max grid max-md:grid-cols-[80vw] max-md:gap-[20px] max-md:top-[70px] max-lg:grid-cols-[300px_300px] max-lg:gap-[150px] grid-cols-[400px_400px] gap-[80px] uppercase font-[Poppins] text-xl">
                <h2 className='max-md:text-[4em] text-[10em] font-["Bebas_Neue"] leading-[0.9em] row-start-1 row-end-3'> Sliding Image {index + 1} </h2>
                <p className='max-md:text-sm text-right'> Nulla magna irure incididunt irure nisi laboris adipisicing adipisicing ad aliquip exercitation sit duis. </p>
                <p className='flex items-end pb-[25px] max-md:text-sm text-right'> Ex irure minim eiusmod tempor cillum consectetur ullamco. </p>
              </div>
            </div>
          ))}
        </div>

        <div className="arrows absolute left-1/2 -translate-x-1/2 bottom-[30px] w-[var(--width-df)] flex justify-between">
          <button id="prev" className='cursor-pointer' onClick={goPrev}>
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
            </svg>
          </button>
          <button id="next" className='cursor-pointer' onClick={goNext}>
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Page
