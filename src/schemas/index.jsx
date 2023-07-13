import * as Yup from 'yup'


export const SignUpCriteria = Yup.object({
    email: Yup.string().email().required('Please Enter Your Email'),
    password: Yup.string().min(8).max(20).required('Please Enter Your Password.'),
    name: Yup.string().min(3).max(20).required("Your Name Is Required"),
    number: Yup.number().required('Your Contact Number Is Required.'),
    confirm_password: Yup.string().required().oneOf([Yup.ref('password'), null], "Password must Match.")
})