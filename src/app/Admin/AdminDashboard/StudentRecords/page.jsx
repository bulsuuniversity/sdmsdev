"use client"

import DashboardLayout from "../DashboardLayout";
import { Doughnut, Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import axios from "axios";
import { url, headers } from "@/app/libs/api";
import { useState, useEffect } from "react";
import useLoading from "@/utils/Loading";
import RegsiteredLegends from "./RegsiteredLegends";
import UnregisteredLegends from "./UnregisteredLegends";
import { GrCheckbox } from "react-icons/gr";
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const page = () => {
    const [users, setUsers] = useState()
    const { loading, startLoading, stopLoading } = useLoading()

    const handleGetData = async () => {
        startLoading()
        try {
            const response = await axios.get(`${url}/api/studentAccount`, { headers });
            console.log("get users", response)
            const responseData = response.data
            setUsers(responseData)
            stopLoading()
        } catch (err) {
            console.log(err);
            stopLoading()
        }
    }


    const registeredUser = users && Object.values(users).filter(user => user.status === "Registered")
    const unRegisteredUser = users && Object.values(users).filter(user => user.status !== "Registered")
    const registered = users && Math.round((registeredUser.length / users.length) * 100)
    const unRegistered = users && Math.round((unRegisteredUser.length / users.length) * 100)

    const CBA = users ? (Object.values(registeredUser).filter(user => user.college === "CBA")).length : 1
    const CIT = users ? (Object.values(registeredUser).filter(user => user.college === "CIT")).length : 1
    const COED = users ? (Object.values(registeredUser).filter(user => user.college === "COED")).length : 1
    const CICS = users ? (Object.values(registeredUser).filter(user => user.college === "CICS")).length : 1
    const COE = users ? (Object.values(registeredUser).filter(user => user.college === "COE")).length : 1

    const RegsiteredData = { CBA, CIT, COED, CICS, COE }

    const unCBA = users ? (Object.values(unRegisteredUser).filter(user => user.college === "CBA")).length : 1
    const unCIT = users ? (Object.values(unRegisteredUser).filter(user => user.college === "CIT")).length : 1
    const unCOED = users ? (Object.values(unRegisteredUser).filter(user => user.college === "COED")).length : 1
    const unCICS = users ? (Object.values(unRegisteredUser).filter(user => user.college === "CICS")).length : 1
    const unCOE = users ? (Object.values(unRegisteredUser).filter(user => user.college === "COE")).length : 1
    const Others = users ? unRegisteredUser.length - (unCBA + unCIT + unCOED + unCICS + unCOE) : 1

    const unRegsiteredData = { unCBA, unCIT, unCOED, unCICS, unCOE, Others }

    useEffect(() => {
        handleGetData()
    }, [])

    const data = {
        labels: ['Registered Students', 'Unregistered Students'],
        datasets: [
            {
                data: [registered, unRegistered],
                backgroundColor: ['#780000', '#494f56'],
                borderWidth: 1,
            },
        ],
    };
    const data1 = {
        labels: ['Unregistered Students', 'Registered Students'],
        datasets: [
            {
                data: [unRegistered, registered],
                backgroundColor: ['#8d8f84', '#494f56'],
                borderWidth: 1,
            },
        ],
    };
    const options = {
        cutout: '50%',
        rotation: -90,
        circumference: 180,
        maintainAspectRatio: true,
        responsive: true,
        plugins: {
            legend: false,
            datalabels: false
        }
    };

    const pieOptions = {
        responsive: true,
        plugins: {
            legend: false,
            datalabels: {
                display: 'auto',
                color: 'black',
                formatter: (value, context) => {
                    return `${context.chart.data.labels[context.dataIndex]}: ${registeredUser && Math.round((value / registeredUser.length) * 100)}%`;
                },
            },
        }
    };

    const pieOptions2 = {
        responsive: true,
        plugins: {
            legend: false,
            datalabels: {
                display: 'auto',
                color: 'black',
                formatter: (value, context) => {
                    return `${context.chart.data.labels[context.dataIndex]}: ${unRegisteredUser && Math.round((value / unRegisteredUser.length) * 100)}%`;
                },
            },
        }
    };

    const pieData = {
        labels: ['CBA',
            'CIT',
            'COED',
            'CICS',
            'COE',
        ],
        datasets: [
            {
                label: 'Student Count',
                data: [CBA, CIT, COED, CICS, COE,],
                backgroundColor: [
                    'rgb(202, 138, 4)',
                    'rgb(22, 163, 74)',
                    'rgb(37, 99, 235)',
                    'rgb(55, 65, 81)',
                    'rgb(225, 139, 34)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const UnpieData = {
        labels: ['CBA',
            'CIT',
            'COED',
            'CICS',
            'COE',
            'Unknown'],
        datasets: [
            {
                label: 'Student Count',
                data: [unCBA, unCIT, unCOED, unCICS, unCOE, Others],
                backgroundColor: [
                    'rgb(202, 138, 4)',
                    'rgb(22, 163, 74)',
                    'rgb(37, 99, 235)',
                    'rgb(55, 65, 81)',
                    'rgb(225, 139, 34)',
                    'rgb(166, 108, 152)'
                ],
                borderWidth: 1,
            },
        ],
    };
    return (
        <DashboardLayout>
            <div className="bg-blue-100 px-14">
                {loading ? <div>loading...</div> :
                    <div className="overflow-y-auto grid justify-center gap-10 max-h-96 pb-6">
                        <h2 className="font-bold flex py-4 justify-center">
                            ACCOUNT STATUS
                        </h2>
                        <div className="flex justify-center gap-5">
                            <div>
                                <div className="w-52 relative h-44">
                                    <Doughnut data={data} options={options} />
                                    <div className="absolute text-4xl top-24 left-14">{registered}&#37;</div>
                                </div>
                                <div className="flex items-center gap-2 justify-center">
                                    <GrCheckbox className="bg-red-800" />
                                    Registered Students
                                </div>
                            </div>
                            <div>
                                <div className="w-52 relative h-44">
                                    <Doughnut data={data1} options={options} />
                                    <div className="absolute text-4xl top-24 left-14">{unRegistered}&#37;</div>
                                </div>
                                <div className="flex items-center gap-2 justify-center">
                                    <GrCheckbox className="bg-gray-800" />
                                    Unregistered Students
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg mx-5 p-2 grid justify-center gap-2">
                            <div className="flex gap-6">
                                <div className="flex gap-6">
                                    <span className="grid justify-center"><p>Registered Students Count</p>
                                        <p className="font-bold text-center">{registeredUser && registeredUser.length}</p>
                                    </span>
                                </div>
                                <div className="flex gap-6">
                                    <span className="grid justify-center gap-6"><p>Unregistered Students Count</p>
                                        <p className="font-bold text-center">{unRegisteredUser && unRegisteredUser.length}</p>
                                    </span>
                                </div>
                            </div>
                            <div className="grid justify-center font-bold">
                                <p>Student Population:</p>
                                <p className="text-center">{registeredUser && registeredUser.length + unRegisteredUser.length}</p>
                            </div>
                        </div>
                        <h2 className="font-bold flex py-4 justify-center">
                            Registered Students &#40;by College&#41;
                        </h2>
                        <div className="flex items-center p-5 gap-5 ">
                            <div className="w-60 h-60 m-4">
                                <Pie data={pieData} options={pieOptions} />
                            </div>
                            {users && <RegsiteredLegends data={RegsiteredData} />}
                        </div>
                        <h2 className="font-bold flex py-4 justify-center">
                            Unregistered Students &#40;by College&#41;
                        </h2>
                        <div className="flex items-center p-5 gap-5 ">
                            <div className="w-60 h-60">
                                <Pie data={UnpieData} options={pieOptions2} />
                            </div>
                            {users && <UnregisteredLegends data={unRegsiteredData} />}
                        </div>
                    </div>
                }
            </div>
        </DashboardLayout>
    );
}
export default page;