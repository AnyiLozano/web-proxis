import axios from "axios";

const useBlogProviders = () => {
    const getPost = (id: number) : Promise<any> => {
        return axios.get(`/blog/get-blog?id=${id}`);
    };  

    return {
        getPost,
    };
};

export default useBlogProviders;