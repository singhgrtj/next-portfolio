import React from 'react';
import Circle from './Circle';
import ProjectCard from './ProjectCard';
import Title from './Title';
import { motion } from 'framer-motion';
import { showIn } from '../variants';

interface Props {

}

const Projects: React.FC<Props> = (data) => {
    return (
        <section className="px-4 py-6 w-full md:px-28 md:min-h-screen bg-secondary md:flex md:flex-col md:justify-center" id="projects">
            {/* Title */}
            <motion.div 
                className="flex justify-center items-center"
                variants={showIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: false }}>
                <div className="mr-2">
                    <Title title="PORTFOLIO" />
                </div>
                <Circle />
            </motion.div>

            {/* Projects Card */}
            <motion.div 
                className="flex flex-col items-center mt-2 md:flex-row md:justify-between md:mt-8"
                variants={showIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: false }}>
                <ProjectCard 
                    name="Nomade4SDGs"
                    descripcion="Website + App for digital nomads, using React Native Expo and interacting with 3rd party API such as Musement."
                    button="View online"
                    tags="#reactnative #restapi #musement"
                    image="/welcome.jpg"
                    url="https://nomade4sdgs.org/"/>
                <div className="w-2/12"/>
                <ProjectCard 
                    name="Arkhi UI/UX"
                    descripcion="Arkhi is a innovating mental health webapp that is going to be made using Next JS + Tailwind CSS + Firebase"
                    button="View on Figma"
                    tags="#figma #ui #ux"
                    image="/arkhi.png"
                    url="https://www.figma.com/file/lZEF4cMj1mHL6tIx83zKw8/Arkhi---UI-%2F-UX?node-id=0%3A1"/>
                <div className="w-2/12"/>
                <ProjectCard 
                    name="Binance Lite Clone"
                    descripcion="As a crypto enthusiast, so why not a Binance Lite Clone? Its made using React Native Expo + Tailwind CSS."
                    button="View in Github"
                    tags="#reactnative #crypto #tailwindcss"
                    image="/binance-lite.png"
                    url="https://github.com/singhgrtj/binance-lite-clone"/>
            </motion.div>
        </section>
    )
}

export default Projects;
