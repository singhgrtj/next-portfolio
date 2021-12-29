import React from 'react';

interface Props {
    title: string;
    icon: any;
}

const SkillCard: React.FC<Props> = (props) => {

    const { title, icon, children } = props;

    return (
        <div className="flex flex-col w-full items-center px-8 py-6 shadow-lg bg-white mt-4 md:h-96 hover:cursor-pointer hover:scale-105 hover:transition hover:duration-75">
            <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center">
                {icon}
            </div>
            <div className="font-semibold text-2xl mt-4">
                {title}
            </div>
            <div className="flex flex-col justify-start mt-4 w-full">
                {children}
            </div>
        </div>
    )
}

export default SkillCard;
