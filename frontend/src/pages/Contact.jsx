import React, { useState } from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLatterBox from '../components/NewsLatterBox'
import SectionWrapper from '../components/SectionWrapper'

const Contact = () => {
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Using mailto for simple email sending
    window.location.href = `mailto:houseofhype@gmail.com?subject=Contact%20Us%20Message&body=Name: ${formData.name}%0AEmail: ${formData.email}%0A%0A${formData.message}`
  }

  return (
    <div>
      <SectionWrapper className='text-center text-2xl pt-10 border-t'>
        <div className='text-shadow-lg/60 text-shadow-gray-500'>
          <Title text1={'CONTACT'} text2={'US'} />
        </div> 
      </SectionWrapper>

      <SectionWrapper className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-1xl text-gray-600'>Our Store</p>
          <p className='text-gray-600'>Strada Comerțului Nr. 45<br />Cluj-Napoca, 400000<br />Romania</p>
          <p className='text-gray-600'>telefon:+40 734 211 543 <br/>email: hoh@houseofhype.com</p>
          <p className='text-gray-600'>Our streamlined online shopping experience makes it easy to browse, order, and receive your essentials quickly and securely.</p>

          <button
            onClick={() => setShowForm(!showForm)}
            className='border border-black px-8 py-4 text-sm bg-white text-black hover:bg-gray-300 active:bg-gray-500 transition-all duration-500'
          >
            Contact Us
          </button>

          {showForm && (
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 mt-4 w-full max-w-md'>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="border px-4 py-2"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="border px-4 py-2"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="border px-4 py-2"
                rows={4}
                required
              />
              <button
                type="submit"
                className='border border-black px-4 py-2 bg-white text-black hover:bg-gray-300 transition-all duration-500'
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <NewsLatterBox />
      </SectionWrapper>
    </div>
  )
}

export default Contact
