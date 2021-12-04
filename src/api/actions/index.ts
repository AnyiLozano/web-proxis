import {useDispatch} from "react-redux";
import useHomeActions from "./Home";

const useActions = () => {
    // Dispatch
    const dispatch = useDispatch();

    return {
        dispatch,
        useHomeActions,
    };
}

export default useActions;