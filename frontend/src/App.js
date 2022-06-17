// styles
import "./style/App.scss"

import { BrowserRouter, Routes, Route,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productInputs, userInputs } from "./formSource";
import {useEffect, useState} from "react";

// custom imports

// import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
// import New from "./pages/new/New";
import ChangePassword from "./pages/changePassword/ChangePassword";
import Layout from "./components/Layout";
import SendCode from "./pages/sendCode/SendCode";
import EnterCode from "./pages/enterCode/EnterCode";
import FinishChange from "./pages/finishChange/FinishChange";
import DashboardAdmin from "./pages/DashboardAdmin/DashboardAdmin";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import TechnicianDashboard from "./pages/TechnicianDashboard/TechnicianDashboard";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import PagePreLoader from './components/PagePreLoader/PagePreLoader'
import LogoutModal from "./components/modals/logoutModal";
import axios from "axios";
import {API_URI, token} from "./utils/keys";
import WashingMachines from "./pages/washingMachines/WashingMachines";
import AddMachines from "./pages/addMachines/AddMachines";
import ViewMachine from "./pages/viewMachine/ViewMachine";
import DevicePage from "./pages/devicePage/DevicePage";
import SingleDevice from "./pages/devicePage/SingleDevice";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
import TokenCode from "./pages/tokenCode/TokenCode";
import WashingMachinesUser from "./pages/washingMachines/washingMachinesUser/WashingMachinesUser";
import ViewMachineUser from "./pages/viewMachine/ViewMachineUser";
import DeviceUser from "./pages/deviceUser/DeviceUser";

function App() {
  const [role,setRole] = useState([])
  const navigate = useNavigate();
  const getAuth= useSelector((state) => state.authReducer?.getAuth.role);
  // const loader = useSelector(state => state.appReducer.loader)

    useEffect(() => {
        switch (role) {
            case 'technician':
                localStorage.setItem("roleId","2")
                break;
            case 'admin':
                localStorage.setItem("roleId","1")
                break;
            case 'user':
                localStorage.setItem("roleId","3")
                break;
            default:
                return "default"
        }
    },[role])


   useEffect(() => {
        const instance = axios.create({
            baseURL: `${API_URI}/auth/me`,
            timeout: 1000,
            headers: {'Authorization': `Bearer ${token}`}
        });

        instance.get(`${API_URI}/auth/me`)
            .then(response => {
                setRole(response.data.role)
            })
            .catch(e => {
                localStorage.clear()
                navigate('/login')
            })

    },[0])



    const adminRole = () => {
      return (
          <Route path="/" element={<Layout />}>
              <Route path="/" element={<DashboardAdmin />} />
              <Route path="/login" element={<Login />} />
              <Route path="/list" element={<List />} />
              <Route path="/products" element={<List />} />
              {/*change password start*/}
              <Route path="/change" element={<ChangePassword />} />
              <Route path="/change/changeCode" element={<SendCode />} />
              <Route path="/change/changeCode/enterCode" element={<EnterCode />} />
              <Route path="/change/changeCode/enterCode/finishChange" element={<FinishChange />} />
              {/*change password end*/}
              <Route path="/users/new" element={<Single />} />
              <Route path="/dashboardAdmin" element={<DashboardAdmin />} />
              <Route path="/dashboardUser" element={<UserDashboard />} />
              {/*loading*/}
              <Route path="/loadingPage" element={<LoadingPage />} />
          </Route>
      )
    }


    const technicianRole = () => {
        return (
            <Route path="/" element={<Layout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<TechnicianDashboard />} />
                {/*<Route path="/list" element={<List />} />*/}
                <Route path="/userlist" element={<List />} />
                <Route path="/devices" element={<DevicePage />} />
                <Route path="/devices/:deviceId" element={<SingleDevice />} />
                {/*change password start*/}
                <Route path="/change" element={<ChangePassword />} />
                <Route path="/change/changeCode" element={<SendCode />} />
                <Route path="/change/changeCode/enterCode" element={<EnterCode />} />
                <Route path="/change/changeCode/enterCode/finishChange" element={<FinishChange />} />
                {/*change password end*/}
                <Route path="/users/new" element={<Single />} />
                {/*washing machines start*/}

                <Route path="/washingMachines" element={<WashingMachines />} />
                <Route path="/addMachines" element={<AddMachines />} />
                <Route path="/viewMachine/:userId" element={<ViewMachine />} />
                <Route path="/singleDevice/:deviceId" element={<SingleDevice />} />
                {/*washing machines end*/}

                {/*loading*/}
                <Route path="/loadingPage" element={<LoadingPage />} />
                {/*token*/}
                <Route path="/tokenCode" element={<TokenCode />} />
            </Route>
        )
    }


    const userRole = () => {
        return (
            <Route path="/" element={<Layout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<UserDashboard />} />
                <Route path="/list" element={<List />} />
                <Route path="/washingMachinesUser" element={<WashingMachinesUser />} />
                {/*change password start*/}
                <Route path="/change" element={<ChangePassword />} />
                <Route path="/change/changeCode" element={<SendCode />} />
                <Route path="/change/changeCode/enterCode" element={<EnterCode />} />
                <Route path="/change/changeCode/enterCode/finishChange" element={<FinishChange />} />
                {/*loading*/}
                <Route path="/loadingPage" element={<LoadingPage />} />
                {/*change password end*/}
                <Route path="/users/new" element={<Single />} />
                <Route path="/viewMachineUser/:userId" element={<ViewMachineUser />} />
                <Route path="/deviceUserSingle/:deviceUser" element={<DeviceUser />} />
            </Route>
        )
    }


    const notAuth = () => {
        return (
            <>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Login />} />
                <Route path="/change/changeCode" element={<SendCode />} />
                <Route path="/change/changeCode/enterCode" element={<EnterCode />} />
                <Route path="/change/changeCode/enterCode/finishChange" element={<FinishChange />} />
                {/*loading*/}
                <Route path="/loadingPage" element={<LoadingPage />} />
                <Route path="*" element={<PageNotFound />} />
            </>
        )
    }


  return (
    <div>
       <Routes>
            {!token && notAuth()}
            {(role == undefined) || getAuth ? notAuth() : null}
            {role == 'admin' ? adminRole() : null}
            {role == 'technician' ? technicianRole() : null}
            {role == 'user'? userRole() : null}

            {/*<Route path="/" element={<Login />} />*/}

           <Route path="*" element={<PageNotFound />} />
        </Routes>


    </div>
  );
}

export default App;