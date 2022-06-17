// styles
import "./list.scss"

import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

// custom imports
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import {getUsers} from "../../redux/actions/getUsersAction";
import axios from "axios";
import {API_URI, token} from "../../utils/keys";
import DatatableTechnician from "../../components/datatable/DatatableTechnician";

const List = () => {
    const dispatch = useDispatch()

    const [role,setRole] = useState([])


    useEffect(() => {
        const instance = axios.create({
            baseURL: `${API_URI}/auth/me`,
            timeout: 1000,
            headers: {'Authorization': `Bearer ${token}`}
        });

        instance.get(`${API_URI}/auth/me`)
            .then(response => {
                if(response.data == "Forbidden") {
                    alert('yayaya')
                }setRole(response.data.role)
            })
            .catch(e => {
                console.error(e,"error")
            })

    },[0])

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    // const getUsers = useSelector(state => state.getUsers.users)
    // console.log(getUsers,'getUsers_list')

  return (
    <div className="list">
      <div className="listContainer">
        <Navbar/>
          {role == 'admin' && <Datatable/>}
          {role == 'technician' && <DatatableTechnician />}
      </div>
    </div>
  )
}

export default List