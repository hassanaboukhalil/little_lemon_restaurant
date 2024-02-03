import { Button, FormControl, FormErrorMessage, FormLabel, Input, Select, Heading } from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import React from 'react'
import AvailableTimes from './availableTimes'

function BookingForm({times_reducer_obj , submitForm }) {
    const formik = useFormik({
        initialValues: {
            date: new Date().toISOString().split('T')[0],
            time: "17:00",
            guests_nb: 2,
            occasion: "Birthday"
        },
        onSubmit: (values) => {
            submitForm(values)
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
        times_reducer_obj.dispatch({selectedDate: e.target.value})
    }

    function handle_submit(e){
        e.preventDefault();
        formik.handleSubmit(e)
    }

    return (
        <section>
            <div className='container'>
                <form className='booking-form' onSubmit={handle_submit}>
                    <Heading w="100%">Book a table :</Heading>
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
                    <Button type="submit" w="100%" bg="#7f5ad5" color="white" isDisabled={(formik.errors.date || formik.errors.guests_nb) ? true : false} isLoading={false} aria-label="On Click">
                        Submit
                    </Button>
                </form>
            </div>
        </section>
    )
}

export default BookingForm