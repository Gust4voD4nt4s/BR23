import Link from "next/link"

const ButtonBlue = (props: {value: string, link: string}) => {
    return (
        <Link href={`${props.link}`}><button className="p-4 bg-blue-500 hover:shadow-lg hover:shadow-blue-500/50 rounded-lg hover:bg-blue-400 text-white">{props.value}</button></Link>
    )
}

export default ButtonBlue