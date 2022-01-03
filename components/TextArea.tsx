import React from 'react';


interface Props {
    value: string;
    onChange: (e) => void;
}

const TextArea: React.FC<Props> = (props) => {

    const { value, onChange } = props;

    return (
        <textarea 
            className="w-full border border-lightgray rounded-lg h-48 p-4 mt-2 md:mt-0 resize-none" 
            placeholder="Your message... " 
            value={value} 
            onChange={onChange}/>
    )
}

export default TextArea;
