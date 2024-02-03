import React, { useReducer } from 'react'
import BookingForm from '../others/BookingForm'
import Main from '../layout/Main'
import { fetchAPI , submitAPI} from '../api'
import { useNavigate } from 'react-router-dom'
import '../../css/booking.css';


const initializeTimes = () => {

    let available_times = ['17:00','18:00','19:00','20:00','21:00','22:00']

    return [...available_times]
}

function BookingPage() {

    let bookings = fetchAPI()

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

export {initializeTimes};


export default BookingPage

