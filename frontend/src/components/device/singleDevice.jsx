// styles
import "./device.scss"


import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import {useTranslation} from "react-i18next";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {API_URI, token} from "../../utils/keys";
import AddComponents from "../modals/addComponents";
import Swal from "sweetalert2";
// import {getSingleComponents} from "../../redux/actions/componentsAction";
// import {useDispatch} from "react-redux";

//custom imports


export default function SingleDeviceBlock() {
    const theme = useTheme();
    const {t} = useTranslation()
    const navigate = useNavigate()
    let { deviceId } = useParams();
    const [singleDevice,setSingleDevice] = useState()

    useEffect(() => {
        const instance = axios.create({
            baseURL: `${API_URI}/auth/me`,
            timeout: 1000,
            headers: {'Authorization': `Bearer ${token}`}
        });

        instance.get(`${API_URI}/car-wash/device/${deviceId}`,
        )
            .then(response => {
                setSingleDevice(response.data)
            })
            .catch(e => {
                console.error(e)
            })

    },[0])


    const deleteDevice = async (id) => {
        try {
            await axios.post(`${API_URI}/car-wash/device/remove`, {
                "device_id":id
            },{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
                .then(function (response) {
                    navigate('/devices')
                })
                .catch(function (error) {
                    console.error(error);
                });
        }
        catch (e) {
            console.error(e,'error')
        }
    }


    const deleteComponent = async (id) => {
        const singleComponent = singleDevice?.Components.filter(t => t.id === id);

            axios.post(`${API_URI}/car-wash/device/components/remove`,
                {component_id: singleComponent[0]?.id,
                    device_id: singleComponent[0]?.device_id},
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }                  )
                .then(function (response) {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                }).then(function(response) {
                axios.get(`${API_URI}/car-wash/device/${deviceId}`,{
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                }).then(response => {
                    setSingleDevice(response.data)
                })
                    .catch(e => {
                        console.error(e)
                    })
            })

    }

    return (
        <>
            <Card  sx={{ display: 'flex'}}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography sx={{color: 'secondary.contrastText'}} component="div" variant="h5">
                            {t('deviceName')} -  {singleDevice?.name}
                        </Typography>
                        <Typography sx={{color: 'secondary.contrastText'}} variant="subtitle1" color="text.secondary" component="div">

                        </Typography>
                    </CardContent>
                </Box>


                <div className="buttons_carwash">

                    <div className="add_components_block">
                        <AddComponents id={deviceId} />
                    </div>

                    <button
                        onClick={() => deleteDevice(`${singleDevice?.id}`)}
                        className="delete_btn">
                        <i className="fa-solid fa-trash-can">

                        </i>{t('delete')}
                    </button>
                </div>
            </Card> <br/>




            <Card  sx={{ display: 'flex'}}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>

                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <div className="components_block">
                            {singleDevice?.Components.length == 0 &&
                                <span style={{color:"red"}}>{t("not_added_components")}</span>}
                            {
                                singleDevice?.Components.map((i) => {
                                    return(
                                        <div key={i.id} className="component_show">
                                            <span>{i?.name_am}</span>
                                            <i
                                                onClick={() => {deleteComponent(i.id)}}
                                                className="fa-solid fa-delete-left"></i>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </CardContent>
                </Box>


            </Card>
        </>
    );
}