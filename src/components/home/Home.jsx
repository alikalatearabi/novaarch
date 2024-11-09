// "use client";
import { Users } from "lucide-react";
import React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import HomeSheetCard from "./HomeSheetCard";
import { Button } from "../ui/button";
import LatesCapture from "./LatesCapture";
import MembersModal from "./MembersModal";
// import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";
import Link from "next/link";

const Home = () => {
  // const router = useRouter();

  return (
    <div id="homeContainer" className="px-10 h-[100%]">
      <header id="projectTitle" className="mt-10 flex justify-between bg-white pb-5">
        <div id="projectName&Address" className="flex flex-col gap-3">
          <span className="text-[25px]">پروژه شماره 2</span>
          <span className="text-[13px] text-gray-700">
            تهران، منطقه ۶، خیابان فخرآباد، پلاک ۱۲۳
          </span>
        </div>
        <div id="projectMemeber">
          {/* add tooltip */}
          <MembersModal />
        </div>
      </header>
      <div id="overFlow" className="overflow-y-auto h-[90vh]">
        <div id="plansSection" className="mt-10 px-10 z-10 bg-white">
          <header className="flex justify-between">
            <span className="text-[20px]">نقشه های فعال</span>
            <span>
              <Button className="bg-blue-100 text-blue-700 hover:bg-blue-200">مشاهده همه</Button>
            </span>
          </header>
          <div id="plans" className="mt-5 mr-10 cursor-pointer overflow-auto p-5">
            <HomeSheetCard />
          </div>
        </div>
        <div id="captureSection" className="mt-24 px-10 pb-40">
          <header className="flex justify-between">
            <span className="text-[20px]">آخرین کپچر ها</span>
            <span>
              <Link href={"/images"}>
                <Button className="bg-blue-100 text-blue-700 hover:bg-blue-200">مشاهده همه</Button>
              </Link>
            </span>
          </header>
          <div id="latesCaptures" className="mt-5 mr-10 cursor-pointer overflow-auto p-5">
            <LatesCapture />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
