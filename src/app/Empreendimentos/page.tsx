'use client'
import Navbar from "@/components/Navbar/page"
import Footer from "@/components/Footer/page"
import Link from "next/link"
import Card from "@/components/Card/page"
import SectionContact from "@/components/SectionContact/page"
import Casa1 from '@/images/Casas.jpg'

const Empreendimentos = () => {

    const cards = [
        {
            id: '1',
            image: Casa1,
            title: 'Residencial Park',
            city: 'Valparaiso de goias',
            state: 'GO',
            differential: {
                Lazer: [Casa1, 'Lazer completo'],
                Gourmet: [Casa1, 'Espaço Gourmet'],
            }
        },
        {
            id: '2',
            image: Casa1,
            title: 'Park dos Reis',
            city: 'Valparaiso de goias',
            state: 'GO'
        },
        {
            id: '3',
            image: Casa1,
            title: 'Residencial club',
            city: 'Valparaiso de goias',
            state: 'GO'
        },
    ]

    return (
        <>
            <Navbar pageId={1} />
            <section className="flex flex-col items-center">
                <h1 className="text-4xl font-semibold m-10">Nossos Empreendimentos</h1>
                <ul className="rounded p-7 bg-gray-200 mb-10 grid grid-cols-3 gap-10">
                    {cards.map(card => (
                        <li key={card.id}>
                            <Link href={`/Empreendimentos/${card.id}`}>
                                <Card image={card.image} title={card.title} city={card.city} state={card.state}  />
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
            <SectionContact />
            <Footer />
        </>
    )
}

export default Empreendimentos