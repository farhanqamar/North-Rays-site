import React from 'react'
import { fielddata } from './FieldData';


const Fields = () => {
  return (
    <section>
        <div className='xl:w-4/6 py-10 flex flex-wrap m-auto px-4'>
            {fielddata.map((item, index) => (
                <div key={index} className='card-container w-full sm:w-1/2 md:w-1/3 xl:w-1/4 border-r border-b m-auto py-16 hover:bg-gradient-to-r from-[#f68e60] to-[#f8dfd4] hover:text-white overflow-hidden'>
                    <div className='w-4/5 flex m-auto'>
                        <i className='text-3xl'>{item.icon}</i>
                        {/* <RiRobot2Line /> */}
                    </div>
                                                                                            
                    <div className='flex items-center space-x-6 py-2'>
                        <hr className='w-[2px] h-[10px] bg-[#f68e60]'/>
                        <h5 className='text-xl'>{item.h5}</h5>
                    </div>

                    <div>
                        <p className='text-sm px-6'>{item.p}</p>
                    </div>
                </div>

            ))}
        </div>
    </section>
  )
}

export default Fields
