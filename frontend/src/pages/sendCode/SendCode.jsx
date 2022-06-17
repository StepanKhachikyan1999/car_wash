// styles
import "./sendCode.scss"

import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";

// custom imports
import Navbar from "../../components/navbar/Navbar";
import {goSendEmail} from "../../redux/actions/changeAction";
import {useTranslation} from "react-i18next";


const SendCode = () => {

    const dispatch = useDispatch()
    let navigate = useNavigate();
    const {t} = useTranslation()
    const sendMail = useSelector((state) => state.sendEmail)



    const [error, setError] = useState(false)
    const [data, setData] = useState({
        email: '',
    })

    const onChangeHandlerChange = event => {
        data[event.target.name] = event.target.value;
        setData(data)
    }

    const sendEmailHandler = e => {
        e.preventDefault()
        if (!data.email.trim()) {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000)
        } else {
            dispatch(goSendEmail(data))
            navigate('/change/changeCode/enterCode/finishChange')
        }
    }

    // render functions

    const sendEmailRender = () => {
        if(!sendMail.length == 0) {
            return(
                <Link to="/change/changeCode/enterCode">
                    <button type="submit" id="submitButtonCode"
                            className="submitButton pure-button pure-button-primary">{t("next")}
                    </button>
                </Link>

            )
        } else {
            return (
                <button type="submit" id="submitButtonCode"
                        className="submitButton pure-button pure-button-primary">{t("next")}
                </button>
            )
        }
    }


    return (
        <div className='changeSection'>
            <Navbar />
            <div className="mainDiv">
                <div className="cardStyle">
                    <form onChange={onChangeHandlerChange} onSubmit={sendEmailHandler} name="signupForm" id="signupForm">
                        <h2 className="form_title">
                            {t("forgot_your_password")}
                        </h2>
                        <div className="inputDiv">
                            <label className="inputLabel" htmlFor="email">{t("send_code_via_email")}</label>
                            <input required placeholder={`${t("write_your_email")}`} type="email" name="email" />
                        </div>

                        <div className="buttonWrapper">
                            { sendEmailRender() }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SendCode