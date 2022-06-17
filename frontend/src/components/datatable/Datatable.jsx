//styles
import "./datatable.scss";

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useSelector} from "react-redux";
import {useState} from "react";
import {FormGroup, TablePagination} from "@mui/material";
import { styled } from "@mui/material/styles";
// import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from '@mui/material/Button';
import Switch from "@mui/material/Switch";
import {Link} from "react-router-dom";

// custom imports

import NestedModal from "../modals/modal";
import offButton from '../../images/offButton.svg'
import onButton from '../../images/onButton.svg'
// import {addTechnicianReducer} from "../../redux/reducers/addTechnicianReducer";
import PagePreLoader from "../PagePreLoader/PagePreLoader";
import {API_URI, token} from "../../utils/keys";
import axios from "axios";
import EditTechnician from "../modals/editTechnician";
import {useTranslation} from "react-i18next";


export const Android12Switch = styled(Switch)(({ theme }) => ({
    padding: 5,
    "& .MuiSwitch-track": {
        borderRadius: 22 / 2,
        "&:before, &:after": {
            content: '""',
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            width: 18,
            height: 18
        },
        "&:before": {
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
                theme.palette.getContrastText(theme.palette.primary.main)
            )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
            left: 12
        },
        "&:after": {
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
                theme.palette.getContrastText(theme.palette.primary.main)
            )}" d="M19,13H5V11H19V13Z" /></svg>')`,
            right: 12
        }
    },
    "& .MuiSwitch-thumb": {
        boxShadow: "none",
        width: 20,
        height: 20,
        margin: 0
    }
}));

export default function DataTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [checked, setChecked] = React.useState(false);
    const {t} = useTranslation()
    const users = useSelector(state => state.getUsers.users)


    // const handleChangePage = (event, newPage) => {setPage(newPage);};
    //
    // const handleChangeRowsPerPage = event => {
    //     setRowsPerPage(+event.target.value);
    //     setPage(0);
    // };

    const handleClick = (e,id) => {
        //Do something if checkbox is clicked
        if (!e.target.checked) {
            axios.post(`${API_URI}/technician/deactivate`, {
                id
            },{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
                .then(function (response) {
                   return "ok"
                })
                .catch(function (error) {
                    console.error(error);
                });
        } else {
            axios.post(`${API_URI}/technician/activate`, {
                id
            },{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
                .then(function (response) {
                    return "ok"
                })
                .catch(function (error) {
                    console.error(error);
                });
        }
    };

    return (
     <div className="datatable">
            <div className="datatableTitle">
                {t('technics_and_users_list')}
                <button>
                    <NestedModal />
                </button>
            </div>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell width="20%" className="technics_list">{t("username")}</TableCell>
                        <TableCell width="20%" className="technics_list" align="center">{t("date")}</TableCell>
                        <TableCell width="40%" className="technics_list" align="center">{t("active_inactive")}</TableCell>
                        <TableCell width="20%" align="center">{t("edit")} <i className="fa-solid fa-pen-to-square"></i></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.length == 0 ? <PagePreLoader /> : users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell width="25%" component="th" scope="row">
                                <span
                                    className="technics_list_username">
                                    {row.username}
                                    {row.role == "technician" && <i style={{color:"orange",marginLeft:"5px"}} className="fa-solid fa-gears"></i>}
                                </span> <br/>
                                    {row.email}
                            </TableCell>
                            <TableCell className="technics_list_username" align="center">{row.createdAt.substring(0, 10)}</TableCell>
                            <TableCell  width="1%" align="center">
                                <form>
                                        {row.role == "technician" &&
                                                <FormControlLabel
                                                        control={<Android12Switch
                                                        defaultChecked={row.active == true ? !checked : checked}
                                                        onClick={(e) => handleClick(e,row.id)}
                                                    />}
                                                />
                                        }
                                </form>
                            </TableCell>
                            <TableCell align="center">
                                {row.role == "technician" && <EditTechnician id={row.id} />}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            {/*<TablePagination*/}
            {/*    rowsPerPageOptions={[5, 10, 15, 20, 25, 50, 100]}*/}
            {/*    component="div"*/}
            {/*    count={users.length}*/}
            {/*    rowsPerPage={rowsPerPage}*/}
            {/*    page={page}*/}
            {/*    onChangePage={handleChangePage}*/}
            {/*    onChangeRowsPerPage={handleChangeRowsPerPage}*/}
            {/*/>*/}
        </TableContainer>
     </div>
    );
}
