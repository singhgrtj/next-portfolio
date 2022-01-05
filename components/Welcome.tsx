import React from 'react';
import { BsDownload } from "react-icons/bs";
import { IoCall, IoMail, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import ContactTags from './ContactTags';
import { motion } from 'framer-motion';
import { fadeInRight, opacityIn } from '../variants';

interface Props {

}

const Welcome: React.FC<Props> = () => {

    const downloadCV = () => {
        window.open("/cv.pdf", "_blank")
    }

    return (
        <section className="px-4 py-6 w-full md:px-28 md:min-h-screen" id="welcome">
            {/* CV Button */}
            <div className="flex justify-end md:hidden">
                <button className="flex items-center justify-center w-40 h-12 border-2 border-primary bg-secondary rounded-lg" onClick={downloadCV}>
                    <BsDownload size={20}/>
                    <div className="font-semibold text-sm ml-4">
                        Download CV
                    </div>
                </button>
            </div>

            <div className="hidden md:flex md:justify-end">
                <div className="flex justify-end md:absolute">
                    <button className="flex items-center justify-center w-40 h-12 border-2 border-primary bg-secondary rounded-lg">
                        <BsDownload size={20}/>
                        <div className="font-semibold text-sm ml-4" onClick={downloadCV}>
                            Download CV
                        </div>
                    </button>
                </div>
            </div>

            {/* Text and Image */}
            <div className="flex flex-col items-center w-full pt-8 md:flex-row-reverse md:items-center md:justify-center md:h-screen md:pt-0">
                <motion.div 
                    variants={opacityIn}
                    initial="initial"
                    whileInView="animate"
                    className="w-full">
                    <div className="bg-cover bg-no-repeat h-64 w-full rounded-lg md:h-[26rem]" style={{ backgroundImage: "url('/welcome.jpg')" }}></div>
                </motion.div>
                <motion.div 
                    variants={fadeInRight}
                    initial="initial"
                    whileInView="animate"
                    className="flex flex-col pt-10 w-full md:mr-24 md:pt-0">
                    <div className="flex justify-between md:justify-start">
                        <ContactTags title="+1 765 978 9678" icon={<IoCall />} responsiveIcon={<IoCall size={25} />}/>
                        <ContactTags title="singhgrtj@gmail.com" icon={<IoMail />} responsiveIcon={<IoMail size={25} />}/>
                    </div>
                    <div className="flex flex-col items-center mt-6 md:items-start">
                        <div className="text-5xl font-extrabold md:text-7xl">GURTEJ KAUR</div>
                        <div className="text-5xl font-extrabold text-primary mt-2 md:text-7xl">SINGH</div>
                    </div>
                    <div className="text-gray text-center font-regular mt-6 md:text-left md:text-xl">
                        Hello, I’m Singh, I’m a graduated
                        <text className="font-bold">{" frontend developer "}</text>
                        and self-taught 
                        <text className="font-bold">{" UI/UX designer."}</text>    
                    </div>
                    <div className="flex flex-col items-center mt-6 md:justify-start md:flex-row">
                    <button className="w-36 h-10 bg-primary text-base font-semibold rounded-lg md:w-44 md:h-14 md:text-lg hover:border-2 hover:border-primary hover:bg-secondary" onClick={() => window.open("/#projects","_self")}>
                        View my work
                    </button>
                        <div className="flex mt-6 md:hidden">
                            <div className="mr-2 cursor-pointer">
                                <IoLogoLinkedin size={40} onClick={() => window.open("https://www.linkedin.com/in/singhgrtj/", "_blank")}/>
                            </div>
                            <div className="cursor-pointer">
                                <IoLogoGithub size={40} onClick={() => window.open("https://github.com/singhgrtj", "_blank")}/>
                            </div>
                        </div>
                        <div className="hidden md:flex md:ml-2">
                            <div className="mr-2 cursor-pointer">
                                <IoLogoLinkedin size={50} onClick={() => window.open("https://www.linkedin.com/in/singhgrtj/", "_blank")}/>
                            </div>
                            <div className="cursor-pointer">
                                <IoLogoGithub size={50} onClick={() => window.open("https://github.com/singhgrtj", "_blank")}/>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Welcome;
