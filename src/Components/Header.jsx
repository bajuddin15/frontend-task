import React from "react";
import { UserState } from "../UserContext";

const Header = () => {
  const { userInfo, setUserInfo } = UserState();
  console.log(Object.keys(userInfo).length, "bbbbbbbbbbbbbbbb");
  return (
    <div className="container header-wrapper">
      <div className="header-title">
        <span>Dashboard</span>
      </div>
      <div className="user-info">
        <div className="search-box">
          <input type="text" placeholder="Search" />
          <i className="fa-solid fa-search"></i>
        </div>
        <div className="bell-icon">
          <i class="fa-regular fa-bell"></i>
        </div>
        <div
          className="profile-img d-flex flex-row mx-4"
          style={{ gap: "10px" }}>
          <img src={userInfo?.picture} alt="" />
          <span style={{ fontSize: "13px" }}>{userInfo?.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
