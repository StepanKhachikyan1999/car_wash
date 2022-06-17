import {CHANGE_SINGLE_DEVICE, GET_COMPONENTS, GET_SINGLE_DEVICE} from "../types";
import axios from "axios";
import {API_URI, token} from "../../utils/keys";
import Swal from "sweetalert2";
import {getUsers} from "./getUsersAction";


export const editMachineName = (data) => {
    return (dispatch) => {
        axios
            .post(`${API_URI}/car-wash/change-name`,
                data,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
            .then((res) => {
                //dispatch({ type: ADD_TECHNICIAN, payload: res.data });
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    showConfirmButton: false,
                    timer: 1500,
                });
            })
            .catch((e) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    timer: 1500,
                });
            });
    };
};
