import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";
import { showIn } from "../variants";

interface Props {
  name: string;
  descripcion: string;
  button: string;
  tags: string;
  image: string;
  url: string;
}

const ProjectCard: React.FC<Props> = (props) => {
  const { name, descripcion, button, tags, image, url } = props;

  return (
    <motion.div
      className="flex flex-col w-full items-center pb-4 shadow-lg rounded-lg bg-white mt-4 hover:cursor-pointer hover:transition hover:duration-75"
      variants={showIn}
    >
      <div
        className="bg-cover bg-no-repeat w-full rounded-lg h-52"
        style={{ backgroundImage: `url('${image}')` }}
      ></div>
      <div className="font-semibold text-lg mt-6 md:text-2xl">{name}</div>
      <div className="text-gray text-center font-regular mt-4 md:text-base md:px-4">
        {descripcion}
      </div>
      <div className="mt-6">
        <Button title={button} url={url} />
      </div>
      <hr className="w-full mt-6" />
      <div className="text-gray text-center font-regular mt-4 md:text-xl">
        {tags}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
