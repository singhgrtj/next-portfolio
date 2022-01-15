import React from "react";

interface Props {}

const Circle: React.FC<Props> = (props) => {
  return <div className="bg-primary rounded-full w-6 h-6 md:w-8 md:h-8" />;
};

export default Circle;
