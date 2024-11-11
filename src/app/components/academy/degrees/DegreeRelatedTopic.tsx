import React from 'react';
import { degreeInfo } from './Data';



const DegreeRelatedTopic = () => {
  return (
   <section className='bg-[#F2F5FA] py-10'>
        <div className='xl:w-4/5 m-auto px-4 xl:px-0'>
            <div className='py-6 text-xl'>
                <h3>Gain helpful insight on degree-related topics</h3>
            </div>
            <div className='flex flex-wrap gap-4 justify-center'>
                {degreeInfo.map((item, index) =>(
                    <div key={index} className='sm:w-[250px] border-2 rounded-xl bg-white px-4 py-4'>
                        <h5 className='text-lg'>{item.h5}</h5>
                        <p className='text-sm py-4'>{item.p1}</p>
                        
                        <p className='text-sm'>{item.p2}</p>
                    </div>
                ))}
            </div>

        </div>
   </section>
  )
}

export default DegreeRelatedTopic
