import React from 'react';
import Circle from './Circle';
import TestimonialCard from './TestimonialCard';
import Title from './Title';

interface Props {

}

const Testimonials: React.FC<Props> = () => {
    return (
        <section className="px-4 py-6 w-full md:px-28 md:min-h-screen md:w-full bg-white md:flex md:flex-col md:justify-center">
            {/* Title */}
            <div className="flex justify-center items-center">
                <div className="mr-2">
                    <Title title="TESTIMONIALS" />
                </div>
                <Circle />
            </div>

            {/* Testimonials cards */}
            <div className="flex flex-col md:flex-row md:mt-8">
                <TestimonialCard />
                <div className="hidden md:flex md:w-1/5"/>
                <TestimonialCard />
            </div>
        </section>
    )
}

export default Testimonials;
