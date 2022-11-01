import ChangePassword from "../components/changePassword/containers/ChangePassword";
import LogIn from "../components/login/containers/LogIn";

// 해결해야함
const LoginRoutes = {
    path: '/tbd',
    children: [
        {
            path: 'login',
            element: <LogIn />
        },
        {
            path: 'change-password',
            element: <ChangePassword />
        }
    ]
};

export default LoginRoutes