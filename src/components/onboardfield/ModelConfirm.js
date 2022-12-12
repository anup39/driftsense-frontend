import ConfirmModelHeader from "./ModelConfirm/ConfirmModelHeader";
import {
  togglePopup,
  toggleDraw,
  clearLayers,
  toggleshowDetailsForm,
  editLayer,
} from "../../reducers/createFieldMapSlice";
import { useDispatch, useSelector } from "react-redux";
import { useGetLocationAcerageMutation } from "../../api/fieldApi";
import { useEffect } from "react";

export default function ModelConfirm() {
  const dispatch = useDispatch();
  const layers = useSelector((state) => state.createFieldMap.layers);
  const layer_data = { geojson: layers[layers.length - 1].geojson };
  const [getLocationAcerage, { data: data_location_acerage }] =
    useGetLocationAcerageMutation();

  useEffect(() => {
    if (layer_data.length !== 0) {
      getLocationAcerage(layer_data);
    }
  }, []);

  const handleDrawnCancel = () => {
    dispatch(togglePopup(false));
    dispatch(toggleDraw(false));
    dispatch(clearLayers());
  };

  const handleDrawnConfirm = () => {
    const layer = {
      id: 1,
      name: "field-drawn",
      geometryType: "POLYGON",
      checked: true,
      zoomToLayer: false,
      geojson: layer_data.geojson,
      location: data_location_acerage.address,
      acerage: data_location_acerage.acerage,
    };
    dispatch(editLayer(layer));
    dispatch(togglePopup(false));
    dispatch(toggleDraw(false));
    dispatch(toggleshowDetailsForm(true));
  };
  return (
    <>
      <div className="absolute px-2 sdc:px-4 tdc:px-6 fdc:px-10   w-full   h-full pt-3   ">
        <div className=" h-full bg-slate-800/80  rounded-md  ">
          <div className="h-full grid content-center">
            <div className="bg-slate-800 p-4 max-w-[18.69rem] min-h-[144px] rounded-lg space-y-5  mx-auto ">
              <ConfirmModelHeader />
              <div className="flex flex-row gap-4 justify-center items-center">
                <div
                  onClick={handleDrawnCancel}
                  className="p-3 cursor-pointer bg-red-600 rounded-md text-white"
                  href="/"
                >
                  Cancel
                </div>
                <div
                  onClick={handleDrawnConfirm}
                  className="p-3 rounded-md  cursor-pointer bg-[#219653] text-white"
                  href="/"
                >
                  Confirm
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
