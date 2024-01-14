import { Button, FormControl, FormErrorMessage, FormLabel, Input, Select } from '@chakra-ui/react'
import { Formik, useFormik } from 'formik'
import * as Yup from 'yup'
// import { useFormik } from 'formik'
import React from 'react'
import AvailableTimes from './availableTimes'
// import AvailableTimes

function BookingForm({times_reducer_obj , submitForm}) {
    const formik = useFormik({
        initialValues: {
            date: new Date().toISOString().split('T')[0],
            time: "17",
            guests_nb: 2,
            occasion: "Birthday"
        },
        onSubmit: (values) => {
            submitForm(values)
            // console.log(submitForm)
        },
        validationSchema: Yup.object({
            date: Yup.date().min(new Date().toISOString().split('T')[0], "Date must be today or later").required("Required"),
            time: Yup.string().required("Required"),
            occasion: Yup.string(),
            guests_nb: Yup.number()
            .min(2, "Must be at least 2 guests").max(10, "you can't book for more than 10 guests today")
            .required("Required")
        })
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
            <FormControl role='group' isInvalid={formik.errors.date}>
                <FormLabel>Choose date</FormLabel>
                <Input type='date' {...formik.getFieldProps("date")} onChange={date_changed} aria-label='Enter the booking date' required/>
                <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
            </FormControl>
            <FormControl role='group' isInvalid={formik.errors.time}>
                <FormLabel>Choose time</FormLabel>
                <Select {...formik.getFieldProps("time")} aria-label='Select the booking time'>
                    <AvailableTimes times_reducer_obj={times_reducer_obj}/>
                </Select>
                <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
            </FormControl>
            <FormControl role='group' isInvalid={formik.errors.guests_nb}>
                <FormLabel>Number of guests</FormLabel>
                <Input title='guests-nb' type="number" min="2" max="10" {...formik.getFieldProps("guests_nb")} aria-label='Enter the number of guests' required/>
                <FormErrorMessage>{formik.errors.guests_nb}</FormErrorMessage>
            </FormControl>
            <FormControl role='group'>
                <FormLabel>Occasion</FormLabel>
                <Select {...formik.getFieldProps("occasion")}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>not specified</option>
                </Select>
            </FormControl>
            <Button type="submit" w="100%" bg="#7f5ad5" color="white" isDisabled={(formik.errors.date || formik.errors.guests_nb) ? true : false} isLoading={false} aria-label='submit the booking information'>
                Submit
            </Button>
        </form>
    )
}

export default BookingForm