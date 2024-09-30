'use client'
import Image from 'next/image'

import hero_bg from '@/app/assets/images/import-img.png'
import service_bg from '@/app/assets/images/ship 1.png'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
const Home: React.FC = () => {
  const [isHover, setisHover] = useState<Boolean>(false)
  
  return (
    <main className="overflow-hidden">
      <section className=" container md:h-screen mx-auto flex  flex-col-reverse xl:flex-row items-center ">
        <div className="w-full space-y-8 md:text-center xl:text-start ">
          <h1 className="text-primary font-bold text-2xl md:text-4xl xl:text-5xl">
            Premium Quality Fish Export Services Worldwide
          </h1>
          <p>
            Welcome to [Your Company Name], your trusted source for fresh and
            high-quality fish exports. We specialize in delivering premium fish
            products across the globe, ensuring sustainability and top-notch
            standards from ocean to table.
          </p>

          <button
          
          className=" relative bg-button_bg p-4 px-20 overflow-hidden rounded  text-white font-semibold   transition-all duration-100"
          onMouseEnter={()=>setisHover(true)}
          onMouseLeave={()=>setisHover(false)}
          > 
        
            Learn More
            {isHover && 
          <AnimatePresence>
            <motion.div
            initial={{ x: "-100%", rotate: 20 }}
            animate={{ x: '3300%', rotate: 20 }}
            exit={{ x: "-100%", rotate: 20 }}
            transition={{ duration: 0.8 }}
            className="bg-body_bg w-2 h-44 absolute -left-[1rem] opacity-50 z-0 -top-2 rounded-full"
            >

            </motion.div>
          </AnimatePresence>
} 
          </button>
      
        </div>

        <Image src={hero_bg} alt="hero-bg" className="xl:w-8/12" />
      </section>
      <section className='bg-cover bg-center bg-no-repeat bg-button_bg text-white mt-10 mb-10 md:mt-20 md:mb-20' style={{backgroundImage:`url('${service_bg.src}')`}}>
        <div className='container mx-auto grid place-items-center h-svh'>
          <h2>Services</h2>
          <ul>

          </ul>
        </div>
        </section>
    </main>
  )
}
export default Home
