import React, { useState } from 'react';
import Footer from './Footer';
import Title from './Title';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import InputText from './InputText';
import TextArea from './TextArea';
import Button from './Button';


interface Props {

}

const Contact: React.FC<Props> = () => {

    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    return (
        <>
            <section className="px-4 py-6 w-full md:px-28 md:min-h-screen bg-secondary md:flex md:flex-row md:pt-36" id="contact">
                {/* Contact Info */}
                <div className="flex flex-col items-center md:w-1/2 md:items-start">
                    <Title title="CONTACT" />
                    <div className="text-gray text-center font-regular text-sm mt-6 md:text-xl md:w-4/5 md:text-left">
                        Hey! Please feel free to contact me at any time! I will try to reply as soon as possible!
                    </div>
                    <div className="text-left text-3xl self-start font-bold mt-4 md:text-5xl md:mt-6">
                        +1 765 978 9678
                    </div>
                    <div className="text-left text-3xl self-start font-bold mt-4 md:text-5xl md:mt-6">
                        singhgrtj@gmail.com
                    </div>
                    <div className="flex mt-8 self-start md:hidden">
                        <div className="mr-2">
                            <IoLogoLinkedin size={50} />
                        </div>
                        <IoLogoGithub size={50}/>
                    </div>
                    <div className="hidden md:flex md:ml-2 md:mt-8">
                        <div className="mr-2">
                            <IoLogoLinkedin size={60} />
                        </div>
                        <IoLogoGithub size={60}/>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="flex flex-col items-center mt-8 w-full md:mt-0 md:w-1/2">
                    <Title title="LET’S GRAB A COFFE AND JUMP ON CONVERSATION WITH ME." />
                    <div className="flex flex-col mt-4 w-full">
                        <InputText placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)}/>
                        <InputText placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="md:mt-2 w-full">
                        <TextArea onChange={(e) => setMessage(e.target.value)} value={message}/>
                    </div>
                    <div className="mt-2 self-start">
                        <Button title="Contact Me" url="www.google.com" next_link={false}/>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Contact;
