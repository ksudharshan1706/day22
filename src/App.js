import logo from "./logo.svg";
import "./App.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Dashboard } from "./Dashboard";
import { CardColour } from "./CardColour";
import { Illustrations } from "./Illustrations";
import { Project } from "./Project";
import { Development } from "./Development";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top", //as const,
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];
var value = 0;
var sum = false;
export const data1 = {
  labels,

  datasets: [
    // {
    //   label: "Dataset 1",
    //   data: labels.map(() => 1000),
    //   borderColor: "rgb(255, 99, 132)",
    //   backgroundColor: "rgba(255, 99, 132, 0.5)",
    // },
    {
      label: "Dataset 1",

      data: labels.map(() => {
        if (sum) {
          value -= 100;
          sum = false;
        } else {
          sum = true;
          value += 200;
        }
        return value;
      }),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["direct", "social", "referal"],
  datasets: [
    {
      label: "# of Votes",
      data: [55, 30, 15],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

function App() {
  return (
    <div className="App">
      <h1>Dashboard</h1>
      <Dashboard />
      <div className="Cards">
        <div className="projectCard">
          <div className="marginData">
            <Linegraph />
            <Project />
            <CardColour />
          </div>
        </div>
        <div className="projectCard1">
          <div className="marginData">
            <Doughnutgraph />
            <Illustrations />
            <Development />
          </div>
        </div>
      </div>
      {/* <Line options={options} data={data} /> */}
    </div>
  );
}

function Linegraph() {
  return (
    <div className="card-body">
      <b>
        <div className="card-header">Earnings Overview</div>
      </b>
      <div className="linegraph">
        <Line options={options} data={data1} />;
      </div>
    </div>
  );
}
function Doughnutgraph() {
  return (
    <div className="card-body">
      <b>
        <div className="card-header">Revenue Source</div>
      </b>
      <div className="doughnutgraph">
        <Doughnut data={data} />
      </div>
    </div>
  );
}

export default App;
