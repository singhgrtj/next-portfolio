import React from 'react';
import Button from './Button';

interface Props {
    
}

const ProjectCard: React.FC<Props> = (props) => {

    const {  } = props;

    return (
        <div className="flex flex-col w-full items-center pb-4 shadow-lg rounded-lg bg-white mt-4 hover:cursor-pointer hover:scale-105 hover:transition hover:duration-75">
            <div className="bg-cover bg-no-repeat w-full rounded-lg h-52" style={{ backgroundImage: "url('/welcome.jpg')" }}></div>
            <div className="font-semibold text-lg mt-6 md:text-2xl">Shopper Commerce UI</div>
            <div className="text-gray text-center font-regular mt-4 md:text-base md:px-4">
                Hello, I’m Singh, I’m a graduated frontend developer and self-taught UI/UX designer. 
                I’m a React lover and CSS developer  
            </div>
            <div className="mt-6">
                <Button title="View on Github" />
            </div>
            <hr className="w-full mt-6" />
            <div className="text-gray text-center font-regular mt-4 md:text-xl">
                #react #nextjs #tailwindCSS
            </div>
        </div>
    )
}

export default ProjectCard;
