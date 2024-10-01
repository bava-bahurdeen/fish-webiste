'use client'
import Image from 'next/image'

import hero_bg from '@/app/assets/images/import-img.png'
import service_bg from '@/app/assets/images/ship 1.png'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Each } from './utils/Each'
import { ServiceCard } from './components/homedata'
import about from '@/app/assets/images/about.png'
import world from '@/app/assets/images/world.png'
const Home: React.FC = () => {
  const [isHover, setisHover] = useState<boolean>(false)

  return (
    <main className="overflow-hidden">
      <section className=" container  md:h-screen mx-auto flex   flex-col-reverse xl:flex-row items-center mt-24 lg:mt-0 ">
        <div className="w-full h-full xl:h-fit space-y-8  md:text-center xl:text-start overflow-hidden">
          <motion.h1
            initial={{ opacity: 0 }}
            transition={{ duration: 0.78 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-bold text-2xl md:text-4xl xl:text-5xl"
          >
            Premium Quality Fish Export Services Worldwide
          </motion.h1>
          <motion.p
            initial={{ x: '-100%' }}
            transition={{ duration: 0.65 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
          >
            Welcome to [Your Company Name], your trusted source for fresh and
            high-quality fish exports. We specialize in delivering premium fish
            products across the globe, ensuring sustainability and top-notch
            standards from ocean to table.
          </motion.p>

          <motion.button
            initial={{ y: '100%' }}
            transition={{ duration: 0.65 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
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
          </motion.button>
        </div>

        <Image src={hero_bg} alt="hero-bg" className="xl:w-8/12" />
      </section>
      <section
        className="bg-cover bg-center bg-no-repeat bg-button_bg text-white  mt-10  md:mt-20  h-full p-4 xl:p-20"
        style={{ backgroundImage: `url('${service_bg.src}')` }}
      >
        <div className="container mx-auto ">
          <h2 className=" text-2xl md:text-4xl xl:text-6xl font-bold text-center text-[#ADE8F4]">
            Services
          </h2>
          <ul className="grid grid-cols-2  xl:grid-cols-3 gap-4 md:gap-8  xl:gap-12 mt-10 overflow-hidden ">
            <Each
              of={ServiceCard}
              render={({ id, Img, head, lead }) => (
                <motion.li
                  initial={{ opacity: 0, scale: 1.2 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.75 }}
                  viewport={{ once: true }}
                  key={id}
                  className="bg-body_bg rounded-xl shadow-2xl shadow-slate-400 cursor-pointer "
                >
                  <Image src={Img} alt="img" className="rounded-t-xl" />
                  <div className="grid gap-y-1 md:place-items-center p-2 md:p-1 xl:p-6">
                    <h2 className="text-primary tmd:ext-xl xl:text-3xl font-semibold">
                      {head}
                    </h2>
                    <p className="text-xs md:text-base text-[#3B3F5C]">
                      {lead}
                    </p>
                  </div>
                </motion.li>
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

      <section
        className="bg-cover bg-center bg-no-repeat bg-primary text-white    h-full p-4 xl:p-20"
        style={{ backgroundImage: `url('${world.src}')` }}
      ></section>
    </main>
  )
}
export default Home
