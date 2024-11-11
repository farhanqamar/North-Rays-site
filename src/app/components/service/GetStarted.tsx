import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

interface compPropsType {
    imagSrc : string;
    h3 : string;
    p : string;
    btn : string;
    href : string;
    icon? : React.ReactNode;
}

const GetStarted : React.FC<compPropsType> = ({ imagSrc, h3, p, btn, href, icon }) => {
  return (
    <section>
        <div className='flex flex-col md:flex-row lg:w-4/6 m-auto justify-evenly lg:py-24 px-4'>
            <div className='group relative w-full md:w-[400px] h-[400px] px-10'>
                <Image src={imagSrc} alt='Image' sizes='' layout='fill' objectFit='cover'
                 className='transform transition-transform duration-500 ease-in-out group-hover:animate-moveY rounded-lg'
                />
            </div>

            <div data-aos="fade-left" className='md:w-1/2 my-auto px-4 py-6 md:py-0'>
                <h3>{h3}</h3>
                <p className='py-6'>{p}</p>
               <div>
                    <Link href={href} className='border rounded-full px-3 py-2 inline-flex items-center space-x-1 text-[#F68E60] border-[#F68E60] hover:text-white hover:bg-[#F68E60]'>
                            <button>{btn}</button>
                            <i className='text-2xl'>{icon}</i>
                    </Link>
               </div>
            </div>
        </div>
    </section>
  )
}

export default GetStarted
