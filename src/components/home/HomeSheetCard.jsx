import React, { Fragment } from "react";
import Image from "next/image";
import Plans from "../../../public/images/plansImage.jpg";

const sheetsData = [
  {
    title: "پشت بام",
    date: "آخرین فعالیت 1403/05/18",
    image: Plans,
  },
  {
    title: "پشت بام",
    date: "آخرین فعالیت 1403/05/18",
    image: Plans,
  },
  {
    title: "پشت بام",
    date: "آخرین فعالیت 1403/05/18",
    image: Plans,
  },
  {
    title: "پشت بام",
    date: "آخرین فعالیت 1403/05/18",
    image: Plans,
  },
  {
    title: "پشت بام",
    date: "آخرین فعالیت 1403/05/18",
    image: Plans,
  },
];

const HomeSheetCard = () => {
  return (
    <div id="sheetsCardContainer" className="inline-flex gap-5">
      {sheetsData.map((sheet, index) => {
        return (
          <div key={index} className="flex gap-5 hover:shadow w-[400px] items-center p-4 rounded-lg">
            <div id="plansImage">
              <Image src={sheet.image} width={150} height={50} alt="test"/>
            </div>
            <div id="plansDetail" className="flex flex-col gap-4">
              <span className="text-[15px]">پشت بام</span>
              <span className="text-[12px] text-gray-500">آخرین فعالیت 1403/05/18</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HomeSheetCard;
