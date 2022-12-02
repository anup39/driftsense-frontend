import React from "react";
import MapContainer from "../OpenLayersComponent/MapContainer";
import useOLMap from "../OpenLayersComponent/useOLMap";
import {
  Controls,
  LayerSwitcherControl,
  FullScreenControl,
} from "../OpenLayersComponent/Controls/";
import {
  Layers,
  VectorLayer,
  VectorTileLayer,
} from "../OpenLayersComponent/Layers";
import { fromLonLat, get } from "ol/proj";
import GeoJSON from "ol/format/GeoJSON";
import vectorSource from "../OpenLayersComponent/Source/vectorSource";
import GeojsonObjects from "../OpenLayersComponent/SampleGeojson/GeojsonObjects";
import FeatureStyles from "../OpenLayersComponent/Styles/Style";

// Geojsons -------Vectorlayers
const geojsonObject1 = GeojsonObjects().geojsonObject1;

export default function MapSection() {
  const { mapRef, map } = useOLMap({
    center: fromLonLat([-99.14, 43.661025]),
    zoom: 13,
  });
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
          <VectorLayer
            source={vectorSource({
              features: new GeoJSON().readFeatures(geojsonObject1, {
                featureProjection: get("EPSG:3857"),
              }),
            })}
            style={FeatureStyles.MultiPolygon}
          />
        </Layers>

        {/* {layers.map(({ id, geometryType, checked }, index) => (
          <VectorTileLayer
            key={id}
            url={getVectorTileUrl(id, geometryType)}
            zIndex={layers.length - index}
            visibleOnMap={checked}
            setStyle={(feature, resolution) =>
              setLayerStyle({ ...defaultStyles }, feature, resolution)
            }
          />
        ))}

        {/* <DrawTool
          geojson={data}
          // geojson={geojson || overlayGeojson}
          identifier="id"
          visibleOnMap
          onSave={() => {
            // console.log(data, 'datax');
          }}
          zIndex={100}
        /> */}
      </MapContainer>
    </div>
  );
}
