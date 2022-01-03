import React from 'react';
import Link from 'next/link';

interface Props {
    title: string;
    url: string;
    next_link: boolean;
}

const Button: React.FC<Props> = (props) => {
    const { title, url, next_link } = props;

    const onClick = () => {
        window.open(url, '_blank')
    }

    if (next_link) {
        return (
            <Link href="url">
                <button className="w-36 h-10 bg-primary text-base font-semibold rounded-lg md:w-44 md:h-14 md:text-lg hover:border-2 hover:border-primary hover:bg-secondary" onClick={onClick}>
                    {title}
                </button>
            </Link>
        )
    }

    return (
        <button className="w-36 h-10 bg-primary text-base font-semibold rounded-lg md:w-44 md:h-14 md:text-lg hover:border-2 hover:border-primary hover:bg-secondary" onClick={onClick}>
            {title}
        </button>
    )
}

export default Button;
