import React from 'react'
import Image from 'next/image'

interface card {
    image : string
    uni_name : string
    prog_name : string
    uni_detail : string
    deadline : string
}

interface Type {
    bgColor : string
    h3 : string
    p : string
    carddetail : card[]
}

const UniversityDetail : React.FC<Type> = ({bgColor, h3, p, carddetail}) => {
  return (
   <section className={`${bgColor && bgColor} overflow-hidden`}>
        <div className='w-full xl:w-4/5 m-auto flex flex-col xl:flex-row py-12'>
            <div className='xl:w-[20%] flex items-center px-4 xl:px-0'>
                    <div>
                        <h3 className='text-2xl font-semibold'>{h3}</h3>
                        <p className='text-base py-4'>{p}</p>
                    </div>
            </div>

            <div>
                <div className='w-4/5 m-auto flex flex-col md:flex-row gap-10'>
                    {carddetail.map((item, index) =>(

                    <div key={index} className='xl:w-[350px] border-2 rounded-lg py-12 px-4 mt-2 transition-transform hover:scale-105 duration-500 hover:shadow-2xl'>
                    <div>
                        <Image src={item.image} alt='Image' width={400} height={200} objectFit='cover' className='py-3'/>
                    </div>

                        <div>
                        <span className='py-6'>
                            <p className='text-sm'>{item.uni_name}</p>
                            <h4 className='text-base font-semibold'>{item.prog_name}</h4>
                        </span>
                        <p className='text-sm py-3'>{item.uni_detail}</p>
                        <p className='text-sm py-4'>{item.deadline}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
   </section>
  )
}

export default UniversityDetail
