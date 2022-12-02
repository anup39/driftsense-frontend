import { useRef, useState, useEffect } from "react";
import Map from "ol/Map";
import { View } from "ol";
import { defaults as defaultControls } from "ol/control";

const defaultProps = {
  center: [0, 0],
  zoom: 2,
};

const useOLMap = (props) => {
  const settings = { ...defaultProps, ...props };
  const { center, zoom } = settings;

  const mapRef = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    const options = {
      view: new View({
        center,
        zoom,
        maxZoom: 18,
      }),
      target: mapRef.current,
      controls: defaultControls(),
    };
    const mapInstance = new Map(options);
    setMap(mapInstance);

    return () => mapInstance.setTarget(undefined);
  }, []);

  return { mapRef, map };
};

export default useOLMap;
