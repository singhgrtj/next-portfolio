import React from 'react';
import Circle from './Circle';
import Title from './Title';

interface Props {

}

const Projects: React.FC<Props> = () => {
    return (
        <section className="px-4 py-6 w-full md:px-28 md:min-h-screen bg-secondary md:flex md:flex-col md:justify-center">
            {/* Title */}
            <div className="flex justify-center items-center">
                <div className="mr-2">
                    <Title title="PORTFOLIO" />
                </div>
                <Circle />
            </div>

            {/* Project Card */}
            <div className="flex flex-col items-center mt-2 md:flex-row md:justify-between md:mt-8">
            </div>

        </section>
    )
}

export default Projects;
