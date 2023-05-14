import React from 'react'
import './Testimonials.css'

const Testimonials = ({ img, name, comment}) => {
  return (
        <div className='person'>
            <h1>&#9733;&#9733;&#9733;&#9733;&#9733; </h1>
            <img src={img} alt="smiley guy" />
            <h2>{name}</h2>
            <p>{comment}</p>
        </div>
  );
}

export default Testimonials;