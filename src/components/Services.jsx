import React from "react";
import { motion } from "framer-motion";
import { RiReactjsFill } from "react-icons/ri"
import { SiChakraui, SiMongodb, SiExpress, SiPostman } from "react-icons/si"
import { DiNodejs } from "react-icons/di"
const Services = () => {
    const animations = {
        whileInView: {
            x: 0,
            y: 0,
            opacity: 1,
        },
        one: {
            opacity: 0,
            x: "-100%",
        },
        twoAndThree: {
            opacity: 0,
            y: "-100%",
        },

        four: {
            opacity: 0,
            x: "100%",
        },
    };

    return (
        <div id="services">
            <h2>Services</h2>
            <section>
                <motion.div className="serviceBox1" whileInView={animations.whileInView} initial={animations.one}>
                    <h3>3+</h3>
                    <p>Years Experience</p>
                </motion.div>


                <motion.div className="serviceBox2" whileInView={animations.whileInView} initial={animations.twoAndThree}>
                    <SiPostman />
                    <span>POSTMAN</span>
                </motion.div>


                <motion.div className="serviceBox3" whileInView={animations.whileInView} initial={animations.twoAndThree} transition={{ delay: 0.2 }}>
                    <SiChakraui />
                    <span>CHAKRA UI</span>
                </motion.div>

                <motion.div className="serviceBox4" whileInView={animations.whileInView} initial={animations.four}>
                    <div id='mern_div'>

                        <SiMongodb />
                        <SiExpress />
                        <RiReactjsFill />
                        <DiNodejs />
                    </div>

                    <span> M E R N  STACK DEVELOPMENT</span>
                </motion.div>

            </section>
        </div>
    );
};

export default Services;
