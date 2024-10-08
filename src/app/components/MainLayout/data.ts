import { StaticImageData } from 'next/image'
import { IconType } from 'react-icons'
import { GiTropicalFish } from 'react-icons/gi'
interface Headetype {
  id: number
  link: string
  Icon: IconType
  value: string
}

export const HeaderData: Headetype[] = [
  {
    id: 1,
    link: '/',
    Icon: GiTropicalFish,
    value: 'Home',
  },
  {
    id: 2,
    link: '/',
    Icon: GiTropicalFish,

    value: 'About Us',
  },
  {
    id: 3,
    link: '/',
    Icon: GiTropicalFish,

    value: 'Services',
  },
  {
    id: 4,
    link: '/',
    Icon: GiTropicalFish,

    value: 'Clinets',
  },
  {
    id: 5,
    link: '/',
    Icon: GiTropicalFish,

    value: 'Contact Us',
  },
]
