// styles
import "./modals.scss"

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Link,useNavigate } from "react-router-dom";
import {useTranslation} from "react-i18next";
// import {useCallback, useEffect} from "react";
// import axios from "axios";
// import {API_URI, token} from "../../utils/keys";
import {useDispatch} from "react-redux";
import axios from "axios";
import {API_URI, token} from "../../utils/keys";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    transition: "transform 0.6s ease-in-out",
    boxShadow: 24,
    p: 4,
};

export default function LogoutModal() {
    let navigate = useNavigate();
    const dispatch = useDispatch()
    const {t} = useTranslation()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    const logout = async (e) => {
        try {
            const res = await axios.get(`${API_URI}/logout`,{
                headers: {'Authorization': `Bearer ${token}`}
            })
            console.log(res,'res');
        }
        catch(err) {
            console.error('error',err);
        }
    }



    return (
        <div style={{margin: "5px 0 13px 0px"}}>
            <span style={{width:"100%"}} onClick={handleOpen}>{t('sidebar.logout')}</span>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Typography className="font_family" id="modal-modal-title" variant="h6" component="h2">
                        {t("log_out")}
                    </Typography>
                    <br/>
                    <div className="buttons">

                        <Link to="/login">
                    <Button
                        className="font_family"
                        variant="contained"
                        color="error"
                        onClick={() => {
                            logout()
                            localStorage.clear()
                            window.location.reload(false)
                        } }>
                        {t("log_out")}
                    </Button>
                        </Link>


                        <a href="#">
                    <Button onClick={handleClose} className="font_family" variant="outlined" color="error">
                        {t("cancel")}
                    </Button>
                        </a>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}