import useProviders from "api/providers";
import {trackPromise} from "react-promise-tracker";

const useHomeServices = () => {
    // Providers
    const { useHomeProviders } = useProviders();
    const {
        getHomeBanner,
        getHomeBackground,
        getHomeSections,
        getHomeMision,
        getHomeValores,
        getHomeTeam,
    } = useHomeProviders();

    // Services
    const getHomeBannerService = () : Promise<any> => {
        return new Promise<any>(async (resolve, reject) => {
            try {
                resolve(await trackPromise(getHomeBanner()));
            }catch (error: any) {
                reject(error);
            }
        })
    }

    const getHomeBackgroundService = () : Promise<any> => {
        return new Promise<any>(async (resolve, reject) => {
            try {
                resolve(await trackPromise(getHomeBackground()));
            }catch (error: any) {
                reject(error);
            }
        })
    }

    const getHomeSectionsService = () : Promise<any> => {
        return new Promise<any>(async (resolve, reject) => {
            try {
                resolve(await trackPromise(getHomeSections()));
            }catch (error: any) {
                reject(error);
            }
        })
    }

    const getHomeMisionService = () : Promise<any> => {
        return new Promise<any>(async (resolve, reject) => {
            try {
                resolve(await trackPromise(getHomeMision()));
            }catch (error: any) {
                reject(error);
            }
        })
    }

    const getHomeValoresService = () : Promise<any> => {
        return new Promise<any>(async (resolve, reject) => {
            try {
                resolve(await trackPromise(getHomeValores()));
            }catch (error: any) {
                reject(error);
            }
        })
    }

    const getHomeTeamService = () : Promise<any> => {
        return new Promise<any>(async (resolve, reject) => {
            try {
                resolve(await trackPromise(getHomeTeam()));
            }catch (error: any) {
                reject(error);
            }
        })
    }

    return {
        getHomeBannerService,
        getHomeBackgroundService,
        getHomeSectionsService,
        getHomeMisionService,
        getHomeValoresService,
        getHomeTeamService,
    };
}

export default useHomeServices;