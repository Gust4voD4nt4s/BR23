const animationHeroPattern = {
    initial: {opacity: 0, y: -100},
    animate: {opacity: 1, y: 0},
    whileInView: {opacity: 1, y: 0},
    exit: {opacity: 0, y: -100},
    transition: {duration: 0.5}
}

export default animationHeroPattern
