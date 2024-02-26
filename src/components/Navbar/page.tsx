'use client'
import Link from "next/link"
import { useEffect, useState } from "react"
import Logo from "../Logo/page"
import LogoBR23 from '@/images/Logo.png'
import { motion } from "framer-motion"
import { animationLogo, animationUl } from '../Navbar/animation'


const Navbar = (params: { pageId: number }) => {

    const [dropdown, setDropdown] = useState(false)
    const [fixed, setFixed] = useState(false)

    const toggleDropDown = (): void => {
        setDropdown(!dropdown)
    }

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setFixed(true);
        } else {
            setFixed(false);
        }
    };


    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`bg-gray-100 flex justify-between items-center px-32 w-full ${fixed == true ? 'fixed z-10' : ''}`}>
            <motion.div
                initial={animationLogo.initial}
                animate={animationLogo.animate}
                transition={animationLogo.transition}
            >
                <Link href='/'>
                    <Logo src={LogoBR23} />
                </Link>
            </motion.div>
            <motion.ul
                initial={animationUl.initial}
                animate={animationUl.animate}
                transition={animationUl.transition}
                className="flex space-x-8">
                <Link href={"/"}><li className={`hover:text-blue-600 hover:font-medium ${params.pageId == 0 ? 'text-blue-600 font-medium' : ''}`}>Home</li></Link>
                <Link href={"/Empreendimentos"}><li className={`hover:text-blue-600 hover:font-medium ${params.pageId == 1 ? 'text-blue-600 font-medium' : ''}`}>Empreendimentos</li></Link>
                <Link href={""}><li className={`hover:text-blue-600 hover:font-medium ${params.pageId == 2 ? 'text-blue-600 font-medium' : ''}`}>Sonhos Realizados</li></Link>
                <Link href={"/Sobre"}><li className={`hover:text-blue-600 hover:font-medium ${params.pageId == 3 ? 'text-blue-600 font-medium' : ''}`}>Sobre a BR23</li></Link>
                <button onMouseLeave={toggleDropDown} onMouseEnter={toggleDropDown}>
                    <li className={`flex items-center hover:text-blue-600 hover:font-medium ${params.pageId == 4 ? 'text-blue-600 font-medium' : ''}`}>
                        Fale Conosco
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="black" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                        </svg>
                    </li>

                    <ul className={`absolute z-10 bg-gray-100 end-32 flex flex-col rounded-b-lg ${dropdown == false ? 'hidden' : ''}`}>
                        <Link href={"/Contact"}><li className={`px-5 py-2 bg-white mt-5 w-full text-start border-x  hover:bg-gray-100 hover:font-medium ${params.pageId == 4 ? '!bg-gray-100 font-medium' : ''}`}>Contato</li></Link>
                        <Link href={""}><li className="px-5 py-2 bg-white w-full text-start rounded-b-lg border-x  hover:bg-gray-100 hover:font-medium">Seja um corretor</li></Link>
                        <Link href={""}><li className="px-5 py-2 bg-white w-full text-start rounded-b-lg border-x border-b hover:bg-gray-100 hover:font-medium">Seja um fornecedor</li></Link>
                    </ul>
                </button>
            </motion.ul>
        </nav >
    )
}

export default Navbar