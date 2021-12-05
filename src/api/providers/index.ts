import axios from "axios";
import useHomeProviders from "./home";
import useGeneralProviders from "./general";

const useProviders = () => {
    axios.defaults.baseURL = process.env.REACT_APP_BASE_URL_API;

    return {
        useGeneralProviders,
        useHomeProviders,
    }
}

export default useProviders;