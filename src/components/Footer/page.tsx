import Logo from "../Logo/page"
import LogoBR23 from '@/images/Logo.png'
import Image from "next/image"
import FacebookIcon from '@/images/facebook.png'
import InstagramIcon from '@/images/instagram.png'
import LinkedinIcon from '@/images/linkedin.png'
import YoutubeIcon from '@/images/youtube.png'
import Link from "next/link"
import { motion } from "framer-motion"
import animationFooter from "./animation"

const Footer = () => {
    return (
        <section className="bg-blue-500 flex items-center justify-around p-10">
            <motion.div
                initial={animationFooter.initial}
                whileInView={animationFooter.whileInView}
                exit={animationFooter.exit}
                transition={animationFooter.transition}
            >
                <Logo src={LogoBR23} />
                <p className="text-white mt-5">Copyright © 2024 | BR23.<br />Todos os direitos reservados.</p>
            </motion.div>
            <motion.ul
                initial={animationFooter.initial}
                whileInView={animationFooter.whileInView}
                exit={animationFooter.exit}
                transition={animationFooter.transition}
                className="flex gap-4">
                <Link href={""}><li><Image className="w-5" src={FacebookIcon} alt="" /></li></Link>
                <Link href={""}><li><Image className="w-5" src={InstagramIcon} alt="" /></li></Link>
                <Link href={""}><li><Image className="w-5" src={LinkedinIcon} alt="" /></li></Link>
                <Link href={""}><li><Image className="w-5" src={YoutubeIcon} alt="" /></li></Link>
            </motion.ul>
        </section >
    )
}

export default Footer