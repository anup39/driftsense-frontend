import ConfirmModelHeader from "./ModelConfirm/ConfirmModelHeader";
import {
  togglePopup,
  toggleDraw,
  clearLayers,
  toggleshowDetailsForm,
} from "../../reducers/createFieldMapSlice";
import { useDispatch } from "react-redux";

export default function ModelConfirm() {
  const dispatch = useDispatch();
  const handleDrawnCancel = () => {
    dispatch(togglePopup(false));
    dispatch(toggleDraw(false));
    dispatch(clearLayers());
  };

  const handleDrawnConfirm = () => {
    dispatch(togglePopup(false));
    dispatch(toggleDraw(false));
    dispatch(toggleshowDetailsForm(true));
  };
  return (
    <>
      <div className="w-full absolute   h-screen grid place-content-center ">
        <div className="bg-slate-800 p-4 max-w-[18.69rem] min-h-[144px] rounded-lg space-y-5  mx-auto ">
          <ConfirmModelHeader />
          <div className="flex flex-row gap-4 justify-center items-center">
            <div
              onClick={handleDrawnCancel}
              className="p-3 cursor-pointer text-white"
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
    </>
  );
}
