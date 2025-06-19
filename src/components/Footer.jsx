import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex justify-center mx-auto'>
        <a className='flex items-center justify-between gap-4 py-3 mt-20 hover:pointer' href="https://anilgummula.netlify.app/" target='_blank'>
            <img width={24} src={assets.logo_icon} alt="" />
            <p className='text-white flex-1 border-l border-gray-400 pl-4 text-sm max-sm:hidden'>Copyright @anilgummula.dev | All right reserved.</p>
        </a>
    </div>
  )
}

export default Footer