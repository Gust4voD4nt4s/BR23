'use client'
import Navbar from "@/components/Navbar/page";
import Link from "next/link";
import HeroPattern from "@/components/HeroPattern/page";
import Card from "@/components/Card/page";
import ButtonBlue from "@/components/ButtonBlue/page";
import SectionContact from "@/components/SectionContact/page";
import Footer from "@/components/Footer/page";
import Casa1 from '@/images/Casas.jpg'
import { motion, useInView, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";


export default function Home() {

  const cards = [
    {
      id: 1,
      image: Casa1,
      title: 'Residencial Park',
      city: 'Valparaiso de goias',
      state: 'GO'
    },
    {
      id: 2,
      image: Casa1,
      title: 'Residencial Park',
      city: 'Valparaiso de goias',
      state: 'GO'
    },
    {
      id: 3,
      image: Casa1,
      title: 'Residencial Park',
      city: 'Valparaiso de goias',
      state: 'GO'
    }
  ]

  return (

    <>
      <Navbar pageId={0} />
      <HeroPattern />
      <section>
        <div className="p-5 flex flex-col items-center">
          <motion.h1
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
            className="text-4xl font-semibold">Nossos Empreendimentos
          </motion.h1>
          <ul className="grid grid-cols-3 gap-10 my-10">
            {cards.map((card, index) => index < 3 ? (
              <motion.li
                initial={{ opacity: 0, y: 230 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.2 }}
                key={card.id}
              >
                <Link href={`/Empreendimentos/${card.id}`}>
                  <Card image={card.image} title={card.title} city={card.city} state={card.state} />
                </Link>
              </motion.li>
            ) : '')}
          </ul>
          <ButtonBlue link="/Empreendimentos" value='VER TODOS OS EMPREENDIMENTOS' />
        </div>
      </section>
      <SectionContact />
      <Footer />
    </>

  );
}
