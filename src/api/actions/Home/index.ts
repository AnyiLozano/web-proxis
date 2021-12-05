import useServices from "api/services";
//import useTypes from "types";

const useHomeActions = () => {
    // Services
    const { useHomeServices } = useServices();
    const { getHomeSectionService } = useHomeServices();

    // Types
    // const { useHomeTypes } = useTypes();
    // const { GET_HOME_SECTIONS } = useHomeTypes();

    const actGetHomeSections = async (dispatch: any) => {
        try {
            const res = await getHomeSectionService();
            console.log(res.data.data)
        }catch (e){

        }
    }

    return {
        actGetHomeSections,
    }
}

export default useHomeActions;