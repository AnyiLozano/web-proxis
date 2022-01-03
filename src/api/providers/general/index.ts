import axios from "axios";

const useGeneralProviders = () => {
    const getAssets = () : Promise<any> => {
        return axios.get('/general/get-assets');
    }

    const getMenus = () : Promise<any>  => {
        return axios.get('/general/get-menus');
    }

    return {
        getAssets,
        getMenus,
    };
};

export default useGeneralProviders;