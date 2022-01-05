import React from 'react';
import Circle from './Circle';
import TestimonialCard from './TestimonialCard';
import Title from './Title';
import { motion } from 'framer-motion';
import { showIn } from '../variants';

interface Props {

}

const Testimonials: React.FC<Props> = () => {
    return (
        <section className="px-4 py-6 w-full md:px-28 md:min-h-screen md:w-full bg-white md:flex md:flex-col md:justify-center">
            {/* Title */}
            <motion.div 
                className="flex justify-center items-center"
                variants={showIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: false }}>
                <div className="mr-2">
                    <Title title="TESTIMONIALS" />
                </div>
                <Circle />
            </motion.div>

            {/* Testimonials cards */}
            <motion.div 
                className="flex flex-col md:flex-row md:mt-8"
                variants={showIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: false }}>
                <TestimonialCard 
                    name="Adam Weiss"
                    title="Founder of Revolver Lifestyle"
                    review="
                    I am very grateful to meet Singh, he is a very good person with a very good attitude who is always willing to listen, suggest and learn something new."
                    url="https://www.linkedin.com/in/adamweissnomade/"
                    image="/adam.jpeg"/>
                <div className="hidden md:flex md:w-1/5"/>
                <TestimonialCard 
                    name="Joan Lapaix"
                    title="Founder of Arkhi"
                    review="Singh shows commitment by helping in whatever way he can to make the project a reality and transmits passion for his work in every detail."
                    url="https://www.linkedin.com/in/joan-lapaix/"
                    image="/joan.jpeg"/>
            </motion.div>
        </section>
    )
}

export default Testimonials;
