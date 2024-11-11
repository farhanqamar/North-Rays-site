import React from "react";
import Image from "next/image";
const Page = () => {
  interface BlogImage {
    img: string;
    p: string;
    para: string;
    btn: string;
  }
  const arrayImg: BlogImage[] = [
    {
      img: "/blogImage.png",
      p: "Blog",
      para: "Why data standards matter & why they are important",
      btn: "Read More...",
    },
    {
      img: "/blogImage.png",
      p: "Blog",
      para: "Why data standards matter & why they are important",
      btn: "Read More...",
    },
    {
      img: "/blogImage.png",
      p: "Blog",
      para: "Why data standards matter & why they are important",
      btn: "Read More...",
    },
    {
      img: "/blogImage.png",
      p: "Blog",
      para: "Why data standards matter & why they are important",
      btn: "Read More...",
    },
    {
      img: "/blogImage.png",
      p: "Blog",
      para: "Why data standards matter & why they are important",
      btn: "Read More...",
    },
    {
      img: "/blogImage.png",
      p: "Blog",
      para: "Why data standards matter & why they are important",
      btn: "Read More...",
    },
    {
      img: "/blogImage.png",
      p: "Blog",
      para: "Why data standards matter & why they are important",
      btn: "Read More...",
    },
    {
      img: "/blogImage.png",
      p: "Blog",
      para: "Why data standards matter & why they are important",
      btn: "Read More...",
    },
  ];
  return (
    <>
      <div
        className="bg-container"
        style={{
          backgroundImage: `url("/bgBlog.webp")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "60vh",
        }}
      >
        <div className="md:w-1/2 text-white m-auto py-20">
          <p className="text-white">Blog</p>
          <h1 className="font-extralight">
            Blogs Tech experts latest: Innovations in digital enterprise
          </h1>
        </div>
      </div>
      <section className="flex w-5/6 justify-evenly mx-auto py-20">
        <div className="grid grid-cols-2 gap-6">
          {arrayImg.map((item, index) => (
            <div key={index} className="flex flex-col border rounded-md">
         <Image
  src={item.img}
  alt="blog"
  width={100}  // Set the desired width here
  height={100} // Set the desired height here
  className="object-cover rounded-md w-[550px] h-[300px]"
/>

              <div className="p-5">
                <p className="mt-2 text-md">{item.p}</p>
                <p className="font-bold">{item.para}</p>
                <p className="mt-2 text-[16px] text-[#FA8500]">{item.btn}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="">
          <p className="font-bold text-md py-2">Search</p>
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 w-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
          <button className="px-4 py-2 mx-2 bg-black text-white font-semibold rounded-lg hover:bg-white focus:outline-none focus:ring-2 hover:text-black border  border-black">
            Search
          </button>
          <p className="font-bold text-md py-3">Catagory</p>
          <ul className="border">
            <li className="border-b-2 p-3">Big Data(144)</li>
            <li className="border-b-2 p-3">DevOps (141)</li>
            <li className="border-b-2 p-3">Digital Marketing (137)</li>
            <li className="border-b-2 p-3">
              mobile app development services (153)
            </li>
            <li className="border-b-2 p-3">technical support services (143)</li>
            <li className="p-3">Uncategorized (155)</li>
          </ul>
        </div>
      </section>
      <section>
        <div
          className="bg-container"
          style={{
            backgroundImage: `url("/bg2.svg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "60vh",
          }}
        >
          <div className="md:w-4/5 m-auto text-black ">
          <div className="w-3/5">

            <h4 className="text-black font-medium py-10">
              Have Any Question ? Write a Message
            </h4>
            <div>
              <div className="flex">
                <div className="w-full md:w-1/2">
                  <input
                    className="bg-transparent border-b border-black py-[10px] w-full"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="w-full md:w-1/2 mx-5">
                  <input
                    className="bg-transparent border-b border-black py-[10px] w-full"
                    type="text"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="flex pt-5">
                <div className="w-full md:w-1/2">
                  <input
                    className="bg-transparent border-b border-black py-[10px] w-full"
                    type="text"
                    placeholder="Phone"
                  />
                </div>
                <div className="w-full md:w-1/2  mx-5">
                  <input
                    className="bg-transparent border-b border-black py-[10px] w-full"
                    type="text"
                    placeholder="Subject"
                  />
                </div>
              </div>
              <div className="w-full pt-5">
                <input
                  className="bg-transparent border-b border-black pb-[60px] w-full"
                  type="text"
                  placeholder="Message"
                />
              </div>
            </div>
            <button className="bg-black text-white p-3 rounded-3xl mt-5">Send Message</button>
          </div>
        </div></div>
      </section>
      <section>
      </section>
    </>
  );
};
export default Page;