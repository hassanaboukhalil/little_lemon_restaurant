// import React, { useState } from 'react'

function AvailableTimes({times_reducer_obj}) {
    // const [times, setTimes] = useState([
    //     '17:00', '18:00' , '19:00' , '20:00' , '21:00' , '22:00'
    // ])

    let available_times = times_reducer_obj.availableTimes
        .map(time => {
            return (
                <option>{time}</option>
            )
        }
    )

    return (
        <>
            {available_times}
        </>
    )
}

export default AvailableTimes