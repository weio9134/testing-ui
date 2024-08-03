import Image from 'next/image'
import React from 'react'
import styles from './animate.module.css'

const dragons = [
  '/dragons/dragon_1.jpg',
  '/dragons/dragon_2.jpg',
  '/dragons/dragon_3.jpg',
  '/dragons/dragon_4.jpg',
  '/dragons/dragon_5.jpg',
  '/dragons/dragon_6.jpg',
  '/dragons/dragon_7.jpg',
  '/dragons/dragon_8.jpg',
  '/dragons/dragon_9.jpg',
  '/dragons/dragon_10.jpg',
]

const page = () => {
  return (
    <section className='w-screen h-screen flex justify-center mt-[5vw]'>
      <div className={`absolute w-[15vw] h-[25vw] ${styles['slider']}`}>
        { dragons.map((url, index) => (
          <div
            key={url}
            className={`absolute inset-0 ${styles['card-container']}`}
            style={ {"--index": index} as React.CSSProperties }
          >
            <Image
              src={url}
              alt={url}
              width={200}
              height={250}
              className={`w-full h-full object-cover rounded-lg`}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default page