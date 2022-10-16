import SignIn from "../components/login/presentation/Signin";
import ChangePassword from "../components/changePassword/containers/ChangePassword";

// 해결해야함
const LoginRoutes = {
    path: '/tbd',
    children: [
        {
            path: 'login',
            element: <SignIn />
        },
        {
            path: 'change-password',
            element: <ChangePassword />
        }
    ]
};

export default LoginRoutes