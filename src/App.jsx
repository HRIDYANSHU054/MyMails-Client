import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import ClassifiyPage, {
  loader as classificationDataLoader,
} from "./pages/ClassifiyPage";
import DoAllPage, { loader as doAllLoader } from "./pages/DoAllPage";
import SignupPage from "./pages/SignupPage";
import ListPage from "./pages/ListPage";
import InboxPage, { loader as inboxDataLoader } from "./pages/InboxPage";
import HomePage from "./pages/HomePage";
import AppLayouut from "./components/AppLayouut";
import PageNotFound from "./pages/PageNotFound";
import { AuthProvider } from "./contexts/AuthContext";

const router = createBrowserRouter([
  {
    element: <AppLayouut />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/inbox",
        element: <InboxPage />,
        loader: inboxDataLoader,
      },
      {
        path: "/list",
        element: <ListPage />,
      },
      {
        path: "/classify/:messageId",
        element: <ClassifiyPage />,
        loader: classificationDataLoader,
      },
      {
        path: "/generateAndSend",
        element: <DoAllPage />,
        loader: doAllLoader,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
]);

function App() {
  return (
    <AuthProvider>
      {" "}
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
