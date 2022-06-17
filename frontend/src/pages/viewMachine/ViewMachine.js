// styles
import "./ViewMachine.scss";

import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

// custom imports
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import {API_URI, token} from "../../utils/keys";
import CreateDevice from "../../components/modals/createDevice";
import {useTranslation} from "react-i18next";
import DeviceTable from "../../components/device/device";



const ViewMachine = ({email,username, inputs, name,id }) => {

    const [file, setFile] = useState("");
    const [listItems,setListItems] = useState([])
    const [items,setItems] = useState([])
    let params = useParams();
    const {t} = useTranslation()
    const userNumber = Number(params.userId)

    useEffect(() => {
        const instance = axios.create({
            baseURL: `${API_URI}/car-wash`,
            timeout: 1000,
            headers: {'Authorization': `Bearer ${token}`}
        });

        instance.get(`${API_URI}/car-wash`)
            .then(response => {
                setListItems(response.data)
            })
            .catch(e => {
                console.error(e,'error')
            })
    },[0])

    useEffect(() => {
        const instance = axios.create({
            baseURL: `${API_URI}/users`,
            timeout: 1000,
            headers: {'Authorization': `Bearer ${token}`}
        });

        instance.get(`${API_URI}/users`)
            .then(response => {
                setItems(response.data.users)
            })
            .catch(e => {
                console.error(e,'error')
            })
    },[0])

   // const newArr = listItems.map(t1 => ({...t1, ...items.find(t2 => t2.id === t1.user_id)}))


    const merging_arr = listItems.map(t1 => ({...t1, ...items.find(t2 => t1.user_id === t2.user_id)}))

    const single_machine = merging_arr.filter(x => x.id === userNumber)

  //  const single_machine_test = listItems.filter(x => x.id === userNumber)



    return (
        <div className="new">
            <div className="newContainer">
                <Navbar />
                <div className="view_slice">
                <div className="top">
                    {
                        single_machine.map((info) => {
                            return(
                                <>
                                <h1>{info.username}</h1>
                                     <h3 style={{color:"white"}}>{t("createAt")} - {info?.createdAt.substring(0,10)}</h3>
                                </>
                            )
                        })
                    }
                </div>
                    <div className="create_device"><CreateDevice /></div>

                </div>

                <br/>
                <div className="device_slice"><DeviceTable /></div>


            </div>
        </div>
    );
};

export default ViewMachine;