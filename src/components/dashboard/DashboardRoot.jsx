"use client";
import React from "react";
import Sidebar from "@/components/dashboard/sidebar/Sidebar";
import DashboardHeader from "./DashboardHeader";
import CaptureRoot from "../capture/CaptureRoot";
import { useSelector, useDispatch } from "react-redux";
import { selectCaptureActive } from "@/slices/captureSlices";

const DashboardRoot = ({ children }) => {
  const captureActive = useSelector(selectCaptureActive);
  return (
    <div id="root-container" className=" text-black min-h-[100vh] relative">
      <DashboardHeader />
      <Sidebar />
      <div className="lg:mr-[70px]">{children}</div>
      <div id="capture" className={`absolute top-0 z-30`}>
        <CaptureRoot />
      </div>
    </div>
  );
};

export default DashboardRoot;
