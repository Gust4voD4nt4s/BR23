'use client'
import Navbar from "@/components/Navbar/page"
import Contrucao from '@/images/Construcao.jpg'
import Trabalho from '@/images/Trabalho.jpg'
import Image from "next/image"
import Casas from '@/images/Casas.jpg'
import Equipe from '@/images/Equipe.jpg'
import SectionContact from "@/components/SectionContact/page"
import Footer from "@/components/Footer/page"


const SobreBR23 = () => {
    return (
        <>
            <Navbar pageId={3} />
            <section className="flex justify-center">
                <div className="flex w-304 m-10">
                    <div className="space-y-4 p-4">
                        <h1 className="text-4xl mb-10">Sobre a BR23</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolore necessitatibus cupiditate doloribus ex, repellendus voluptatum, ipsum nam exercitationem quia ea culpa rerum officiis pariatur esse autem, perspiciatis soluta libero.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi commodi ipsum accusantium tempora vitae natus! Repudiandae, vero exercitationem? Recusandae tempore repellat repellendus aut harum aliquid autem, debitis magni vitae ipsum?</p>
                    </div>
                    <Image className="w-152 rounded-lg shadow-xl" src={Contrucao} alt='' />
                </div>
            </section>
            <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
            <section className="flex justify-center">
                <div className="flex w-304 m-10">
                    <Image className="w-152 rounded-lg shadow-xl" src={Trabalho} alt='' />
                    <div className="space-y-4 p-4">
                        <h1 className="text-4xl mb-10">Nossas qualidades</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolore necessitatibus cupiditate doloribus ex, repellendus voluptatum, ipsum nam exercitationem quia ea culpa rerum officiis pariatur esse autem, perspiciatis soluta libero Lorem ipsum, dolor sit amet consectetur adipisicing elit. .</p>
                        <p>Animi commodi ipsum accusantium tempora vitae natus! Repudiandae, vero exercitationem? Recusandae tempore repellat repellendus aut harum aliquid autem, debitis magni vitae ipsum?</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi commodi ipsum accusantium tempora vitae natus! Repudiandae, vero exercitationem? Recusandae tempore repellat repellendus aut harum aliquid autem, debitis magni vitae ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.?</p>
                    </div>
                </div>
            </section>
            <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
            <section className="flex justify-center">
                <div className="flex w-304 m-10">
                    <Image className="w-152 h-144 rounded-lg shadow-xl" src={Equipe} alt='' />
                    <div className="flex flex-col justify-center bg-gray-100 ml-4  p-4">
                        <div className="space-y-4 mb-10">
                            <h1 className="text-4xl">Nossa Missão</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolore necessitatibus cupiditate doloribus ex, repellendus voluptatum, ipsum nam exercitationem quia ea culpa rerum officiis pariatur esse autem, perspiciatis soluta libero Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="space-y-4 mb-10">
                            <h1 className="text-4xl">Nossos Visão</h1>
                            <p>Animi commodi ipsum accusantium tempora vitae natus! Repudiandae, vero exercitationem? Recusandae tempore repellat repellendus aut harum aliquid autem, debitis magni vitae ipsum?</p>
                        </div>
                        <div className="space-y-4">
                            <h1 className="text-4xl">Nossos Valores</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi commodi ipsum accusantium tempora vitae natus! Repudiandae, vero exercitationem? Recusandae tempore repellat repellendus aut harum aliquid autem, debitis magni vitae ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.?</p>
                        </div>
                    </div>
                </div>
            </section>
            <SectionContact/>
            <Footer/>
        </>
    )
}

export default SobreBR23