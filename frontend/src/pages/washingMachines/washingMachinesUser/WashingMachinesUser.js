// styles
import "./WashingMachines.scss"

import React, {useEffect, useState} from 'react';
import Navbar from "../../../components/navbar/Navbar";
// import ActionAreaCard from "../../../components/washingMachines/washing";
import {CardActionArea} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// import {Link} from "react-router-dom";
import Card from "@mui/material/Card";
import {useTranslation} from "react-i18next";
import {API_URI, token} from "../../../utils/keys";
import axios from "axios";
import {Link} from "react-router-dom";


// custom imports

const WashingMachinesUser = () => {
    const {t} = useTranslation()
    const [userDevice,setUserDevice] = useState()
    let one = `${API_URI}/car-wash/`;


    console.log(userDevice,'userDevice_999')
    const requestOne = axios.get(one,{ headers: {'Authorization': `Bearer ${token}`}});

    useEffect(() => {
        axios
            .all([requestOne])
            .then(
                axios.spread((...responses) => {
                    const responseOne = responses[0];
                    setUserDevice(responseOne.data)
                    // setCarWash(responseOne.data)
                })
            )
            .catch(errors => {
                // react on errors.
                console.error(errors);
            });

    },[0])

    return (
        <div className="washing_machines_section_user">
            <div className="washing_machines_container">
                <Navbar/>
                {
                    userDevice && userDevice.length == 0 && <div className="not_added_car_wash">{t("not_added_your_carwash")}</div>
                }
                <div className="washing_machines_slice">
                    {
                        userDevice?.map((info) => {
                            return(
                                <Card key={info?.id}>
                                    <CardActionArea>
                                        <h2 className="carwash_username">{t("car_wash_name")} -
                                            {info?.car_wash_point_name == null ? `${t("not_name")}` : info?.car_wash_point_name} </h2>
                                        <CardContent>
                                            <Typography variant="body2" color="text.secondary.pink">
                                                {t("createAt")} - {info?.createdAt?.substring(0,10)}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <div className="buttons_carwash_user">
                                        <Link  to={`/viewMachineUser/${info?.id}`}><button className="edit_btn">{t('view')}</button></Link>
                                    </div>

                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default WashingMachinesUser;