import React from "react";
import Sidebar from "../components/Sidebar";
import MainSection from "../components/MainSection";

const Home = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <MainSection />
    </div>
  );
};

export default Home;
