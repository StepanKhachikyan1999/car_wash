// styles
import "./modals.scss"


import * as React from 'react';
import {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

// custom imports
import closeButton from '../../images/closeIcon.svg'
//import {goAddTechnician} from "../../redux/actions/addTechnicianAction";
import axios from "axios";
import {API_URI, token} from "../../utils/keys";
import {goAddMachine} from "../../redux/actions/addMachineAction";
import {useTranslation} from "react-i18next";
import {editMachineName} from "../../redux/actions/changeMachineName.Action";



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

export default function ChangeMachineName() {
    const dispatch = useDispatch()
    const {userId} = useParams();
    let navigate = useNavigate();
    const {t} = useTranslation()
    const [open, setOpen] = React.useState(false);
    const [error, setError] = useState(false)
    const [data, setData] = useState({
        car_wash_point_name: '',
    })




    const handleOpen = () => {setOpen(true);};
    const handleClose = () => {setOpen(false);};

    const onChangeHandler = event => {
        data[event.target.name] = event.target.value;
        data.carWashId = userId
        setData(data)
    }

    const changeMachineName = e => {
        e.preventDefault()
        if (!data.car_wash_point_name) {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000)
        } else {
            dispatch(editMachineName(data))
            handleClose()
            navigate("/loadingPage")
        }
    }


    return (
        <div>
            <Button className="link" onClick={handleOpen}>+ {t("change_machine_name")}</Button>
            <Modal open={open} onClose={handleClose} aria-labelledby="parent-modal-title" aria-describedby="parent-modal-description">
                <div className="container_modal">
                    <form onChange={onChangeHandler}  onSubmit={changeMachineName} id="contact">
                        <h3>{t("change_machine_name")}</h3>
                        <fieldset>
                            <input
                                placeholder={`${t("change_machine_name")}`}
                                type="text"
                                tabIndex="1"
                                name='car_wash_point_name'
                                required
                                autoFocus/>
                        </fieldset>
                        <fieldset>
                            <button type="submit" id="contact-submit">
                                {t("save")}
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