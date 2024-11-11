import React from 'react'
import { securitydata } from './FieldData';


const Security = () => {
  return (
    <section>
        <div className='py-16'>
            <div className='lg:w-3/6 text-center m-auto py-20 px-2 lg:px-0'>
                <h3>Leading the Cloud with Excellence in Governance, Security, and Compliance</h3>
                <p className='text-base py-4'>We ensure your data is safeguarded with state-of-the-art security measures, while our comprehensive governance framework guarantees adherence to global compliance protocols.</p>
            </div>


            <div  className='lg:w-2/5 xl:w-3/6 m-auto flex flex-wrap justify-evenly'>
            {securitydata.map((item, index) => (

                <div key={index} className='w-full md:w-[200px] border-4 text-center px-8 mb-4 py-12 space-y-3 rounded-xl bg-[#023047] text-white hover:border-[#f69e60]'>
                    <i data-aos="fade-left" className='flex justify-center text-[#f68e60] text-2xl'>{item.icon}</i>
                    <h5 data-aos="fade-left">{item.h5}</h5>
                </div>
            ))}
            </div>
        </div>
    </section>
  )
}

export default Security
