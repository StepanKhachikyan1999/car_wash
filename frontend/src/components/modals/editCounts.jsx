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
//import {goAddTechnician} from "../../redux/actions/addTechnicianAction";
import {goAddUser} from "../../redux/actions/addUserAction";
import {useNavigate, useParams} from "react-router-dom";
import {goEditSettings} from "../../redux/actions/settingsAction";
import {getCounter} from "../../redux/actions/componentsAction";
import {componentsReducer} from "../../redux/reducers/componentsReducer";




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

export default function EditCounts({getDeviceSingleUserCounter}) {
    const dispatch = useDispatch()
    const {t} = useTranslation()
    const navigate = useNavigate()
    const {deviceUser} = useParams()
    const [open, setOpen] = React.useState(false);
    const [error, setError] = useState(false)
    const getCounterData = useSelector(state => state.componentsReducer?.getCounter.counter)
    const [dataTest,setDataTest] = useState()
    const [billD,setBillD] = useState("")
    const [billT,setBillT] = useState("")
    const [bonusD,setBonusD] = useState("")
    const [bonusT,setBonusT] = useState("")
    const [cashlessD,setCashlessD] = useState("")
    const [cashlessT,setCashlessT] = useState("")
    const [coinD,setCoinD] = useState("")
    const [coinT,setCoinT] = useState("")
    const [powerOnTime,setPowerOnTime] = useState("")
    const [serviceD,setServiceD] = useState("")
    const [serviceT,setServiceT] = useState("")


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
        setData(data)
    }

    const editSettings = e => {
        e.preventDefault()
        data.counters[0].bill.d = billD == "" ? getDeviceSingleUserCounter?.billD : +billD
        data.counters[0].bill.t = billT == "" ? getDeviceSingleUserCounter?.billT : +billT
        data.counters[0].bonus.d = bonusD == "" ? getDeviceSingleUserCounter?.bonusD : +bonusD
        data.counters[0].bonus.t = bonusT == "" ? getDeviceSingleUserCounter?.bonusT : +bonusT
        data.counters[0].cashless.d = cashlessD == "" ? getDeviceSingleUserCounter?.cashlessD : +cashlessD
        data.counters[0].cashless.t = cashlessT == "" ? getDeviceSingleUserCounter?.cashlessT : +cashlessT
        data.counters[0].coin.t = coinT == "" ? getDeviceSingleUserCounter?.coinT : +coinT
        data.counters[0].coin.d = coinD == "" ? getDeviceSingleUserCounter?.coinD : +coinD
        data.counters[0].service.d = serviceD == "" ? getDeviceSingleUserCounter?.serviceD : +serviceD
        data.counters[0].service.t = serviceT == "" ? getDeviceSingleUserCounter?.serviceT : +serviceT
        data.counters[0].spowerOnTime = powerOnTime == "" ? getDeviceSingleUserCounter?.powerOnTime : +powerOnTime
            dispatch(goEditSettings(data))
            handleClose()
        navigate("/loadingPage")
    }


    return (
        <div>
            <Button className="link" onClick={handleOpen}>+ կատարել փոփոխություն</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description">

                <div className="container_modal">
                    <form onChange={onChangeHandler} onSubmit={editSettings} id="contact"
                          style={{overflowY:"scroll",height:"500px",justifyContent:"flex-start"}}>
                        <h3>Edit Settings</h3>
                        <fieldset>
                            <h6>billD</h6>
                            <input
                                placeholder="billD"
                                type="text"
                                tabIndex="1"
                                defaultValue={getDeviceSingleUserCounter?.billD}
                                onChange={e => setBillD(e.target.value)}
                                required
                                autoFocus/>
                        </fieldset>
                        <fieldset>
                            <h6>billT</h6>
                            <input
                                placeholder="billD"
                                type="text"
                                tabIndex="1"
                                defaultValue={getDeviceSingleUserCounter?.billT}
                                onChange={e => setBillT(e.target.value)}
                                required
                                autoFocus/>
                        </fieldset>
                        <fieldset>
                            <h6>bonusD</h6>
                            <input
                                placeholder="bonusD"
                                type="text"
                                defaultValue={getDeviceSingleUserCounter?.bonusD}
                                onChange={e => setBonusD(e.target.value)}
                                tabIndex="3"
                                required/>
                        </fieldset>
                        <fieldset>
                            <h6>bonusT</h6>
                            <input
                                placeholder="bonusD"
                                type="text"
                                defaultValue={getDeviceSingleUserCounter?.bonusT}
                                onChange={e => setBonusT(e.target.value)}
                                tabIndex="3"
                                required/>
                        </fieldset>
                        <fieldset>
                            <h6>cashlessD</h6>
                            <input
                                placeholder="cashlessD"
                                type="text"
                                defaultValue={getDeviceSingleUserCounter?.cashlessD}
                                onChange={e => setCashlessD(e.target.value)}
                                tabIndex="3"
                                required/>
                        </fieldset>
                        <fieldset>
                            <h6>cashlessT</h6>
                            <input
                                placeholder="cashlessT"
                                type="text"
                                defaultValue={getDeviceSingleUserCounter?.cashlessT}
                                onChange={e => setCashlessT(e.target.value)}
                                tabIndex="3"
                                required/>
                        </fieldset>
                        <fieldset>
                            <h6>coinD</h6>
                            <input
                                placeholder="coinD"
                                type="text"
                                defaultValue={getDeviceSingleUserCounter?.coinD}
                                onChange={e => setCoinD(e.target.value)}
                                tabIndex="3"
                                required/>
                        </fieldset>
                        <fieldset>
                            <h6>coinT</h6>
                            <input
                                placeholder="coinT"
                                type="text"
                                defaultValue={getDeviceSingleUserCounter?.coinT}
                                onChange={e => setCoinT(e.target.value)}
                                tabIndex="3"
                                required/>
                        </fieldset>
                        <fieldset>
                            <h6>powerOnTime</h6>
                            <input
                                placeholder="powerOnTime"
                                type="text"
                                defaultValue={getDeviceSingleUserCounter?.powerOnTime}
                                onChange={e => setPowerOnTime(e.target.value)}
                                tabIndex="3"
                                required/>
                        </fieldset>
                        <fieldset>
                            <h6>serviceD</h6>
                            <input
                                placeholder="serviceD"
                                type="text"
                                defaultValue={getDeviceSingleUserCounter?.serviceD}
                                onChange={e => setServiceD(e.target.value)}
                                tabIndex="3"
                                required/>
                        </fieldset>
                        <fieldset>
                            <h6>serviceT</h6>
                            <input
                                placeholder="serviceT"
                                type="text"
                                defaultValue={getDeviceSingleUserCounter?.serviceT}
                                onChange={e => setServiceT(e.target.value)}
                                tabIndex="3"
                                required/>
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