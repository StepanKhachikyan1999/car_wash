// styles
import "./dashboardAdmin.scss"

import React from 'react';
import Navbar from "../../components/navbar/Navbar";

// custom imports
import water from "../../images/wather.svg"
import foam from "../../images/foam.svg"
import shine from "../../images/shine.svg"
import wallet from "../../images/wallet.svg"
import BarChart from "../../components/chart/BarChart"
import AnalyticsStatistics from "../../components/chart/AnaliticsStatistic";

const DashboardAdmin = () => {
    return (
        <>
            <Navbar/>
        <div className="admin_dashboard">

            <div className="admin_dashboard_texts">
                <h4>Admin 1</h4>
                <br/>
                <span className="text_info_one">Adress:</span>
                <span className="text_info_two"> 50 Lorem,Yerevan, 0002, Армения</span>
            </div>
        <div className="cards-list">

            <div className="card 1">
                <div className="card_image">
                    <img src={water} alt="image"/>
                    <span>Water</span>
                </div>
                <div className="card_title title-white">
                    <p>Card Title</p>
                </div>
            </div>

            <div className="card 2">
                <div className="card_image">
                    <img src={foam} alt="image"/>
                    <span>foam</span>
                </div>
                <div className="card_title title-white">
                    <p>Card Title</p>
                </div>
            </div>

            <div className="card 3">
                <div className="card_image">
                    <img src={shine} alt="image"/>
                    <span>shine</span>
                </div>
                <div className="card_title title-white">
                    <p>Card Title</p>
                </div>
            </div>

            <div className="card 4">
                <div className="card_image">
                    <img src={wallet} alt="image"/>
                    <span>wallet</span>
                </div>
                <div className="card_title title-white">
                    <p>Card Title</p>
                </div>
            </div>
        </div>
        </div>

            <section className="alaliics_section">

                <div className="alaliics_section_chart">
                    <h2 className="analitics_header">Analytics in Weeks</h2>
                    <BarChart />
                </div>


               <div className="total_info">
                   <AnalyticsStatistics />
                </div>

            </section>
        </>
    );
};

export default DashboardAdmin;