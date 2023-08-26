import {useState} from "react";

import {motion} from 'framer-motion'

import Option from '../components/Option.jsx'
import options from '../components/Options.json'
import MatrixCalc from "../components/MatrixCalc.jsx";

const Calc = () => {
    const [active, setActive] = useState(null)

    const handleState = (index) => setActive(index)

    return (
        <motion.div className={"calc"}
                    animate={{
                        opacity: [0, .3, .6, 1],
                        x: ["200%", "0%"],
                        transition: {duration: 1.6, ease: "easeOut", delay: .9}
                    }}>

            <h3>Selecciona una opción</h3>

            <nav className="calc__menu">
                <div className="calc__menu__options">
                    {
                        options.options.map((opt, index) => {
                            let data = {
                                opt: opt,
                                index: index,
                                isActive: active,
                                toggleOption: (handleState)
                            }

                            return <Option key={index} data={data}/>
                        })
                    }
                </div>

                <div className="calc__menu__tools">
                    <MatrixCalc />
                </div>
            </nav>

        </motion.div>
    )
}

export default Calc;