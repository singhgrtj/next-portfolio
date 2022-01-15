import React from "react";
import { motion } from "framer-motion";
import { cardVariants } from "../variants";

interface Props {
  title: string;
  icon: any;
}

const SkillCard: React.FC<Props> = (props) => {
  const { title, icon, children } = props;

  return (
    <motion.div
      variants={cardVariants}
      className="flex flex-col w-full items-center px-8 py-6 shadow-lg bg-white mt-4 md:h-96"
    >
      <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center">
        {icon}
      </div>
      <div className="font-semibold text-2xl mt-4">{title}</div>
      <div className="flex flex-col justify-start mt-4 w-full">{children}</div>
    </motion.div>
  );
};

export default SkillCard;
