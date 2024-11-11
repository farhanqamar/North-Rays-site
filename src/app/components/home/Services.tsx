import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowRoundForward } from "react-icons/io";
import { serviceDetail } from './ServicesDetail';

const Services = () => {
  return (
    <section>
      <div className='bg-[#262B3F] text-white py-28'>
        <div className='flex justify-center'>
          <h1 data-aos="fade-right" className='text-4xl'>Services</h1>
        </div>

        <div className='flex flex-wrap justify-center gap-4 md:gap-8 xl:w-[1280px] m-auto py-10'>
          {serviceDetail.map((item, index) => (
            <div className='relative group w-4/5 sm:w-[300px] h-full overflow-hidden' key={index}>
              <Image
                src={item.src}  // Ensure src is correctly assigned
                alt='Service Image'
                layout='responsive'
                width={300}
                height={400}
                className='w-full h-full group-hover:blur-sm transform transition rounded-md object-cover ease-in-out duration-300 group-hover:scale-150'
              />
              <h4 data-aos="fade-right" className='absolute inset-0 p-10 z-10 text-xl flex items-start justify-center opacity-100 ease-in-out group-hover:scale-90 transition-opacity duration-300'>
                {item.h3}
              </h4>

              <p className='absolute inset-0 z-10 opacity-0 group-hover:opacity-100 translate-x-full group-hover:translate-x-0 transition-all duration-300 flex items-center p-2'>
                {item.h4}
              </p>

              <Link href={item.href} className='absolute inset-0 flex top-[80%] justify-end opacity-0 translate-x-0 group-hover:translate-x-100 group-hover:opacity-100 transition-all cursor-pointer'>
                <div className="inline-block">
                  <button className='text-[#F68E60] font-semibold'>
                    {item.button}
                  </button>
                  <hr className='h-[2px] w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 bg-[#f68e60] text-[#f68e60] border-none' />
                </div>
                <IoIosArrowRoundForward className='text-[#f68e60] text-2xl mx-1 '/>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
