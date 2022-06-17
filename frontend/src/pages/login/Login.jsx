// styles
import "./login.scss"

// material ui

import * as React from 'react';
import Switch from '@mui/material/Switch';
import {useDispatch, useSelector} from "react-redux";
import {useState} from 'react'
import {goSignIn} from "../../redux/actions/authAction";
import { useNavigate,Link } from "react-router-dom";
import {authReducer} from "../../redux/reducers/authReducer";
import {hideLoader} from "../../redux/actions/loaderAction";

// custom imports


const label = {inputProps: {'aria-label': 'Switch demo'}};


const Login = () => {
    const dispatch = useDispatch()
    let navigate = useNavigate()
    // const loginInfo= useSelector((state) => state.authReducer.info);

    const getAuth= useSelector((state) => state.authReducer.getAuth.role);

    const [error, setError] = useState(false)
    const [data, setData] = useState({
        username: '',
        password: ''
    })

    const onChangeHandler = event => {
        data[event.target.name] = event.target.value;
        setData(data)
    }

    const loginHandler = e => {
        e.preventDefault()
        if (!data.username.trim() || !data.password.trim()) {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000)
        } else {
            dispatch(goSignIn(data))
            dispatch(hideLoader())
            navigate(`/`);
        }
    }

    return (
        <section className="loginSection">
            <div className="loginSectionMain">
                <div className="cardStyle">
                    <form
                        name="signupForm"
                        id="signupForm"
                        onChange={onChangeHandler}
                        onSubmit={loginHandler}>

                        <h2 className="formTitle">
                            Nice to see you!
                        </h2>
                        <br/>
                        <p>Enter your email and password to sign in</p>

                        <div className="inputDiv">
                            <label className="inputLabel" htmlFor="email">Login</label>
                            <input type="text" id="email" name="username" required placeholder="Username"/>
                        </div>

                        <div className="inputDiv">
                            <label className="inputLabel" htmlFor="Password">Password</label>
                            <input type="password" id="password" name="password" placeholder="Password" color="#fff"/>
                        </div>

                        <div className="checkedInfo">
                            <Switch {...label} defaultChecked color="error"/>
                            <p>Remember me </p>
                        </div>

                        <div className="buttonWrapper">

                            <button type="submit" id="submitButton"
                                    className="submitButton pure-button pure-button-primary">
                                <span>Sign in</span>
                            </button>
                            <br/>
                            <div className="forgot_password">
                            <Link to="/change/changeCode">Forgot password?</Link>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login