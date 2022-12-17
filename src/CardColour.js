export function CardColour() {
  const carddata = [
    { colourDesc: "primary", color: "#4e73df" },
    { colourDesc: "success", color: "#1cc88a" },
    { colourDesc: "info", color: "#36b9cc" },
    { colourDesc: "Warning", color: "#f6c23e" },
    { colourDesc: "Danger", color: "#e74a3b" },
    { colourDesc: "Secondary", color: "#858796" },
    { colourDesc: "Light", color: "#f8f9fc" },
    { colourDesc: "Dark", color: "#5a5c69" },
  ];

  return (
    <div className="colorMain">
      {carddata.map((data) => {
        return (
          // <div className="colorcard">
          //   <h4>{data.colourDesc}</h4>
          //   <h4>{data.color}</h4>
          // </div>
          <Card data={data} />
        );
      })}
    </div>
  );
}
function Card({ data }) {
  const stylesheet = {
    backgroundColor: data.color,
    color: "white",
    height: "100%",
  };
  return (
    <div style={stylesheet} className="colorcard">
      <h4>{data.colourDesc}</h4>
      <h4>{data.color}</h4>
    </div>
  );
}
