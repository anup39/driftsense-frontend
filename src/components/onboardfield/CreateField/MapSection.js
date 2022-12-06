import React, { useCallback } from "react";
import MapContainer from "../../OpenLayersComponent/MapContainer";
import useOLMap from "../../OpenLayersComponent/useOLMap";
import {
  Controls,
  LayerSwitcherControl,
  FullScreenControl,
} from "../../OpenLayersComponent/Controls";
import { Layers, VectorLayer } from "../../OpenLayersComponent/Layers";
import {
  defaultStyles,
  getStyles,
} from "../../OpenLayersComponent/helpers/styleUtils";
import { fromLonLat } from "ol/proj";
import { useSelector } from "react-redux";
import DrawTool from "../../OpenLayersComponent/DrawTool";

export default function MapSection() {
  const { mapRef, map } = useOLMap({
    center: fromLonLat([-99.14, 43.661025]),
    zoom: 13,
  });

  const layers = useSelector((state) => state.createFieldMap.layers);

  // console.log(layers, "layers");
  const setLayerStyle = useCallback(
    (style, feature, resolution) =>
      getStyles({
        style,
        feature,
        resolution,
      }),
    []
  );

  return (
    <div className="">
      <MapContainer
        ref={mapRef}
        mapInstance={map}
        // style={{ maxHeight: `${maxHeight}vh`, height: `${maxHeight}vh`, position: 'relative' }}
        style={{ width: "100vw", height: "100vh", position: "relative" }}
      >
        <Controls>
          <FullScreenControl />
          <LayerSwitcherControl />
        </Controls>

        <Layers>
          {layers.map(
            ({ id, geometryType, checked, zoomToLayer, geojson }, index) => (
              <VectorLayer
                key={index}
                geojson={geojson}
                zIndex={layers.length - index}
                zoomToLayer={zoomToLayer}
                visibleOnMap={checked}
                setStyle={(feature, resolution) =>
                  setLayerStyle({ ...defaultStyles }, feature, resolution)
                }
              />
            )
          )}
        </Layers>
        <DrawTool />
      </MapContainer>
    </div>
  );
}
