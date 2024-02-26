'use client'
import ButtonBlue from "../ButtonBlue/page"
import Area from '@/images/area.png'
import { motion } from "framer-motion";
import List from "../List/page";
import animationContact from "./animation";


const SectionContact = () => {
    return (
        <section className="bg-gray-100 h-144 flex items-center justify-around mt-10">
            <motion.div
                initial={animationContact.initial}
                whileInView={animationContact.whileInView}
                exit={animationContact.exit}
                transition={animationContact.transition}
                className="h-64 w-80">
                <h1 className="text-4xl text-black mb-3">Entre em contato com a gente!</h1>
                <p className="text-gray-500 mb-6">Entre em contato com a BR23, queremos torna seu sonho de casa propria em realidade.</p>
                <ButtonBlue link="/Contact" value="Entrar em contato" />
            </motion.div>
            <motion.ul
                initial={animationContact.initial}
                whileInView={animationContact.whileInView}
                exit={animationContact.exit}
                transition={animationContact.transition}
            >
                <List src={Area} value="67 93322-4455" />

                <List src={Area} value="D. qms 12 Estrada 234" />

                <List src={Area} value="BR23@gmail.com" />
            </motion.ul>
        </section>
    )
}

export default SectionContact