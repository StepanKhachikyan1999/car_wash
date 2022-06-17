// styles
import "./UserDashboard.scss"

import React from 'react';
import Navbar from "../../components/navbar/Navbar";

// custom imports
// import BarChart from "../../components/chart/BarChart"
// import AnaliticsStatistic from "../../components/chart/AnaliticsStatistic";
import AnaliticsUserDashboard from "../../components/chart/AnaliticsUserDashboard";
import AnaliticsUserDashboardExpenses from "../../components/chart/AnaliticsUserDashboardExpenses";

const UserDashboard = () => {
    return (
        <>
            <Navbar/>

            <section className="alaliics_section_user">

                <div className="total_info_income">
                    <h5>եկամուտներ</h5>
                    <AnaliticsUserDashboard />
                </div>

                <div className="total_info_expenses">
                    <h5>ծախսեր</h5>
                    <AnaliticsUserDashboardExpenses />
                </div>

            </section>
        </>
    );
};

export default UserDashboard;