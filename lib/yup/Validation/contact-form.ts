import * as yup from 'yup'

export const contactValidation = yup.object({
    email: yup.string().email().required('Please enter a valid email. "example@mail.com"'),
    name: yup.string().required('Please Enter your Name').max(35),
    message: yup.string().required('Please write Message').min(5),
})