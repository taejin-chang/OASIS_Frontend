import Layout from "../components/layout/containers/Layout";
import MyPage from "../components/myPage/containers/MyPage";

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
        }
    ]
};

export default MainRoutes;
