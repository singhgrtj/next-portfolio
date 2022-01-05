import React from 'react';
import Circle from './Circle';
import SkillCard from './SkillCard';
import Skill from './Skill';
import Title from './Title';
import { IoCodeSlash, IoServerOutline, IoGitPullRequestOutline } from "react-icons/io5";
import { motion } from 'framer-motion';
import { showIn } from '../variants';

interface Props {

}

const Skills: React.FC<Props> = () => {
    return (
        <section className="px-4 py-6 w-full md:px-28 md:min-h-screen bg-secondary md:flex md:flex-col md:justify-center" id="skills">
            {/* Title */}
            <motion.div 
                className="flex justify-center items-center"
                variants={showIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: false }}>
                <div className="mr-2">
                    <Title title="SKILLS" />
                </div>
                <Circle />
            </motion.div>

            {/* Text */}
            <motion.div 
                className="flex justify-center items-center"
                variants={showIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: false }}>
                <div className="text-gray text-center font-regular mt-8 md:text-xl md:w-3/4">
                I design and implement user-oriented functions for websites and applications that use React. js or any React based Framework such as React Native or Next JS. I love TailwindCSS just because how easy and fast it is to style with it.
                </div>
            </motion.div>

            {/* Skill Card */}
            <motion.div 
                className="flex flex-col items-center mt-2 md:flex-row md:justify-between md:mt-8"
                initial="initial"
                whileInView="animate"
                viewport={{ once: false }}>
                <SkillCard icon={<IoCodeSlash size={35}/>} title="Frontend">
                    <Skill title="Typescript"/>
                    <Skill title="React / Redux"/>
                    <Skill title="React Native"/>
                    <Skill title="Next JS (SSR)"/>
                    <Skill title="Tailwind CSS"/>
                    <Skill title="HTML / CSS"/>
                </SkillCard>
                <div className="w-2/12"/>
                <SkillCard icon={<IoServerOutline size={35}/>} title="Backend">
                    <Skill title="Node JS / Express"/>
                    <Skill title="Firebase"/>
                    <Skill title="MySQL"/>
                    <Skill title="REST Api"/>
                </SkillCard> 
                <div className="w-2/12"/>
                <SkillCard icon={<IoGitPullRequestOutline size={35}/>} title="Others">
                    <Skill title="UI / UX"/>
                    <Skill title="Figma"/>
                    <Skill title="Git"/>            
                </SkillCard>
            </motion.div>

        </section>
    )
}

export default Skills;
