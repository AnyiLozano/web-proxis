import {combineReducers} from "@reduxjs/toolkit";
import useGeneralReducers from "./general";

const useReducers = () => {
    const { assets, menus } = useGeneralReducers();

    return combineReducers(
        Object.assign({
            assets,
            menus,
        })
    );
}

export default useReducers;