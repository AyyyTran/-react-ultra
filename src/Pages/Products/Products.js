import React from 'react';
import {InfoSection} from '../../Components';
import {homeObjOne, homeObjTwo} from './Data';

function Products() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
    </>
  );
}

export default Products;
