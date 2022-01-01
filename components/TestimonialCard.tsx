import React from 'react';
import Star from './Star';

interface Props {
    
}

const TestimonialCard: React.FC<Props> = (props) => {

    const {  } = props;

    return (
        <div className="flex flex-col w-full px-6 py-8 shadow-xl rounded-lg bg-white mt-4 hover:cursor-pointer hover:scale-105 hover:transition hover:duration-75">
            {/* Avatar */}            
            <div className="flex flex-col items-center md:flex-row md:justify-center">
                <div className="bg-cover bg-no-repeat rounded-full h-24 w-24 md:h-20 md:w-20" style={{ backgroundImage: "url('/welcome.jpg')" }}></div>
                <div className="text-center mt-4 md:mt-0 md:text-left md:ml-8">
                    <div className="text-xl font-semibold md:text-2xl">Adam Weiss</div>
                    <div className="text-gray text-center font-regular text-sm md:text-base">Founder of Revolvare Lifestyle S.L</div>
                </div>
            </div>

            {/* Text */}            
            <div className="text-center font-regular text-base mt-6 md:text-lg md:flex md:justify-center md:w-full md:mt-8">
                “Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua. “
            </div>

            {/* Stars */}            
            <div className="flex justify-center mt-6 md:mt-8">
                <Star />
            </div>
        </div>
    )
}

export default TestimonialCard;
