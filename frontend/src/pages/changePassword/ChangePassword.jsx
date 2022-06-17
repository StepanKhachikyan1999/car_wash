// styles
import "./changePassword.scss"

import React, {useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

// custom imports

import Navbar from "../../components/navbar/Navbar";
import {goChangePassword} from "../../redux/actions/changeAction";
import {useTranslation} from "react-i18next";

const ChangePassword = () => {
    const navigate = useNavigate();
    const {t} = useTranslation()
    const changeData = useSelector(state => state.sendEmail.changePassword)
    let dispatch = useDispatch()
    const [error, setError] = useState(false)
    const [data, setData] = useState({
        oldPassword: '',
        newPassword: '',
        // newPasswordCurrent:''
    })

    const changeRoute = () => {
        if(changeData.success == true) {
            navigate('/')
        }
    }


    const handlerChangePassword = event => {
        data[event.target.name] = event.target.value;
        setData(data)
    }

    const changePasswordHandler = e => {
        e.preventDefault()
        if (!data.oldPassword.trim() || !data.newPassword.trim()) {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000)
        } else {
            dispatch(goChangePassword(data))
        }
    }

    changeRoute()


    return (
        <div className='changePasswordSlice'>
            <Navbar />
            <div className="mainDiv">
                <div className="cardStyle">
                    <form
                        name="signupForm"
                        id="signupForm"
                        onChange={handlerChangePassword}
                        onSubmit={changePasswordHandler}>


                            <h2 className="form_title">
                                {t("change_password")}
                            </h2>

                        <div className="inputDiv">
                            <label className="inputLabel" htmlFor="password">{t("current_password")}</label>
                            <input  type="password" id="password" name="oldPassword" required />
                        </div>

                        <div className="inputDiv">
                            <label className="inputLabel" htmlFor="confirmPassword">{t("new_password")}</label>
                            <input type="password" id="confirmPassword" name="newPassword" />
                        </div>

                        {/*<div className="inputDiv">*/}
                        {/*    <label className="inputLabel" htmlFor="confirmPassword">Confirm Password</label>*/}
                        {/*    <input type="password" id="confirmPassword" name="newPasswordCurrent" />*/}
                        {/*</div>*/}

                    {/*<Link to="/change/changeCode">*/}
                    {/*    <h4 className="forgot_password">{t("forgot_your_password")}</h4>*/}
                    {/*</Link>*/}

                        <div className="buttonWrapper">
                            <button type="submit" id="submitButton"
                                    className="submitButton pure-button pure-button-primary">
                              <span>{t("save")}</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword