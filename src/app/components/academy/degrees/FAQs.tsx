"use client"
import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
// import { faqs } from './Data';


const FAQs = () => {
    const [faq, setFaq] = useState(false)
    const [secfaq, setSecFaq] = useState(false)
    const [thifaq, setThiFaq] = useState(false)
  return (
    <section>
        <div className='xl:w-4/5 m-auto py-12 px-4 xl:px-0'>
            <div>
                <h4>Frequently Asked Questions</h4>
            </div>

            <div className='border-2 px-6 py-6 rounded-lg'>
                    <div className='border-b py-2'>
                        <div onClick={() => setFaq(!faq)} className='flex items-center'>
                            <IoIosArrowDown className='text-xl'/>
                            <p className='text-lg py-2 ml-2'>Are the degrees hosted on Coursera from accredited universities?</p>
                        </div>
                        {faq && (
                            <p className='text-base py-2 px-6'>is important because it shows that an institution meets rigorous academic standards, eases your ability to transfer credits, and helps employers validate the quality of</p>
                        )}
                    </div>
                    <div className='border-b py-2'>
                        <div onClick={() => setSecFaq(!secfaq)} className='flex items-center'>
                            <IoIosArrowDown className='text-xl'/>
                            <p className='text-lg py-2 ml-2'>Are the degrees hosted on Coursera from accredited universities?</p>
                        </div>
                        {secfaq && (
                            <p className='text-base py-2 px-6'>is important because it shows that an institution meets rigorous academic standards, eases your ability to transfer credits, and helps employers validate the quality of</p>
                        )}
                    </div>
                    <div className='border-b py-2'>
                        <div onClick={() => setThiFaq(!thifaq)} className='flex items-center'>
                            <IoIosArrowDown className='text-xl'/>
                            <p className='text-lg py-2 ml-2'>Are the degrees hosted on Coursera from accredited universities?</p>
                        </div>
                        {thifaq && (
                            <p className='text-base py-2 px-6'>is important because it shows that an institution meets rigorous academic standards, eases your ability to transfer credits, and helps employers validate the quality of</p>
                        )}
                    </div>

               
                


            </div>
        </div>
    </section>
  )
}

export default FAQs
