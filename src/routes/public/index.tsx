import { map } from "lodash";
import { Route } from "models/interfaces/routes";
import useViews from "views";
import PublicRoutes from "./public";

const usePublicRoutes = () => {
    const { useScreens } = useViews();
    const {
        Home
    } = useScreens();


    const routes: Array<Route> = [
        {
            path: "/",
            exact: true,
            Component: Home,
            name: "Home"
        }
    ];

    return map(routes, (route: Route, index: number) => (   
        <PublicRoutes key={index} {...route} />
    ))

}

export default usePublicRoutes;