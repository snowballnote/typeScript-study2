import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import { useState, useEffect } from "react";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function BarChart() {
    const [chartData, setChartData] = useState<{
        labels: string[], 
        values1: number[],
        values2: number[]
    }>({
            labels:[], 
            values1:[],
            values2:[]
    });

    useEffect(() => {
        fetch("http://localhost:8080/bar")
        .then((res) => res.json())
        .then((result) => {
            // result(백앤드 데이터셋) -> 프론트가 필요로 하는(차트)가 필요로 하는 데이터셋 형태가 다르다
            // result.map()등을 이용하여 원하는 테이터셋으로 변경
            console.log(result);
            setChartData(result);
        })
        .catch((err) => {alert("데이터 가져오기 실패" + err)})
    },[]);

    const data = {
        labels: chartData.labels, // [] -> useEffect fetch -> ["1월", "2월", "3월", "4월", "5월"]
        datasets: [
            {
                label: "매출",
                data: chartData.values1, // [] -> useEffect fetch -> [150, 200, 220, 300, 210]
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: "순이익",
                data: chartData.values2,
                backgroundColor: 'rgba(53, 162, 235, 0.5)'
            }
        ], // 데이터 
    };

    return (
        <Bar data={data} />
    );
}
