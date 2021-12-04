import axios from "axios";
import useHomeProviders from "./home";

const useProviders = () => {
    axios.defaults.baseURL = process.env.REACT_APP_BASE_URL_API;

    return {
        useHomeProviders,
    }
}

export default useProviders;