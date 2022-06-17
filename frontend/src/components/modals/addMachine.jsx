// styles
import "./modals.scss"


import * as React from 'react';
import {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import cookies from 'js-cookie'
import axios from "axios";
import Swal from "sweetalert2";

// custom imports
import closeButton from '../../images/closeIcon.svg'
import {API_URI, token} from "../../utils/keys";
import {goAddMachine} from "../../redux/actions/addMachineAction";
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

export default function AddMachineModal() {
    const dispatch = useDispatch()
    let navigate = useNavigate();
    const {t} = useTranslation()
    const [open, setOpen] = React.useState(false);
    const [users,setUsers] = useState([])
    const [error, setError] = useState(false)
    const [data, setData] = useState({})

    const lang = cookies.get("i18next")

    useEffect(() => {
        const instance = axios.create({
            baseURL: `${API_URI}/auth/me`,
            timeout: 1000,
            headers: {'Authorization': `Bearer ${token}`}
        });

        instance.get(`${API_URI}/users`)
            .then(response => {
                setUsers(response.data.users)
            })

    },[0])



    const handleOpen = () => {setOpen(true);};
    const handleClose = () => {setOpen(false);};

    const onChangeHandler = event => {
        data[event.target.name] = event.target.value;
        setData(data)
    }

    const addMachineHandler = e => {
        e.preventDefault()
        if(Object.keys(data).length === 0) {
            setOpen(false)
            Swal.fire({
                title: `${lang == 'am' ? "ընտրեք օգտատեր" : lang == 'ru' ? "выбрать пользователя" : "Select User"}` ,
                icon: 'error',
            })

            return
        }
        console.log(data)
        if (!data.user_id) {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000)
        } else {
            dispatch(goAddMachine(data))
            handleClose()
            navigate("/tokenCode")
        }
    }


    return (
        <div>
            <Button className="link" onClick={handleOpen}>+ {t("add_new_machine")}</Button>
            <Modal open={open} onClose={handleClose} aria-labelledby="parent-modal-title" aria-describedby="parent-modal-description">
                <div className="container_modal">
                    <form  onSubmit={addMachineHandler} id="contact">
                        <h3>{t("add_new_machine")}</h3>
                        <fieldset>
                            <div className="select">
                                <select name="user_id" onChange={onChangeHandler}>
                                    <option selected>Change User</option>
                                    {
                                        users.map((addMachine) => {
                                            return(
                                                <option  name="user_id" key={addMachine.id} value={addMachine.id}>{addMachine.username}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
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