//styles
import "./UserCounterTable.scss"

import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useDispatch, useSelector} from "react-redux";
import {getDevicesCounters} from "../../redux/actions/deviceAction";
// import TableContainer from "@mui/material/TableContainer";
// import Paper from "@mui/material/Paper";
// import Table from "@mui/material/Table";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import TableCell from "@mui/material/TableCell";
// import TableBody from "@mui/material/TableBody";
// import {deviceReducer} from "../../redux/reducers/deviceReducer";

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);


const AllDevicesUser = () => {
    const {t} = useTranslation()
    const dispatch = useDispatch()
    const {userId} = useParams()



   const getCounters = useSelector(state => state.deviceReducer.getDevicesCounters)

    useEffect(() => {
        dispatch(getDevicesCounters(userId))
    },[])


    return (
        <div className="user_all_devices">
            <span>{t("devices")}</span>
            <br/> <br/>

            {
                getCounters !== undefined && getCounters && getCounters?.map((i) => {
                    return(
                        <>
                        <Card className="get_counters_slice" key={i.id} sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.disabled" gutterBottom>
                                    {t("deviceName")} - {i?.name}
                                </Typography>
                            </CardContent>
                            <Link to={`/deviceUserSingle/${i.id}`}><button className="view_device">{t("view")}</button></Link>
                        </Card>

                            <br/>
                        </>
                    )
                })
            }
            <br/>


        </div>
    );
};

export default AllDevicesUser;