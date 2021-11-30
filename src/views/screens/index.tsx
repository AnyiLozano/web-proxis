import { lazy } from "react";

const Home = lazy(() => import('./Home'));
const useScreens = () => {
    return {
        Home
    };
};

export default useScreens;