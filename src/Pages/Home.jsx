import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import Dashboard from "./Dashboard";
import { UserState } from "../UserContext";

const Home = () => {
  const navigate = useNavigate();

  const { userInfo, setUserInfo } = UserState();

  useEffect(() => {
    if (userInfo?.name) {
      navigate("/auth");
    }
  }, []);
  return (
    <div className="home">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main-content">
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
