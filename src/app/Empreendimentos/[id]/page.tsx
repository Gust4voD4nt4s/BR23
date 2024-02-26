'use client'

import Casa1 from '@/images/Casas.jpg'
import Image from "next/image"
import ButtonBlue from "@/components/ButtonBlue/page"
import Navbar from '@/components/Navbar/page'
import Link from 'next/link'
import SectionContact from '@/components/SectionContact/page'
import Footer from '@/components/Footer/page'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';


import 'swiper/css';

const Empreendimento = ({ params }: { params: { id: string } }) => {

    const cards = [
        {
            id: '1',
            image: Casa1,
            title: 'Residencial Park',
            about: 'Em breve na região do Guaporé mais um sucesso de Vendas do Complexo Veredas de Ribeirão. São Apartamentos de 2 e 3 dormitórios, com suíte, varanda gourmet, lazer completo e vaga! Um condomínio clube moderno e repleto de diversão para toda a família, localizado em uma região em constante crescimento. Antecipe-se ao lançamento!',
            city: 'Valparaiso de goias',
            state: 'GO',
            differentials: [
                {
                    icone: Casa1,
                    name: 'Lazer Completo',
                    description: 'Opções de lazer para toda a família, desde espaços para praticar atividades físicas até áreas exclusivas para garantir a diversão das crianças.'
                },
                {
                    icone: Casa1,
                    name: 'Espaço Gourmet',
                    description: "Reúna amigos e familiares em um espaço gourmet amplo e equipado para celebrar grandes momentos.  "
                }
            ]
        },
        {
            id: '2',
            image: Casa1,
            title: 'Park dos Reis',
            city: 'Valparaiso de goias',
            state: 'GO'
        },
        {
            id: '4',
            image: Casa1,
            title: 'Residencial club',
            city: 'Valparaiso de goias',
            state: 'GO'
        },
        {
            id: '5',
            image: Casa1,
            title: 'Residencial club',
            city: 'Valparaiso de goias',
            state: 'GO'
        },
        {
            id: '6',
            image: Casa1,
            title: 'Residencial club',
            city: 'Valparaiso de goias',
            state: 'GO'
        },
        {
            id: '7',
            image: Casa1,
            title: 'Residencial club',
            city: 'Valparaiso de goias',
            state: 'GO'
        },
    ]


    return (
        <>
            <Navbar pageId={1}/>
            <div className='flex flex-col items-center'>
                <div>
                    <section className="flex mt-10">
                        <div className="flex">
                            {cards.map(card => (
                                <Image className={`w-96 ${card.id == params.id ? '' : 'hidden'}`} src={card.image} alt="" />
                            ))}
                            <ul className="min-w-24 max-w-24 ml-2 grid gap-2">
                                <li>
                                    <Image src={Casa1} alt='' />
                                </li>
                                <li>
                                    <Image src={Casa1} alt='' />
                                </li>
                                <li>
                                    <Image src={Casa1} alt='' />
                                </li>
                                <li>
                                    <Image src={Casa1} alt='' />
                                </li>
                            </ul>
                        </div>
                        <div className="w-152 ml-5">
                            <h1 className="text-4xl font-semibold mb-2">{cards[0].title}</h1>
                            <p className="mb-16">{cards[0].about}</p>
                            <ButtonBlue link='/Contact' value="Falar conosco" />
                        </div>
                    </section>
                    <section className='mt-10'>
                        <h1 className="text-2xl font-semibold mb-5" >Diferenciais do condominio</h1>
                        <ul className='flex gap-7'>
                            {cards[0].differentials?.map(diferential => (
                                <div className='w-56'>
                                    <div className='flex items-center mb-5'>
                                        <Image className='w-16' src={diferential.icone} alt="" />
                                        <p className='ml-2 font-medium'>{diferential.name}</p>
                                    </div>
                                    <p className='text-gray-500'>{diferential.description}</p>
                                </div>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
            <section className='mt-10 bg-gray-100 p-10'>
                <h1 className="text-4xl font-semibold mb-5 text-center" >Plantas do condominio</h1>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    loop={true}
                    navigation
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className='max-w-6xl hover:cursor-grab active:cursor-grabbing'
                >
                    {cards.map(card => (
                        <SwiperSlide className='' key={card.id}>
                            <Image className='hover:cursor-pointer rounded-xl object-cover h-80' src={card.image} alt={''} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            <section className='mt-10'>
                <h1 className="text-4xl font-semibold mb-10 text-center" >Localização do condominio</h1>
                <div className='flex flex-col justify-center items-center'>
                    <iframe className="h-160 w-full shadow-2xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12649.332770845793!2d-47.9825129136517!3d-16.076958319244945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935986a04bc69287%3A0x2df62ecea2daede5!2sShopping%20Sul!5e0!3m2!1spt-BR!2sbr!4v1707699085756!5m2!1spt-BR!2sbr" loading="lazy" />
                    <Link className="" target="_blank" href='https://maps.app.goo.gl/6SF57Mkzoz4GfQLL8'><button className="w-152 mt-7 text-white bg-blue-500 px-12 py-2 rounded-lg hover:shadow-xl  hover:bg-blue-400">Ir para localização</button></Link>
                </div>
            </section>
            <SectionContact />
            <Footer />
        </>

    )
}

export default Empreendimento