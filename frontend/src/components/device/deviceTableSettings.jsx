import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_URI, token} from "../../utils/keys";

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}


export default function DeviceTableSettings() {
    const [singleDevice,setSingleDevice] = useState([])
    const {t} = useTranslation()
    const {deviceId} = useParams()

    useEffect(() => {
        const instance = axios.create({
            baseURL: `${API_URI}/auth/me`,
            timeout: 1000,
            headers: {'Authorization': `Bearer ${token}`}
        });
        instance.get(`${API_URI}/car-wash/device/${deviceId}`,)
            .then(response => {setSingleDevice(response.data?.DeviceSetting)})
            .catch(e => {console.error(e)})
    },[0])



    return (
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
                    {/*ValveC*/}
                        <TableRow>
                            <TableCell component="th" scope="row">ValveC</TableCell>
                            <TableCell align="right">{singleDevice?.ValveC}</TableCell>
                        </TableRow>

                    {/*ValveD*/}
                    <TableRow>
                        <TableCell component="th" scope="row">ValveD</TableCell>
                        <TableCell align="right">{singleDevice?.ValveD}</TableCell>
                    </TableRow>

                    {/*billNominal*/}
                    <TableRow>
                        <TableCell component="th" scope="row">billNominal</TableCell>
                        <TableCell align="right">{singleDevice?.billNominal}</TableCell>
                    </TableRow>

                    {/*bingoThr*/}
                    <TableRow>
                        <TableCell component="th" scope="row">bingoThr</TableCell>
                        <TableCell align="right">{singleDevice?.bingoThr}</TableCell>
                    </TableRow>

                    {/*bingoVal*/}
                    <TableRow>
                        <TableCell component="th" scope="row">bingoVal</TableCell>
                        <TableCell align="right">{singleDevice?.bingoVal}</TableCell>
                    </TableRow>
                    {/*bonusMode*/}
                    <TableRow>
                        <TableCell component="th" scope="row">bonusMode</TableCell>
                        <TableCell align="right">{singleDevice?.bonusMode}</TableCell>
                    </TableRow>

                    {/*bonusPct*/}
                    <TableRow>
                        <TableCell component="th" scope="row">bonusPct</TableCell>
                        <TableCell align="right">{singleDevice?.bonusPct}</TableCell>
                    </TableRow>
                    {/*bonusSchEnd*/}
                    <TableRow>
                        <TableCell component="th" scope="row">bonusSchEnd</TableCell>
                        <TableCell align="right">{singleDevice?.bonusSchEnd}</TableCell>
                    </TableRow>
                    {/*bonusSchStart*/}
                    <TableRow>
                        <TableCell component="th" scope="row">bonusSchStart</TableCell>
                        <TableCell align="right">{singleDevice?.bonusSchStart}</TableCell>
                    </TableRow>
                    {/*bonusVal*/}
                    <TableRow>
                        <TableCell component="th" scope="row">bonusVal</TableCell>
                        <TableCell align="right">{singleDevice?.bonusVal}</TableCell>
                    </TableRow>
                    {/*bpTime*/}
                    <TableRow>
                        <TableCell component="th" scope="row">bpTime</TableCell>
                        <TableCell align="right">{singleDevice?.bpTime}</TableCell>
                    </TableRow>
                    {/*bypass*/}
                    <TableRow>
                        <TableCell component="th" scope="row">bypass</TableCell>
                        <TableCell align="right">{singleDevice?.bypass}</TableCell>
                    </TableRow>
                    {/*bypassChann*/}
                    <TableRow>
                        <TableCell component="th" scope="row">bypassChann</TableCell>
                        <TableCell align="right">{singleDevice?.bypassChann}</TableCell>
                    </TableRow>
                    {/*channels*/}
                    <TableRow>
                        <TableCell component="th" scope="row">channels</TableCell>
                        <TableCell align="right">{singleDevice?.channels}</TableCell>
                    </TableRow>
                    {/*coinNominal*/}
                    <TableRow>
                        <TableCell component="th" scope="row">coinNominal</TableCell>
                        <TableCell align="right">{singleDevice?.coinNominal}</TableCell>
                    </TableRow>

                    {/*colors*/}
                    <TableRow>
                        <TableCell component="th" scope="row">colors</TableCell>
                        <TableCell align="right">{singleDevice?.colors}</TableCell>
                    </TableRow>

                    {/*component*/}
                    <TableRow>
                        <TableCell component="th" scope="row">component</TableCell>
                        <TableCell align="right">{singleDevice?.component}</TableCell>
                    </TableRow>

                    {/*createdAt*/}
                    <TableRow>
                        <TableCell component="th" scope="row">createdAt</TableCell>
                        <TableCell align="right">{singleDevice?.createdAt}</TableCell>
                    </TableRow>

                    {/*currency*/}
                    <TableRow>
                        <TableCell component="th" scope="row">currency</TableCell>
                        <TableCell align="right">{singleDevice?.currency}</TableCell>
                    </TableRow>

                    {/*dateTime*/}
                    <TableRow>
                        <TableCell component="th" scope="row">dateTime</TableCell>
                        <TableCell align="right">{singleDevice?.dateTime}</TableCell>
                    </TableRow>

                    {/*devID*/}
                    <TableRow>
                        <TableCell component="th" scope="row">devID</TableCell>
                        <TableCell align="right">{singleDevice?.devID}</TableCell>
                    </TableRow>

                    {/*device_id*/}
                    <TableRow>
                        <TableCell component="th" scope="row">device_id</TableCell>
                        <TableCell align="right">{singleDevice?.device_id}</TableCell>
                    </TableRow>

                    {/*digColor*/}
                    <TableRow>
                        <TableCell component="th" scope="row">digColor</TableCell>
                        <TableCell align="right">{singleDevice?.digColor}</TableCell>
                    </TableRow>

                    {/*flowPulse1*/}
                    <TableRow>
                        <TableCell component="th" scope="row">flowPulse1</TableCell>
                        <TableCell align="right">{singleDevice?.flowPulse1}</TableCell>
                    </TableRow>

                    {/*flowPulse2*/}
                    <TableRow>
                        <TableCell component="th" scope="row">flowPulse2</TableCell>
                        <TableCell align="right">{singleDevice?.flowPulse2}</TableCell>
                    </TableRow>

                    {/*flowTimeout1*/}
                    <TableRow>
                        <TableCell component="th" scope="row">flowTimeout1</TableCell>
                        <TableCell align="right">{singleDevice?.flowTimeout1}</TableCell>
                    </TableRow>


                    {/*flowTimeout2*/}
                    <TableRow>
                        <TableCell component="th" scope="row">flowTimeout2</TableCell>
                        <TableCell align="right">{singleDevice?.flowTimeout2}</TableCell>
                    </TableRow>

                    {/*colors*/}
                    <TableRow>
                        <TableCell component="th" scope="row">colors</TableCell>
                        <TableCell align="right">{singleDevice?.colors}</TableCell>
                    </TableRow>

                    {/*hopper*/}
                    <TableRow>
                        <TableCell component="th" scope="row">hopper</TableCell>
                        <TableCell align="right">{singleDevice?.hopper}</TableCell>
                    </TableRow>

                    {/*hopperNominal*/}
                    <TableRow>
                        <TableCell component="th" scope="row">hopperNominal</TableCell>
                        <TableCell align="right">{singleDevice?.hopperNominal}</TableCell>
                    </TableRow>


                    {/*hopperThreshold*/}
                    <TableRow>
                        <TableCell component="th" scope="row">hopperThreshold</TableCell>
                        <TableCell align="right">{singleDevice?.hopperThreshold}</TableCell>
                    </TableRow>

                    {/*hpt*/}
                    <TableRow>
                        <TableCell component="th" scope="row">hpt</TableCell>
                        <TableCell align="right">{singleDevice?.hpt}</TableCell>
                    </TableRow>

                    {/*id*/}
                    <TableRow>
                        <TableCell component="th" scope="row">id</TableCell>
                        <TableCell align="right">{singleDevice?.id}</TableCell>
                    </TableRow>

                    {/*language*/}
                    <TableRow>
                        <TableCell component="th" scope="row">language</TableCell>
                        <TableCell align="right">{singleDevice?.language}</TableCell>
                    </TableRow>

                    {/*mode*/}
                    <TableRow>
                        <TableCell component="th" scope="row">mode</TableCell>
                        <TableCell align="right">{singleDevice?.mode}</TableCell>
                    </TableRow>


                    {/*pauseMode*/}
                    <TableRow>
                        <TableCell component="th" scope="row">pauseMode</TableCell>
                        <TableCell align="right">{singleDevice?.pauseMode}</TableCell>
                    </TableRow>

                    {/*relayOutput*/}
                    <TableRow>
                        <TableCell component="th" scope="row">relayOutput</TableCell>
                        <TableCell align="right">{singleDevice?.relayOutput}</TableCell>
                    </TableRow>


                    {/*screen*/}
                    <TableRow>
                        <TableCell component="th" scope="row">screen</TableCell>
                        <TableCell align="right">{singleDevice?.screen}</TableCell>
                    </TableRow>


                    {/*service*/}
                    <TableRow>
                        <TableCell component="th" scope="row">service</TableCell>
                        <TableCell align="right">{singleDevice?.service}</TableCell>
                    </TableRow>


                    {/*tBonusPct*/}
                    <TableRow>
                        <TableCell component="th" scope="row">tBonusPct</TableCell>
                        <TableCell align="right">{singleDevice?.tBonusPct}</TableCell>
                    </TableRow>

                    {/*tBonusVal*/}
                    <TableRow>
                        <TableCell component="th" scope="row">tBonusVal</TableCell>
                        <TableCell align="right">{singleDevice?.tBonusVal}</TableCell>
                    </TableRow>

                    {/*tariffPct*/}
                    <TableRow>
                        <TableCell component="th" scope="row">tariffPct</TableCell>
                        <TableCell align="right">{singleDevice?.tariffPct}</TableCell>
                    </TableRow>

                    {/*tariffSchEnd*/}
                    <TableRow>
                        <TableCell component="th" scope="row">tariffSchEnd</TableCell>
                        <TableCell align="right">{singleDevice?.tariffSchEnd}</TableCell>
                    </TableRow>

                    {/*updatedAt*/}
                    <TableRow>
                        <TableCell component="th" scope="row">updatedAt</TableCell>
                        <TableCell align="right">{singleDevice?.updatedAt}</TableCell>
                    </TableRow>

                    {/*valveP*/}
                    <TableRow>
                        <TableCell component="th" scope="row">valveP</TableCell>
                        <TableCell align="right">{singleDevice?.valveP}</TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </TableContainer>
    );
}