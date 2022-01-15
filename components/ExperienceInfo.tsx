import React from "react";

interface Props {
  place: string;
  title: string;
  date: string;
  description: string;
}

const ExperienceInfo: React.FC<Props> = (props) => {
  const { place, title, date, description } = props;

  return (
    <div className="mt-2">
      <div className="flex">
        <div className="text-sm font-semibold w-2/5 md:text-lg">{place}</div>
        <div className="text-sm font-semibold w-3/5 ml-4 md:text-lg md:ml-0">
          {title}
        </div>
      </div>

      <div className="flex md:hidden mt-2">
        <div className="text-sm font-regular w-2/5 text-gray md:text-lg">
          {date}
        </div>
        <div className="text-sm font-regular w-3/5 ml-4 text-gray md:text-lg md:ml-0">
          {description}
        </div>
      </div>

      <div className="hidden md:flex md:w-full">
        <div className="text-sm font-regular w-2/5 text-gray md:text-base">
          {date}
        </div>
        <div className="text-sm font-regular w-3/5 ml-4 text-gray md:text-base md:ml-0">
          {description}
        </div>
      </div>
    </div>
  );
};

export default ExperienceInfo;
