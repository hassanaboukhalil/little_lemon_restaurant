import React from 'react'
import FoodCard from './FoodCard'

let cards = [
    {
        id: 0,
        name: "Greek salad",
        des: "Crisp lettuce, juicy tomatoes, cucumbers, olives, and feta cheese tossed with tangy vinaigrette—a refreshing Mediterranean classic.",
        price: "$12.99",
        src: "./images/greek_salad.jpg"
    },
    {
        id: 1,
        name: "Bruchetta",
        des: "Grilled bread rubbed with garlic, drizzled with olive oil, topped with diced tomatoes, basil, and balsamic glaze—a taste of Italy in every bite.",
        price: "$7.99",
        src: "./images/appetizers/bruchetta.png"
    },
    {
        id: 2,
        name: "Lemon Dessert",
        des: "A luscious marriage of tangy lemon curd atop a buttery crust, crowned with airy meringue—a citrusy symphony for dessert lovers.",
        price: "$6.99",
        src: "./images/lemon_dessert.jpg"
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
            {cards.map(food => {
                return (
                    <FoodCard food={food}/>
                )
            })}
        </div>
      </div>
    </section>
  )
}

export default Highlights