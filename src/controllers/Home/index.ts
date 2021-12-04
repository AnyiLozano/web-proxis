import useActions from "api/actions";
import {useEffect} from "react";

const useHome = () => {
    // actions
    const { dispatch, useHomeActions } = useActions()
    const { actGetHomeSections } = useHomeActions();

    useEffect(() => {
        dispatch(actGetHomeSections);
    }, [])

    return {

    }
}

export default useHome;