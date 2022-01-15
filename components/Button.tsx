import React from "react";

interface Props {
  title: string;
  url: string;
}

const Button: React.FC<Props> = (props) => {
  const { title, url } = props;

  const onClick = () => {
    window.open(url, "_blank");
  };

  return (
    <button
      className="w-36 h-10 bg-primary text-base font-semibold rounded-lg md:w-44 md:h-14 md:text-lg hover:border-2 hover:border-primary hover:bg-secondary"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
