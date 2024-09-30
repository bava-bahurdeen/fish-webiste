import Image from 'next/image'
import { FaPhone, FaLocationDot } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import footer_img from '@/app/assets/images/footer.png'
import { BsWhatsapp } from 'react-icons/bs'
import { FaInstagram,FaTwitter,FaFacebook,FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 text-white h-full  py-8">
      <div className="container mx-auto">
        <ul className="flex flex-col md:flex-row justify-between items-center border-b border-slate-400 pb-7">
          <li>Logo</li>
          <li className="text-nav_bg font-semibold text-3xl lg:text-5xl">
            Fish import company
          </li>
        </ul>
        <div className="grid place-items-center ">
          <Image src={footer_img} alt="footer-img" className="w-2/6 object-cover" />
          <button className="flex items-center gap-x-2 p-2 px-4 md:p-4 md:px-8 bg-[#075E54] rounded-full md:text-xl  ">
            <BsWhatsapp />
            Connect Me
          </button>
          <ul className='flex gap-x-10 mt-10 items-center cursor-pointer'>
            <li className='size-7 md:size-10 grid place-items-center rounded-full bg-white hover:scale-110 transition-all duration-300'><FaInstagram className='md:text-2xl font-semibold text-[#E1306C]'/></li>
            <li className=' size-7 md:size-10 grid place-items-center rounded-full bg-white  hover:scale-110 transition-all duration-300'><FaFacebook className='md:text-2xl font-semibold text-[#316FF6]'/></li>
            <li className=' size-7 md:size-10 grid place-items-center rounded-full bg-white  hover:scale-110 transition-all duration-300'><FaTwitter className='md:text-2xl font-semibold text-[#1DA1F2]'/></li>
            <li className=' size-7 md:size-10 grid place-items-center rounded-full bg-white  hover:scale-110 transition-all duration-300'><FaYoutube className='md:text-2xl font-semibold text-[#FF0000]'/></li>
          </ul>
          <ul className="flex  flex-col md:flex-row  gap-x-10 items-start justify-center mt-20">
            <li className="flex items-center gap-x-2 lg:text-xl">
              <span className="flex items-center gap-x-2 ">
                <FaPhone className="text-nav_bg" />
                Phone:
              </span>
              84848848484
            </li>
            <li className="flex items-center gap-x-2 lg:text-xl">
              <span className="flex items-center gap-x-2  ">
                <MdEmail className="text-nav_bg" />
                Email:
              </span>
              Your Email Address
            </li>
            <li className="flex items-center gap-x-2 lg:text-xl">
              <span className="flex items-center gap-x-2 ">
                <FaLocationDot className="text-nav_bg" />
                Address:
              </span>
              Keelasivalpatti
            </li>
          </ul>
        </div>
      </div>
      <div className='bg-[#090926] h-10 w-full mt-5 flex justify-around px-10 py-2'>
        <p>© 2024 All rights reserved.</p>
        <p>  Fish import company</p>
      </div>
      
    </footer>
  )
}

export default Footer
