import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLatterBox from '../components/NewsLatterBox'
import SectionWrapper from '../components/SectionWrapper' // import the wrapper

const About = () => {
  return (
    <div>
      <SectionWrapper className='text-2xl text-center pt-8 border-t '>
        <div className='text-shadow-lg/60 text-shadow-gray-500'> <Title text1={'ABOUT'} text2={'US'} /></div>
      </SectionWrapper>

      <SectionWrapper className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <b className='text-gray-300'>Modern & Minimal</b>
          <p>We are an online retail brand specializing in high-quality sneakers and contemporary tops designed for everyday wear. Our focus is on combining modern style, comfort, and durability to deliver products that fit seamlessly into your lifestyle. Each item is carefully selected to meet our standards for design, quality, and value, ensuring a reliable and elevated shopping experience from start to finish.</p>
         
        </div>
      </SectionWrapper>

      <SectionWrapper className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOS US'} />
      </SectionWrapper>

      <SectionWrapper className='flex flex-col md:flex-row text-sm mb-20 gap-5'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We carefully source and inspect every product to ensure it meets our standards for quality, comfort, and durability before reaching our customers.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Our streamlined online shopping experience makes it easy to browse, order, and receive your essentials quickly and securely.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our support team is committed to providing timely, reliable assistance and ensuring every customer has a smooth and satisfying experience.</p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <NewsLatterBox />
      </SectionWrapper>
    </div>
  )
}

export default About
