import {useDispatch} from "react-redux";
import useHomeActions from "./Home";
import useGeneralActions from "./general";

const useActions = () => {
    // Dispatch
    const dispatch = useDispatch();

    return {
        dispatch,
        useHomeActions,
        useGeneralActions
    };
}

export default useActions;