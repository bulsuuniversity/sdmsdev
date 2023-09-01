"use client"

import DashboardLayout from "@/components/DashboardLayout";
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';


Chart.register(ArcElement);
const page = () => {

    const data = {
        labels: ['Completed', 'Remaining'],
        datasets: [
            {
                data: [75, 25],
                backgroundColor: ['#ffe297', '#494f56'],
                borderWidth: 1,
            },
        ],
    };
    const data1 = {
        labels: ['Completed', 'Remaining'],
        datasets: [
            {
                data: [25, 75],
                backgroundColor: ['#da6220', '#494f56'],
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
        legend: {
            display: false,
        },
    };
    return (
        <DashboardLayout>
            Reports Percentage
            <div className="flex gap-5">
                <div className="w-44 h-44">
                    <Doughnut data={data} options={options} />
                </div>
                <div className="w-44 h-44">
                    <Doughnut data={data1} options={options} />
                </div>
            </div>
        </DashboardLayout>
    );
}
export default page;