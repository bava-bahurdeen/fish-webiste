'use client'
import Image from 'next/image'

import hero_bg from '@/app/assets/images/import-img.png'
import service_bg from '@/app/assets/images/ship 1.png'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Each } from './utils/Each'
import { ServiceCard, GlobalData } from './components/homedata'
import about from '@/app/assets/images/about.png'
import world from '@/app/assets/images/world.png'
import sea from '@/app/assets/images/underwater.jpg'
// Default theme
import '@splidejs/react-splide/css'
const Home: React.FC = () => {
  const [isHover, setisHover] = useState<boolean>(false)

  return (
    <main className=" bg-shade_9">
      <section className=" container  md:h-screen mx-auto flex   flex-col-reverse xl:flex-row items-center mt-24 lg:mt-0 ">
        <div className="w-full h-full xl:h-fit space-y-8  md:text-center xl:text-start">
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
            onMouseEnter={() => setisHover(true)}
            onMouseLeave={() => setisHover(false)}
          >
            Learn More
            {isHover && (
              <AnimatePresence>
                <motion.div
                  initial={{ x: '-100%', rotate: 20 }}
                  animate={{ x: '3300%', rotate: 20 }}
                  exit={{ x: '-100%', rotate: 20 }}
                  transition={{ duration: 0.8 }}
                  className="bg-body_bg w-2 h-44 absolute -left-[1rem] opacity-50 z-0 -top-2 rounded-full"
                ></motion.div>
              </AnimatePresence>
            )}
          </button>
        </div>

        <Image src={hero_bg} alt="hero-bg" className="xl:w-8/12" />
      </section>
      <section
        className="bg-cover bg-center bg-no-repeat bg-button_bg text-white xl:h-screen grid place-items-center mt-10 p-10   md:mt-20  "
        style={{ backgroundImage: `url('${sea.src}')` }}
      >
        <div className="container mx-auto ">
          <h2 className=" text-2xl md:text-4xl xl:text-6xl font-bold text-center text-primary">
            Services
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-4 md:gap-8  xl:gap-x-12 mt-10 overflow-hidden ">
            <Each
              of={ServiceCard}
              render={({ id, Img, head, lead }) => (
                <li key={id} className="bg-white rounded-xl  cursor-pointer ">
                  <Image src={Img} alt="img" className="rounded-t-xl" />
                  <div className="grid gap-y-1 md:place-items-center p-6">
                    <h2 className="text-shade_3 text-2xl xl:text-3xl font-semibold">
                      {head}
                    </h2>
                    <p className="text-base text-[#3B3F5C]">{lead}</p>
                  </div>
                </li>
              )}
            />
          </ul>
        </div>
      </section>

      <section className="bg-shade_9 ">
        <div className="container mx-auto  w-full grid grid-cols-1 xl:grid-cols-2 items-center p-16 gap-10">
          <Image src={about} alt="about-img" className="" />

          <ul className="space-y-7">
            <li>
              <h2 className="text-primary text-3xl md:text-5xl  font-bold">
                About
              </h2>
              <p className="text-3xl md:text-5xl font-bold text-shade_3 translate-x-10">
                Fish import company
              </p>
            </li>
            <li className="text-black font-semibold text-2xl md:text-4xl">
              Insights and Resources to help drive your Business Forward Faster.
            </li>
            <li className="text-black md:text-lg">
              We build results-oriented brand strategy and continually refine
              the campaign for the greatest outcome. From full scale branding
              strategy, we are reaching to almost desired buyers throughout the
              world.
            </li>
          </ul>
        </div>
      </section>

      <section className="h-screen bg-gradient-to-r from-indigo-500 to-blue-500 mt-10 mb-10 md:mt-20 md:mb-20 p-10 ">
        <div className="container mx-auto text-center ">
          <h2 className=" text-2xl md:text-4xl xl:text-6xl font-bold text-center text-shade_9">
            Our Fish Products
          </h2>
          <p>
            We offer a wide variety of fish and seafood, harvested responsibly
            from the pristine waters of
            <span>Indian Ocean.</span>
          </p>
        </div>
      </section>

      <section
        className="bg-cover bg-center bg-no-repeat bg-primary text-white grid place-items-center    md:h-screen p-4 xl:p-20 "
        style={{ backgroundImage: `url('${world.src}')` }}
      >
        <div className="container mx-auto text-center grid place-items-center space-y-8 p-4">
          <h2 className="text-[#ADE8F4] font-bold text-2xl  md:text-5xl">
            Global Shipping & Logistics
          </h2>
          <p className="text-sm xl:text-lg font-semibold xl:w-10/12">
            With an advanced logistics network, we ensure efficient and timely
            delivery of our fish exports to international markets. Our team is
            experienced in handling all aspects of transportation, including
            compliance with international health and safety standards, customs
            clearance, and temperature-controlled shipping to maintain product
            quality.
          </p>

          <ul className="flex flex-col md:flex-row items-center justify-center gap-y-8 gap-x-10">
            <Each
              of={GlobalData}
              render={({ id, Img, head, lead }) => (
                <li
                  key={id}
                  className={`${id == 2 ? ' md:translate-y-28' : 'translate-y-0'} flex flex-col gap-y-1 xl:gap-y-4 items-center bg-white w-52 h-52 xl:w-80 xl:h-80 rounded-3xl  p-8 md:p-2  md:py-8 lg:py-10`}
                >
                  <div className="bg-shade_3 p-2 rounded-xl">
                    <Image src={Img} alt="Img" className="size-20 xl:size-36" />
                  </div>
                  <h3 className="md:text-2xl xl:text-3xl text-black font-bold ">
                    {head}
                  </h3>
                  <p className="text-[#00B4D8] xl:text-lg">{lead}</p>
                </li>
              )}
            />
          </ul>
        </div>
      </section>
    </main>
  )
}
export default Home
