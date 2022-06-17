//styles
import "./UserCounterTable.scss"

import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useDispatch, useSelector} from "react-redux";
import {getDevicesCounters} from "../../redux/actions/deviceAction";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
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

    // let one = `${API_URI}/counters`;
    //
    // const requestOne = axios.get(one,{ headers: {'Authorization': `Bearer ${token}`}});
    //
    // useEffect(() => {
    //     axios
    //         .all([requestOne])
    //         .then(
    //             axios.spread((...responses) => {
    //                 const responseOne = responses[0];
    //                 setCounters(responseOne.data.filter(x => x.id == userId))
    //             })
    //         )
    //         .catch(errors => {
    //             // react on errors.
    //             console.error(errors);
    //         });
    // },[0])


    const getCounters = useSelector(state => state.deviceReducer.getDevicesCounters)

    console.log(getCounters,'getCounters')

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
                            <Card key={i.id} sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} color="text.disabled" gutterBottom>
                                        {t("deviceName")} - {i?.name}
                                    </Typography>
                                </CardContent>
                            </Card>
                            <br/>
                        </>
                    )
                })
            }
            <br/>

            {/*table start*/}

            {/*<TableContainer component={Paper}>*/}
            {/*    <div style={{color: "green",fontSize:"18px",fontWeight: "600"}}>{t('counter')}</div>*/}
            {/*    <Table sx={{ minWidth: 650 }} aria-label="simple table">*/}
            {/*        <TableHead>*/}
            {/*            <TableRow>*/}
            {/*                <TableCell style={{width: '50%',textAlign:"center"}}>{t('counter_name')}</TableCell>*/}
            {/*                <TableCell style={{width: '50%',textAlign:"center"}}>{t('counter_value')}</TableCell>*/}
            {/*            </TableRow>*/}
            {/*        </TableHead>*/}
            {/*        <TableBody>*/}
            {/*            /!*billD*!/*/}
            {/*            <TableRow>*/}
            {/*                <TableCell component="th" scope="row">*/}
            {/*                    billD*/}
            {/*                </TableCell>*/}
            {/*                <TableCell align="right">{singleDevice?.Counter?.billD}</TableCell>*/}
            {/*            </TableRow>*/}
            {/*            /!*billT*!/*/}
            {/*            <TableRow>*/}
            {/*                <TableCell component="th" scope="row">*/}
            {/*                    billT*/}
            {/*                </TableCell>*/}
            {/*                <TableCell align="right">{singleDevice?.Counter?.billT}</TableCell>*/}
            {/*            </TableRow>*/}
            {/*            /!*bonusD*!/*/}
            {/*            <TableRow>*/}
            {/*                <TableCell component="th" scope="row">*/}
            {/*                    bonusD*/}
            {/*                </TableCell>*/}
            {/*                <TableCell align="right">{singleDevice?.Counter?.bonusD}</TableCell>*/}
            {/*            </TableRow>*/}
            {/*            /!*bonusT*!/*/}
            {/*            <TableRow>*/}
            {/*                <TableCell component="th" scope="row">*/}
            {/*                    bonusT*/}
            {/*                </TableCell>*/}
            {/*                <TableCell align="right">{singleDevice?.Counter?.bonusT}</TableCell>*/}
            {/*            </TableRow>*/}
            {/*            /!*cashlessD*!/*/}
            {/*            <TableRow>*/}
            {/*                <TableCell component="th" scope="row">*/}
            {/*                    cashlessD*/}
            {/*                </TableCell>*/}
            {/*                <TableCell align="right">{singleDevice?.Counter?.cashlessD}</TableCell>*/}
            {/*            </TableRow>*/}
            {/*            /!*cashlessT*!/*/}
            {/*            <TableRow>*/}
            {/*                <TableCell component="th" scope="row">*/}
            {/*                    cashlessT*/}
            {/*                </TableCell>*/}
            {/*                <TableCell align="right">{singleDevice?.Counter?.cashlessT}</TableCell>*/}
            {/*            </TableRow>*/}
            {/*            /!*chSpent*!/*/}
            {/*            <TableRow>*/}
            {/*                <TableCell component="th" scope="row">*/}
            {/*                    chSpent*/}
            {/*                </TableCell>*/}
            {/*                <TableCell align="right">{singleDevice?.Counter?.chSpent}</TableCell>*/}
            {/*            </TableRow>*/}
            {/*            /!*chTimeFreeMode*!/*/}
            {/*            <TableRow>*/}
            {/*                <TableCell component="th" scope="row">*/}
            {/*                    chTimeFreeMode*/}
            {/*                </TableCell>*/}
            {/*                <TableCell align="right">{singleDevice?.Counter?.chTimeFreeMode}</TableCell>*/}
            {/*            </TableRow>*/}
            {/*            /!*chTimePaidMode*!/*/}
            {/*            <TableRow>*/}
            {/*                <TableCell component="th" scope="row">*/}
            {/*                    chTimePaidMode*/}
            {/*                </TableCell>*/}
            {/*                <TableCell align="right">{singleDevice?.Counter?.chTimePaidMode}</TableCell>*/}
            {/*            </TableRow>*/}
            {/*            /!*coinD*!/*/}
            {/*            <TableRow>*/}
            {/*                <TableCell component="th" scope="row">*/}
            {/*                    coinD*/}
            {/*                </TableCell>*/}
            {/*                <TableCell align="right">{singleDevice?.Counter?.coinD}</TableCell>*/}
            {/*            </TableRow>*/}
            {/*            /!*coinT*!/*/}
            {/*            <TableRow>*/}
            {/*                <TableCell component="th" scope="row">*/}
            {/*                    coinT*/}
            {/*                </TableCell>*/}
            {/*                <TableCell align="right">{singleDevice?.Counter?.coinT}</TableCell>*/}
            {/*            </TableRow>*/}
            {/*            /!*createdAt*!/*/}
            {/*            <TableRow>*/}
            {/*                <TableCell component="th" scope="row">*/}
            {/*                    createdAt*/}
            {/*                </TableCell>*/}
            {/*                <TableCell align="right">{singleDevice?.Counter?.createdAt.substring(0,10)}</TableCell>*/}
            {/*            </TableRow>*/}
            {/*            /!*device_id*!/*/}
            {/*            <TableRow>*/}
            {/*                <TableCell component="th" scope="row">*/}
            {/*                    device_id*/}
            {/*                </TableCell>*/}
            {/*                <TableCell align="right">{singleDevice?.Counter?.device_id}</TableCell>*/}
            {/*            </TableRow>*/}
            {/*            /!*powerOnTime*!/*/}
            {/*            <TableRow>*/}
            {/*                <TableCell component="th" scope="row">*/}
            {/*                    powerOnTime*/}
            {/*                </TableCell>*/}
            {/*                <TableCell align="right">{singleDevice?.Counter?.powerOnTime}</TableCell>*/}
            {/*            </TableRow>*/}
            {/*            /!*serviceD*!/*/}
            {/*            <TableRow>*/}
            {/*                <TableCell component="th" scope="row">*/}
            {/*                    serviceD*/}
            {/*                </TableCell>*/}
            {/*                <TableCell align="right">{singleDevice?.Counter?.serviceD}</TableCell>*/}
            {/*            </TableRow>*/}
            {/*            /!*serviceT*!/*/}
            {/*            <TableRow>*/}
            {/*                <TableCell component="th" scope="row">*/}
            {/*                    serviceT*/}
            {/*                </TableCell>*/}
            {/*                <TableCell align="right">{singleDevice?.Counter?.serviceT}</TableCell>*/}
            {/*            </TableRow>*/}
            {/*            /!*updatedAt*!/*/}
            {/*            <TableRow>*/}
            {/*                <TableCell component="th" scope="row">*/}
            {/*                    updatedAt*/}
            {/*                </TableCell>*/}
            {/*                <TableCell align="right">{singleDevice?.Counter?.updatedAt.substring(0,10)}</TableCell>*/}
            {/*            </TableRow>*/}
            {/*        </TableBody>*/}
            {/*    </Table>*/}
            {/*</TableContainer>*/}

            {/*table end*/}



        </div>
    );
};

export default AllDevicesUser;