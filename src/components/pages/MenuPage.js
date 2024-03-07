import React from 'react'
import Main from '../layout/Main'
import FoodCard from '../others/FoodCard'
import FilterBtns from '../others/FilterBtns'
import '../../css/menu.css';


let cards = [
    {
        id: 1,
        name: "Greek salad",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        price: "$12.99",
        img_src: "./images/greek_salad.jpg"
    },
    {
        id: 2,
        name: "Brushetta",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        price: "$7.99",
        img_src: "./images/lemon_dessert.jpg"
    },
    {
        id: 3,
        name: "Lemon Dessert",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        price: "$6.99",
        img_src: "./images/lemon_dessert.jpg"
    }
]

export default function MenuPage() {
  return (
    <Main>
        <section className="menu-section">
            <div className='container'>
                <h1 className='title'>Our Popular Delicious Foods</h1>
                <p className='paragraph'>
                    Explore our enticing menu, abundant with flavorful dishes and culinary treasures sure to satisfy any palate.
                </p>
                <FilterBtns />
                <div className='food-grid'>
                    {cards.map(card => {
                        return (
                            <FoodCard card={card}/>
                        )
                    })}
                </div>
            </div>
        </section>
    </Main>
  )
}
