import React, { useRef, useState, useEffect } from "react";
import "./Map.css";
import * as olSource from "ol/source";
import BingMaps from "ol/source/BingMaps";
import OLTileLayer from "ol/layer/Tile";
import * as ol from "ol";
import "ol/ol.css";

const Map = ({ zoom, center, ext, onMap }) => {
  const mapRef = useRef();
  const [map, setMap] = useState(null);

  // on component mount
  useEffect(() => {
    let options = {
      view: new ol.View({
        zoom,
        center: center,
        projection: "EPSG:3857",
      }),
      layers: [],
      //   controls: [],
      overlays: [],
    };

    let mapObject = new ol.Map(options);
    mapObject.setTarget(mapRef.current);

    setMap(mapObject);

    return () => {
      mapObject.setTarget(undefined);
    };
  }, []);

  useEffect(() => {
    if (!map) {
      return;
    }

    let tileLayer = new OLTileLayer({
      source: new BingMaps({
        key: "AsQH_JCyErXZ__UlJVJwKwgPAF6ILVJi0p72ig8J3xp4BBfhPQiImz5zHvX23kGr",
        imagerySet: "AerialWithLabelsOnDemand",
      }),
    });

    map.addLayer(tileLayer);
    tileLayer.setZIndex(0);
    return () => {
      if (map) {
        map.removeLayer(tileLayer);
      }
    };
  }, [map]);

  //map instance passing to the parent
  useEffect(() => {
    if (!map) return;

    if (onMap) {
      onMap(map);
    }
  }, [map]);

  return <div  className="w-full h-[80vh]"><div ref={mapRef} className="h-[75vh]"></div></div>;
};

export default Map;
