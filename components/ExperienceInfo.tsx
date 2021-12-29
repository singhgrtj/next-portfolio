import React from 'react';

interface Props {
}

const ExperienceInfo: React.FC<Props> = (props) => {
    return (
        <div className="mt-2">
            <div className="flex">
                <div className="text-sm font-semibold w-2/5 md:text-lg">
                    SEPTEMBER 2017 - JUNE 2019
                </div>
                <div className="text-sm font-semibold w-3/5 ml-4 md:text-lg md:ml-0">
                    ASSOCIATE OF ELECTRICAL MECHANICS
                </div>
            </div>

            <div className="text-gray text-left font-regular mt-2 text-sm md:text-base md:w-full md:justify-end md:items-end md:hidden">
                Hello, I’m Singh, I’m a graduated frontend developer and self-taught UI/UX designer. 
                I’m a React lover and CSS developer  
            </div>

            <div className="hidden md:flex md:justify-end md:w-full">
                <div className="text-gray text-left font-regular mt-2 text-sm md:text-base md:w-3/5 md:flex md:justify-end md:items-end">
                    Hello, I’m Singh, I’m a graduated frontend developer and self-taught UI/UX designer. 
                    I’m a React lover and CSS developer  
                </div>
            </div>
        </div>
    )
}

export default ExperienceInfo;
