import React from 'react';


interface Props {

}

const TextArea: React.FC<Props> = () => {
    return (
        <textarea className="w-full border border-lightgray rounded-lg h-48 p-4 mt-2 md:mt-0" placeholder="Your message... "/>
    )
}

export default TextArea;
