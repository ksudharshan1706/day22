import { useState } from "react";

// function Project() {
//   const projectData = [
//     { name: "Server Migration", percent: "20" },
//     { name: "Sales Tracking", percent: "40" },
//     { name: "Customer Database", percent: "60" },
//     { name: "Payout Details", percent: "80" },
//     { name: "Account Setup", percent: "100" },
//   ];
//   return (
//     <div>
//       <div className="card-header">PROJECTS</div>
//       <div className="card-body">
//         {projectData.map((data, index) => {
//           return <Bars data={data} key={index} />;
//         })}
//       </div>
//     </div>
//   );
// }
// function Bars({ data }) {
//   let stylesheet = {
//     width: `${data.percent}%`,
//     background:
//       data.percent == 20
//         ? "red"
//         : data.percent > 20 && data.percent <= 40
//         ? "yellow"
//         : data.percent > 40 && data.percent <= 60
//         ? "blue"
//         : data.percent > 60 && data.percent <= 80
//         ? "purple"
//         : data.percent > 80
//         ? "green"
//         : "black",
//   };
//   console.log(data.percent);
//   return (
//     <div>
//       <div className="projects-data-div">
//         <div>{data.name}</div>
//         <div>{data.percent}%</div>
//       </div>
//       <div className="projects">
//         <div style={stylesheet} className="barlength"></div>
//       </div>
//     </div>
//   );
// }
export function Project() {
  const projectData = [
    { name: "Server Migration", percent: "20" },
    { name: "Sales Tracking", percent: "40" },
    { name: "Customer Database", percent: "60" },
    { name: "Payout Details", percent: "80" },
    { name: "Account Setup", percent: "100" },
  ];

  let [width, setwidth] = useState(20);
  const stylesheet = {
    width: `${width}%`,
  };
  return (
    <div className="card-body">
      <b>
        <div className="card-header">Projects</div>
      </b>
      <div className="barInfo">
        {projectData.map((data, index) => {
          return (
            <div>
              {/* {setwidth(data.percent)} */}
              <div className="projects-data-div">
                <h5>{data.name}</h5>
                <h5>{data.percent}%</h5>
              </div>
              <div className="projects">
                <div style={stylesheet} className="barlength"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
