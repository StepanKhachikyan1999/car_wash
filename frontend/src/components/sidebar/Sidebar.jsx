// styles
import "./sidebar.scss";

import * as React from "react";
import {Link,useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";


// custom imports
import homeIcon from "../../images/homeImage.svg"
import analiticsIcon from "../../images/analitics.svg"
import AddEmail from "../modals/addEmail";
import {API_URI, token} from "../../utils/keys";
import robotIcon from "../../images/robotIcon.svg"
import changeIcon from "../../images/changeIcon.svg"
import logOutIcon from "../../images/logOutIcon.svg"
import LogoutModal from "../modals/logoutModal";
import logo from "../../images/blue_car_wash.png";

const Sidebar = () => {
  const dispatch = useDispatch()
  const [role,setRole] = useState([])
  const [user,setUser] = useState()
  const loader = useSelector(state => state.appReducer.loader)
  // const user = useSelector(state => state.getUsers.getOneUser)
  // const getAuth= useSelector((state) => state.authReducer?.getAuth);
  const {t} = useTranslation()


  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  useEffect(() => {
    const instance = axios.create({
      baseURL: `${API_URI}/auth/me`,
      timeout: 1000,
      headers: {'Authorization': `Bearer ${token}`}
    });

    instance.get(`${API_URI}/auth/me`)
        .then(response => {
          setRole(response.data.role)
          setUser(response.data)
        })
  },[0])


  // admin sidebar
  const adminDashboard = () => {
    return (
        <div className="center">
          <ul>
            <Link to="/" style={{ textDecoration: "none" }}>
              <li>
                <img src={homeIcon} />
                <span className={splitLocation[1] === "" ? "active" : ""}>{t('dashboard')}</span>
              </li>
            </Link>
            <Link to="/list" style={{ textDecoration: "none" }}>
              <li>
                <img src={analiticsIcon} />
                <span className={splitLocation[1] === "list" ? "active" : ""}>{t('sidebar.technics')}</span>
              </li>
            </Link>
            <br/><br/><br/><br/>

            <hr/>
            <br/>
            <Link to="/change" style={{ textDecoration: "none" }}>
              <li>
                <img src={changeIcon} />
                <span className={splitLocation[1] === "change" ? "active" : ""}>{t('change_password')}</span>
              </li>
            </Link>

            <a to="#" style={{ textDecoration: "none" }}>
              <li>
                <img src={logOutIcon} />
                <span><LogoutModal /></span>
              </li>
            </a>
          </ul>
        </div>
    )
  }
  // technician sidebar

  const technicianDashboard = () => {
    return (
        <div className="center">
          <ul>
            <Link to="/" style={{ textDecoration: "none" }}>
              <li>
                <img src={homeIcon} />
                <span className={splitLocation[1] === "" ? "active" : ""}>{t('dashboard')}</span>
              </li>
            </Link>
            <Link to="/userlist"  style={{ textDecoration: "none" }}>
              <li>
                <img src={analiticsIcon} />
                <span className={splitLocation[1] === "userlist" ? "active" : ""}>{t('sidebar.technics')}</span>
              </li>
            </Link>
            <Link to="/washingMachines"  style={{ textDecoration: "none" }}>
              <li>
                <img src={robotIcon} />
                <span className={splitLocation[1] === "washingMachines" ? "active" : ""}>{t('sidebar.washingMachines')}</span>
              </li>
            </Link>
            <br/><br/><br/>

            <hr/>
            <br/>
            <Link to="/change" style={{ textDecoration: "none" }}>
              <li>
                <img src={changeIcon} />
                <span className={splitLocation[1] === "change" ? "active" : ""}>{t('change_password')}</span>
              </li>
            </Link>

            <li>
              <img src={logOutIcon} />
              <LogoutModal />
            </li>
          </ul>
          <br/>
          {user?.email == null && <AddEmail />}
        </div>
    )
  }

  // user sidebar

  const userDashboard = () => {
    return (
        <div className="center">
          <ul>
            <Link to="/" style={{ textDecoration: "none" }}>
              <li>
                <img src={homeIcon} />
                <span className={splitLocation[1] === "" ? "active" : ""}>{t("dashboard")}</span>
              </li>
            </Link>
            <Link to="/washingMachinesUser" style={{ textDecoration: "none" }}>
              <li>
                <img src={robotIcon} />
                <span className={splitLocation[1] === "washingMachinesUser" ? "active" : ""}>{t('sidebar.washingMachines')}</span>
              </li>
            </Link>
            <br/><br/><br/><br/>

            <hr/>
            <br/>
            <Link to="/change" style={{ textDecoration: "none" }}>
              <li>
                <img src={changeIcon} />
                <span className={splitLocation[1] === "change" ? "active" : ""}>{t('change_password')}</span>
              </li>
            </Link>

            <a href="#" style={{ textDecoration: "none" }}>
              <li>
                <img src={logOutIcon} />
                <span><LogoutModal /></span>
              </li>
            </a>
          </ul>
          <br/>
          {user?.email == null && <AddEmail />}
        </div>
    )
  }

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div><img src={logo} style={{width:"100px"}} alt="logo"/></div>
        </Link>
        <span className="user_name">{user && user?.username}</span>
      </div>

      {/*{role == undefined ? notAuth() : null}*/}
      {role == 'admin' ? adminDashboard() : null}
      {role == 'technician' ? technicianDashboard() : null}
      {role == 'user'? userDashboard() : null}

    </div>
  );
};

export default Sidebar;