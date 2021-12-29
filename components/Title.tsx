import React from 'react';

interface Props {
    title: string;
}

const Title: React.FC<Props> = (props) => {
    const { title } = props;

    return (
        <div className="text-2xl font-bold md:text-3xl">
            {title}
        </div>
    )
}

export default Title;
