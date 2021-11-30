import { lazy } from "react";

const Home = lazy(() => import('./Home'));
const Login = lazy(() => import('./Login'));

const useScreens = () => {
    return {
        Home,
        Login
    };
};

export default useScreens;