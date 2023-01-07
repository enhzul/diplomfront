import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthProvider";
import { useState, useContext} from "react";

const PrivateRoute = (props) => {
  const {auth} = useContext(AuthContext);
  console.log(auth, "Route")
  const [isLoading, setIsLoading] = useState(true);
  const [isValid, setIsValid] = useState(null);
  const { children } = props;
  
  if (auth && auth.isAuthenticated) {
      setIsValid(true);
      setIsLoading(false);

  } else {
    console.log("///////////")
    return <Navigate to="/" />;
  }

  return isLoading ? (
    <div>Loading...</div>
  ) : isValid === true ? (
    children
  ) : (
    <Navigate to="/" />
  );
};
export default PrivateRoute;
