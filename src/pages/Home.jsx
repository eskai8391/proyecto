import {motion} from 'framer-motion'
import {useEffect} from "react";

import {useNavigate} from "react-router-dom";


const Home = () => {
    let navigate = useNavigate()

    const handleRedirect = e => {
        e.preventDefault()

        navigate('/calc')
    }

    useEffect(() => {
        const onKeyDown = e => {
            if (e.key === "Enter") handleRedirect(e)
        }

        document.addEventListener("keydown", onKeyDown)

        return () => {
            document.removeEventListener('keydown', onKeyDown)
        }

    }, [])

    const variants = {
        init: {}
    }

    return (
        <div className={"home"}>
            <motion.h1
                variants={variants}
                initial={{scale: 1.05, opactiy: 1}}

                animate={{
                    scale: [1.05, 1, 1.05],
                    opacity: [.8, 0, .8],
                    transition: {duration: 1.4, repeat: "infinity", repeatType: "reverse",}
                }}

                exit={{
                    scale: 1.1,
                    opacity: [1, 1, 1, 1, 1],
                    x: ["0%", "0%", "0%", "0%", "-200%"],
                    transition: {duration: 1.6, ease: "easeOut"}
                }}>

                Bienvenido usuario presiona <button className={"home__btn"}
                                                    onClick={e => handleRedirect(e)}>enter</button> para continuar
            </motion.h1>
        </div>
    )
}
export default Home