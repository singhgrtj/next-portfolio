import React from "react";
import Title from "./Title";
import Line from "./Line";
import ExperienceInfo from "./ExperienceInfo";
import Square from "./Square";
import { motion } from "framer-motion";
import { showIn } from "../variants";

interface Props {}

const Experience: React.FC<Props> = () => {
  return (
    <section
      className="px-4 py-6 w-full md:px-28 md:min-h-screen md:w-full bg-white md:flex md:items-center"
      id="experience"
    >
      {/* Education and Experience */}
      <motion.div
        className="md:w-4/6 mt-4"
        initial="initial"
        whileInView="animate"
        viewport={{ once: false }}
      >
        {/* Education */}
        <motion.div className="flex flex-col justify-center" variants={showIn}>
          <Title title="EDUCATION" />
          <Line />
          <div className="mt-2">
            <ExperienceInfo
              date="SEPT 2019 - JUN 2021"
              title="ASSOCIATE OF COMPUTER SCIENCE"
              description="This is where I started my journey as a Programmer, learned basics of JAVA, Android Studio and HTML/CSS."
              place="ACADEMIA EDIB"
            />
            <div className="mt-10 md:mt-4">
              <ExperienceInfo
                date="SEPT 2017 - JUN 2019"
                title="ASSOCIATE OF ELECTRICAL MECHANIC"
                description="From my childhood I had a big interest in this field, but after this degree I realized that it wasn’t made for me."
                place="IES JUNIPER SERRA"
              />
            </div>
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          className="flex flex-col justify-center mt-10"
          variants={showIn}
        >
          <Title title="WORK EXPERIENCE" />
          <Line />
          <div className="mt-2">
            <ExperienceInfo
              date="DEC 2021 - NOW"
              title="FRONTEND DEVELOPER"
              description="Design UI/UX and develop the web app using NEXT JS + Tailwind CSS + Firebase."
              place="Arkhi"
            />
            <div className="mt-10 md:mt-4">
              <ExperienceInfo
                date="JUN 2021 - DEC 2021"
                title="FRONTEND DEVELOPER"
                description="Develop the frontend of the mobile application and website using React Native and Next JS."
                place="Nomade4SDGs"
              />
            </div>
            <div className="mt-10 md:mt-4">
              <ExperienceInfo
                date="MAR 2021 - JUN 2021"
                title="FULLSTACK DEVELOPER"
                description="Started my journey with React, developing  components and Node JS REST API."
                place="PayParc"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Box Design */}
      <div className="hidden md:flex md:flex-col md:w-2/6">
        <div className="ml-16">
          <Square />
        </div>
        <div className="flex justify-end">
          <Square />
        </div>
        <div className="ml-16">
          <Square />
        </div>
        <div className="flex justify-end">
          <Square />
        </div>
        <div className="ml-16">
          <Square />
        </div>
        <div className="flex justify-end">
          <Square />
        </div>
      </div>
    </section>
  );
};

export default Experience;
