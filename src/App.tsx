import React from 'react';
import { ComposableMap, Geographies, Geography } from "react-simple-maps"

import './App.css';

const geoUrl =
    "https://raw.githubusercontent.com/MrVonny/FindMap/master/src/GeoJSON/map.topojson"


function App() {
  return (
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
              geographies.map((geo) => (
                  <Geography key={geo.rsmKey} geography={geo} />
              ))
          }
        </Geographies>
      </ComposableMap>
  );
}

export default App;
