import BgFullHeight from "../components/Background/BgFullHeight";
import PropTypes from 'prop-types'
import MainContainer from "../layouts/MainContainers/MainContainerSignUp";

// import { useOutletContext } from "react-router-dom";

export default function Index({ bgSectionPath, bgSection }) {

  /* Antes de redux
  const [bgSection, destinations] = useOutletContext();
  */

  return (
    <>
      <BgFullHeight bgSectionPath={bgSectionPath} cityDestination={bgSection}  />
      <MainContainer /* destinations={destinations} */ />
    </>
  );
}

Index.propTypes = {
    bgSectionPath: PropTypes.string, 
    bgSection: PropTypes.string
  }