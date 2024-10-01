'use client'
import { HeaderData } from './data'
import Link from 'next/link'
import { RiMenu3Fill } from 'react-icons/ri'
import { motion, AnimatePresence } from 'framer-motion'
import { IoMdClose } from 'react-icons/io'
import { useState } from 'react'
import { Each } from '@/app/utils/Each'
const Header: React.FC = () => {
  const [isOpen, setisOpen] = useState<boolean>(false)
  return (
    <header className="  fixed top-0  z-50  right-0 left-0 container mx-auto overflow-hidden">
      <nav className=" w-full  flex justify-between items-center bg-nav_bg p-4 px-8 mt-10 rounded-xl">
        <h2>Logo</h2>
        <ul className="flex items-center gap-x-10 ">
          <Each
            of={HeaderData}
            render={({ id, link, value }) => (
              <li key={id} className="relative overflow-hidden ">
                <Link
                  className="hidden xl:block text-lg font-semibold text-primary hover:text-black transition-all duration-100"
                  href={link}
                >
                  {value}
                </Link>
              </li>
            )}
          />
        </ul>
        {isOpen ? (
          <IoMdClose
            className="text-primary font-semibold text-3xl block xl:hidden transition-all duration-300"
            onClick={() => setisOpen(false)}
          />
        ) : (
          <RiMenu3Fill
            className="text-primary font-semibold text-3xl block xl:hidden transition-all duration-300 "
            onClick={() => setisOpen(true)}
          />
        )}
      </nav>
      {/* mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: '-200%', opacity: 0 }}
            animate={{ y: 10, opacity: 1 }}
            exit={{ y: '-200%' }}
            transition={{ duration: 0.6 }}
            className="bg-nav_bg h-96 rounded-xl -z-50  "
          >
            <ul className="flex flex-col items-center gap-10 py-10">
              {HeaderData.map(({ id, link, value }) => {
                return (
                  <li key={id} className=" ">
                    <Link
                      className=" text-lg font-semibold text-primary hover:text-black transition-all duration-100"
                      href={link}
                    >
                      {value}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
