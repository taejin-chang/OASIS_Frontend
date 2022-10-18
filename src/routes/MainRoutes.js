import Layout from "../components/layout/containers/Layout";
import MyPage from "../components/myPage/containers/MyPage";
import SignIn from "../components/login/presentation/Signin";
import ChangePassword from "../components/changePassword/containers/ChangePassword";
import OperationConfiguration from "../components/operationConfiguration/containers/OperationConfiguration";


const MainRoutes = {
    path: '/',
    element: <Layout />,
    children: [
        {
            path: '/',
            element: <MyPage />
        },
        {
            path: 'my-page',
            element: <MyPage />
        },
        {
            path: 'login',
            element: <SignIn />
        },
        {
            path: 'change-password',
            element: <ChangePassword />
        },
        {
            path: 'config/operation',
            element: <OperationConfiguration />
        }
    ]
};

export default MainRoutes;
