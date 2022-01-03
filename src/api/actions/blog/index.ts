import useApi from "api";
import { IGetBlogAction } from "models/interfaces/blog";
import { Dispatch } from "redux";

const useBlogActions = () => {
    // Services
    const { useServices } = useApi();
    const { useBlogServices } = useServices();
    const { getPostService } = useBlogServices();

    // Actions
    const actGetPost = (request: IGetBlogAction) => async (dispatch: Dispatch) => {
        const { id, onSuccess, onError } = request;

        try {
            const res = await getPostService(id);
            const { data } = res.data;

            onSuccess && onSuccess(data);
        } catch (error) {
            onError && onError(error);
        }
    }

    return {
        actGetPost,
    };
}

export default useBlogActions;