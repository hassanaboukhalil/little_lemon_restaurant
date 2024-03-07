import { Button } from '@chakra-ui/react'
import React from 'react'

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
  return (
    <div className='filter-btns'>
        {btns.map((btn) => (
            // <li key={btn.key}>{btn.name}</li>
            <Button className='btn' key={btn.key}>
                {btn.name}
            </Button>
        ))}
    </div>
  )
}
