import React from 'react'
import FoodCard from './FoodCard'

let cards = [
    {
        id: 1,
        name: "Greek salad",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        price: "$12.99",
        img_src: "./images/greek_salad.png"
    },
    {
        id: 2,
        name: "Brushetta",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        price: "$7.99",
        img_src: "./images/bruchetta.png"
    },
    {
        id: 3,
        name: "Lemon Dessert",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        price: "$6.99",
        img_src: "./images/bruchetta.png"
    }
]

function Highlights() {
  return (
    <section className='section2'>
      <div className='highlights container'>
        <div className='title-and-btn'>
            <h1 className='section-title'>This weeks Specials!</h1>
            <button className='btn'>Online Menu</button>
        </div>
        <div className='food-grid'>
            {/* <FoodCard card={cards[0]}/>
            <FoodCard card={cards[1]}/>
            <FoodCard card={cards[2]}/> */}

            {cards.map(card => {
                return (
                    <FoodCard card={card}/>
                )
            })}
        </div>
      </div>
    </section>
  )
}

export default Highlights