import { map } from "lodash";
import { Route } from "models/interfaces/routes";
import useViews from "views";
import PublicRoutes from "./public";

const usePublicRoutes = () => {
    const { useScreens } = useViews();
    const {
        Home,
        Login
    } = useScreens();


    const routes: Array<Route> = [
        {
            path: "/",
            exact: true,
            Component: Home,
            name: "Home"
        },
        {
            path: "/login",
            exact: true,
            Component: Login,
            name: "Login"
        }
    ];

    return map(routes, (route: Route, index: number) => (   
        <PublicRoutes key={index} {...route} />
    ))

}

export default usePublicRoutes;