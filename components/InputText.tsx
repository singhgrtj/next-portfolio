import React from 'react';


interface Props {

}

const InputText: React.FC<Props> = () => {
    return (
        <input type="text" className="border bg-white border-lightgray rounded-lg w-full h-14 px-4 mt-2 md:mt-2" placeholder="Name" />
    )
}

export default InputText;
