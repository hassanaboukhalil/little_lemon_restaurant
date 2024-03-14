import React from 'react'
import Main from '../layout/Main'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Button, FormControl, FormErrorMessage, FormLabel, Heading, Input } from '@chakra-ui/react'
import '../../css/login.css';

export default function LoginPage() {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values) => {
            alert('you login succesfuly')
            formik.resetForm()
        },
        validationSchema: Yup.object({
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
                    <Heading className='title' w="100%">Login</Heading>
                    <FormControl className='email' role='group' isInvalid={formik.errors.email}>
                        <Input type='email' placeholder='Email Address' {...formik.getFieldProps("email")} aria-label='Enter the email address' required/>
                        <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                    </FormControl>
                    <FormControl role='group' isInvalid={formik.errors.password}>
                        <Input type='password' placeholder='Password' {...formik.getFieldProps("password")} aria-label='Enter the password' required/>
                        <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                    </FormControl>
                    <Button className='btn' type="submit" w="100%" bg="#7f5ad5" color="white" isDisabled={(formik.errors.email || formik.errors.password) ? true : false} isLoading={false} aria-label="On Click">
                        Login
                    </Button>
                    <p className='question'>Don't have account ?</p>
                    <Button className='btn' w="100%" bg="#7f5ad5" color="white" isLoading={false} aria-label="On Click">
                        Sign Up
                    </Button>
                </form>

            </div>
        </section>
    </Main>
  )
}
