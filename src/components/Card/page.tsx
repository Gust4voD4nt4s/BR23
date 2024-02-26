'use client'
import Image, { StaticImageData } from "next/image"
import Casas from '@/images/Casas.jpg'
import Area from '@/images/area.png'
import { motion } from "framer-motion"


const Card = (params: { image: StaticImageData, title: string, city: string, state: string }) => {

    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
        >
            <div
                
                className="w-72 border rounded-xl overflow-hidden shadow-2xl bg-white"
            >
                <Image className="" src={params.image} alt='' />
                <div className="border-b-2 pb-5 px-2">
                    <h1 className="text-2xl font-semibold mt-4">{params.title}</h1>
                    <p>{`${params.city} - ${params.state}`}</p>
                </div>

                <ul>
                    <li className="flex items-center mx-1 my-3">
                        <Image className="w-9" src={Area} alt="" />
                        <p className="ml-1">2 Quartos</p>
                    </li>
                    <li className="flex items-center mx-1 my-3">
                        <Image className="w-9" src={Area} alt="" />
                        <p className="ml-1">2 Quartos</p>
                    </li>
                    <li className="flex items-center mx-1 my-3">
                        <Image className="w-9" src={Area} alt="" />
                        <p className="ml-1">2 Quartos</p>
                    </li>
                </ul>
            </div>
        </motion.div>
    )
}

export default Card