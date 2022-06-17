// styles
import "./modals.scss"


import * as React from 'react';
import {useState} from "react";
import {useDispatch} from "react-redux";
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import {useNavigate, useParams} from "react-router-dom";

// custom imports
import closeButton from '../../images/closeIcon.svg'
// import {goAddTechnician} from "../../redux/actions/addTechnicianAction";
// import {goAddUser} from "../../redux/actions/addUserAction";
import {goCreateDevice} from "../../redux/actions/deviceAction";
import {useTranslation} from "react-i18next";


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

export default function CreateDevice() {
    const dispatch = useDispatch()
    const {t} = useTranslation()
    let navigate = useNavigate()
    const params = useParams();
    const [open, setOpen] = React.useState(false);
    const [error, setError] = useState(false)
    const [data, setData] = useState({
        name: '',
    })

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    const onChangeHandler = event => {
        data[event.target.name] = event.target.value;
        data.car_wash_point_id = params.userId
        setData(data)
    }

    const createDeviceHandler = e => {
        e.preventDefault()
        if (!data.name) {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000)
        } else {
            dispatch(goCreateDevice(data))
            handleClose()
            navigate("/loadingPage")
        }
    }

    return (
        <div>
            <Button className="link" onClick={handleOpen}>+ {t("create_device")}</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description">

                <div className="container_modal">
                    <form onChange={onChangeHandler} onSubmit={createDeviceHandler} id="contact">
                        <h3>{t("create_device")}</h3>
                        <fieldset>
                            <input
                                placeholder={`${t("deviceName")}`}
                                type="text"
                                name='name'
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