import React from 'react'
import Main from '../layout/Main'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Button, FormControl, FormErrorMessage, Heading, Input } from '@chakra-ui/react'
import '../../css/login.css';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { authActions } from '../../store/authSlice'
import axios from 'axios'

export default function LoginPage() {

    const navigate = useNavigate();

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values) => {
            const handleLogin = async(email, password) => {
                try{
                    let response = await axios.get('/users.json')
                    let users = response.data
                    let user = users.find(user => user.email === email && user.password === password)
                    if(user){
                        localStorage.setItem('userData', JSON.stringify(user))
                        localStorage.setItem('page-name', 'home');
                        navigate('/')
                        dispatch(authActions.login())
                    }
                    else{
                        alert('Wrong email or password')
                    }
                }
                catch(error){
                    console.log("login failed : " + error);
                }
            }

            handleLogin(values.email, values.password)
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
                    <Button className='btn' type="submit" w="100%" bg="#7f5ad5" color="white" isDisabled={(formik.errors.email || formik.errors.password || !formik.values.email || !formik.values.password) ? true : false} isLoading={false} aria-label="On Click">
                        Login
                    </Button>
                    <p className='question'>Don't have account ?</p>
                    <Button className='btn' onClick={() => navigate('/signup')} w="100%" bg="#7f5ad5" color="white" isLoading={false} aria-label="On Click">
                        Sign Up
                    </Button>
                </form>
            </div>
        </section>
    </Main>
  )
}
