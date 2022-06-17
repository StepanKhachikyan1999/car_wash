import axios from "axios";
import Swal from "sweetalert2";
import {API_URI, myUrl, token} from "../../utils/keys";
import cookies from 'js-cookie'
import {TECHNICIAN_TOKEN} from "../types";



export const goAddMachine = (data) => {
    return (dispatch) => {
        axios
            .post(`${API_URI}/car-wash/create`,
                data,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
            .then((res) => {
                dispatch({ type: TECHNICIAN_TOKEN, payload: res.data });
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

