import { Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function FoodCard({card}) {
  return (
    <div className='food-card'>
        <div className='texts'>
            <div className='title-and-price'>
              <h1>{card.name}</h1>
              <p className='des price'>{card.price}</p>
            </div>
            <p className='des'>
                {card.description}
            </p>
            <div className='btns'>
              <Button className='order-btn'>
                <Link to='/contact-page' className='nav-item' aria-label="On Click">Order Now</Link>
              </Button>
              <Button className='add-btn'>
                <Link to='/login-page' className='nav-item' aria-label="On Click">Add To Cart</Link>
              </Button>
            </div>
        </div>
        <img src={card.img_src} alt={card.name} />
    </div>
  )
}

export default FoodCard