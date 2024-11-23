import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Navbar from "@/components/Navbar";
function page() {
  const data = [
    {
      title: "Nidhish Rathore",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-lg font-normal ">
            RA2411033010097
          </p>

          <p className="text-white dark:text-neutral-200 text-xs md:text-lg font-normal ">
            nr0358@srmist.edu.in
          </p>
          <p className="text-white dark:text-neutral-200 text-xs md:text-lg font-normal ">
            +91 870-8295706
          </p>
        </div>
      ),
    },
    {
      title: "Riddhima Singh",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-lg font-normal ">
            RA2411033010107
          </p>

          <p className="text-white dark:text-neutral-200 text-xs md:text-lg font-normal ">
          rs4686@srmist.edu.in
          </p>
          <p className="text-white dark:text-neutral-200 text-xs md:text-lg font-normal ">
          +91 708-6141199
          </p>
        </div>
      ),
    },
    {
      title: "Talluri Mourya Sree",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-lg font-normal ">
            RA2411033010097
          </p>

          <p className="text-white dark:text-neutral-200 text-xs md:text-lg font-normal ">
          mt6216@srmist.edu.in
          </p>
          <p className="text-white dark:text-neutral-200 text-xs md:text-lg font-normal ">
        +91 799-3751014
          </p>
        </div>
      ),
    },
    {
      title: "Soumya Pandey",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-lg font-normal ">
            RA2411033010097
          </p>

          <p className="text-white dark:text-neutral-200 text-xs md:text-lg font-normal ">
          sp0607@srmist.edu.in
          </p>
          <p className="text-white dark:text-neutral-200 text-xs md:text-lg font-normal ">
          +91 886-0294972
          </p>
        </div>
      ),
    },
    {
      title: "Ziya Khan",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-lg font-normal ">
            RA2411033010095
          </p>

          <p className="text-white dark:text-neutral-200 text-xs md:text-lg font-normal ">
          zk8757@srmist.edu.in
          </p>
          <p className="text-white dark:text-neutral-200 text-xs md:text-lg font-normal ">
          +91 940-7514820
          </p>
        </div>
      ),
    },
  ];
  return (
    <div>
       <div className="fixed top-0 left-0 w-full z-10 bg bg-white  bg-opacity-15 p-4 text-center fixed-content">
   

   <Navbar />

 </div>
      <div className="w-full ">
      <Timeline data={data} />
    </div>
    </div>
  )
}

export default page
