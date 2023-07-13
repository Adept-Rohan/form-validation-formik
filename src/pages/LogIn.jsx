import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { SignUpCriteria } from '../schemas'

const LogIn = () => {

    const initialValues = {
        email: '',
        password: ''
    }

    const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: SignUpCriteria,
        onSubmit: (values) => {
            console.log("🚀 ~ file: LogIn.jsx:10 ~ LogIn ~ values:", values)
            return {
            }

        }

    })
    console.log("🚀 ~ file: LogIn.jsx:24 ~ LogIn ~ errors:", errors)
    return (
        <div className='w-full h-[150vh] flex items-center'>
            <div className='w-[50%] h-full flex items-center justify-center bg-white'>
                <div className='w-[80%] h-[80%] bg-black text-white'>
                    <div className='flex flex-col items-center mt-12 '>
                        <img src="src/img/logo.svg" alt="Logo" className='w-32 object-cover' />
                        <p className='font-bold mt-3'>Cinemaniac</p>
                        <p className='font-bold'>Already A Member? Log In</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='flex flex-col items-center mt-12'>
                            <input autoComplete="email" onBlur={handleBlur} onChange={handleChange} value={values.email} name='email' className='w-[453px] h-[43px] rounded-xl p-5 text-black' type="email" placeholder='Enter Your Email' />
                            {errors.email && touched.email ?
                                <p className='font-bold text-red'>{errors.email}</p> : null
                            }
                            <input autoComplete='current-password' onBlur={handleBlur} onChange={handleChange} value={values.password} name='password' className='w-[453px] h-[43px] rounded-xl p-5 mt-5 text-black' type="password" placeholder='Enter Your Password' />
                            {errors.password && touched.password ?
                                <p className='font-bold text-red'>{errors.password}</p> : null
                            }

                            <button className='w-[453px] h-[43px] rounded-xl border-2 border-black bg-red-800 text-white mt-5 hover:bg-red-500'>Log In</button>
                        </div>
                    </form>

                    <div className='flex flex-col items-center mt-12'>
                        <p>Don't have An Account ? <Link to='/register'><span className='cursor-pointer text-bold text-green-700'>Register</span></Link> </p>
                        <p className='text-bold cursor-pointer mt-2'>Forgot Password?</p>
                    </div>

                </div>

            </div>

            <div className='w-[50%] h-full'>
                <img className='w-full h-full object-cover' src="src/img/movies.jpg" alt="Movie Poster" />
            </div>
        </div>
    )
}

export default LogIn
