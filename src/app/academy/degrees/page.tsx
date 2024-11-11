import React from 'react'
import Hero from '../../components/academy/degrees/Hero'
import FindProgram from '../../components/academy/degrees/FindProgram'
import { university } from '../../components/academy/degrees/Data';
import { program } from '../../components/academy/degrees/Data';
import { category } from '../../components/academy/degrees/Data';
import UniversityDetail from '../../components/academy/degrees/UniversityDetail';
import { UniDetail } from '../../components/academy/degrees/Data';
import TestimonialSlider from '../../components/academy/degrees/TestimonialSlider';
import DegreeRelatedTopic from '../../components/academy/degrees/DegreeRelatedTopic';
import FAQs from '../../components/academy/degrees/FAQs';


const  Degree = () => {
  
  return (
    <div>
      <Hero university={university}/>

      <FindProgram 
      title = 'Browse by program level'
      program = {program}
      />

      <FindProgram 
      title = 'Browse By Category'
      program = {category}
      />

      <UniversityDetail 
      bgColor = ''
      h3='Affordable tuition with flexible payment options'
      p='Pursue your degree with affordable tuition, flexible payment options that let you pay as you go, and financial aid opportunities, including scholarships.'
      carddetail={UniDetail}
      />
      <UniversityDetail 
      bgColor = 'bg-[#F2F5FA]'
      h3='Affordable tuition with flexible payment options'
      p='Pursue your degree with affordable tuition, flexible payment options that let you pay as you go, and financial aid opportunities, including scholarships.'
      carddetail={UniDetail}
      />
      <UniversityDetail 
      bgColor = ''
      h3='Affordable tuition with flexible payment options'
      p='Pursue your degree with affordable tuition, flexible payment options that let you pay as you go, and financial aid opportunities, including scholarships.'
      carddetail={UniDetail}
      />
      <UniversityDetail 
      bgColor = 'bg-[#F2F5FA]'
      h3='Affordable tuition with flexible payment options'
      p='Pursue your degree with affordable tuition, flexible payment options that let you pay as you go, and financial aid opportunities, including scholarships.'
      carddetail={UniDetail}
      />
      <UniversityDetail 
      bgColor = ''
      h3='Affordable tuition with flexible payment options'
      p='Pursue your degree with affordable tuition, flexible payment options that let you pay as you go, and financial aid opportunities, including scholarships.'
      carddetail={UniDetail}
      />

      <TestimonialSlider />

      <DegreeRelatedTopic />

      <FAQs />
    </div>
  )
}

export default Degree;
