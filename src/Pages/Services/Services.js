import React from 'react';
import {InfoSection, Pricing} from '../../Components';
import {homeObjOne, homeObjThree} from './Data';

function Services() {
  return (
    <>
      <Pricing />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
    </>
  );
}

export default Services;
