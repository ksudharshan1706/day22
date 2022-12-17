import logo from "./logo.svg";
import "./App.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Dashboard } from "./Dashboard";
import { CardColour } from "./CardColour";
import { Illustrations } from "./Illustrations";
import { Project } from "./Project";
import { Development } from "./Development";
// import { width } from "@mui/system";
// import faker from "faker";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: "top", //as const,
//     },
//     title: {
//       display: true,
//       text: "Chart.js Line Chart",
//     },
//   },
// };

// const labels = ["January", "February", "March", "April", "May", "June", "July"];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: "Dataset 1",
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: "rgb(255, 99, 132)",
//       backgroundColor: "rgba(255, 99, 132, 0.5)",
//     },
//     {
//       label: "Dataset 2",
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: "rgb(53, 162, 235)",
//       backgroundColor: "rgba(53, 162, 235, 0.5)",
//     },
//   ],
// };

function App() {
  return (
    <div className="App">
      <h1>Dashboard</h1>
      <Dashboard />
      <div className="Cards">
        <div className="projectCard">
          <div className="marginData">
            <Project />
            <CardColour />
          </div>
        </div>
        <div className="projectCard1">
          <div className="marginData">
            <Illustrations />
            <Development />
          </div>
        </div>
      </div>
      {/* <Line options={options} data={data} /> */}
    </div>
  );
}

export default App;
