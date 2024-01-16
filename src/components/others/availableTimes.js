// import React, { useState } from 'react'

function AvailableTimes({times_reducer_obj}) {
    // if (times_reducer_obj.availableTimes.length === 0) {
    //     // Data is still being fetched, you can return a loading state or a message
    //     return <opt>Loading...</opt>;
    // }
    // else{
    //     return (
    //         {times_reducer_obj.map((booking) => (
    //             <option>{time}</option>
    //         ))}
    //     )
    // }
    // return(
    //     {times_reducer_obj.availableTimes.map((time)=> {
    //         <option>{time}</option>
    //     })}
    // )





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