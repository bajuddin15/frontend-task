import React from "react";

const menusData = [
  {
    title: "Dashboard",
    icon_class: "fas fa-tachometer-alt",
  },
  {
    title: "Transactions",
    icon_class: "fa-regular fa-credit-card",
  },
  {
    title: "Schedules",
    icon_class: "fa-solid fa-calendar-days",
  },
  {
    title: "Users",
    icon_class: "fas fa-user",
  },
  {
    title: "Settings",
    icon_class: "fas fa-gear",
  },
];

const Sidebar = () => {
  return (
    <>
      <div className="logo">
        <span>Board.</span>
      </div>
      <div className="menu">
        {menusData?.map((item) => (
          <li className="active">
            <a href="#">
              <i className={item?.icon_class}></i>
              <span>{item?.title}</span>
            </a>
          </li>
        ))}

        <div className="logout">
          <li>
            <a href="#">
              <span>Help</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Contact Us</span>
            </a>
          </li>
          {/* <li>
            <a href="#">
              <i className="fas fa-sign-out-alt"></i>
              <span>Logout</span>
            </a>
          </li> */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
