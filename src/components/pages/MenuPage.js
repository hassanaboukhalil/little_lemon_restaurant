import React from 'react'
import Main from '../layout/Main'
import FoodCard from '../others/FoodCard'
import FilterBtns from '../others/FilterBtns'
import '../../css/menu.css';
import { useSelector } from 'react-redux';

export default function MenuPage() {

    const foods = useSelector(state => state.foods.value);

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
                    {foods.map(food => {
                        return (
                            <FoodCard food={food}/>
                        )
                    })}
                </div>
            </div>
        </section>
    </Main>
  )
}
