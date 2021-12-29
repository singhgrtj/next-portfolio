import React from 'react';
import { IoCheckmark } from "react-icons/io5";

interface Props {
    title: string;
}

const Skill: React.FC<Props> = (props) => {

    const { title } = props;

    return (
        <div className="flex">
            <IoCheckmark color="#FFC107" size={30}/>
            <div className="text-base font-normal ml-4 md:text-lg">{title}</div>
        </div>
    )
}

export default Skill;
