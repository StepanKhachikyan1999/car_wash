// styles
import "./modals.scss"


import * as React from 'react';
import {useState} from "react";
import {useDispatch} from "react-redux";
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

// custom imports
import closeButton from '../../images/closeIcon.svg'
import {changePasswordTechnican} from "../../redux/actions/changeAction";
// import {goAddTechnician} from "../../redux/actions/addTechnicianAction";
// import {goAddUser} from "../../redux/actions/addUserAction";



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

export default function EditTechnician({id}) {
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false);
    const [error, setError] = useState(false)
    const [data, setData] = useState({
        password: '',
    })


    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    // post request

    const onChangeHandler = event => {
        data[event.target.name] = event.target.value;
        setData(data)
    }

    const changeTechnicianPasswordHandler = e => {
        e.preventDefault()
        if (!data.password.trim()) {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000)
        } else {
            data.id = id
            dispatch(changePasswordTechnican(data))
            handleClose()
        }
    }


    return (
        <div>
            <Button className="link" variant="outlined" onClick={handleOpen}>Edit</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >

                <div className="container_modal"
                     style={{maxWidth: "600px"}}>
                    <form onChange={onChangeHandler}
                          onSubmit={changeTechnicianPasswordHandler}
                          id="contact" style={{minHeight: "350px"}}>
                        <h3>Edit Technician Password</h3>
                        <fieldset>
                            <input
                                placeholder="Password"
                                type="text"
                                name='password'
                                tabIndex="3"
                                required/>
                        </fieldset>
                        <input
                            type="hidden"
                            name='id'
                            value={id}
                        />
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