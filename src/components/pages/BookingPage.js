import React, { useReducer } from 'react'
import BookingForm from '../others/BookingForm'
import Main from '../layout/Main'
import { fetchAPI , submitAPI} from '../api'
import { useNavigate } from 'react-router-dom'

function updateTimes(dateState,selectedDate){
    let available_times = [...fetchAPI(selectedDate)]
    return [...available_times]
}

const initializeTimes = () => {
    let today_times = [...fetchAPI(new Date())]
    return (
        // [
        //     '17:00', '18:00' , '19:00' , '20:00' , '21:00' , '22:00'
        // ]
        today_times
    )
}



function BookingPage() {

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

export {initializeTimes , updateTimes};

export default BookingPage

