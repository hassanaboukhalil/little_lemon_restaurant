import { createSlice } from "@reduxjs/toolkit";

let all_food = [
    {
        id: 0,
        name: "Bruchetta",
        des: "Our Bruschetta is a symphony of flavors, with grilled bread, garlic, olive oil, and a sprinkle of salt creating a perfect appetizer.",
        src: "./images/appetizers/bruchetta.png",
        type: "appetizer",
        price: "$12.99"
    },
    {
        id: 1,
        name: "Deviled Eggs",
        des: "Boiled eggs filled with creamy mayo, mustard, and paprika, garnished with chives or crispy bacon for added delight.",
        src: "./images/appetizers/deviled_eggs.png",
        type: "appetizer",
        price: "$7.99"
    },
    {
        id: 2,
        name: "Mozzarella Sticks",
        des: "Breaded mozzarella, fried to golden perfection, with a gooey center, served with marinara for dipping pleasure.",
        src: "./images/appetizers/mozzarella_sticks.png",
        type: "appetizer",
        price: "$6.99"
    },
    {
        id: 3,
        name: "Bruchetta",
        des: "Our Bruschetta is a symphony of flavors, with grilled bread, garlic, olive oil, and a sprinkle of salt creating a perfect appetizer.",
        src: "./images/appetizers/bruchetta.png",
        type: "appetizer",
        price: "$12.99"
    },
    {
        id: 4,
        name: "Deviled Eggs",
        des: "Boiled eggs filled with creamy mayo, mustard, and paprika, garnished with chives or crispy bacon for added delight.",
        src: "./images/appetizers/deviled_eggs.png",
        type: "appetizer",
        price: "$7.99"
    },
    {
        id: 5,
        name: "Mozzarella Sticks",
        des: "Breaded mozzarella, fried to golden perfection, with a gooey center, served with marinara for dipping pleasure.",
        src: "./images/appetizers/mozzarella_sticks.png",
        type: "appetizer",
        price: "$6.99"
    },
    {
        id: 6,
        name: "Cheesecake",
        des: "Our Cheesecake delights with creamy cheese filling on graham crust, finished with sweetened sour cream—a timeless dessert for any occasion.",
        src: "./images/deserts/cheesecake.png",
        type: "desert",
        price: "$12.99"
    },
    {
        id: 7,
        name: "Chocolate Cake",
        des: "Rich layers of decadent chocolate sponge, enrobed in velvety ganache—a luscious indulgence for chocolate lovers everywhere.",
        src: "./images/deserts/chocolate_cake.png",
        type: "desert",
        price: "$7.99"
    },
    {
        id: 8,
        name: "Lemon Dessert",
        des: "Tangy lemon curd nestled in a buttery crust, topped with fluffy meringue, a zesty delight for citrus enthusiasts.",
        src: "./images/deserts/lemon_dessert.jpg",
        type: "desert",
        price: "$6.99"
    },
    {
        id: 9,
        name: "Cheesecake",
        des: "Our Cheesecake delights with creamy cheese filling on graham crust, finished with sweetened sour cream—a timeless dessert for any occasion.",
        src: "./images/deserts/cheesecake.png",
        type: "desert",
        price: "$12.99"
    },
    {
        id: 10,
        name: "Chocolate Cake",
        des: "Rich layers of decadent chocolate sponge, enrobed in velvety ganache—a luscious indulgence for chocolate lovers everywhere.",
        src: "./images/deserts/chocolate_cake.png",
        type: "desert",
        price: "$7.99"
    },
    {
        id: 11,
        name: "Lemon Dessert",
        des: "Tangy lemon curd nestled in a buttery crust, topped with fluffy meringue, a zesty delight for citrus enthusiasts.",
        src: "./images/deserts/lemon_dessert.jpg",
        type: "desert",
        price: "$6.99"
    },
    {
        id: 12,
        name: "Cocktail Juice",
        des: "Freshly squeezed fruits blended to perfection—a refreshing choice for vibrant and flavorful cocktails.",
        src: "./images/drinks/cocktail_juice.png",
        type: "drink",
        price: "$12.99"
    },
    {
        id: 13,
        name: "Orange Juice",
        des: "Freshly squeezed citrus, bursting with tangy sweetness—perfect for a refreshing morning pick-me-up or a zesty cocktail mixer.",
        src: "./images/drinks/orange_juice.png",
        type: "drink",
        price: "$7.99"
    },
    {
        id: 14,
        name: "Pineapple Juice",
        des: "Tropical sweetness in every sip, a refreshing thirst-quencher perfect for enjoying on a sunny day or mixing cocktails.",
        src: "./images/drinks/pineapple_juice.png",
        type: "drink",
        price: "$6.99"
    },
    {
        id: 15,
        name: "Cocktail Juice",
        des: "Freshly squeezed fruits blended to perfection—a refreshing choice for vibrant and flavorful cocktails.",
        src: "./images/drinks/cocktail_juice.png",
        type: "drink",
        price: "$12.99"
    },
    {
        id: 16,
        name: "Orange Juice",
        des: "Freshly squeezed citrus, bursting with tangy sweetness—perfect for a refreshing morning pick-me-up or a zesty cocktail mixer.",
        src: "./images/drinks/orange_juice.png",
        type: "drink",
        price: "$7.99"
    },
    {
        id: 17,
        name: "Pineapple Juice",
        des: "Tropical sweetness in every sip, a refreshing thirst-quencher perfect for enjoying on a sunny day or mixing cocktails.",
        src: "./images/drinks/pineapple_juice.png",
        type: "drink",
        price: "$6.99"
    },
    {
        id: 18,
        name: "Greek Salad",
        des: "Crisp lettuce, juicy tomatoes, cucumbers, olives, and feta cheese tossed with tangy vinaigrette—a refreshing Mediterranean classic.",
        src: "./images/salads/greek_salad.jpg",
        type: "salad",
        price: "$12.99"
    },
    {
        id: 19,
        name: "Caesar Salad",
        des: "Crisp romaine lettuce tossed with Caesar dressing, Parmesan cheese, and crunchy croutons—a timeless favorite for salad enthusiasts.",
        src: "./images/salads/caesar-salad.png",
        type: "salad",
        price: "$7.99"
    },
    {
        id: 20,
        name: "Caprese Salad",
        des: "Tropical sweetness in every sip, a refreshing thirst-quencher perfect for enjoying on a sunny day or mixing cocktails.",
        src: "./images/salads/caprese-salad.png",
        type: "salad",
        price: "$6.99"
    },
    {
        id: 21,
        name: "Greek Salad",
        des: "Crisp lettuce, juicy tomatoes, cucumbers, olives, and feta cheese tossed with tangy vinaigrette—a refreshing Mediterranean classic.",
        src: "./images/salads/greek_salad.jpg",
        type: "salad",
        price: "$12.99"
    },
    {
        id: 22,
        name: "Caesar Salad",
        des: "Crisp romaine lettuce tossed with Caesar dressing, Parmesan cheese, and crunchy croutons—a timeless favorite for salad enthusiasts.",
        src: "./images/salads/caesar-salad.png",
        type: "salad",
        price: "$7.99"
    },
    {
        id: 23,
        name: "Caprese Salad",
        des: "Tropical sweetness in every sip, a refreshing thirst-quencher perfect for enjoying on a sunny day or mixing cocktails.",
        src: "./images/salads/caprese-salad.png",
        type: "salad",
        price: "$6.99"
    }

]

const foodsSlice = createSlice({
    name: 'foods',
    initialState: {
        value: all_food
    },
    reducers: {
        allFood: state => {
            state.value = all_food;
        },
        appetizers: state => {
            state.value = all_food.filter(food => food.type === "appetizer");
        },
        salads: state => {
            state.value = all_food.filter(food => food.type === 'salad');
        },
        deserts: state => {
            state.value = all_food.filter(food => food.type === 'desert');
        },
        drinks: state => {
            state.value = all_food.filter(food => food.type === 'drink');
        }
    }
})

export const foodsActions = foodsSlice.actions
export default foodsSlice.reducer;