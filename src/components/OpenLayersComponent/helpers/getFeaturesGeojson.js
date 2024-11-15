import GeoJSON from "ol/format/GeoJSON";

export default function getFeaturesGeojson(
  features,
  options = {
    dataProjection: "EPSG:4326",
    featureProjection: "EPSG:3857",
  }
) {
  const format = new GeoJSON();
  const geoJsonStr = format.writeFeatures(features, options);
  return JSON.parse(geoJsonStr);
}
