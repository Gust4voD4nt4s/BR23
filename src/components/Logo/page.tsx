import Image, { StaticImageData } from "next/image"
import Link from "next/link"


const Logo = (props: { src: StaticImageData, alt?: any }) => {
    return (
        <Image className="w-36 max-h-16" src={props.src} alt={props.alt} />
    )
}

export default Logo