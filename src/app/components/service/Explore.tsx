import React from 'react'
import Link from 'next/link';
import { exploredata } from './FieldData';

const Explore = () => {
  return (
    <section>
        <div className='w-3/6 text-center m-auto py-20'>
            <h3>Explore Generative AI use cases for your industry</h3>
            <p className='text-base py-4'>With Generative AI, discover how to ensure personalized experiences, automate tasks, and generate insights to achieve unprecedented results.</p>
        </div>
        <div className='lg:w-4/6 flex flex-wrap m-auto'>
        {exploredata.map((item, index) =>(

            <div key={index} className='md:w-[45%] flex justify-evenly m-auto border rounded-xl px-6 py-12 mb-8 space-y-4 bg-[#023047] hover:bg-[#294b5c]'>
                <div className=''>
                    <div className='flex space-x-2 items-center text-white font-semibold'>
                        <i data-aos="fade-left" className='text-xl text-[#f68e60]'>{item.icon}</i>
                        <h5 data-aos="fade-left">{item.h5}</h5>
                    </div>

                    <div className='py-6'>
                        <p data-aos="fade-left" className='text-sm text-white'>{item.p}</p>
                    </div>

                    <div>
                        <Link href={item.href} className='flex items-center'>
                            <div className="group inline-block">
                            <button data-aos="fade-left" className='text-[#F68E60] font-normal text-base'>
                            {item.button}
                            </button>
                            <hr className='h-[3px] w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 bg-[#f68e60] border-none' />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        ))}
        </div>
    </section>
  )
}

export default Explore
