import { useEffect } from "react";
import { fromLonLat } from "ol/proj";
import { useMapInstance } from "../MapContainer";
import { useSelector } from "react-redux";

export default function EditFeature({
  overlay,
  enable,
  modify,
  select,
  addInteraction,
  removeInteraction,
}) {
  const field_geom_edit = useSelector(
    (state) => state.createFieldMap.field_geom_edit
  );
  console.log(field_geom_edit);
  useEffect(() => {
    if (enable) {
      addInteraction(select);
    } else {
      removeInteraction(select);
    }
  }, [select, enable, addInteraction, removeInteraction]);

  const { map } = useMapInstance();

  useEffect(() => {
    if (map) {
      select.on("select", (e) => {
        if (e.target.getFeatures().getArray()[0] !== undefined) {
          const id = e.target.getFeatures().getArray()[0].values_.id;
          const center = e.target.getFeatures().getArray()[0].values_.center;
          if (!id && !center) {
            return map.removeOverlay(overlay);
          }
          const wktString = center;
          const coordFinder = /\(\s?(\S+)\s+(\S+)\s?\)/g;
          const allMatches = coordFinder.exec(wktString);
          const lon = parseFloat(allMatches[1]);
          const lat = parseFloat(allMatches[2]);
          const center_coords = fromLonLat([lon, lat]);
          map.addOverlay(overlay);
          overlay.setPosition(center_coords);
        } else {
          map.removeOverlay(overlay);
        }
      });
    }
  }, [select, overlay, map]);

  useEffect(() => {
    if (field_geom_edit) {
      addInteraction(modify);
      map.removeOverlay(overlay);
      modify.on("modifyend", (e) => {
        const modifiedFeatures = [];
        const features = e.features.getArray();
        for (let i = 0; i < features.length; i += 1) {
          const rev = features[i].getRevision();
          if (rev > 1) {
            modifiedFeatures.push(features[i]);
          }
        }
        console.log(modifiedFeatures);
      });
    } else {
      removeInteraction(modify);
    }
  }, [
    field_geom_edit,
    modify,
    addInteraction,
    removeInteraction,
    overlay,
    map,
  ]);

  return null;
}
