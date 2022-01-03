import useApi from "api";
import useModels from "models";
import {useState} from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const useHeader = () => {
    const history = useHistory();

    // States
    const [open, setOpen] = useState<boolean>(false);
    const [expand, setExpand] = useState<boolean>(false);
    const [expand1, setExpand1] = useState<boolean>(false);

    // Actions
    const { useActions } = useApi();
    const { dispatch, useAuthActions } = useActions();
    const { actLogout } = useAuthActions();

    // Handlers
    const closeDrawer = () : void => {
        setOpen(false);
    }

    const openDrawer = () : void => {
        setOpen(true);
    }

    const expandMenu = (type: string) : void => {
        if(type === "personal"){
            if(expand1){
                setExpand1(false);
            }else{
                setExpand1(true);
            }
        }else{
            if(expand){
                setExpand(false);
            }else{
                setExpand(true);
            }
        }
        
    }

    const closeSesion = () => {
        dispatch(actLogout(() => {
            history.push('/')
        }))
    }

    // Models
    const { useSelectors } = useModels();
    const { useAuthSelectors } = useSelectors();
    const { loginSelector } = useAuthSelectors();
    const login = useSelector(loginSelector);

    return {
        open,
        closeDrawer,
        openDrawer,
        expandMenu,
        expand,
        login,
        expand1,
        closeSesion
    }
}

export default useHeader;