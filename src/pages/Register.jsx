import React from 'react'
import { useFormik } from 'formik'
import { SignUpCriteria } from '../schemas'

const Register = () => {

    const initialValues = {
        email: '',
        password: '',
        name: '',
        number: '',
        confirm_password: ''
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
            <div style={{ backgroundImage: 'url(src/images/login.jpeg)' }} className='w-[50%] h-full flex items-center justify-center bg-white'>
                <div className='w-[80%] h-[80%] bg-black text-white'>
                    <div className='flex flex-col items-center mt-12 '>
                        <img src="src/img/logo.svg" alt="Logo" className='w-32 object-cover' />
                        <p className='font-bold mt-3'>Cinemaniac</p>
                        <p className='font-bold'>New Here !!! Register</p>
                    </div>
                    <form onSubmit={handleSubmit} >
                        <div className='flex flex-col items-center mt-12'>
                            <input value={values.name} onBlur={handleBlur} onChange={handleChange} autoComplete='name' name='name' className='w-[453px] h-[43px] rounded-xl p-5 text-black' type="name" placeholder='Enter Your Full Name' />
                            {errors.name && touched.name ?
                                <p className='font-bold text-red'>{errors.name}</p> : null
                            }

                            <input value={values.number} onBlur={handleBlur} onChange={handleChange} autoComplete='number' name='number' className='w-[453px] h-[43px] rounded-xl p-5 text-black appearance-none mt-5' type="number" placeholder='Enter Your Contact Number' />
                            {errors.number && touched.number ?
                                <p className='font-bold text-red'>{errors.number}</p> : null
                            }

                            <input value={values.email} onBlur={handleBlur} onChange={handleChange} autoComplete='email' name='email' className='w-[453px] h-[43px] rounded-xl p-5 text-black mt-5' type="email" placeholder='Enter Your Email' />
                            {errors.email && touched.email ?
                                <p className='font-bold text-red'>{errors.email}</p> : null
                            }

                            <input value={values.password} onBlur={handleBlur} onChange={handleChange} autoComplete='off' name='password' className='w-[453px] h-[43px] rounded-xl p-5 mt-5 text-black' type="password" placeholder='Enter Your Password' />
                            {errors.password && touched.password ?
                                <p className='font-bold text-red'>{errors.password}</p> : null
                            }

                            <input value={values.confirm_password} onBlur={handleBlur} onChange={handleChange} autoComplete='off' name='confirm_password' className='w-[453px] h-[43px] rounded-xl p-5 mt-5 text-black' type="password" placeholder='Confirm Password' />
                            {errors.confirm_password && touched.confirm_password ?
                                <p className='font-bold text-red'>{errors.confirm_password}</p> : null
                            }

                            <button type='submit' className='w-[453px] h-[43px] rounded-xl border-2 border-black bg-red-800 text-white mt-5 hover:bg-red-500'>Register</button>
                        </div>
                    </form>
                    <div className='flex flex-col items-center mt-12'>
                        <p>Start Your Exciting Movie's Journey Here </p>
                    </div>
                </div>

            </div>

            <div className='w-[50%] h-full'>
                <img className='w-full h-full object-cover' src="src/img/movies.jpg" alt="Movie Poster" />
            </div>
        </div>
    )
}

export default Register
