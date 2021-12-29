import React from 'react';

interface Props {
    title: string;
}

const Button: React.FC<Props> = (props) => {
    const { title } = props;

    return (
        <button className="w-36 h-10 bg-primary text-base font-semibold rounded-lg md:w-44 md:h-14 md:text-lg">
            {title}
        </button>
    )
}

export default Button
