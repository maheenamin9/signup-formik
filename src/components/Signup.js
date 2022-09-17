import React from 'react';
import './Signup.css';

import { useFormik } from "formik";
import * as Yup from 'yup';
import YupPassword from 'yup-password';
YupPassword(Yup);


function Signup() {

    const formikObj = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            confpassword: '',
        },
        validationSchema: Yup.object({
            username: Yup
                .string()
                .required("*Required")
                .min(7, "Username must be between 7 and 20 characters")
                .max(20, "Username must be between 7 and 20 characters"),
            email: Yup
                .string()
                .required("*Required")
                .email("Invalid email address"),
            password: Yup.string().password()
                .required("*Required")
                .min(7, "Password must contain 8 or more characters with atleast one of each: uppercase, lowercase, number and special character")
                .minLowercase(1, "Password must contain 1 lowercase character")
                .minUppercase(1, "Password must contain 1 uppercase character")
                .minNumbers(1, "Password must contain 1 number")
                .minSymbol(1, "Password must contain 1 special character"),
            confpassword: Yup.string()
                .required("*Required")
                .oneOf([Yup.ref('password'), null], 'Password must match')
        }),
        onSubmit: (values, {resetForm}) => {
            console.log("Submitted");
            console.log(values);
            resetForm({values: ''});
        }
    })

    // console.log(formikObj.values);

    return (
        <React.Fragment>
            <div className='signUp'>
                <div className="signUp-card">
                    <h3>Sign Up</h3>
                    <hr />
                    <form onSubmit={formikObj.handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={formikObj.values.username}
                            onChange={formikObj.handleChange}
                            onBlur={formikObj.handleBlur}
                        />
                        {formikObj.touched.username && formikObj.errors.username ? <p>{formikObj.errors.username}</p> : null}
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formikObj.values.email}
                            onChange={formikObj.handleChange}
                            onBlur={formikObj.handleBlur}
                        />
                        {formikObj.touched.email && formikObj.errors.email ? <p>{formikObj.errors.email}</p> : null}
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formikObj.values.password}
                            onChange={formikObj.handleChange}
                            onBlur={formikObj.handleBlur}
                        />
                        {formikObj.touched.password && formikObj.errors.password ? <p>{formikObj.errors.password}</p> : null}
                        <label htmlFor="confpassword">Confirm Password:</label>
                        <input
                            type="password"
                            name="confpassword"
                            placeholder="Confirm Password"
                            value={formikObj.values.confpassword}
                            onChange={formikObj.handleChange}
                            onBlur={formikObj.handleBlur}
                        />
                        {formikObj.touched.confpassword && formikObj.errors.confpassword ? <p>{formikObj.errors.confpassword}</p> : null}
                        {/* <div className='radio-div'>
                            <label>Gender: </label>
                            <input type="radio" name="radio" className='radio-btn'></input>
                            <label>Female</label>
                            <input type="radio" name="radio" className='radio-btn'></input>
                            <label>Male</label>
                        </div> */}
                        <button type='submit'>Sign Up</button>
                        <div>Already have a account? <a href="">Signin</a></div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Signup;