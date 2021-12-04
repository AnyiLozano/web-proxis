import axios from "axios";

const useHomeProviders = () => {
    const getHomeSections = () : Promise<any> => {
        return axios.get('/contents/v1/get-content?page=Home');
    };

    return {
        getHomeSections,
    };
}

export default useHomeProviders;