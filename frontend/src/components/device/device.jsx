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
import {token,API_URI} from "../../utils/keys";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";


export default function DeviceTable() {
    const {t} = useTranslation()
    let navigate = useNavigate()
    const [devices,setDevices] = useState()
    let {userId} = useParams();
    // alert(userId,'params')

        useEffect(() => {
        const instance = axios.create({
            baseURL: `${API_URI}/auth/me`,
            timeout: 1000,
            headers: {'Authorization': `Bearer ${token}`}
        });

        instance.get(`${API_URI}/car-wash/device`)
            .then(response => {
                setDevices(response.data.filter(x => x.car_wash_point_id == userId))
            })
            .catch(e => {
              console.error(e)
            })

    },[0])

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>{t("name_name")}</TableCell>
                        <TableCell align="center">{t("createAt")}</TableCell>
                        <TableCell align="center">{t("updatedAt")}</TableCell>
                        <TableCell align="center">{t("view")}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {devices?.length == 0 && <h2 className="not_device">{t('not_device')}</h2>}

                    {devices?.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">{row.name}</TableCell>
                            <TableCell align="center">{row.createdAt.substring(0, 10)}</TableCell>
                            <TableCell align="center">{row.updatedAt.substring(0, 19).replace("T","_")}</TableCell>
                            <TableCell align="center"><Link  to={`/singleDevice/${row.id}`} className="device_link">View-></Link></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}