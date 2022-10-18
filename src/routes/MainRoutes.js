import Layout from "../components/layout/containers/Layout";
import MyPage from "../components/myPage/containers/MyPage";
import SignIn from "../components/login/presentation/Signin";
import FindId from "../components/login/presentation/FindId";
import FindPw from "../components/login/presentation/FindPw";
import UserConfiguration from "../components/userConfiguration/presentation/UserConfiguration";
import ChangePassword from "../components/changePassword/containers/ChangePassword";
import AdminConfig from "../components/environmentConfig/containers/AdminConfig";
import UserConfig from "../components/environmentConfig/containers/UserConfig";
import OperationConfiguration from "../components/operationConfiguration/containers/OperationConfiguration";


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
      path: "find-id",
      element: <FindId />,
    },
    {
      path: "find-pw",
      element: <FindPw />,
    },
    {
      path: "config/user-management",
      element: <UserConfiguration />,
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
      {
          path: 'config/environment/operation',
          element: <OperationConfiguration />
      }
  ],
};

export default MainRoutes;
