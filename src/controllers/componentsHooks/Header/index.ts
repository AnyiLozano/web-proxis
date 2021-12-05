import {useState} from "react";

const useHeader = () => {
    // States
    const [open, setOpen] = useState<boolean>(false);
    const [expand, setExpand] = useState<boolean>(false);

    // Handlers
    const closeDrawer = () : void => {
        setOpen(false);
    }

    const openDrawer = () : void => {
        setOpen(true);
    }

    const expandMenu = () : void => {
        if(expand){
            setExpand(false);
        }else{
            setExpand(true);
        }
    }

    return {
        open,
        closeDrawer,
        openDrawer,
        expandMenu,
        expand
    }
}

export default useHeader;