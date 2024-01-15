// import React, { useState } from 'react'

function AvailableTimes({times_reducer_obj}) {
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