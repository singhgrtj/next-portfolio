// Component import
import React from 'react';
import Welcome from '../components/Welcome';
import Skill from '../components/Skill';

// Style and constants import

// Other imports

interface Props {}

const Home: React.FC<Props> = (props) => {
  const {} = props;

  return (
    <>
      <Welcome />
      <Skill />
    </>
  );
}

export default Home;