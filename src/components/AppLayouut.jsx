import { Navigate, Outlet, useNavigation } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

function AppLayouut() {
  const navigation = useNavigation();
  const isLoadingPageData = navigation.state === "loading";
  const { isAuthenticating, authUser } = useAuthContext();

  return isLoadingPageData || isAuthenticating ? (
    <p>Loading...</p>
  ) : authUser ? (
    <Outlet />
  ) : (
    <Navigate to="/signup" />
  );
}

export default AppLayouut;
