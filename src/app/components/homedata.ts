import { StaticImageData } from 'next/image'
import fish1 from '@/app/assets/images/fish1.jpg'
import shipping from '@/app/assets/images/shipping.png'
import customer from '@/app/assets/images/customer.png'
import satisfaction from '@/app/assets/images/customer-satisfaction 1.png'
interface Cardtype {
  id: number
  Img: StaticImageData
  head: string
  lead: string
}

export const ServiceCard: Cardtype[] = [
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
]

export const GlobalData: Cardtype[] = [
  {
    id: 1,
    Img: shipping,
    head: '1500+',
    lead: 'Consignment Done',
  },
  {
    id: 2,
    Img: customer,
    head: '150+',
    lead: 'Happy Buyers',
  },
  {
    id: 3,
    Img: satisfaction,
    head: '5+',
    lead: 'Years Experience ',
  },
]
