// import { useOutletContext } from "react-router-dom";
import BgFullHeight from "../components/Background/BgFullHeight";
import MainContainer from "../layouts/MainContainers/MainContainerCities";
// import { useEffect, useState } from "react";
// import { getAllCities } from "../services/citiesQueries";

export default function Cities() {
  
  /* Antes de Redux
  const [cities, setCities] = useState(null);

  useEffect(() => {
    getAllCities().then(setCities) 
    // o la sintaxis larga que crea una función que recibe el array y ejecuta SetCities:
    // .then( array => setCities( array ) )
  }, []);

  const [bgSection] = useOutletContext();
  */

  return (
    <>
      {true /* cities */ && ( // True con Redux
        <>
          <BgFullHeight /* cityDestination={bgSection} */ />
          <MainContainer /* cities={cities} */ />
        </>
      )}{" "}
      {/* Espera la carga de datos */}
    </>
  );
}
