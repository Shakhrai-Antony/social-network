import React from "react";
import {useFormik} from 'formik';
import * as Yup from 'yup'
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {logInThunk} from "../../Redux/authReducer";



export const LoginForm = (props) => {

    const {handleSubmit, handleChange, values, touched, errors, status} = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validationSchema: Yup.object({
            email: Yup.string().max(30, 'Login should be shorter than 30 characters').required('Required'),
            password: Yup.string().min(6, 'Password should be longer than 6 characters').required('Required')
        }),
        onSubmit: ({email, password, rememberMe}, actions ) => {
            props.onSubmit(email, password, rememberMe)
            actions.setStatus(undefined);

            actions.setStatus({
                email: 'This email is incorrect.',
                password: 'This password is incorrect.'
            });
        }
    })

    return (

        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    onChange={handleChange}
                    onBlur={handleChange}
                    value={values.email}
                />
                {errors.email && touched.email ?
                    <div>{errors.email}</div>
                    : null}
            </div>
            <div>
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    onChange={handleChange}
                    onBlur={handleChange}
                    value={values.password}
                />
                {errors.password && touched.password ?
                    <div>{errors.password}</div>
                    : null
                }
            </div>
            <div>
                <input
                    type="checkbox"
                    name="rememberMe"
                    value={values.rememberMe}
                />
                remember me
            </div>
            <div>
                <button type="submit">
                    Log in
                </button>
            </div>
            {status && status.email ? (
                <div>API Error: {status.email}</div>
            ) : (
                errors.email && <div>Validation Error: {errors.email}</div>
            )}
            {status && status.password ? (
                <div>API Error: {status.password}</div>
            ) : (
                errors.password && <div>Validation Error: {errors.password}</div>
            )}
        </form>

    )
}


class Login extends React.Component {

    onSubmit = (email, password, rememberMe) => {
        this.props.logInThunk(email, password, rememberMe)
    }


    render() {
        if (this.props.isAuth) {
            return <Redirect to = "/Profile" />
        }

        return (

            <LoginForm onSubmit={this.onSubmit}/>

        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {logInThunk} ) (Login)