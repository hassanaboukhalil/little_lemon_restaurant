import React from 'react'

function FoodCard({card}) {
  return (
    <div className='food-card'>
        <div className='texts'>
            <h1>{card.name}</h1>
            <p className='des'>
                {card.description}
            </p>
            <p className='des price'>{card.price}</p>
        </div>
        <img src={card.img_src} alt={card.name} />
    </div>
  )
}

export default FoodCard