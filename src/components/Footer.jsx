import React from 'react'
import { FaFacebook } from 'react-icons/fa';
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <div>
        <div className="sm:flex sm:justify-between  bg-gradient-to-r text-white from-blue-950 to-neutral-900 w-screen h-auto sm:px-21 px-0 py-6">
          <div className="flex flex-col sm:items-start items-center sm:justify-start justify-center">
              <div className="flex items-center  gap-2">
                  <img className='sm:w-10 w-15' src="/images/UIT-Logo.svg" alt="" />
                  <p className='text-3xl font-bold'>UIT Tholicode</p>
              </div>
              <p className=' sm:max-w-80 max-w-70 mt-2 sm:text-start text-justify'>The University Institute of Technology, Nedumangad Regional Centre was established in 2017 by the University of Kerala with a view to train the students for employment in Research and Development Institutions, Business Organizations, Industries and for self-employment.</p>
          </div>
          <div className="sm:mt-0 mt-4 flex flex-col sm:items-start items-center sm:justify-start justify-center">
              <p className='font-bold text-xl'>COURSES AVAILABLE</p>
              <p className='mt-3 font-extralight text-lg hover:text-blue-400'> Bsc Computer Science(AI/ML)</p>
              <p className='font-extralight text-lg hover:text-blue-400'> Bcom Computer Application</p>
          </div>
          <div className="sm:mt-0 mt-4 flex flex-col sm:items-start items-center sm:justify-start justify-center">
              <p className='font-bold text-xl'>CONTACT</p>
              <p className='mt-3 font-extralight text-lg'>Email : uittholicode@gmail.com</p>
              <p className='font-extralight text-lg'>Phone : 0472 2878944</p>
              <p className='font-extralight text-lg'>Location : Kerala,India</p>
              <div className="flex mt-4 gap-2">
                  <IoLogoWhatsapp className='text-3xl rounded-full hover:bg-white border-none hover:text-green-500'/>
                  <FaFacebook className='text-3xl rounded-full hover:bg-white border-none hover:text-blue-600'/>
              </div>
          </div>

        </div>
        <div className="bg-gradient-to-r text-gray-500 from-blue-950 to-neutral-900">
            <div className="border w-screen border-gray-500"></div>
            <div className="py-5 flex justify-center">
                <p className='text-xs sm:text-lg'>@ 2025 Qodux. All rights reserved. | Privacy Policy | Terms of Service</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
