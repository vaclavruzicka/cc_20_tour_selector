//TourCard.jsx (Single Tour Component)

//Imports React and useState.
import React, { useState } from 'react';

//Error state is set to null so that it checks for an error during the fetch process.
//Creating the props for the TourCard component.
const TourCard = ({id, name, info, price, image, onRemove}) => {
    const [readMore, setReadMore] = useState(false) //State to manage the read more functionality.

    return (
        <article className='tour-card'>
          
            {/* Creating the tour header with name and price */}
            <div className='tour-header'>
                <h3>{name}</h3>
                <h4>${price}</h4>
            </div>

            {/* Adding the image and info section */}
            <img src={image} alt={name}></img>
            <p>{readMore ? info : `${info.slice(0,70)}...`}</p>

            {/* Adding the read more and remove button */}
            <div className='button-container'>
                <button className='read-more' onClick={() => setReadMore(!readMore)}>
                    {readMore ? 'Show Less' : 'Read More'}
                </button>
                <button className='remove' onClick={() => onRemove(id)}>
                    Not Interested</button>
            </div>
        </article>
    )
}

//Exporting the TourCard component to be used in other files.
export default TourCard