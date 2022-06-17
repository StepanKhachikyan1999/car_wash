import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useEffect, useState} from "react";
import axios from "axios";
import {API_URI, token} from "../../utils/keys";
import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

export default function DeviceTableCounter() {

    const [singleDevice,setSingleDevice] = useState()
    const {t} = useTranslation()
    const {deviceId} = useParams()



    return (
        <TableContainer component={Paper}>
            <div style={{color: "green",fontSize:"18px",fontWeight: "600"}}>{t('counter')}</div>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell style={{width: '50%',textAlign:"center"}}>{t('counter_name')}</TableCell>
                        <TableCell style={{width: '50%',textAlign:"center"}}>{t('counter_value')}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/*billD*/}
                    <TableRow>
                        <TableCell component="th" scope="row">
                            billD
                        </TableCell>
                        <TableCell align="right">{singleDevice?.Counter?.billD}</TableCell>
                    </TableRow>
                    {/*billT*/}
                    <TableRow>
                        <TableCell component="th" scope="row">
                            billT
                        </TableCell>
                        <TableCell align="right">{singleDevice?.Counter?.billT}</TableCell>
                    </TableRow>
                    {/*bonusD*/}
                    <TableRow>
                        <TableCell component="th" scope="row">
                            bonusD
                        </TableCell>
                        <TableCell align="right">{singleDevice?.Counter?.bonusD}</TableCell>
                    </TableRow>
                    {/*bonusT*/}
                    <TableRow>
                        <TableCell component="th" scope="row">
                            bonusT
                        </TableCell>
                        <TableCell align="right">{singleDevice?.Counter?.bonusT}</TableCell>
                    </TableRow>
                    {/*cashlessD*/}
                    <TableRow>
                        <TableCell component="th" scope="row">
                            cashlessD
                        </TableCell>
                        <TableCell align="right">{singleDevice?.Counter?.cashlessD}</TableCell>
                    </TableRow>
                    {/*cashlessT*/}
                    <TableRow>
                        <TableCell component="th" scope="row">
                            cashlessT
                        </TableCell>
                        <TableCell align="right">{singleDevice?.Counter?.cashlessT}</TableCell>
                    </TableRow>
                    {/*chSpent*/}
                    <TableRow>
                        <TableCell component="th" scope="row">
                            chSpent
                        </TableCell>
                        <TableCell align="right">{singleDevice?.Counter?.chSpent}</TableCell>
                    </TableRow>
                    {/*chTimeFreeMode*/}
                    <TableRow>
                        <TableCell component="th" scope="row">
                            chTimeFreeMode
                        </TableCell>
                        <TableCell align="right">{singleDevice?.Counter?.chTimeFreeMode}</TableCell>
                    </TableRow>
                    {/*chTimePaidMode*/}
                    <TableRow>
                        <TableCell component="th" scope="row">
                            chTimePaidMode
                        </TableCell>
                        <TableCell align="right">{singleDevice?.Counter?.chTimePaidMode}</TableCell>
                    </TableRow>
                    {/*coinD*/}
                    <TableRow>
                        <TableCell component="th" scope="row">
                            coinD
                        </TableCell>
                        <TableCell align="right">{singleDevice?.Counter?.coinD}</TableCell>
                    </TableRow>
                    {/*coinT*/}
                    <TableRow>
                        <TableCell component="th" scope="row">
                            coinT
                        </TableCell>
                        <TableCell align="right">{singleDevice?.Counter?.coinT}</TableCell>
                    </TableRow>
                    {/*createdAt*/}
                    <TableRow>
                        <TableCell component="th" scope="row">
                            createdAt
                        </TableCell>
                        <TableCell align="right">{singleDevice?.Counter?.createdAt.substring(0,10)}</TableCell>
                    </TableRow>
                    {/*device_id*/}
                    <TableRow>
                        <TableCell component="th" scope="row">
                            device_id
                        </TableCell>
                        <TableCell align="right">{singleDevice?.Counter?.device_id}</TableCell>
                    </TableRow>
                    {/*powerOnTime*/}
                    <TableRow>
                        <TableCell component="th" scope="row">
                            powerOnTime
                        </TableCell>
                        <TableCell align="right">{singleDevice?.Counter?.powerOnTime}</TableCell>
                    </TableRow>
                    {/*serviceD*/}
                    <TableRow>
                        <TableCell component="th" scope="row">
                            serviceD
                        </TableCell>
                        <TableCell align="right">{singleDevice?.Counter?.serviceD}</TableCell>
                    </TableRow>
                    {/*serviceT*/}
                    <TableRow>
                        <TableCell component="th" scope="row">
                            serviceT
                        </TableCell>
                        <TableCell align="right">{singleDevice?.Counter?.serviceT}</TableCell>
                    </TableRow>
                    {/*updatedAt*/}
                    <TableRow>
                        <TableCell component="th" scope="row">
                            updatedAt
                        </TableCell>
                        <TableCell align="right">{singleDevice?.Counter?.updatedAt.substring(0,10)}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}