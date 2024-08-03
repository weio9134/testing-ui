import React from 'react'
import Link from 'next/link'

type Props = {
  url: string,
  text: string
}

const GoBack = ({ url, text }: Props) => {
  return (
    <Link href={url} className='cursor-pointer px-4 py-2 text-center font-semibold bg-blue-200 rounded-lg hover:bg-blue-300'>
      {text}
    </Link>
  )
}

export default GoBack