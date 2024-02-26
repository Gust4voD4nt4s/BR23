'use client'
import Image from "next/image";
import Link from "next/link";
import Casas from '@/images/Casas.jpg'
import ButtonBlue from "../ButtonBlue/page";
import animationHeroPattern from "./animation";
import { motion } from "framer-motion";

const HeroPattern = () => {
    return (
        <section>
            <div className="h-144 relative flex items-center justify-center">
                <Image className="absolute inset-0 h-full w-full object-cover" src={Casas} alt="" />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
                <motion.div
                    initial={animationHeroPattern.initial}
                    whileInView={animationHeroPattern.whileInView}
                    exit={animationHeroPattern.exit}
                    transition={animationHeroPattern.transition}
                    className="absolute text-white w-152 text-center">
                    <h1 className="font-bold text-6xl mb-4">Data to enrich your online business</h1>
                    <p className="mb-16 text-base">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                    <div className="space-x-8">
                        <ButtonBlue link="/Contact" value="Contate-nos" />
                        <ButtonBlue link="/Empreendimentos" value='Empreendimentos' />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default HeroPattern