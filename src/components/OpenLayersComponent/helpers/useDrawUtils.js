/* eslint-disable react/prop-types */
import { useCallback } from "react";

export default function useDrawUtils({ mapInstance }) {
  const addInteraction = useCallback(
    (interaction) => {
      if (!mapInstance) return () => {};
      return mapInstance.addInteraction(interaction);
    },
    [mapInstance]
  );

  const removeInteraction = useCallback(
    (interaction) => {
      if (!mapInstance) return () => {};
      return mapInstance.removeInteraction(interaction);
    },
    [mapInstance]
  );

  return {
    addInteraction,
    removeInteraction,
  };
}
