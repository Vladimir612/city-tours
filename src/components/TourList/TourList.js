import React, { useState } from 'react'
import './TourList.sass'
import Tour from '../Tour/Tour'
import { tourData } from '../tourData'

const TourList = () => {
  const [tours, setTours] = useState(tourData)
  const removeTour = (id) => {
    const filteredTours = tours.filter((tour) => tour.id !== id)

    setTours(filteredTours)
  }
  return (
    <section className='tourlist'>
      {tours.map((tour) => {
        return <Tour key={tour.id} tour={tour} removeTour={removeTour} />
      })}
    </section>
  )
}

export default TourList
