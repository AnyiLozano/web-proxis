import useHome from "./Home";
import useScreenHooks from "./screenHooks";
import useComponentsHooks from "./componentsHooks";

const useControllers = () => {
    return {
        useHome,
        useScreenHooks,
        useComponentsHooks,
    }
}

export default useControllers;