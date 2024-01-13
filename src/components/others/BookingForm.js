import { Button, FormControl, FormLabel, Input, Select } from '@chakra-ui/react'
import { Formik, useFormik } from 'formik'
// import { useFormik } from 'formik'
import React from 'react'
import AvailableTimes from './availableTimes'
// import AvailableTimes

function BookingForm({times_reducer_obj , submitForm}) {
    const formik = useFormik({
        initialValues: {
            date: new Date().toISOString().split('T')[0],
            time: "17",
            guests_nb: 1,
            occasion: "Birthday"
        },
        onSubmit: (values) => {
            submitForm(values)
            console.log(submitForm)
            // alert("onsubmit formik")
        }
    })

    function date_changed(e){
        formik.handleChange(e)
        let selected_date = formik.values.date
        times_reducer_obj.dispatch(selected_date)
    }

    function handle_submit(e){
        e.preventDefault();
        formik.handleSubmit(e)
    }

    return (
        // <form className='booking-form'>
        //     {/* <label htmlFor="res-date">Choose date</label>
        //     <input type="date" id="res-date" />
        //     <label htmlFor="res-time">Choose time</label>
        //     <select id="res-time ">
        //         <option>17:00</option>
        //         <option>18:00</option>
        //         <option>19:00</option>
        //         <option>20:00</option>
        //         <option>21:00</option>
        //         <option>22:00</option>
        //     </select>
        //     <label htmlFor="guests">Number of guests</label>
        //     <input type="number" placeholder="1" min="1" max="10" id="guests" />
        //     <label htmlFor="occasion">Occasion</label>
        //     <select id="occasion">
        //         <option>Birthday</option>
        //         <option>Anniversary</option>
        //     </select>
        //     <input type="submit" value="Make Your reservation" /> */}
        // </form>
        <form className='booking-form' onSubmit={handle_submit}>
            <FormControl role='group'>
                <FormLabel>Choose date</FormLabel>
                <Input type='date' {...formik.getFieldProps("date")} onChange={date_changed} aria-label='Enter the booking date' />
            </FormControl>
            <FormControl role='group'>
                <FormLabel>Choose time</FormLabel>
                <Select {...formik.getFieldProps("time")} aria-label='Select the booking time'>
                    <AvailableTimes times_reducer_obj={times_reducer_obj}/>
                </Select>
            </FormControl>
            <FormControl role='group'>
                <FormLabel>Number of guests</FormLabel>
                <Input type="number" min="1" max="10" {...formik.getFieldProps("guests_nb")} aria-label='Enter the number of guests'/>
            </FormControl>
            <FormControl role='group'>
                <FormLabel>Occasion</FormLabel>
                <Select {...formik.getFieldProps("occasion")}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </Select>
            </FormControl>
            <Button type="submit" w="100%" bg="#7f5ad5" color="white" isLoading={false} aria-label='submit the booking information'>
                Submit
            </Button>
        </form>
    )
}

export default BookingForm