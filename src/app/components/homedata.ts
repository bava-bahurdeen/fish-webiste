import { StaticImageData } from "next/image"
import fish1 from '@/app/assets/images/fish1.jpg' 
import { head } from "framer-motion/client"
interface ServiceCardtype{
    id:number,
    Img:StaticImageData,
    head:string,
    lead:string,
    button:string

}

export const ServiceCard=[
    {
        id:1,
        Img:fish1,
        head:"International Import",
        lead:""
    }
]