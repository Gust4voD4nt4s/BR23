'use clients'
import Footer from "@/components/Footer/page"
import Navbar from "@/components/Navbar/page"
import SectionContact from "@/components/SectionContact/page"
import Link from "next/link"

const Contact = () => {
    return (
        <>
            <Navbar pageId={4} />
            <section className="flex justify-around">
                <div className="my-24">
                    <h1 className="text-4xl font-semibold mb-10" >Envie-nos uma menssagem</h1>
                    <form className="flex flex-col" method="POST" action="https://formsubmit.co/gustavo1234henrique.gd@gmail.com">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="">Assunto</label>
                            <input className="pl-4 border border-zinc-200 shadow-sm rounded h-10" type="text" name="Assunto" />
                            <label htmlFor="">Nome</label>
                            <input className="pl-4 border border-zinc-200 shadow-sm rounded h-10" type="text" name="Nome" />
                            <label htmlFor="">Sobrenome</label>
                            <input className="pl-4 border border-zinc-200 shadow-sm rounded h-10" type="text" name="Sobrenome" />
                            <label htmlFor="">Seu e-mail</label>
                            <input className="pl-4 border border-zinc-200 shadow-sm rounded h-10" type="email" name="email" />
                            <label htmlFor="">Seu Telefone</label>
                            <input className="pl-4 border border-zinc-200 shadow-sm rounded h-10" type="number" name="Telefone" />
                            <label htmlFor="">Deixe uma menssagem</label>
                            <textarea className="pl-4 pt-1 border border-zinc-200 shadow-sm rounded h-32 " name="Menssagem" />
                        </div>
                        <button type="submit" className="mt-7 text-white bg-blue-500 px-12 py-2 rounded-lg hover:shadow-xl  hover:bg-blue-400">Enviar</button>
                    </form>
                </div>
                <div className="my-24 flex flex-col">
                <h1 className="text-center text-4xl font-semibold mb-10" >Nossa localização</h1>
                <iframe className="h-140 w-152 rounded-2xl shadow-2xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12649.332770845793!2d-47.9825129136517!3d-16.076958319244945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935986a04bc69287%3A0x2df62ecea2daede5!2sShopping%20Sul!5e0!3m2!1spt-BR!2sbr!4v1707699085756!5m2!1spt-BR!2sbr" loading="lazy"/>
                <Link className="" target="_blank" href='https://maps.app.goo.gl/6SF57Mkzoz4GfQLL8'><button className="w-full mt-7 text-white bg-blue-500 px-12 py-2 rounded-lg hover:shadow-xl  hover:bg-blue-400">Traçar rota até a BR23</button></Link>
                </div>
            </section >
            <SectionContact/>
            <Footer />
        </>
    )
}

export default Contact