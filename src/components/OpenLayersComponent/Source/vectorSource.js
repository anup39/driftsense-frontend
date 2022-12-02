import { Vector as VectorSource } from "ol/source";

function vectorSource({ features }) {
  return new VectorSource({
    features,
  });
}

export default vectorSource;
