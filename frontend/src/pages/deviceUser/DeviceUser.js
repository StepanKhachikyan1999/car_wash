//styles
import "./DeviceUser.scss"

import React, {useEffect, useState} from 'react';
import Navbar from "../../components/navbar/Navbar";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
//mui
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import {
    getCounter,
    getDevicesCounters,
    getDeviceUser,
    getSingleDeviceUser, goflagsfreeMode,
    goResetCount,
    goserviceResetConfirm
} from "../../redux/actions/deviceAction";
import EditCounts from "../../components/modals/editCounts";
import FreeMode from "../../components/modals/freeMode";
import axios from "axios";
import {API_URI, token} from "../../utils/keys";

const DeviceUser = () => {
    const {t} = useTranslation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {deviceUser} = useParams()
    const [stop,setStop] = useState(false)


    const getCounters = useSelector(state => state.deviceReducer.getDevicesCounters)
    const getDeviceUserComponents = useSelector(state => state.deviceReducer.getDeviceUser)
    const getDeviceSingleUserCounter =  useSelector(state => state.deviceReducer.getSingleDeviceUser?.Counter)
    const getDeviceSingleUser =  useSelector(state => state.deviceReducer.getSingleDeviceUser)
    const getDeviceSingleUserSettings =  useSelector(state => state.deviceReducer.getSingleDeviceUser?.DeviceSetting)
    const getCounterData =  useSelector(state => state.deviceReducer.getCounter)

    console.log(getDeviceSingleUser,'getDeviceSingleUser')



    useEffect(() => {
        getCounter()
    },[])

    useEffect(() => {
        dispatch(getDeviceUser(`${deviceUser}`))
    }, [])

    useEffect(() => {
        dispatch(getSingleDeviceUser(`${deviceUser}`))
    }, [])


    const resetCountsHandler = e => {
        e.preventDefault()
            const data = {}
         data.id = [Number(deviceUser)]
            dispatch(goResetCount(data))
            navigate("/loadingPage")
    }
    const serviceResetConfirmHandler = e => {
        e.preventDefault()
        const data = {}
        data.id = [Number(deviceUser)]
        dispatch(goserviceResetConfirm(data))
        navigate("/loadingPage")
    }

    console.log(getDeviceSingleUserCounter,'getDeviceSingleUserCounter')

    return (
        <div className="device_user_section">
            <Navbar />
            <div className="device_user_section_slice">
                <Card sx={{ minWidth: 345 }}>

                    {
                        getCounters?.filter(x => x.id == deviceUser)?.map((i) => {
                            return(
                                <CardContent key={i?.id}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {t("deviceName")} - {i?.name}
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {t("createAt")} - {i?.createdAt?.substring(0,10)}
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="div">
                                        id- {i?.id}
                                    </Typography>
                                </CardContent>
                            )
                        })
                    }

                </Card>
                <br/>
                <Card sx={{ minWidth: 345 }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            <h4 className="components_name">
                                {t("components")}
                            </h4>
                            <div className="componenets_slice">
                                {
                                    getDeviceUserComponents !== null && getDeviceUserComponents && getDeviceUserComponents.map((i) => {
                                        return(
                                            <div className="single_components">
                                                <span>{i?.name_am}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </Typography>
                    </CardContent>
                </Card><br/><br/>
                {/*table start*/}
                <TableContainer component={Paper}>
                    <div className="edit_settings">
                      <div style={{color: "green",fontSize:"18px",fontWeight: "600"}}>{t('counter')}</div>
                        <EditCounts getDeviceSingleUserCounter={getDeviceSingleUserCounter} />
                    </div>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell style={{width: '50%',textAlign:"center"}}>{t('counter_name')}</TableCell>
                                <TableCell style={{width: '50%',textAlign:"center"}}>{t('counter_value')}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/*counter*/}
                            {getDeviceSingleUserCounter && Object.keys(getDeviceSingleUserCounter).map((i) => {

                                console.log(i,'888888999')
                                return(
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            {i}
                                        </TableCell>
                                        <TableCell align="right">{getDeviceSingleUserCounter[i]}</TableCell>
                                    </TableRow>
                                )
                            })}

                        </TableBody>
                    </Table>
                </TableContainer>
                <br/>
                <form onSubmit={resetCountsHandler}>
                <button type="submit" className="reset_counts">{t("reset_counts")}</button>
                </form>

                {/*table end*/}

                <br/><br/><br/>
                {/*table start*/}

                <TableContainer component={Paper}>
                    <div style={{color: "green",fontSize:"18px",fontWeight: "600"}}>{t('settings')}</div>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell style={{width: '50%',textAlign:"center"}}>{t('settings_name')}</TableCell>
                                <TableCell style={{width: '50%',textAlign:"center"}}>{t('settings_value')}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {/*settings*/}

                            {
                                getDeviceSingleUserSettings && Object.keys(getDeviceSingleUserSettings).map((i) => {
                                    return(
                                        <TableRow key={i?.id}>
                                            <TableCell component="th" scope="row">{i}</TableCell>
                                            <TableCell align="right">{getDeviceSingleUserSettings[i]}</TableCell>
                                        </TableRow>
                                    )
                                })
                            }


                        </TableBody>
                    </Table>
                </TableContainer>
                <br/><br/>
                <form onSubmit={serviceResetConfirmHandler}>
                    <button type="submit" className="reset_counts">{t("reset_settings")}</button>
                </form>
                {/*table end*/}
            </div>

            <br/>
            <div className="bonus_slice">
                <h3 className="bonus_title">{t("bonus")}</h3>
                {/*<form onSubmit={flagsfreeModeHandler}>*/}
                {/*    <button type="submit" className="reset_counts">flagsFreeMode</button>*/}
                {/*</form>*/}
                <FreeMode />
            </div>

        </div>
    );
};

export default DeviceUser;