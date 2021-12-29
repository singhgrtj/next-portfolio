import React from 'react';

interface Props {
    title: string;
    icon: any;
    responsiveIcon: any;
}

const ContactTags: React.FC<Props> = (props) => {

    const { icon, title, responsiveIcon } = props;

    return (
        <div className="flex items-center justify-between bg-primary rounded-lg px-4 py-1 md:py-2 md:mr-12">
            <div className="flex md:hidden">
                {icon}
            </div>
            <div className="hidden md:flex">
                {responsiveIcon}
            </div>
            <div className="text-xs font-regular ml-4 md:text-base">{title}</div>
        </div>
    )
}

export default ContactTags
