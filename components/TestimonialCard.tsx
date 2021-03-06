import React from "react";
import Star from "./Star";
import { motion } from "framer-motion";

interface Props {
  review: string;
  name: string;
  title: string;
  url: string;
  image: string;
}

const TestimonialCard: React.FC<Props> = (props) => {
  const { review, name, title, url, image } = props;

  return (
    <a
      className="flex flex-col w-full px-6 py-8 shadow-xl rounded-lg bg-white mt-4 hover:cursor-pointer hover:scale-105 hover:transition hover:duration-75"
      href={url}
      target={"_blank"}
    >
      {/* Avatar */}
      <div className="flex flex-col items-center md:flex-row md:justify-center">
        <div
          className="bg-cover bg-no-repeat rounded-full h-24 w-24 md:h-20 md:w-20"
          style={{ backgroundImage: `url('${image}')` }}
        ></div>
        <div className="text-center mt-4 md:mt-0 md:text-left md:ml-8">
          <div className="text-xl font-semibold md:text-2xl">{name}</div>
          <div className="text-gray text-center font-regular text-sm md:text-base">
            {title}
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="text-center font-regular text-base mt-6 md:text-lg md:flex md:justify-center md:w-full md:mt-8">
        "{review}"
      </div>

      {/* Stars */}
      <div className="flex justify-center mt-6 md:mt-8">
        <Star />
      </div>
    </a>
  );
};

export default TestimonialCard;
