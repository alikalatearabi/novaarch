"use client";
import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// import { usePathname } from "next/navigation";
//ui imports -------------
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { HardHat, LogOut, MoreHorizontal, NotebookPen, ScanEye, Settings } from "lucide-react";
import SidebarButton from "./SidebarButton";
import { usePathname } from "next/navigation";
// import logo from "../../../../assets/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { RsetCaptureActive, selectCaptureActive } from "@/slices/captureSlices";

const sideBarHeader = (pathname) => {
  if (pathname === "/textSearch") {
    return "جستجوی متنی";
  } else if (pathname === "/advanceSearch") {
    return "جستجوی پیشرفته";
  } else {
    return <div className="flex justify-center me-10">{/* <img src={logo} alt="Logo" /> */}</div>;
  }
};

const SidebarDesktop = (props) => {
  const dispatch = useDispatch();
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();
  const captureActive = useSelector(selectCaptureActive);

  let isActive;
  const buttonClass = `w-full flex justify-between gap-4 rounded-none hover:text-blue-500 ${
    false ? "bg-gradient-to-r bg-blue-200  text-black hover:bg-blue-200 " : ""
  }`;

  return (
    <aside
      className={`w-[65px] hover:w-[250px] transition-all 0.2s max-w-xs h-[90vh] fixed z-40 bg-white shadow ${props.className}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="h-full">
        <div className={`${true ? "mt-10" : "mt-3"}`}>
          {true && (
            <div className="flex flex-col gap-3 w-full">
              {props.sidebarItems.links.map((item, index) => {
                isActive = pathname === item.href;
                return (
                  <Link key={index} href={item.href}>
                    {(index === 4 || index === 6) && <hr className=" mx-2 mb-3" />}
                    <SidebarButton icon={item.icon} className={buttonClass} iconActive={isActive}>
                      <span className={`${isExpanded ? "block opacity-100 transition-opacity 0.3s" : "transition-opacity 0.1s ease opacity-0 "}`}>
                        {item.label}
                      </span>
                    </SidebarButton>
                  </Link>
                );
              })}
              <hr className="mx-2" />
              <div id="capture&FeildNote">
                <div
                  id="capture"
                  onClick={() => {
                    dispatch(RsetCaptureActive(true));
                  }}
                >
                  <SidebarButton
                    icon={ScanEye}
                    iconActive={captureActive}
                    className={`${buttonClass}`}
                    // onClickProps={() => {
                    //   dispatch(RsetCaptureActive(true));
                    // }}
                  >
                    <div
                      className={`flex justify-start${
                        isExpanded ? "block opacity-100 transition-opacity 0.3s" : "transition-opacity 0.1s ease opacity-0 "
                      }`}
                    >
                      <span> عکس برداری</span>
                    </div>
                  </SidebarButton>
                </div>
                <div id="feildNote">
                  <SidebarButton icon={NotebookPen} className={`${buttonClass} `}>
                    <div
                      className={`flex justify-start${
                        isExpanded ? "block opacity-100 transition-opacity 0.3s" : "transition-opacity 0.1s ease opacity-0 "
                      }`}
                    >
                      <span>نت برداری</span>
                    </div>
                  </SidebarButton>
                </div>
              </div>
            </div>
          )}

          <div className="absolute left-0 bottom-4 w-full">
            <Popover>
              <PopoverTrigger asChild>
                <Fragment>
                  <hr className="mx-2 mb-2" />
                  <Button variant="ghost" className="w-full justify-start flex gap-4 rounded-none hover:text-blue-500">
                    <div className="flex justify-between items-center w-full">
                      <div className="flex items-center gap-2">
                        <HardHat />
                        <span
                          className={`   ${isExpanded ? "block opacity-100 transition-opacity 0.3s" : "transition-opacity 0.1s ease opacity-0 "}`}
                        >
                          تیم
                        </span>
                      </div>
                    </div>
                  </Button>
                </Fragment>
              </PopoverTrigger>
              <PopoverContent className="mb-2 w-56 p-3 ">
                <div className="space-y-1">
                  <Link to="/">
                    <SidebarButton size="sm" icon={Settings} className="w-full" iconActive={isActive}>
                      تنظیمات
                    </SidebarButton>
                  </Link>

                  <Button
                    size="sm"
                    className="w-full bg-red-500 hover:bg-red-400"
                    onClick={() => {
                      localStorage.removeItem("token");
                      navigate("/Login");
                    }}
                  >
                    <span>
                      <LogOut />
                    </span>
                    <span>خروج</span>
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SidebarDesktop;
