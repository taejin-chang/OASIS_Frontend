import Layout from "../components/layout/containers/Layout";
import MyPage from "../components/myPage/containers/MyPage";
import SignIn from "../components/login/presentation/Signin";
import ChangePassword from "../components/changePassword/containers/ChangePassword";
import AdminConfig from "../components/environmentConfig/containers/AdminConfig";
import UserConfig from "../components/environmentConfig/containers/UserConfig";

const MainRoutes = {
  path: "/",
  element: <Layout />,
  children: [
    {
      path: "/",
      element: <MyPage />,
    },
    {
      path: "my-page",
      element: <MyPage />,
    },
    {
      path: "login",
      element: <SignIn />,
    },
    {
      path: "change-password",
      element: <ChangePassword />,
    },
    {
      path: "config/environment/admin",
      element: <AdminConfig />,
    },
    {
      path: "config/environment/user",
      element: <UserConfig />,
    },
  ],
};

export default MainRoutes;
