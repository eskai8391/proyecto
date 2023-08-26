import {motion, useMotionValue} from 'framer-motion'

const Option = ({data}) => {


        const {title, methods} = data.opt
        const op = useMotionValue(1)

        return (
            <motion.div
                className="calc__menu__options__option"

                onClick={() => {
                    data.toggleOption(data.index)
                    op.set(1 - (data.index * 0.2))
                }}

                key={data.index}

                whileHover={data.isActive !== data.index && {scale: .99}}

                layoutId={data.index}

                layout="size"
            >

                <motion.p
                    className="calc__menu__options__option__title"

                    initial={{
                        fontSize: "1.1rem"
                    }}

                    animate={data.isActive === data.index ? {
                            fontSize: "1rem",
                            transition: {duration: .1}
                        }
                        : {}
                    }>
                    {title}
                </motion.p>

                <motion.ul
                    initial={{display: "none"}}

                    animate={data.isActive === data.index ?
                        {
                            display: "block",
                            opacity: [0, 1],
                            transition: {duration: .5, delay: .2}
                        }
                        : {
                            display: "none"
                        }
                    }>
                    {methods.map((method, index) => <li key={index}>{method}</li>)}
                </motion.ul>

                {data.index === data.isActive ? (
                    <motion.div
                        className={"calc__menu__options__option__bg"}

                        style={{opacity: op.get()}}

                        layoutId="bg"

                        layout="position"
                    >
                    < /motion.div>
                ) : null}
            </motion.div>
        )
    }
;

export default Option;