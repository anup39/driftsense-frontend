import React, { useContext } from "react";
import MapContext from "./MapContext";
import "./index.css";

const { forwardRef } = React;

export function useMapInstance() {
  return useContext(MapContext);
}

const MapContainer = forwardRef(({ children, mapInstance, ...rest }, ref) => {
  const map = mapInstance;

  return (
    <MapContext.Provider value={{ map }}>
      {/* <div ref={ref} id="ol-map" className="ol-map" {...rest}>
        {children}
      </div> */}

      <div id="ol-map" ref={ref} className="h-[78vh]"></div>
      {children}
    </MapContext.Provider>
  );
});

export default MapContainer;
