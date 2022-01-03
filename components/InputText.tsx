import React from 'react';


interface Props {
    placeholder: string;
    onChange: (e) => void;
    value: string;
}

const InputText: React.FC<Props> = (props) => {

    const { placeholder, onChange, value } = props;

    return (
        <input 
            type="text" 
            className="border bg-white border-lightgray rounded-lg w-full h-14 px-4 mt-2 md:mt-2" 
            placeholder={placeholder} 
            value={value}
            onChange={onChange}/>
    )
}

export default InputText;
