import useApi from "api";
import { trackPromise } from "react-promise-tracker";

const useBlogServices = () => {
    // Providers
    const { useProviders } = useApi();
    const { useBlogProviders } = useProviders();
    const { getPost } = useBlogProviders();

    const getPostService = (id: number) : Promise<any> => {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await trackPromise(getPost(id)));
            } catch (error) {
                reject(error);
            }
        });
    }

    return {
        getPostService,
    }
}

export default useBlogServices;