import { useEffect } from "react";
import OLTileLayer from "ol/layer/Tile";
import { useMapInstance } from "../MapContainer";

const TileLayer = ({ source, zIndex = 0 }) => {
  const { map } = useMapInstance();

  useEffect(() => {
    if (!map) return;

    let tileLayer = new OLTileLayer({
      source,
      zIndex,
    });

    map.addLayer(tileLayer);
    tileLayer.setZIndex(zIndex);

    return () => {
      if (map) {
        map.removeLayer(tileLayer);
      }
    };
  }, [map]);

  return null;
};

export default TileLayer;
