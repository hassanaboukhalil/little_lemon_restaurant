import React, { useReducer } from 'react'
import BookingForm from '../others/BookingForm'
import Main from '../layout/Main'
import { fetchAPI , submitAPI} from '../api'
import { useNavigate } from 'react-router-dom'



// const initializeTimes = async () => {
//     try {
//       let bookings = await fetchAPI();
//       let today = new Date().toISOString().split('T')[0];
  
//       let bookingsTimes = [];
//       for (let i = 0; i < bookings.length; i++) {
//         if (bookings[i].date === today) {
//           bookingsTimes.push(bookings[i].time);
//         }
//       }
  
//       let availableTimes = [];
//       for (let i = 17; i < 23; i++) {
//         if (!bookingsTimes.includes(`${i}:00`)) {
//           availableTimes.push(`${i}:00`);
//         }
//       }
  
//       return availableTimes;
//     } catch (error) {
//       console.error('Error initializing times:', error);
//       return [];
//     }
//   };


function BookingPage() {

    let bookings = fetchAPI()

    const initializeTimes = () => {
        let today = new Date(new Date().toISOString().split('T')[0])

        let bookings_times = []
        for(let i = 0 ; i < bookings.length ; i++){
            if(new Date(bookings[i].date).getTime() === today.getTime()){
                bookings_times.push(bookings[i].time)
            }
        }

        let available_times = []
        for(let i = 17; i < 23; i++) {
            if(!bookings_times.includes(`${i}:00`)) {
                available_times.push(`${i}:00`);
            }
        }

        return [...available_times]
    }


    function updateTimes(state,action){
        let today = new Date(action.selectedDate)

        let bookings_times = []
        for(let i = 0 ; i < bookings.length ; i++){
            if(new Date(bookings[i].date).getTime() === today.getTime()){
                bookings_times.push(bookings[i].time)
            }
        }

        let available_times = []
        for(let i = 17; i < 23; i++) {
            if(!bookings_times.includes(`${i}:00`)) {
                available_times.push(`${i}:00`);
            }
        }

        return [...available_times]
    }

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())

    let times_reducer_obj = {
        availableTimes,
        dispatch
    }

    let navigate = useNavigate()

    const submitForm = (formData) => {
        if(submitAPI(formData)){
            navigate("/confirmed-booking")
        }
    }

    return (
        <>
            <Main>
                <BookingForm times_reducer_obj={times_reducer_obj} submitForm={submitForm}/>
            </Main>
        </>
    )
}

// export {initializeTimes , updateTimes};
// export {initializeTimes};


export default BookingPage

