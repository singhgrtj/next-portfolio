import React from 'react';
import Button from './Button';

interface Props {
    name: string;
    descripcion: string;
    button: string;
    tags: string;
    image: string;
}

const ProjectCard: React.FC<Props> = (props) => {

    const { name, descripcion, button, tags, image } = props;

    return (
        <div className="flex flex-col w-full items-center pb-4 shadow-lg rounded-lg bg-white mt-4 hover:cursor-pointer hover:scale-105 hover:transition hover:duration-75">
            <div className="bg-cover bg-no-repeat w-full rounded-lg h-52" style={{ backgroundImage: `url('${image}')` }}></div>
            <div className="font-semibold text-lg mt-6 md:text-2xl">{name}</div>
            <div className="text-gray text-center font-regular mt-4 md:text-base md:px-4">
                {descripcion} 
            </div>
            <div className="mt-6">
                <Button title={button} />
            </div>
            <hr className="w-full mt-6" />
            <div className="text-gray text-center font-regular mt-4 md:text-xl">
                {tags}
            </div>
        </div>
    )
}

export default ProjectCard;
