// styles
import "./ViewMachine.scss";

import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

// custom imports
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import {API_URI, token} from "../../utils/keys";
// import CreateDevice from "../../components/modals/createDevice";
import {useTranslation} from "react-i18next";
import ChangeMachineName from "../../components/modals/changeMachineName";
import AllDevicesUser from "../../components/userCounterTable/UserCounerTable";



const ViewMachine = () => {
    const {userId} = useParams();
    const [singleUser,setSingleUser] = useState()
    const [singleMachine,setSingleMachine] = useState()
    const {t} = useTranslation()

    let one = `${API_URI}/car-wash/points/${userId}`;
    let two = `${API_URI}/car-wash/`;


    const requestOne = axios.get(one,{ headers: {'Authorization': `Bearer ${token}`}});
    const requestTwo = axios.get(two,{ headers: {'Authorization': `Bearer ${token}`}});


    useEffect(() => {
        axios
            .all([requestOne,requestTwo])
            .then(
                axios.spread((...responses) => {
                    const responseOne = responses[0];
                    const responseTwo = responses[1];
                    setSingleUser(responseOne?.data)
                    setSingleMachine(responseTwo?.data.filter(x => x.id == userId))

                })
            )
            .catch(errors => {
                // react on errors.
                console.error(errors);
            });

    },[0])


    return (
        <div className="new">
            <div className="newContainer">
                <Navbar />
                <div className="view_slice">
                    <div className="top_user">

                     <h1>{t("car_wash_name")} - {singleMachine && singleMachine[0]?.car_wash_point_name}</h1>

                     <div><ChangeMachineName /></div>

                    </div>

                </div>
                {/*<div className="table">*/}
                {/*    */}
                {/*</div>*/}
                <AllDevicesUser />
            </div>
        </div>
    );
};

export default ViewMachine;