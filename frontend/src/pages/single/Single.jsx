// styles
import "./single.scss";

import {useEffect, useState} from "react";

// custom imports
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import user_img from "../../images/user.png"
import axios from "axios";
import {API_URI, token} from "../../utils/keys";
import {useTranslation} from "react-i18next";


const Single = ({id,email,username}) => {
  const [singleUser,setSingleUser] = useState()
  const {t} = useTranslation()

  useEffect(() => {
    const instance = axios.create({
      baseURL: `${API_URI}/auth/me`,
      timeout: 1000,
      headers: {'Authorization': `Bearer ${token}`}
    });

    instance.get(`${API_URI}/auth/me`)
        .then(response => {
          setSingleUser(response.data)
        })
  },[0])

  return (
    <div className="single">
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            {/*<div className="editButton">Edit</div>*/}
            <h1 className="title">{t('information')}</h1>
            <div className="item">
              <img
                src={user_img}
                alt="img"
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{singleUser?.username}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{singleUser?.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+7777777777777</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Yerevan
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Armenia</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        {/*<div className="bottom">*/}
        {/*<h1 className="title">Last Transactions</h1>*/}
        {/*  <List/>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default Single;