import React from 'react'

const ScrollFood = ({img, text}) => {
  return (
    <div>
      <img src={img} alt="" />
      <h4>{text}</h4>
    </div>
  )
}

export default ScrollFood
