import { StaticImageData } from 'next/image'
import fish1 from '@/app/assets/images/fish1.jpg'
interface ServiceCardtype {
  id: number
  Img: StaticImageData
  head: string
  lead: string
}

export const ServiceCard: ServiceCardtype[] = [
  {
    id: 1,
    Img: fish1,
    head: 'International Import',
    lead: 'Looking to source the best seafood from around the world? Our internat exotic catches from trusted sources across the globe, and experience the finest the ocean has to offer.',
  },
  {
    id: 2,
    Img: fish1,
    head: 'India Import',
    lead: 'Looking to source the best seafood from around the world? Our internat exotic catches from trusted sources across the globe, and experience the finest the ocean has to offer.',
  },
  {
    id: 3,
    Img: fish1,
    head: 'export',
    lead: 'Looking to source the best seafood from around the world? Our internat exotic catches from trusted sources across the globe, and experience the finest the ocean has to offer.',
  },

  {
    id: 4,
    Img: fish1,
    head: 'export',
    lead: 'Looking to source the best seafood from around the world? Our internat exotic catches from trusted sources across the globe, and experience the finest the ocean has to offer.',
  },

  {
    id: 5,
    Img: fish1,
    head: 'export',
    lead: 'Looking to source the best seafood from around the world? Our internat exotic catches from trusted sources across the globe, and experience the finest the ocean has to offer.',
  },

  {
    id: 6,
    Img: fish1,
    head: 'export',
    lead: 'Looking to source the best seafood from around the world? Our internat exotic catches from trusted sources across the globe, and experience the finest the ocean has to offer.',
  },
]
