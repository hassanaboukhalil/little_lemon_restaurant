import { useEffect } from "react"

function AvailableTimes({times_reducer_obj}) {
    let available_times = times_reducer_obj.availableTimes
        .map(time => {
            return (
                <option key={time}>{time}</option>
            )
        }
    )

    useEffect(() => {
        const timeout = setTimeout(() => {
            times_reducer_obj.dispatch({selectedDate: new Date().toISOString().split('T')[0]})
        }, 100);

        return () => clearTimeout(timeout);
      }, []);

    return (
        <>
            {available_times}
        </>
    )
}

export default AvailableTimes