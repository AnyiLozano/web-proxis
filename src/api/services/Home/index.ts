import useProviders from "api/providers";
import {trackPromise} from "react-promise-tracker";

const useHomeServices = () => {
    // Providers
    const { useHomeProviders } = useProviders();
    const { getHomeSections } = useHomeProviders();

    // Services
    const getHomeSectionService = () : Promise<any> => {
        return new Promise<any>(async (resolve, reject) => {
            try {
                resolve(await trackPromise(getHomeSections()));
            }catch (e) {
                reject(e);
            }
        })
    }

    return {
        getHomeSectionService,
    };
}

export default useHomeServices;