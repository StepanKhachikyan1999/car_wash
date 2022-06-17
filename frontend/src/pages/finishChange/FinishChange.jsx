// styles
import "./finishChange.scss"


import {useTranslation} from "react-i18next";

// custom import
import Navbar from "../../components/navbar/Navbar";

const SendCode = () => {
    const {t} = useTranslation()

    return (
        <div className='cangeDiv'>
            <Navbar />
            <div className="mainDiv">
                <div className="cardStyle">
                    <form  name="signupForm" id="signupForm">
                        <h2 className="form_title">
                            {t("change_password")}
                        </h2>
                        <div className="inputDiv">
                            <label className="inputLabel" htmlFor="password">{t("new_password")}</label>
                            <input placeholder={`${t("new_password")}`} type="password" name="password" required />
                        </div>

                        <div className="inputDiv">
                            <label className="inputLabel" htmlFor="password">{t("please_check_code")}</label>
                            <input placeholder={`${t("please_check_code")}`} type="text" name="enterCode" required />
                        </div>

                        <div className="buttonWrapper">
                            <button type="submit" id="submitButtonCode"
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

export default SendCode