import { useOutletContext } from "react-router-dom";
import BgFullHeight from "../components/Background/BgFullHeight";
import MainContainer from "../layouts/MainContainers/MainContainerCities";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Cities() {

  const [cities, setCities] = useState(null);

  useEffect(() => {
    axios("http://localhost:3000/api/cities/getAllCities") // si se omite el método, por defecto es GET
      .then((response) => {
        setCities(response.data.response);
      });
  }, []);

  const [bgSection] = useOutletContext();

  return (
    
    <>
    {
    cities && (
      <>
        <BgFullHeight cityDestination={bgSection} />
        <MainContainer cities={ cities }/>
      </>
    )
    } { /* Espera la carga de datos */ } 
  </>
  );
}
