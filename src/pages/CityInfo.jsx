import { useEffect } from "react";
import BgFullHeight from "../components/Background/BgFullHeight";
import MainContainer from "../layouts/MainContainers/MainContainerCityInfo";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCityById, resetCityData } from "../redux/actions/citiesActions";
import { getItinerariesByCityId } from "../redux/actions/citiesActions";

export default function CityInfo() {

  const { id } = useParams("id");

  const dispatch = useDispatch();

  //const [cityInfo, setCityInfo] = useState(null);
  const { loadingCityInfoData, cityInfo } = useSelector(
    (store) => store.citiesReducers
  );

  useEffect(() => {
    console.log("Loading city info...");

    function fetchData() {

      if (id !== cityInfo._id) {
      dispatch(resetCityData());
      dispatch(getCityById(id));
      dispatch(getItinerariesByCityId(id));

      console.log("Data Loaded");
      } 
    }
    fetchData();

  }, [dispatch, id, cityInfo._id]);

  /* Antes de Redux era una función asíncrona
  function async fetchData() {
      const data = await ...
      console.log("Data Loaded");
      console.log(data.payload);

    }
    fetchData();
  */

  if (loadingCityInfoData) {
    return (
      <>
        <div className="flex flex-col gap-10 w-[100vw] h-[100vh] justify-center items-center">
          <img
            src="/src/assets/logos/mytinerary-logo.svg"
            alt="MYTINERARY"
            className="w-[360px] h-[120px]"
          ></img>
          <h1 className="text-white text-3xl">
            Loading interfase. Please, wait...
          </h1>
        </div>
      </>
    );
  } else {
    return (
      <>
        {cityInfo && (
          <>
            <BgFullHeight cityDestination={cityInfo.imgUrl} />
            <MainContainer />
          </>
        )}{" "}
        {/* Espera la carga de datos */}
      </>
    );
  }
}
