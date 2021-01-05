import React, { useState } from 'react'
import './Tour.sass'
import { AiFillCloseCircle, AiFillDownSquare } from 'react-icons/ai'

const Tour = ({ tour, removeTour }) => {
  const { id, city, img, name, info } = tour

  const [showInfo, setShowInfo] = useState(false)

  return (
    <article className='tour'>
      <div className='img-container'>
        <img src={img} alt={name} />
        <span className='close-btn' onClick={() => removeTour(id)}>
          <AiFillCloseCircle />
        </span>
      </div>
      <div className='tour-info'>
        <h3>{city}</h3>
        <h4>{name}</h4>
        <h5>
          info{' '}
          <span
            onClick={() => {
              setShowInfo(!showInfo)
            }}
          >
            <AiFillDownSquare />
          </span>
        </h5>
        {showInfo && <p>{info}</p>}
      </div>
    </article>
  )
}

export default Tour
