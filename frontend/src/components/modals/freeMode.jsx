// styles
import "./modals.scss"

import * as React from 'react';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import {useTranslation} from "react-i18next";

// custom imports
import closeButton from '../../images/closeIcon.svg'
import {useNavigate, useParams} from "react-router-dom";
import {goEditSettings} from "../../redux/actions/settingsAction";
import {getCounter} from "../../redux/actions/componentsAction";
import {goflagsfreeMode} from "../../redux/actions/deviceAction";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

export default function FreeMode() {
    const dispatch = useDispatch()
    const {t} = useTranslation()
    const {deviceUser} = useParams()
    const navigate = useNavigate()
    const [open, setOpen] = React.useState(false);
    const [error, setError] = useState(false)
    const getCounterData = useSelector(state => state.componentsReducer?.getCounter.counter)
    const [dataTest,setDataTest] = useState()
    const [billD,setBillD] = useState("")
    const [bonusD,setBonusD] = useState("")


    let [data, setData] = useState(
        {
            "counters": [
                {
                    "id": +deviceUser,
                    "coin": {
                        "t": 0,
                        "d": 0
                    },
                    "bill": {
                        "t": 0,
                        "d": 0
                    },
                    "cashless": {
                        "t": 0,
                        "d": 0
                    },
                    "bonus": {
                        "t": 5,
                        "d": 5
                    },
                    "service": {
                        "t": 0,
                        "d": 0
                    },
                    "chSpent": [
                        {
                            "t": 0,
                            "d": 0
                        }
                    ],
                    "chTimePaidMode": [
                        {
                            "t": 0,
                            "d": 0
                        }
                    ],
                    "chTimeFreeMode": [
                        {
                            "t": 0,
                            "d": 0
                        }
                    ],
                    "powerOnTime": 0
                }
            ]
        }
    )

    useEffect(() => {
        setDataTest(JSON.parse(JSON.stringify(data)))
    },[])

    useEffect(() => {
        dispatch(getCounter(deviceUser))
    }, [])


    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };



    const onChangeHandler = event => {
        // data[event.target.name] = event.target.value;
        // data.counters[0].bill.d = +billD
        // data.counters[0].bonus.d = +bonusD
        // console.log(data.counters,'OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO')
        setData(data)
    }

    const editSettings = e => {
        e.preventDefault()
        data.counters[0].bill.d = +billD
        data.counters[0].bonus.d = +bonusD
        dispatch(goEditSettings(data))
        handleClose()
    }

    const flagsfreeModeHandler = e => {
        e.preventDefault()
        const data =  {
            "freeModeflag": [
                {
                    "id": Number(deviceUser),
                    "flag": 0
                }
            ]
        }

        dispatch(goflagsfreeMode(data))
        navigate("/loadingPage")
    }


    return (
        <div>
            <Button className="link" onClick={handleOpen}>{t("bonus_modal_text")}</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description">

                <div className="container_modal">
                    <form onSubmit={flagsfreeModeHandler} id="contact">
                        <h3>Edit Settings</h3>
                        <fieldset>
                            <h6>billD</h6>
                            <input
                                placeholder="billD"
                                type="text"
                                tabIndex="1"
                                defaultValue={getCounterData?.billD}
                                onChange={e => setBillD(e.target.value)}
                                required
                                autoFocus/>
                        </fieldset>

                        <fieldset>
                            <button type="submit" id="contact-submit">
                                Save
                            </button>
                        </fieldset>
                        <div onClick={handleClose} className="closeBtn">
                            <img src={closeButton} alt="close icon"/>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    );
}