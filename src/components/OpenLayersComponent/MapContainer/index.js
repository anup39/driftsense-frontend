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
      <div className="w-full h-[80vh]">
        <div id="ol-map" ref={ref} className="h-[75vh]"></div>
        {children}
      </div>
    </MapContext.Provider>
  );
});

export default MapContainer;
