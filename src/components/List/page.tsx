
import Image, { StaticImageData } from "next/image"


const List = (props: {src: StaticImageData, value: string, alt?: any}) => {
    return (

        <li className="flex items-center mx-1 my-3">
            <Image className="w-9" src={props.src} alt={props.alt} />
            <p className="ml-1">{props.value}</p>
        </li>

    )
}

export default List