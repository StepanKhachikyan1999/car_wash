// import "./styles.css";
import React from "react";
import {
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Area
} from "recharts";

const data = [
    {
        name: "Jan",
        uv: 590,
        pv: 800,
        amt: 1400,
        cnt: 490
    },
    {
        name: "Feb",
        uv: 868,
        pv: 967,
        amt: 1506,
        cnt: 590
    },
    {
        name: "Mar",
        uv: 1397,
        pv: 1098,
        amt: 989,
        cnt: 350
    },
    {
        name: "Page D",
        uv: 1480,
        pv: 1200,
        amt: 1228,
        cnt: 480
    },
    {
        name: "Apr",
        uv: 1520,
        pv: 1108,
        amt: 1100,
        cnt: 460
    },
    {
        name: "May",
        uv: 1400,
        pv: 680,
        amt: 1700,
        cnt: 380
    },
    {
        name: "Jun",
        uv: 1400,
        pv: 680,
        amt: 1700,
        cnt: 380
    },
    {
        name: "July",
        uv: 1400,
        pv: 680,
        amt: 1700,
        cnt: 380
    },
    {
        name: "Aug",
        uv: 1400,
        pv: 680,
        amt: 1700,
        cnt: 380
    },
    {
        name: "Sep",
        uv: 1400,
        pv: 680,
        amt: 1700,
        cnt: 380
    },
    {
        name: "Oct",
        uv: 1400,
        pv: 680,
        amt: 1700,
        cnt: 380
    },
    {
        name: "Nov",
        uv: 1400,
        pv: 680,
        amt: 1700,
        cnt: 380
    },
    {
        name: "Dec",
        uv: 1400,
        pv: 680,
        amt: 1700,
        cnt: 380
    }
];

export default function AnaliticsUserDashboard() {
    return (
        <ComposedChart
            width={1000}
            height={300}
            data={data}
            margin={{
                top: 20,
                right: 80,
                bottom: 20,
                left: 20
            }}
        >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis
                dataKey="name"
                label={{ value: "Pages", position: "insideBottomRight", offset: 0 }}
                scale="band"
            />
            <YAxis label={{ value: "Index", angle: -90, position: "insideLeft" }} />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
            {/*<Bar dataKey="pv" barSize={20} fill="#413ea0" />*/}
            <Line  type="monotone" animationDuration={300} dataKey="uv" stroke="#A71D2C" />
        </ComposedChart>
    );
}
