import { useEffect } from "react";
import { fromLonLat } from "ol/proj";
import Overlay from "ol/Overlay";
import { useMapInstance } from "../MapContainer";

export default function EditFeature({
  enable,
  select,
  addInteraction,
  removeInteraction,
}) {
  useEffect(() => {
    if (enable) {
      addInteraction(select);
    } else {
      removeInteraction(select);
    }
  }, [select, enable, addInteraction, removeInteraction]);

  const { map } = useMapInstance();

  useEffect(() => {
    select.on("select", (e) => {
      const id = e.target.getFeatures().getArray()[0].values_.id;
      const center = e.target.getFeatures().getArray()[0].values_.center;
      console.log(id, center);
      const wktString = center;
      const coordFinder = /\(\s?(\S+)\s+(\S+)\s?\)/g;
      const allMatches = coordFinder.exec(wktString);
      const lon = parseFloat(allMatches[1]);
      const lat = parseFloat(allMatches[2]);
      console.log(lat, lon);
      // const center_coords = fromLonLat([lon, lat], "EPSG:4326");
      // popupElement.style.zIndex = 55;
      // console.log(center_coords);
      // console.log(overlay);
      // overlay.setPosition(center_coords);
    });
  }, [select]);

  useEffect(() => {
    if (map) {
      const popupElement = document.createElement("div");
      popupElement.id = "popup";
      popupElement.style.position = "absolute";
      popupElement.style.zIndex = 5;

      const overlay = new Overlay({
        element: popupElement,
        autoPan: {
          animation: {
            duration: 250,
          },
        },
      });

      map.addOverlay(overlay);
      map.on("singleclick", function (evt) {
        const coordinate = evt.coordinate;
        // const hdms = toStringHDMS(toLonLat(coordinate));

        console.log(coordinate);

        popupElement.innerHTML = "Hello";
        console.log(overlay);
        overlay.setPosition(coordinate);
      });
    }
  }, [map]);

  return null;
}
