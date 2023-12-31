import BgFullHeight from "../components/Background/BgFullHeight";
import PropTypes from 'prop-types'
import MainContainer from "../layouts/MainContainers/MainContainerSignIn";

// import { useOutletContext } from "react-router-dom";

export default function SignIn ({ bgSectionPath, bgSection }) {

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

SignIn.propTypes = {
    bgSectionPath: PropTypes.string, 
    bgSection: PropTypes.string
  }