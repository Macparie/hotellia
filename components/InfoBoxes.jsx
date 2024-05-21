import React from 'react'
import InfoBox from './InfoBox'
import Link from 'next/link'

const InfoBoxes
 = () => {
  return (
    <section>
    <div className="container-xl lg:container m-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
      <InfoBox 
      heading= 'For Travelers, Tourist And everyone who wants a space'
      backgroundColor='bg-gray-100'
      buttonInfo={{
        text: 'Browse Hotels',
        link:  '/hotels',
        backgroundColor: 'bg-black',

        
      }}
      > For Travelers, Tourist And everyone who wants a space to rent out for long or short time Periods
      </InfoBox>
      <InfoBox 
      heading= 'For Estate Managers, B & B Owners, Shortlet Owners, Hotel Owners'
      backgroundColor='bg-pink-100'
      buttonInfo={{
        text: 'Add Hotels',
        link:  '/hotels/add',
        backgroundColor: 'bg-pink-500',

        
      }}
      > For Estate Managers, B & B Owners, Shortlet Owners, Hotel Owners
      </InfoBox>
       
      </div>
    </div>
  </section>
  )
}

export default InfoBoxes
