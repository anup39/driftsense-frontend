import React, { useCallback, useEffect, useRef } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import DrawTool from "../../OpenLayersComponent/DrawTool";
import { useGetFarmerGeojsonQuery } from "../../../api/fieldApi";
import { toggleFarmerLayers } from "../../../reducers/createFieldMapSlice";
import EditPlot from "../../../components/onboardfield/EditPlot";

export default function MapSection() {
  const popupRef = useRef();

  // popupRef.current.innerHTML = "<p>You clicked here:</p>";

  const dispatch = useDispatch();
  const { mapRef, map } = useOLMap({
    center: fromLonLat([-99.14, 43.661025]),
    zoom: 13,
  });

  const layers = useSelector((state) => state.createFieldMap.layers);
  const farmer_id = useSelector((state) => state.auth.farmer_id);
  const layers_farm = useSelector(
    (state) => state.createFieldMap.farmer_layers
  );

  const { data: layers_farmer, isSuccess: is_sucess_farmer } =
    useGetFarmerGeojsonQuery(farmer_id);

  useEffect(() => {
    if (is_sucess_farmer) {
      dispatch(toggleFarmerLayers(layers_farmer));
    }
  }, [is_sucess_farmer, dispatch, layers_farmer]);

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
                farmer_layer={false}
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

          {is_sucess_farmer && layers_farmer
            ? layers_farm.map(({ id, geojson, field_tag }, index) => {
                const last_index = layers_farm.length - 1;
                return (
                  <VectorLayer
                    farmer_layer={true}
                    key={index}
                    geojson={geojson}
                    zIndex={layers_farmer.length - index}
                    zoomToLayer={index === last_index ? true : false}
                    visibleOnMap={true}
                    setStyle={(feature, resolution) =>
                      setLayerStyle({ ...defaultStyles }, feature, resolution)
                    }
                  />
                );
              })
            : null}
        </Layers>
        <DrawTool popupRef={popupRef} />
        {/* <EditPlot popupRef={popupRef} /> */}
      </MapContainer>
    </div>
  );
}
