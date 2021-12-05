import useHomeServices from "./Home";
import useGeneralServices from "./general";

const useServices = () => {
    return {
        useHomeServices,
        useGeneralServices
    };
}

export default useServices;