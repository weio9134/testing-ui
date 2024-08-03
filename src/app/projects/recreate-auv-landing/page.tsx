import React from 'react'
import styles from './auv.module.css'

const page = () => {
  return (
    <section className="w-screen min-h-screen">
      <div className='absolute top-0 left-0 w-screen h-screen bg-red-400 z-[-1]' />
      <div className={`absolute top-0 right-0 w-screen h-screen bg-black z-[2] ${styles['window']}`}/>

      <div className={`absolute w-screen h-screen p-12 ${styles['text-container']}`}>
        <div className='relative border-4 border-white w-full h-full z-10'/>
        <div className={`text-6xl top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2 text-center z-10 ${styles['header-text']}`}>
          CORNELL UNIVERSITY AUTONOMOUS UNDERWATER VEHICLE
        </div>
        <div className={`text-6xl top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2 text-center ${styles['behind-text']}`}>
          CORNELL UNIVERSITY AUTONOMOUS UNDERWATER VEHICLE
        </div>
      </div>
    </section>
  )
}

export default page