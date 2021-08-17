// src/context/CarsContext.js

import { createContext } from 'react';

const CarsContext = createContext({
  cars: {
    red: false,
    blue: false,
    yellow: false,
  },
});

export default CarsContext;
