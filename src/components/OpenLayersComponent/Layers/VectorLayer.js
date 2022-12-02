import { useEffect } from "react";
import OLVectorLayer from "ol/layer/Vector";
import { useMapInstance } from "../MapContainer";

const VectorLayer = ({ source, style, zIndex = 0 }) => {
  const { map } = useMapInstance();

  useEffect(() => {
    if (!map) return;

    let vectorLayer = new OLVectorLayer({
      source,
      style,
    });

    map.addLayer(vectorLayer);
    vectorLayer.setZIndex(zIndex);

    return () => {
      if (map) {
        map.removeLayer(vectorLayer);
      }
    };
  }, [map]);

  return null;
};

export default VectorLayer;
