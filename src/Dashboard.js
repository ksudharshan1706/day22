import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MessageIcon from "@mui/icons-material/Message";

export function Dashboard() {
  const Details = [
    {
      heading: "EARNING (MONTHLY)",
      value: "$40,000",
      // icon: <ShoppingBagRoundedIcon />,
    },
    {
      heading: "EARNING (ANNUAL)",
      value: "$215,000",
      // icon: <ShoppingBagRoundedIcon />,
    },
    {
      heading: "TASKS",
      value: "50%",
      // icon: <ShoppingBagRoundedIcon />,
    },
    {
      heading: "PENDING REQUESTS",
      value: "18",
      icon: "<ShoppingBagRoundedIcon />",
    },
  ];
  const stylesheet = {
    width: `50%`,
  };
  // console.log("here");
  return (
    <div className="Details">
      {Details.map((data, id) => {
        return (
          <div className="InnerDiv">
            <div className="EarningDetails">
              <h4>{data.heading}</h4>
              <h2>{data.value}</h2>
            </div>
            <div>
              {data.heading === "EARNING (MONTHLY)" ? (
                <ShoppingBagRoundedIcon />
              ) : null}
              {data.heading === "EARNING (ANNUAL)" ? <AttachMoneyIcon /> : null}
              {data.heading === "TASKS" ? <AssignmentIcon /> : null}
              {data.heading === "PENDING REQUESTS" ? <MessageIcon /> : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
