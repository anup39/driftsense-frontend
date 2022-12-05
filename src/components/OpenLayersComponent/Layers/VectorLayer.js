/* eslint-disable consistent-return */
/* eslint-disable react/forbid-prop-types */
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { get } from "ol/proj";
import GeoJSON from "ol/format/GeoJSON";
import { Vector as VectorSource } from "ol/source";
import OLVectorLayer from "ol/layer/Vector";
import { defaultStyles, getStyles } from "../helpers/styleUtils";
import { useMapInstance } from "../MapContainer";
export function VectorLayer({
  geojson,
  style,
  zIndex,
  zoomToLayer,
  visibleOnMap,
}) {
  const [vectorLayer, setVectorLayer] = useState(null);
  const { map } = useMapInstance();

  useEffect(
    () => () => map && vectorLayer && map.removeLayer(vectorLayer),
    [map, vectorLayer]
  );

  useEffect(() => {
    if (!map) return;

    const vectorLyr = new OLVectorLayer({
      source: new VectorSource({
        features: new GeoJSON().readFeatures(geojson, {
          featureProjection: get("EPSG:3857"),
        }),
      }),
      declutter: true,
    });

    setVectorLayer(vectorLyr);
  }, [map, geojson]);

  useEffect(() => {
    if (!map || !vectorLayer) return;
    if (visibleOnMap) {
      map.addLayer(vectorLayer);
    } else {
      map.removeLayer(vectorLayer);
    }
  }, [map, vectorLayer, visibleOnMap]);

  useEffect(() => {
    if (!vectorLayer || !style.visibleOnMap) return;
    vectorLayer.setStyle((feature, resolution) =>
      getStyles({ style, feature, resolution })
    );
  }, [vectorLayer, style]);

  useEffect(() => {
    if (!vectorLayer) return;
    vectorLayer.setZIndex(zIndex);
  }, [vectorLayer, zIndex]);

  useEffect(() => {
    if (!map || !vectorLayer || !zoomToLayer) return;
    map.getView().fit(vectorLayer.getSource().getExtent(), {
      padding: [50, 50, 50, 50],
      duration: 900,
      constrainResolution: true,
    });
  }, [map, vectorLayer, zoomToLayer]);

  return null;
}

VectorLayer.defaultProps = {
  zIndex: 0,
  style: { ...defaultStyles },
  zoomToLayer: false,
};

VectorLayer.propTypes = {
  geojson: PropTypes.object.isRequired,
  style: PropTypes.object,
  zIndex: PropTypes.number,
  zoomToLayer: PropTypes.bool,
  // Context: PropTypes.object.isRequired,
};

export default VectorLayer;
