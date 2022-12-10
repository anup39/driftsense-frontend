import React, { useEffect, useState } from "react";
import AreaDetailTitle from "./AreaDetails/AreaDetailTitle";
import CalculatedPlotAcreage from "./AreaDetails/CalculatedPlotAcreage";
import CustomizeModelName from "./AreaDetails/CustomizeModelName";
import PlotDetailTitle from "./AreaDetails/PlotDetailTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Crop from "./AreaDetails/images/crop.svg";
import Geometry from "./AreaDetails/images/Geometry.svg";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetCropGeometryQuery,
  useGetCropTypeQuery,
  useCreateFieldMutation,
  useUpdateFieldMutation,
  useGetCropTypeByIDQuery,
  useGetCropGeometryByIDQuery,
} from "./../../api/fieldApi";
import GeoJSON from "ol/format/GeoJSON";
import { Vector as VectorSource } from "ol/source";
import OLVectorLayer from "ol/layer/Vector";
import { get } from "ol/proj";
import WKT from "ol/format/WKT";
import {
  toggleshowDetailsSucessLoading,
  toggleSaveSucessfully,
  toggleshowDetailsForm,
  clearLayers,
  toggleDraw,
  toggleFormCreate,
} from "../../reducers/createFieldMapSlice";
import {
  changeAreaDetials,
  changeAreaDetialsExtra,
} from "../../reducers/areaDetailsSlice";

export default function AreaDetail(props) {
  const dispatch = useDispatch();
  const {
    plot_name,
    crop_type_id,
    crop_geometry_id,
    crop_type,
    crop_type_image,
    crop_geometry,
    spray_duration_hour,
    spray_duration_minutes,
    selected_location,
    acerage,
  } = props.areaDetails;

  const create = props.create;

  const layers = useSelector((state) => state.createFieldMap.layers);
  const farmer = useSelector((state) => state.auth.farmer_id);
  const field_id = useSelector((state) => state.createFieldMap.field_id);

  console.log(field_id);

  const [plotName, setPlotName] = useState(plot_name);
  const [sprayDHour, setSprayDHour] = useState(spray_duration_hour);
  const [sprayDMin, setSprayDMin] = useState(spray_duration_minutes);
  const [cropType, setCropType] = useState(crop_type);
  const [cropTypeImage, setCropTypeImage] = useState(crop_type_image);
  const [cropGeometry, setCropGeometry] = useState(crop_geometry);
  const [cropGeometryID, setCropGeometryID] = useState(crop_geometry_id);
  const [cropTypeID, setCropTypeID] = useState(crop_type_id);
  const [disabledCropType, setDisabledCropType] = useState(false);
  const [hideCropType, setHideCropType] = useState(true);
  const [disabledCropGeometry, setDisabledCropGeometry] = useState(false);
  const [hideCropGeometry, setHideCropGeometry] = useState(true);

  const { data: data_croptype } = useGetCropTypeQuery();

  const { data: data_cropgeometry } = useGetCropGeometryQuery();

  const [
    createField,
    {
      data: data_field,
      isSuccess: issucess_field,
      isLoading: is_loading_field,
    },
  ] = useCreateFieldMutation();

  const [
    updateField,
    { isSuccess: is_success_update_field, isLoading: is_loading_update_field },
  ] = useUpdateFieldMutation();

  const { data: data_crop_type_id, isSuccess: is_success_type } =
    useGetCropTypeByIDQuery(crop_type_id);
  const { data: data_crop_geometry_id, isSuccess: is_success_geometry } =
    useGetCropGeometryByIDQuery(crop_geometry_id);

  console.log(data_crop_type_id, data_crop_geometry_id);

  useEffect(() => {
    if (is_success_type) {
      dispatch(
        changeAreaDetialsExtra({
          crop_type: data_crop_type_id.name,
          crop_type_image: data_crop_type_id.image,
        })
      );
      setCropType(data_crop_type_id.name);
      setCropTypeImage(data_crop_type_id.image);
    }
  }, [is_success_type, data_crop_type_id, dispatch]);

  useEffect(() => {
    if (is_success_geometry) {
      dispatch(
        changeAreaDetialsExtra({
          crop_geometry: data_crop_geometry_id.name,
        })
      );
      setCropGeometry(data_crop_geometry_id.name);
    }
  }, [is_success_geometry, data_crop_geometry_id, dispatch]);

  useEffect(() => {
    if (is_loading_field) {
      dispatch(toggleshowDetailsSucessLoading(true));
    } else if (issucess_field) {
      setTimeout(() => {
        dispatch(toggleshowDetailsSucessLoading(false));
      }, 2000);
      setTimeout(() => {
        dispatch(toggleSaveSucessfully(true));
      }, 3000);
      setTimeout(() => {
        dispatch(toggleSaveSucessfully(false));
        dispatch(toggleshowDetailsForm(false));
        dispatch(toggleDraw(false));
        dispatch(clearLayers());
        window.location.reload(true);
      }, 4000);
    }
  }, [is_loading_field, dispatch, issucess_field, data_field, layers]);

  useEffect(() => {
    if (is_loading_update_field) {
      dispatch(toggleshowDetailsSucessLoading(true));
    } else if (is_success_update_field) {
      setTimeout(() => {
        dispatch(toggleshowDetailsSucessLoading(false));
      }, 2000);
      setTimeout(() => {
        dispatch(toggleSaveSucessfully(true));
      }, 3000);
      setTimeout(() => {
        dispatch(toggleSaveSucessfully(false));
        dispatch(toggleshowDetailsForm(false));
        dispatch(toggleDraw(false));
        dispatch(clearLayers());
        window.location.reload(true);
      }, 4000);
    }
  }, [is_loading_update_field, dispatch, is_success_update_field, layers]);

  const handleAreaDetailSubmit = (event) => {
    event.preventDefault();

    if (create) {
      const vectorLyr = new OLVectorLayer({
        source: new VectorSource({
          features: new GeoJSON().readFeatures(layers[0].geojson, {
            featureProjection: get("EPSG:3857"),
          }),
        }),
        declutter: true,
      });
      const Geom = vectorLyr.getSource().getFeatures()[0].getGeometry();
      const format = new WKT();
      const wktRepresenation = format.writeGeometry(Geom, {
        dataProjection: "EPSG:4326",
        featureProjection: "EPSG:3857",
      });

      const details_data = {
        farmers: farmer,
        crop_name: cropTypeID,
        crop_type: cropGeometryID,
        field_tag: plotName,
        duration: sprayDHour + sprayDMin / 100,
        polygon: wktRepresenation,
      };

      createField(details_data);
      dispatch(toggleFormCreate(true));
    } else {
      console.log("details data edited");
      console.log(field_id, "id");
      const details_data_updated = {
        farmers: farmer,
        crop_name: cropTypeID,
        crop_type: cropGeometryID,
        field_tag: plotName,
        duration: sprayDHour + sprayDMin / 100,
      };

      console.log(details_data_updated, "edited");
      updateField({ id: field_id, body: details_data_updated });
      dispatch(toggleFormCreate(true));
    }
  };

  const handleDelete = () => {
    const details_data_updated = {
      is_deleted: true,
    };

    console.log(details_data_updated, "edited");
    updateField({ id: field_id, body: details_data_updated });
    dispatch(toggleFormCreate(true));
  };

  const handleCancelAreaDetail = () => {
    dispatch(toggleFormCreate(true));
    dispatch(toggleshowDetailsForm(false));
    dispatch(toggleDraw(false));
    dispatch(clearLayers());
    dispatch(
      changeAreaDetials({
        plot_name: "",
        crop_type_id: "",
        crop_geometry_id: "",
        crop_type: "",
        crop_type_image: "",
        crop_geometry: "",
        spray_duration_hour: "",
        spray_duration_minutes: "",
        selected_location: "",
        acerage: "",
      })
    );
  };

  const handleCropTypeDivClicked = (event) => {
    if (disabledCropType) {
      setHideCropType(true);
      setDisabledCropType(false);
    } else {
      setHideCropType(false);
      setDisabledCropType(true);
    }
  };

  const handleCropGeometryDivClicked = (event) => {
    if (disabledCropGeometry) {
      setHideCropGeometry(true);
      setDisabledCropGeometry(false);
    } else {
      setHideCropGeometry(false);
      setDisabledCropGeometry(true);
    }
  };

  const handleCropGeomClicked = (event) => {
    setCropGeometry(event.target.title);
    setCropGeometryID(event.target.value);
    setHideCropGeometry(true);
    setDisabledCropGeometry(false);
  };

  const handleCropTypeClicked = (event) => {
    const img_value = event.target.title;
    const myArray = img_value.split(",");
    setCropType(myArray[0]);
    setCropTypeID(event.target.value);
    setCropTypeImage(myArray[1]);
    setHideCropType(true);
    setDisabledCropType(false);
  };

  return (
    <>
      <div className="w-full absolute z-50 h-[90vh]">
        <form onSubmit={handleAreaDetailSubmit}>
          <div className="flex justify-center items-center h-screen">
            <div className="ftdc:w-3/4 mx-auto bg-slate-800 border-2 border-orange-500 opacity-[0.95] rounded-lg space-y-2">
              <div className="border-b border-[#71C1C7] p-4">
                {/* AreaDetailHeader  */}
                <div className="grid grid-cols-2">
                  <div className="block text-2xl font-bold text-white">
                    Area Detail
                  </div>
                  <div
                    onClick={handleCancelAreaDetail}
                    className="block  justify-self-end text-white text-2xl"
                  >
                    <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                  </div>
                </div>
              </div>
              <div className="tdc:flex grid p-4 space-y-5 tdc:space-y-0">
                <div className="basis-4/12">
                  <CustomizeModelName
                    selected_location={selected_location}
                    create={create}
                  />
                </div>
                <div className="basis-8/12 space-y-3">
                  <PlotDetailTitle />
                  {/* Plot Name  */}
                  <div className="">
                    <label className="block text-xs text-orange-400  font-medium">
                      Plot Name
                    </label>
                    <input
                      required
                      type="text"
                      className="text-neutral-50 bg-transparent border-b border-orange-400 outline-none tdc:w-[200px] ftdc:w-[230px]"
                      value={plotName}
                      onChange={(event) => setPlotName(event.target.value)}
                    />
                  </div>
                  <AreaDetailTitle />
                  <div className="grid tdc:grid-cols-2 gap-3">
                    {/* Crop Type here */}
                    <div>
                      <div className="space-y-1">
                        <label className="block text-xs text-orange-400">
                          Crop Type
                        </label>
                        <ul className="text-white   z-[9999]  relative space-y-1">
                          {/* Outer div */}
                          <div
                            onClick={handleCropTypeDivClicked}
                            className="relative w-full h-[48px]"
                          >
                            {/* image here selected */}
                            <div className=" absolute inset-y-0 left-0 pl-3 flex items-center text-sm space-x-3">
                              <img
                                alt=""
                                src={Crop}
                                className="-mt-2 text-black text-2xl cursor-pointer"
                              ></img>
                              <img
                                alt=""
                                src={cropTypeImage}
                                className="-mt-2 h-6 rounded-full text-black text-2xl cursor-pointer"
                              ></img>
                            </div>
                            <input
                              disabled={disabledCropType}
                              required
                              type="select"
                              value={cropType}
                              onChange={(cropType) => setCropType(cropType)}
                              className="pointer-events-none w-full outline-none bg-white text-[#7C7C7C] block  pl-20 p-2 rounded-t-md  border-black border-t border-l border-r"
                              placeholder="Crop Type"
                            />
                            <div className=" absolute inset-y-0 right-0 pr-3 flex items-center text-sm">
                              <FontAwesomeIcon
                                icon={faAngleDown}
                                className="-mt-2 text-black text-2xl cursor-pointer"
                              ></FontAwesomeIcon>
                            </div>

                            <center>
                              <hr className="mx-3 -mt-[1px]" />
                            </center>
                            {/* hidden here */}
                            <div
                              className={hideCropType ? "z-50 hidden" : "z-50"}
                            >
                              <ul className="px-2 grid  grid-cols-2 gap-2 rounded-b-md bg-white absolute text-center  w-full  border-black border-b border-l border-r max-h-[161px] overflow-y-scroll">
                                {data_croptype
                                  ? data_croptype.map((croptype, index) => {
                                      return (
                                        <li
                                          key={croptype.id}
                                          onClick={handleCropTypeClicked}
                                          value={croptype.id}
                                          title={[
                                            croptype.name,
                                            croptype.image,
                                          ]}
                                          className=" text-black   cursor-pointer  py-1 fdc:p-2 tdc:py-1  fvdc:p-2 "
                                        >
                                          <div className="flex space-x-2 ">
                                            <img
                                              src={croptype.image}
                                              alt=""
                                              className="h-6 w-auto rounded-full"
                                            />
                                            <h1 className="text-gray-400">
                                              {croptype.name}
                                            </h1>
                                          </div>
                                        </li>
                                      );
                                    })
                                  : null}
                              </ul>
                            </div>
                          </div>
                        </ul>
                      </div>
                    </div>
                    {/* Crop Geometry here */}
                    <div>
                      <div className="space-y-1">
                        <label className="block text-xs text-orange-400">
                          Crop Geometry
                        </label>
                        <ul className="text-white   z-[9999]  relative space-y-1">
                          {/* Outer div */}
                          <div
                            onClick={handleCropGeometryDivClicked}
                            className="relative  w-full h-[48px] -z-10"
                          >
                            {/* image here selected */}
                            <div className=" absolute inset-y-0 left-0 pl-3 flex items-center text-sm">
                              <img
                                alt=""
                                src={Geometry}
                                className="-mt-2 text-black text-2xl cursor-pointer"
                              ></img>
                            </div>
                            <input
                              disabled={disabledCropGeometry}
                              required
                              type="select"
                              value={cropGeometry}
                              onChange={(cropGeometry) =>
                                setCropGeometry(cropGeometry)
                              }
                              className="pointer-events-none w-full outline-none bg-white text-[#7C7C7C] block  pl-12 p-2 rounded-t-md  border-black border-t border-l border-r"
                              placeholder="Crop Geometry"
                            />
                            <div className=" absolute inset-y-0 right-0 pr-3 flex items-center text-sm">
                              <FontAwesomeIcon
                                icon={faAngleDown}
                                className="-mt-2 text-black text-2xl cursor-pointer"
                              ></FontAwesomeIcon>
                            </div>

                            <center>
                              <hr className="mx-3 -mt-[1px]" />
                            </center>
                            {/* hidden here  */}
                            <div
                              className={
                                hideCropGeometry ? "z-50 hidden" : "z-50"
                              }
                            >
                              <ul className="rounded-b-md bg-white absolute text-center  w-full  border-black border-b border-l border-r h-[161px] overflow-y-auto">
                                {data_cropgeometry
                                  ? data_cropgeometry.map((cropgeometry) => {
                                      return (
                                        <li
                                          key={cropgeometry.id}
                                          onClick={handleCropGeomClicked}
                                          value={cropgeometry.id}
                                          title={cropgeometry.name}
                                          className=" text-black space-x-5 py-1 fdc:p-2 tdc:py-1 cursor-pointer fvdc:p-2 flex"
                                        >
                                          <img
                                            src={cropgeometry.image}
                                            alt=""
                                            className="pl-1 text-2xl h-6"
                                          />
                                          <h1 className="text-gray-400">
                                            {cropgeometry.name}
                                          </h1>
                                        </li>
                                      );
                                    })
                                  : null}
                              </ul>
                            </div>
                          </div>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="grid tdc:grid-cols-2">
                    <div>
                      <CalculatedPlotAcreage
                        acerage={acerage}
                        create={create}
                      />
                    </div>
                    <div>
                      {/* TimerCounter */}
                      <div className="flex flex-col justify-start items-start">
                        <div className="flex flex-col gap-2 justify-start items-start w-full h-[6.81rem]">
                          <div className="flex flex-row gap-1 justify-start items-start w-full h-[0.94rem]">
                            <p className="block text-white ">Spray Duration</p>
                          </div>
                          <div className="flex p-2  gap-2 ftdc:gap-3 justify-start items-center   ">
                            <div className="text-white  -mt-2 ftdc:mt-0">
                              Hours
                            </div>
                            <div className="   ">
                              <center>
                                <div>
                                  <FontAwesomeIcon
                                    icon={faChevronUp}
                                    className="text-sm ftdc:text-2xl text-orange-400 grid justify-items-end"
                                  />
                                </div>
                              </center>
                              <input
                                required
                                type="number"
                                value={sprayDHour}
                                onChange={(event) =>
                                  setSprayDHour(event.target.value)
                                }
                                className="outline-none rounded-lg text-lg ftdc:text-4xl tdc:h-[30px] h-[50px] w-[50px] tdc:w-[30px] ftdc:h-[50px] ftdc:w-[50px] appearance-none"
                              />
                              <center>
                                <div>
                                  <FontAwesomeIcon
                                    icon={faChevronDown}
                                    className="text-sm ftdc:text-2xl text-orange-400"
                                  />
                                </div>
                              </center>
                            </div>
                            <div className="text-white -mt-2 ftdc:mt-0">
                              {" "}
                              Minutes
                            </div>
                            <div>
                              <center>
                                <div>
                                  <FontAwesomeIcon
                                    icon={faChevronUp}
                                    className="text-sm ftdc:text-2xl text-orange-400  grid justify-items-end"
                                  />
                                </div>
                              </center>
                              <input
                                required
                                type="number"
                                value={sprayDMin}
                                onChange={(event) =>
                                  setSprayDMin(event.target.value)
                                }
                                className="outline-none rounded-lg text-lg ftdc:text-4xl tdc:h-[30px] tdc:w-[30px] h-[50px] w-[50px] ftdc:h-[50px] ftdc:w-[50px] appearance-none"
                              />
                              <center>
                                <div>
                                  <FontAwesomeIcon
                                    icon={faChevronDown}
                                    className="text-sm ftdc:text-2xl text-orange-400"
                                  />
                                </div>
                              </center>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Approve button here */}
              <div className="pb-5 grid justify-items-center ">
                <button className=" bg-[#219653] flex  cursor-pointer text-sm text-white  flex-row gap-2.5 justify-center items-center overflow-hidden px-6 py-3  rounded-[0.31rem]">
                  Approve
                  {/* #1BB66E onactive*/}
                </button>
                {!create ? (
                  <div
                    onClick={handleDelete}
                    className=" bg-[red] flex  cursor-pointer text-sm text-white  flex-row gap-1 justify-center items-center overflow-hidden px-6 py-3  rounded-[0.31rem]"
                  >
                    Delete
                    {/* #1BB66E onactive*/}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
