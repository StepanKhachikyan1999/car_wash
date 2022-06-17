//styles
import "./TokenCode.scss"

import React, {useRef, useState} from 'react';
import Navbar from "../../components/navbar/Navbar";
import {useSelector} from "react-redux";
import {addMachineReducer} from "../../redux/reducers/addMachineReducer";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";



const TokenCode = () => {

    const {t} = useTranslation()
    const getToken = useSelector(state => state.addMachineReducer.token)

    const [copySuccess, setCopySuccess] = useState('');
    const textAreaRef = useRef(null);

    function copyToClipboard(e) {
        textAreaRef.current.select();
        document.execCommand('copy');
        setCopySuccess("Success")
    };



    return (
        <div className="token_code_section">
            <Navbar />
            <div className="token_code_vh">
                <div style={{color:"green",fontSize:"30px"}}>{copySuccess}</div>
                <span>{t("token_text")}</span>

                <div style={{position:"relative"}}>
                    {
                        document.queryCommandSupported('copy') &&
                        <div >
                            <button onClick={copyToClipboard}><i className="fa-solid fa-copy"></i></button>
                        </div>
                    }
                    <form>
        <textarea
            ref={textAreaRef}
            value={getToken?.carWashPoint?.token == null ? `${t(t("view_token"))}` : getToken?.carWashPoint?.token}
        />
                    </form>
                </div>


                <Link to="/washingMachines"><button className="button_token">վերադառնալ</button></Link>
            </div>

        </div>
    );
};

export default TokenCode;

