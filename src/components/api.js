import { useEffect, useState } from "react";

// function random_nb(){
//     // it return random nb between 0 (inclusive) and 1 (inclusive)
//     let random = Math.random() * (1 - 0) + 0;
//     return random
// }

// export function fetchAPI(date) {
//     let result = [];

//     for(let i = 17; i < 23; i++) {
//         if(random_nb() < 0.5) {
//             result.push(i + ':00');
//         }
//     }
//     return result;
// };


const useFetchAPI = ()=> {
    let [bookings, setBookings] = useState([])

    useEffect(() => {
        const fetchData = async() => {
            try{
                let response = await fetch('/bookings.json')
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                let data = await response.json()
                setBookings(data)
            }
            catch (error){
                console.error('Error fetching data:', error);
            }
        }
        fetchData()
    },[])

    return bookings
};


// const useFetchAPI = ()=> {
//     let [bookings, setBookings] = useState([])

//     useEffect(() => {
//         const fetchData = () => {
//             try{
//                 fetch('/bookings.json')
//                 .then(response => response.json() )
//                 .then((data) => {
//                     setBookings(data)
//                 })
//                 // if (!response.ok) {
//                 //     throw new Error(`HTTP error! Status: ${response.status}`);
//                 // }
//                 // let data = response.json()
//                 // setBookings(data)
//             }
//             catch (error){
//                 console.error('Error fetching data:', error);
//             }
//         }
//         fetchData()
//     },[])

//     return bookings
// };



export const fetchAPI = useFetchAPI;


export function submitAPI(formData) {
    return true;
};


// public folder:
//     index.html

// src folder :
//     component folder :
//         api.js
//         pages folder :
//             BookingPage.js (i import fetchAPI from api.js and called it)
//     rest_api folder :
//         bookings.json

