import React from 'react';
import Title from './Title';
import Line from './Line';
import ExperienceInfo from './ExperienceInfo';
import Square from './Square';

interface Props {

}

const Experience: React.FC<Props> = () => {
    return (
        <section className="px-4 py-6 w-full md:px-28 md:min-h-screen md:w-full bg-white md:flex md:items-center">
            {/* Education and Experience */}
            <div className="md:w-4/6 mt-4">
                {/* Education */}
                <div className="flex flex-col justify-center">
                    <Title title="EDUCATION" />
                    <Line />
                    <div className="mt-2">
                        <ExperienceInfo />
                        <div className="mt-10 md:mt-4">
                            <ExperienceInfo />
                        </div>
                    </div>
                </div>

                {/* Experience */}
                <div className="flex flex-col justify-center mt-10">
                    <Title title="WORK EXPERIENCE" />
                    <Line />
                    <div className="mt-2">
                        <ExperienceInfo />
                        <div className="mt-10 md:mt-4">
                            <ExperienceInfo />
                        </div>
                        <div className="mt-10 md:mt-4">
                            <ExperienceInfo />
                        </div>
                    </div>
                </div>
            </div>

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
    )
}

export default Experience;
