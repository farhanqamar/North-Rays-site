import React from "react";
import { FcGoogle } from "react-icons/fc";
const CourseEnroll = () => {
  return (
    <>
      <div className="flex py-6 border-2">
        <FcGoogle className="text-[70px] px-[20px]" />
        <div>
          <div>
            <p className="text-[16px]">Google Analytics</p>
            <p className="text-[16px]">Professional Certificates</p>
            <p className="text-[14px] font-bold">By Google</p>
          </div>
          <div>
            <p className="text-[16px]">Includes:</p>
            <br />
            <p className="text-[16px]">
              Access to <b>Google Assistance</b>
            </p>
          </div>

          <div>
            <p className="text-[16px]">No Commitment</p>
            <p className="text-[16px]">Cancel Anytime</p>
          </div>
          <p className="text-[#0000FF] text-sm py-5">Remove from Cart</p>
        </div>
      </div>
    </>
  );
};

export default CourseEnroll;
