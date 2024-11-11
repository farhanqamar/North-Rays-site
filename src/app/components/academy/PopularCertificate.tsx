import React from "react";
import Image from "next/image";
import imge from "../../../../public/office.webp";
import { FcGoogle } from "react-icons/fc";
import { StaticImageData } from "next/image";

interface CertificateProps {
  para: string;
  heading: string;
  para2: string;
  btn1: string;
  btn2: string;
}
const PopularCertificate = ({
  para,
  heading,
  para2,
  btn1,
  btn2,
}: CertificateProps) => {
  return (
    <>
      <div className="xl:w-4/6 px-10 mx-auto my-[100px]">
        <div>
          <div className="py-2">
            <p className="font-bold">{para}</p>
            <h3 className="font-bold py-2">{heading}</h3>
            <p>{para2}</p>
          </div>

          <div className="flex flex-wrap justify-center">

            <div className="lg:w-1/4">
              <Card
                img={imge} // Pass the imported image
                icon={<FcGoogle />}
                caption="Google"
                para="Google Data Analyst"
                para2="Professional Certificate"
              />
            </div>

              <div className="lg:w-1/4">
              <Card
                img={imge} // Pass the imported image
                icon={<FcGoogle />}
                caption="Google"
                para="Google Data Analyst"
                para2="Professional Certificate"
              />
            </div>

            <div className="lg:w-1/4">
              <Card
                img={imge} // Pass the imported image
                icon={<FcGoogle />}
                caption="Google"
                para="Google Data Analyst"
                para2="Professional Certificate"
              />
            </div>

              <div className="lg:w-1/4">
              <Card
                img={imge} // Pass the imported image
                icon={<FcGoogle />}
                caption="Google"
                para="Google Data Analyst"
                para2="Professional Certificate"
              />
            </div>
          </div>
        </div>
        <div className="py-5">
          <button className="bg-[#0056D2] text-white py-3 px-5 md:text-[18px]">
            {btn1}
          </button>
          <button className="bg-white border border-[#0056D2] text-[#0056D2] py-3 px-5 md:mx-5 md:text-[18px]">
            {btn2}{" "}
          </button>
        </div>
      </div>
    </>
  );
};

interface cardprops {
  img: StaticImageData;
  icon: JSX.Element;
  caption: string;
  para: string;
  para2: string;
}
const Card = ({ img, icon, caption, para, para2 }: cardprops) => {
  return (
    <div>
      <div className="shadow-lg p-3">
        <Image
          className="rounded-xl"
          src={img}
          alt="microsoft"
          width={300}
          height={300}
        />
        <div className="flex py-3">
          {icon}
          <p className="text-[14px] px-2">{caption}</p>
        </div>

        <div>
          <p className="font-bold">{para}</p>
          <p className="text-[14px]">{para2}</p>
        </div>
      </div>
    </div>
  );
};

export default PopularCertificate;
