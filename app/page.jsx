import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <div>
        <h1 className='4xl'>WELCOME</h1>
        <Link href='/hotels'>SHOW HOTELS</Link>
    </div>
  )
}

export default HomePage