import Layout from "../components/layout/containers/Layout";
import MyPage from "../components/myPage/containers/MyPage";
//import UserManagement from "../components/userConfiguration/containers/UserManagement";
import ChangePassword from "../components/changePassword/containers/ChangePassword";
import AdminConfig from "../components/environmentConfig/containers/AdminConfig";
import UserConfig from "../components/environmentConfig/containers/UserConfig";
import OperationConfiguration from "../components/operationConfiguration/containers/OperationConfiguration";
import LogIn from "../components/login/containers/LogIn";
import FindPw from "../components/login/containers/FindPw";
import FindId from "../components/login/containers/FindId";
import WorkLog from "../components/workLog/containers/WorkLog";
import MonthlyCalendar from "../components/monthlyCalendar/containers/MonthlyCalendar";
import Dashboard from "../components/dashboard/containers/Dashboard";
import UserManagement from "../components/userConfiguration/containers/UserManagement";

const MainRoutes = {
  path: "/",
  element: <Layout />,
  children: [
    {
      path: "/",
      element: <LogIn />,
    },
    {
      path: "my-page",
      element: <MyPage />,
    },
    {
      path: "login",
      element: <LogIn />,
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
      element: <UserManagement />,
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
      path: "config/environment/operation",
      element: <OperationConfiguration />,
    },
    {
      path: "work-log",
      element: <WorkLog />,
    },
    {
      path: "monthlyCalendar",
      element: <MonthlyCalendar />,
    },
    {
      path: "dashboard",
      element: <Dashboard />,
    },
  ],
};

export default MainRoutes;
