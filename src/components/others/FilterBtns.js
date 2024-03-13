import { Button } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux';
import { foodsActions } from '../../store/foodsSlice';

let btns = [
    {
        key: 0,
        name: "All Menu"
    },
    {
        key: 1,
        name: "Appetizers"
    },
    {
        key: 2,
        name: "Salads"
    },
    {
        key: 3,
        name: "Deserts"
    },
    {
        key: 4,
        name: "Drinks"
    }
]

export default function FilterBtns() {

    const allRef = useRef(null)
    const appetizersRef = useRef(null)
    const saladsRef = useRef(null)
    const desertsRef = useRef(null)
    const drinksRef = useRef(null)
    const refs = [allRef, appetizersRef, saladsRef, desertsRef, drinksRef]

    const dispatch = useDispatch();

    for(let i = 0 ; i < btns.length ; i++){
        btns[i].ref = refs[i]
        // btns[i].ref.current.style.backgroundColor = 'yellow'

    }

    // useEffect(() => {
    //     for(let i = 0 ; i < btns.length ; i++){
    //         btns[i].ref = refs[i]
    //         // btns[i].ref.current.style.backgroundColor = 'yellow'

    //     }
    //     // appetizersRef.current.style.backgroundColor = 'yellow'

    // },[])

    function update_foods(btn){
        if(btn.name === "All Menu")dispatch(foodsActions.allFood())
        else if(btn.name === "Appetizers")dispatch(foodsActions.appetizers())
        else if(btn.name === "Salads")dispatch(foodsActions.salads())
        else if(btn.name === "Deserts")dispatch(foodsActions.deserts())
        else if(btn.name === "Drinks")dispatch(foodsActions.drinks())
        changeMenuLinksColor(btn)
        // btn.ref.current.style.backgroundColor = 'yellow'
    }

    function changeMenuLinksColor(choosenBtn){
        for(let i = 0 ; i < btns.length ; i++){
            if(choosenBtn.name === btns[i].name){
                choosenBtn.ref.current.style.backgroundColor = 'yellow'
                continue
            }
            btns[i].ref.current.style.backgroundColor = 'white'
        }
    }

    return (
        <div className='filter-btns'>
            {btns.map((btn) => (
                <Button className='btn' key={btn.key} ref={btn.ref} onClick={() => update_foods(btn)}>
                    {btn.name}
                </Button>
            ))}
        </div>
    )
}
