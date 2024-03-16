import React from 'react'
import Main from '../layout/Main'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Button, FormControl, FormErrorMessage, Heading, Input } from '@chakra-ui/react'
import PhoneInput from 'react-phone-number-input'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { authActions } from '../../store/authSlice'

export default function SignupPage() {
    const navigate = useNavigate();

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            fullName: '',
            phone: '',
            email: '',
            password: '',
        },
        onSubmit: (values) => {
            dispatch(authActions.login())
            navigate('/')
        },
        validationSchema: Yup.object({
            fullName: Yup.string().min(4, "the first name should contain at least 2 letters").max(10).required("Required"),
            phone: Yup.string(),
            email: Yup.string().email("Invalid email address").required("Required"),
            password: Yup.string().min(8, "Password should contain at least 8 characters").required("Required")
        })
    })

    function handle_submit(e){
        e.preventDefault();
        formik.handleSubmit(e)
    }

  return (
    <Main>
        <section className="login-section">
            <div className='container login-div'>
                <form className='login-form' onSubmit={handle_submit}>
                    <Heading className='title' w="100%">Sign Up</Heading>
                    <FormControl className='fullName' role='group' isInvalid={formik.touched.fullName && formik.errors.fullName}>
                        <Input type='text' placeholder='Full Name' {...formik.getFieldProps("fullName")} aria-label='Enter your full name' required/>
                        <FormErrorMessage>{formik.errors.fullName}</FormErrorMessage>
                    </FormControl>
                    <FormControl className='phone-input' role='group' isInvalid={formik.touched.phone && formik.errors.phone}>
                        <PhoneInput
                            className='chakra-input css-1cjy4zv'
                            addInternationalOption={false}
                            name="phone"
                            defaultCountry="US"
                            value={formik.values.phone}
                            onChange={(value) => formik.setFieldValue('phone', value)}
                            style={{paddingRight: 0}}
                        />
                        <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
                    </FormControl>
                    <FormControl className='email' role='group' style={{paddingTop: 0}} isInvalid={formik.touched.email && formik.errors.email}>
                        <Input type='email' placeholder='Email Address' {...formik.getFieldProps("email")} aria-label='Enter the email address' required/>
                        <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                    </FormControl>
                    <FormControl role='group' isInvalid={formik.touched.password && formik.errors.password}>
                        <Input type='password' placeholder='Password' {...formik.getFieldProps("password")} aria-label='Enter the password' required/>
                        <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                    </FormControl>
                    <Button className='btn' type="submit" w="100%" bg="#7f5ad5" color="white" isDisabled={(formik.errors.email || formik.errors.password || formik.errors.fullName || !formik.values.fullName || !formik.values.email || !formik.values.password) ? true : false} isLoading={false} aria-label="On Click">
                        Sign Up
                    </Button>
                    <p className='question'>Do you have an account ?</p>
                    <Button className='btn' onClick={() => navigate('/login')} w="100%" bg="#7f5ad5" color="white" isLoading={false} aria-label="On Click">
                        Login
                    </Button>
                </form>
            </div>
        </section>
    </Main>
  )
}
