import axios from "axios";

const useHomeProviders = () => {
    const getHomeBanner = () : Promise<any> => {
        return axios.get('/contents/get-home-banner');
    }

    const getHomeBackground = () : Promise<any> => {
        return axios.get('/contents/get-home-background');
    }

    const getHomeSections = () : Promise<any> => {
        return axios.get('/contents/get-home-sections');
    }

    const getHomeMision = () : Promise<any> => {
        return axios.get('/contents/get-home-mision');
    }

    const getHomeValores = () : Promise<any> => {
        return axios.get('/contents/get-home-valores');
    }

    const getHomeTeam = () : Promise<any> => {
        return axios.get('/contents/get-home-team');
    }

    return {
        getHomeBanner,
        getHomeBackground,
        getHomeSections,
        getHomeMision,
        getHomeValores,
        getHomeTeam,
    };
}

export default useHomeProviders;