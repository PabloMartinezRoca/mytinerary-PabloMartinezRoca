import { useEffect, useState } from "react";
import BgFullHeight from "../components/Background/BgFullHeight";
import MainContainer from "../layouts/MainContainers/MainContainerCityInfo";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function CityInfo() {
  const { id } = useParams('id');

  const [cityInfo, setCityInfo] = useState(null);

  useEffect(() => {
    axios("http://localhost:3000/api/cities/findCityById/" + id) // si se omite el método, por defecto es GET
      .then((response) => {
        setCityInfo(response.data.response);
      });
  }, []);

  return (  
    <>
    {
    cityInfo && (
      <>
        <BgFullHeight cityDestination={cityInfo.imgUrl} />
        <MainContainer cityInfo={ cityInfo }/>
      </>
    )
    } { /* Espera la carga de datos */ } 
  </>
  );
}
