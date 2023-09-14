import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { PropTypes } from 'prop-types'

const ProtectedRoute = ({ children, statusToContinue, redirectRoute }) => {
    const { status } = useSelector(store => store.authenticateUserReducers)

    if ( status == statusToContinue ) {
        return children
    }
    console.log("Redirecting... route forbidden")
    return <Navigate to={redirectRoute} />
}

ProtectedRoute.propTypes = {
    children: PropTypes.node,
    statusToContinue: PropTypes.string,
    redirectRoute: PropTypes.string
}
export default ProtectedRoute