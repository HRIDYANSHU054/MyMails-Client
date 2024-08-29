import { Outlet, useNavigation } from "react-router-dom";

function AppLayouut() {
  const navigation = useNavigation();
  const isLoadingPageData = navigation.state === "loading";

  return isLoadingPageData ? <p>Loading...</p> : <Outlet />;
}

export default AppLayouut;
