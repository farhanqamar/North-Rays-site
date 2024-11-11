import React from "react";
import Image from "next/image";
import outcome from "../../../../public/learning.jpg";
const Outcomes = () => {
  return (
    <>
      <div className="w-full py-20 mt-20 bg-slate-200">
        <div className=" md:w-4/6 mx-auto my-[100px] px-5">
          <div className="md:flex items-center justify-between">
            <div className="md:w-2/5">
              <Image src={outcome} alt="outcomes" width={600} height={700} />
            </div>
            <div className="md:w-1/2 space-y-8">
              <h3 className="font-bold">Learner outcomes on Coursera</h3>
              <p className="text-[16px]">
                77% of learners report career benefits, such as new skills,
                increased pay, and new job opportunities. 2023 Coursera Learner
                Outcomes Report.
              </p>
              <button className="bg-white border border-[#0056D2] text-[#0056D2] py-3 px-5 text-[18px]">
                Try Coursera For Business
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Outcomes;
