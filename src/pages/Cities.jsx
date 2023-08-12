import { useOutletContext, useParams } from "react-router-dom";
import BgFullHeight from "../components/Background/BgFullHeight";
import MainContainer from "../layouts/MainContainers/MainContainerCities";

export default function Cities() {
  const urlParams = useParams();
  console.log(urlParams);

  const [bgSection] = useOutletContext();

  return (
    <>
      <BgFullHeight cityDestination={bgSection} />
      <MainContainer />
    </>
  );
}
