
import '@/assets/styles/globals.css';

export const metadata = {
title: 'hotellia | Find the nearest B & B',
description: 'Find the most comffortable and affordable guesthouse within your current location',
keywords: 'rentals, b & b, hotels, rest homes, inn, guesthouses, find hotels, find lounges'
}
import React from 'react'
const MainLayout = ({children}) => {
  return (
    
    <html lang='en'>
        <body>
        <div>{children}</div>  
        </body>
    
    </html>
  )
}

export default MainLayout