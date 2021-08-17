// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

const Provider = ({children}) => {

  const [ cars, setCars ] = useState({
    red: false,
    blue: false,
    yellow: false,
  })

  const moveCar = (car, side) => {
    const newCars = { ...cars, [car]: side }
    setCars(newCars);
  }

  const context = {
    cars, moveCar,
  };

  // const { children } = this.props;

  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Provider, CarsContext}
