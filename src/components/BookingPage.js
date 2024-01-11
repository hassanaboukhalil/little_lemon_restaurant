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

const initializeTimes = () => {
    return (
        [
            '17:00', '18:00' , '19:00' , '20:00' , '21:00' , '22:00'
        ]
    )
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

    

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes()) // initializeTimes

    let times_reducer_obj = {
        availableTimes,
        dispatch
    }

    // initializeTimes()


    return (
        <>
            <Header />
            <Main>
                <BookingForm times_reducer_obj={times_reducer_obj}/>
            </Main>
            <Footer />
        </>
    )
}

export {initializeTimes , updateTimes};

export default BookingPage

