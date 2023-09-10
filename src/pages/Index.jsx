import BgFullHeight from "../components/Background/BgFullHeight";
import MainContainer from "../layouts/MainContainers/MainContainerIndex";
// import { useOutletContext } from "react-router-dom";

export default function Index() {

  /* Antes de redux
  const [bgSection, destinations] = useOutletContext();
  */

  return (
    <>
      <BgFullHeight /* cityDestination={bgSection} */ />
      <MainContainer /* destinations={destinations} */ />
    </>
  );
}
