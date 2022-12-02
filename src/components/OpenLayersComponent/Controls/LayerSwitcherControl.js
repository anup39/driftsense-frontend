import "ol-layerswitcher/dist/ol-layerswitcher.css";
import LayerGroup from "ol/layer/Group";
import LayerTile from "ol/layer/Tile";
import SourceStamen from "ol/source/Stamen";
import LayerSwitcher from "ol-layerswitcher";
import { useEffect } from "react";
import BingMaps from "ol/source/BingMaps";
import { XYZ } from "ol/source";
import { useMapInstance } from "../MapContainer";
import "./layer_switch.css";

const topoMap = (visible = false) =>
  new LayerTile({
    title: "Topo Map",
    type: "base",
    visible,
    source: new XYZ({
      attributions:
        'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/' +
        'rest/services/World_Topo_Map/MapServer">ArcGIS</a>',
      url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
      layer: "topoMap",
      maxZoom: 19,
      crossOrigin: "Anonymous",
    }),
  });

const bing = new LayerTile({
  title: "Satellite",
  type: "base",
  visible: true,
  source: new BingMaps({
    key: "AsQH_JCyErXZ__UlJVJwKwgPAF6ILVJi0p72ig8J3xp4BBfhPQiImz5zHvX23kGr",
    imagerySet: "AerialWithLabelsOnDemand",
  }),
});

const watercolor = new LayerTile({
  title: "Water color",
  type: "base",
  visible: false,
  source: new SourceStamen({
    layer: "watercolor",
  }),
});

const baseMaps = new LayerGroup({
  title: "Base maps",
  layers: [bing, watercolor, topoMap()],
});

const layerSwitcher = new LayerSwitcher({
  reverse: true,
  groupSelectStyle: "group",
});

function LayerSwitcherControl() {
  const { map } = useMapInstance();

  useEffect(() => {
    if (!map) return;

    map.addLayer(baseMaps);
    map.addControl(layerSwitcher);
  }, [map]);

  return null;
}

export default LayerSwitcherControl;
