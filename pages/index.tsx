// Component import
import React from 'react';
import Welcome from '../components/Welcome';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

// Style and constants import

// Other imports

interface Props {}

const Home: React.FC<Props> = (props) => {
  const {} = props;

  return (
    <>
      <Welcome />
      <Skills />
      <Experience />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  );
}

export default Home;