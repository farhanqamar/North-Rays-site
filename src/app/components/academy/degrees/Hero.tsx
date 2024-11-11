"use client"
import React, { useState } from 'react'
import { GoChevronDown } from "react-icons/go";
import Image from 'next/image';

interface University {
  image: string;
  uni_name: string;
  prog_name: string;
  uni_detail: string;
  deadline: string;
}

interface UniType {
  university: University[]; 
}

const Hero : React.FC<UniType> = ({university}) => {
  const [program, setProgram] = useState(false);
  const [subject, setSubject] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); 
  const cardsPerPage = 8; 
  
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = university.slice(indexOfFirstCard, indexOfLastCard);

  
  const totalPages = Math.ceil(university.length / cardsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <section>
        <div className='bg-[#002761]'>
            <div className=' text-white xl:w-4/6 m-auto'>
              <h3 className='text-2xl lg:text-4xl font-bold py-16 '>Take your career to the next level with an online degree</h3>
            </div>
        </div>

        <div className='lg:w-4/5 m-auto py-10 px-4 lg:px-0'>
            <div>
              <h4>Find the right degree for you</h4>
            </div>

            <div className='flex flex-row justify-between py-6'>
              <div className='flex items-center'>
                <div className='flex items-center'>
                  <p className='text-sm md:text-base p-2'>Filter By</p>
                </div>

                <div className='relative'>
                  <span onClick={() => {setProgram(!program); setSubject(false)}} className='flex items-center hover:bg-[#F0F6FF] p-2 hover:border-b-2 border-[#0048B0] rounded-md'>
                    <p className='text-sm md:text-base'>Program Level</p>
                    <GoChevronDown className='text-xl ml-2' />
                  </span>

                 {program && 
                   <div className='absolute border w-[200px] mt-2 p-4 space-y-4 bg-white shadow-md'>
                   <div className='flex items-center'>
                     <input type='checkbox' className='mr-2' />
                     <label htmlFor=''>Bachelors Degree</label>
                   </div>
                   <div className='flex items-center'>
                     <input type='checkbox' className='mr-2' />
                     <label htmlFor=''>Masters Degree</label>
                   </div>

                   <div className='border-t-2 py-2 flex justify-between'>
                     <button className='bg-[#0048B0] text-white px-3 py-2'>Apply</button>
                     <button className='hover:bg-[#F0F6FF] hover:border-b-2 border-[#0048B0] px-3 py-2'>Clear All</button>
                   </div>
                 </div>
                 }
                 </div>
                 

                <div className='mt-0'>
                  <span onClick={() =>{setSubject(!subject); setProgram(false)}} className='flex items-center hover:bg-[#F0F6FF] p-2 hover:border-b-2 border-[#0048B0] rounded-md'>
                    <p className='text-sm md:text-base'>Subject</p>
                    <GoChevronDown className='text-xl ml-2' />
                  </span>

                  {subject &&
                     <div className='absolute border w-[250px] mt-2 left-[100px] md:left-[400px] p-4 space-y-4 bg-white shadow-md '>
                     <div className='flex items-center'>
                       <input type='checkbox' className='mr-2' />
                       <label htmlFor=''>Software Engineering</label>
                     </div>
                     <div className='flex items-center'>
                       <input type='checkbox' className='mr-2' />
                       <label htmlFor=''>Computer Science</label>
                     </div>
                     <div className='flex items-center'>
                       <input type='checkbox' className='mr-2' />
                       <label htmlFor=''>Cyber Security</label>
                     </div>
                     <div className='flex items-center'>
                       <input type='checkbox' className='mr-2' />
                       <label htmlFor=''>Networking</label>
                     </div>
  
                     <div className='border-t-2 py-2 flex justify-between'>
                       <button className='bg-[#0048B0] text-white px-3 py-2'>Apply</button>
                       <button className='hover:bg-[#F0F6FF] hover:border-b-2 border-[#0048B0] px-3 py-2'>Clear All</button>
                     </div>
                   </div>
                  }
                </div>
              </div>

              <div className='hidden md:block'>
                <button className='border border-[#0048b0] hover:bg-[#F0F6FF] px-3 py-2 rounded-lg'>Email me info</button>
              </div>
            </div>

        </div>

        <div className='xl:w-4/5 m-auto flex justify-center flex-wrap'>
        {currentCards.map((item, index) =>(

          <div key={index} className='lg:w-[350px] border-2 rounded-lg py-12 p-2 ml-4 mt-2 transition-transform hover:scale-105 duration-500 hover:shadow-2xl'>
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
        <div className="flex justify-center mt-4 w-4/5 m-auto space-x-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 ${currentPage === 1 ? 'bg-gray-300' : 'bg-blue-500'} text-white rounded-lg`}
        >
          Previous
        </button>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 ${currentPage === totalPages ? 'bg-gray-300' : 'bg-blue-500'} text-white rounded-lg`}
        >
          Next
        </button>
      </div>

    </section>
  )
}

export default Hero
