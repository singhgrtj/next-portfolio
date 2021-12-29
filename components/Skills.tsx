import React from 'react';
import Circle from './Circle';
import SkillCard from './SkillCard';
import Skill from './Skill';
import Title from './Title';
import { IoCodeSlash, IoServerOutline, IoGitPullRequestOutline } from "react-icons/io5";


interface Props {

}

const Skills: React.FC<Props> = () => {
    return (
        <section className="px-4 py-6 w-full md:px-28 md:min-h-screen bg-secondary md:flex md:flex-col md:justify-center">
            {/* Title */}
            <div className="flex justify-center items-center">
                <div className="mr-2">
                    <Title title="SKILLS" />
                </div>
                <Circle />
            </div>

            {/* Text */}
            <div className="flex justify-center items-center">
                <div className="text-gray text-center font-regular mt-8 md:text-xl md:w-2/4">
                    Hello, I’m Singh, I’m a graduated frontend developer and self-taught UI/UX designer. 
                    I’m a React lover and CSS developer  
                </div>
            </div>

            {/* Skill Card */}
            <div className="flex flex-col items-center mt-2 md:flex-row md:justify-between md:mt-8">
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
            </div>

        </section>
    )
}

export default Skills;
