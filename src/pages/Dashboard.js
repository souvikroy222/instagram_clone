import React from "react";
import Timeline from "../components/Timeline";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function Dashboard() {
  return (
    <div>
      <Header />
      <p>Dashboard</p>
      <Timeline />
      <Sidebar />
    </div>
  );
}

export default Dashboard;
