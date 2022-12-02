import { useEffect } from "react";
import { FullScreen } from "ol/control";
import { useMapInstance } from "../MapContainer";

const FullScreenControl = () => {
  const { map } = useMapInstance();

  useEffect(() => {
    if (!map) return;

    let fullScreenControl = new FullScreen({});

    map.controls.push(fullScreenControl);

    return () => map.controls.remove(fullScreenControl);
  }, [map]);

  return null;
};

export default FullScreenControl;
