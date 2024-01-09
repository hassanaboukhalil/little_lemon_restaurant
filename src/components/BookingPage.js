import React, { useReducer } from 'react'
import Header from './Header'
import BookingForm from './BookingForm'
import Footer from './Footer'
import Main from './Main'

function updateTimes(availableTimes, date){
    let newTimes = [...availableTimes]
    // setavailableTimes(newTimes)
    return [...newTimes]
}



function BookingPage() {
    // const [availableTimes, setavailableTimes] = useState([])

    // const intz_times = [
    //     '17:00', '18:00' , '19:00' , '20:00' , '21:00' , '22:00'
    // ]

    // this will create the initial state for the availableTimes.
    // function initializeTimes(){
    //     let initialTimes = [
    //         '17:00', '18:00' , '19:00' , '20:00' , '21:00' , '22:00'
    //     ]
    //     // setavailableTimes(initialTimes)
    //     return initialTimes
    // }

    const initializeTimes = () => {
        return (
            [
                '17:00', '18:00' , '19:00' , '20:00' , '21:00' , '22:00'
            ]
        )
    }

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes()) // initializeTimes

    let times_state_obj = {
        availableTimes,
        dispatch
    }

    // initializeTimes()


    return (
        <>
            <Header />
            <Main>
                <BookingForm times_state_obj={times_state_obj}/>
            </Main>
            <Footer />
        </>
    )
}

export default BookingPage