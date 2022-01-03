import useServices from "api/services";
import useTypes from "types";
import {IAction} from "../../../models/interfaces";

const useHomeActions = () => {
    // Services
    const { useHomeServices } = useServices();
    const {
        getHomeBannerService,
        getHomeBackgroundService,
        getHomeSectionsService,
        getHomeMisionService,
        getHomeValoresService,
        getHomeTeamService,
    } = useHomeServices();

    // Types
    const { useHomeTypes } = useTypes();
    const {
        HOME_GET_BANNER,
        HOME_GET_BACKGROUND,
        HOME_GET_SECTIONS,
        HOME_GET_MISION,
        HOME_GET_VALORES,
        HOME_GET_TEAM,
    } = useHomeTypes();

    const actGetHomeBanner = (request: IAction) => async (dispatch: any) => {
        const { onError, onSuccess } = request;
        try {
            const res = await getHomeBannerService();
            const { data } = res.data;

            dispatch({
                type: HOME_GET_BANNER,
                payload: data
            });
            onSuccess && onSuccess();
        }catch (error){
            onError && onError(error);
        }
    }

    const actGetHomeBackground = (request: IAction) => async (dispatch: any) => {
        const { onError, onSuccess } = request;
        try {
            const res = await getHomeBackgroundService();
            const { data } = res.data;

            dispatch({
                type: HOME_GET_BACKGROUND,
                payload: data
            });
            onSuccess && onSuccess();
        }catch (error){
            onError && onError(error);
        }
    }

    const actGetHomeSections = (request: IAction) => async (dispatch: any) => {
        const { onError, onSuccess } = request;
        try {
            const res = await getHomeSectionsService();
            const { data } = res.data;

            dispatch({
                type: HOME_GET_SECTIONS,
                payload: data
            });
            onSuccess && onSuccess();
        }catch (error){
            onError && onError(error);
        }
    }

    const actGetHomeMision = (request: IAction) => async (dispatch: any) => {
        const { onError, onSuccess } = request;
        try {
            const res = await getHomeMisionService();
            const { data } = res.data;

            dispatch({
                type: HOME_GET_MISION,
                payload: data
            });
            onSuccess && onSuccess();
        }catch (error){
            onError && onError(error);
        }
    }

    const actGetHomeValores = (request: IAction) => async (dispatch: any) => {
        const { onError, onSuccess } = request;
        try {
            const res = await getHomeValoresService();
            const { data } = res.data;

            dispatch({
                type: HOME_GET_VALORES,
                payload: data
            });
            onSuccess && onSuccess();
        }catch (error){
            onError && onError(error);
        }
    }

    const actGetHomeTeam = (request: IAction) => async (dispatch: any) => {
        const { onError, onSuccess } = request;
        try {
            const res = await getHomeTeamService();
            const { data } = res.data;

            dispatch({
                type: HOME_GET_TEAM,
                payload: data
            });
            onSuccess && onSuccess();
        }catch (error){
            onError && onError(error);
        }
    }

    return {
        actGetHomeBanner,
        actGetHomeBackground,
        actGetHomeSections,
        actGetHomeMision,
        actGetHomeValores,
        actGetHomeTeam,
    }
}

export default useHomeActions;