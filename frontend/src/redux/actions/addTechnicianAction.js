import axios from "axios";
import Swal from "sweetalert2";
import {API_URI, myUrl, token} from "../../utils/keys";
import {ADD_TECHNICIAN} from "../types";
import {getUsers} from "./getUsersAction";


export const goAddTechnician = (data) => {
    return (dispatch) => {
        axios
            .post(`${API_URI}/technician/create`,
                data,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
            .then((res) => {
                // dispatch({ type: ADD_TECHNICIAN, payload: res.data });
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    showConfirmButton: false,
                    timer: 1500,
                });
                dispatch(getUsers())
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

