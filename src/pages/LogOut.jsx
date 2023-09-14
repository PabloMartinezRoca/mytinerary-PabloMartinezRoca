import BgFullHeight from "../components/Background/BgFullHeight";
import PropTypes from 'prop-types'
import MainContainer from "../layouts/MainContainers/MainContainerLogOut";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { logout } from "../redux/actions/authenticateUserActions";

// import { useOutletContext } from "react-router-dom";

export default function LogOut ({ bgSectionPath, bgSection }) {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(logout())
  }, [dispatch])

  return (
    <>
      <BgFullHeight bgSectionPath={bgSectionPath} cityDestination={bgSection}  />
      <MainContainer /* destinations={destinations} */ />
    </>
  );
}

LogOut.propTypes = {
    bgSectionPath: PropTypes.string, 
    bgSection: PropTypes.string
  }