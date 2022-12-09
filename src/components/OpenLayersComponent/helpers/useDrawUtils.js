/* eslint-disable react/prop-types */
import { useCallback, useMemo } from "react";
import { Modify, Select } from "ol/interaction";
import { shiftKeyOnly, singleClick } from "ol/events/condition";
import Overlay from "ol/Overlay";

export default function useDrawUtils({ mapInstance, popupRef }) {
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

  const select = useMemo(
    () =>
      new Select({
        wrapX: false,
      }),
    []
  );

  const modify = useMemo(
    () =>
      new Modify({
        features: select.getFeatures(),
        deleteCondition: (event) => shiftKeyOnly(event) && singleClick(event),
      }),
    [select]
  );

  const overlay = new Overlay({
    element: popupRef.current,
    autoPan: {
      animation: {
        duration: 250,
      },
    },
  });

  return {
    overlay,
    select,
    modify,
    addInteraction,
    removeInteraction,
  };
}
