import SignIn from "../components/login/presentational/Signin";
import ChangePassword from "../components/changePassword/containers/ChangePassword";

const LoginRoutes = {
    path: '/',
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