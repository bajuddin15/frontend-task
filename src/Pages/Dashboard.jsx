import React from "react";

const cardData = [
  {
    title: "Total Revenues",
    value: "$1,29,500",
    icon_class: "fa-solid fa-calendar-days",
    bg_color: "#90EE90",
  },
  {
    title: "Total Transactions",
    value: "4,543",
    icon_class: "fa-solid fa-calendar-days",
    bg_color: "#FFFFE0",
  },
  {
    title: "Total Likes",
    value: "9,562",
    icon_class: "fa-solid fa-calendar-days",
    bg_color: "#FFCCCB",
  },
  {
    title: "Total Users",
    value: "845",
    icon_class: "fa-solid fa-calendar-days",
    bg_color: "#ADD8E6",
  },
];

const Dashboard = () => {
  return (
    <div className="dashboard container">
      <div className="row">
        {cardData?.map((item, index) => (
          <div key={index} className="col-sm-12 col-md-6 col-lg-3 my-4">
            <div
              className="card-wrapper d-flex flex-column"
              style={{ background: `${item?.bg_color}` }}>
              <div className="d-flex align-items-center justify-content-between">
                <div></div>
                <i className={item?.icon_class}></i>
              </div>
              <span className="title">{item.title}</span>
              <span className="value">{item?.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
