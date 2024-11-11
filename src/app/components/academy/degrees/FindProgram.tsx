import React from 'react'


interface progType{
  name : string
}
interface type {
  title : string
  program : progType[]
}
const FindProgram : React.FC<type> = ({title, program}) => {
  return (
    <section>
        <div className='xl:w-4/5 m-auto py-12 px-4 xl:px-0'>
            <div>
                <h3 className='py-4'>{title}</h3>
            </div>

            <div className='flex flex-wrap flex-col md:flex-row gap-4'>
              {program.map((item, index) =>(
                <div key={index} className='md:w-[30%] px-6 py-10 border rounded-lg transition-transform duration-500 hover:scale-105 text-base lg:text-xl'>
                  {item.name}
                </div>
              ))}
            </div>
            
        </div>
    </section>
  )
}

export default FindProgram
