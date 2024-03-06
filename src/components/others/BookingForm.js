import { Button, FormControl, FormErrorMessage, FormLabel, Input, Select, Heading, Box, Progress, Stack, Text, InputGroup, InputLeftAddon } from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import React, { useState } from 'react'
import AvailableTimes from './availableTimes'
import {
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    useSteps,
  } from '@chakra-ui/react'
import PhoneInput from 'react-phone-number-input'
import PhoneInputWithCountrySelect from 'react-phone-number-input'
import 'react-phone-number-input/style.css'; // Import the CSS for styling


const steps = [
    { title: 'First', description: 'Booking Information' },
    { title: 'Second', description: 'Contact Information' },
]


function BookingForm({times_reducer_obj , submitForm }) {
    const formik = useFormik({
        initialValues: {
            date: new Date().toISOString().split('T')[0],
            time: "17:00",
            guests_nb: 2,
            occasion: "Birthday",
            firstName: '',
            lastName: '',
            email: '',
            phone: ''
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
            .required("Required"),
            firstName: Yup.string().min(2, "the first name should contain at least 2 letters").max(10).required("Required"),
            lastName: Yup.string().min(2, "the last name should contain at least 2 letters").max(10).required("Required"),
            email: Yup.string().email("Invalid email address").required("Required"),
            phone: Yup.string()
        })
    })

    const { activeStep, setActiveStep } = useSteps({
        index: 0,
        count: steps.length,
    })
    const activeStepText = steps[activeStep].description


    function date_changed(e){
        formik.handleChange(e)
        times_reducer_obj.dispatch({selectedDate: e.target.value})
    }

    function handle_submit(e){
        e.preventDefault();
        formik.handleSubmit(e)
    }

    function contactForm(){
        setActiveStep(1)
    }

    return (
        <section className='section1'>
            <div className='container form-div'>
                <form className='booking-form' onSubmit={handle_submit}>
                    <Stack>
                        <Stepper size='sm' index={activeStep} gap='0'>
                            {steps.map((index) => (
                                <Step key={index} gap='0'>
                                    <StepIndicator>
                                        <StepStatus complete={<StepIcon />} />
                                    </StepIndicator>
                                    <StepSeparator _horizontal={{ ml: '0' }} />
                                </Step>
                            ))}
                        </Stepper>
                        <Text>
                            Step {activeStep + 1}: <b>{activeStepText}</b>
                        </Text>
                    </Stack>
                    {
                        activeStep === 0 ?
                        <>
                            <Heading className='title' w="100%">Book a table :</Heading>
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
                            <Button w="100%" bg="#7f5ad5" color="white" isDisabled={(formik.errors.date || formik.errors.guests_nb) ? true : false} isLoading={false} aria-label="On Click" onClick={contactForm}>
                                Next
                            </Button>
                        </>
                        :
                        <>
                            <Heading className='title' w="100%">Contact Information :</Heading>
                            <FormControl role='group' isInvalid={formik.errors.firstName}>
                                <FormLabel>First Name</FormLabel>
                                <Input type='text' {...formik.getFieldProps("firstName")} aria-label='Enter the your first name' required/>
                                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                            </FormControl>
                            <FormControl role='group' isInvalid={formik.errors.lastName}>
                                <FormLabel>Last Name</FormLabel>
                                <Input type='text' {...formik.getFieldProps("lastName")} aria-label='Enter the your last name' required/>
                                <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
                            </FormControl>
                            <FormControl role='group' isInvalid={formik.errors.email}>
                                <FormLabel>Email</FormLabel>
                                <Input type='email' {...formik.getFieldProps("email")} aria-label='Enter the email address' required/>
                                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                            </FormControl>
                            <FormControl role='group' isInvalid={formik.errors.phone}>
                                <FormLabel>Phone Number</FormLabel>
                                <PhoneInput
                                    className='phone-input chakra-input css-1cjy4zv'
                                    addInternationalOption={false}
                                    name="phone"
                                    defaultCountry="US"
                                    value={formik.values.phone}
                                    onChange={(value) => formik.setFieldValue('phone', value)}
                                />
                                <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
                            </FormControl>
                            <Button type="submit" w="100%" bg="#7f5ad5" color="white" isDisabled={(formik.errors.firstName || formik.errors.lastName || formik.errors.email) ? true : false} isLoading={false} aria-label="On Click" onClick={contactForm}>
                                Submit
                            </Button>
                        </>
                    }
                </form>
            </div>
        </section>
    )
}

export default BookingForm