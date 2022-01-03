import useActions from "api/actions";
import {useEffect, useState} from "react";
import {IAction} from "models/interfaces";
import useModels from "models";
import {useSelector} from "react-redux";

const useHome = () => {
    // actions
    const { dispatch, useHomeActions } = useActions()
    const {
        actGetHomeBanner,
        actGetHomeBackground,
        actGetHomeSections,
        actGetHomeMision,
        actGetHomeTeam,
        actGetHomeValores
    } = useHomeActions();

    // Selectors
    const { useSelectors } = useModels();
    const { useHomeSelectors } = useSelectors();
    const {
        bannerHomeSelector,
        backgroundHomeSelector,
        sectionsHomeSelector,
        misionHomeSelector,
        teamHomeSelector,
        valoresHomeSelector
    } = useHomeSelectors();
    const homeBanner = useSelector(bannerHomeSelector);
    const backgroundSection2 = useSelector(backgroundHomeSelector);
    const sections = useSelector(sectionsHomeSelector);
    const mision = useSelector(misionHomeSelector);
    const valores = useSelector(valoresHomeSelector);
    const team = useSelector(teamHomeSelector);

    // States
    const [hover, setHover] = useState<boolean>(false);
    const [hover2, setHover2] = useState<boolean>(false);
    const [hover3, setHover3] = useState<boolean>(false);
    const [hover4, setHover4] = useState<boolean>(false);

    // Handlers
    const handlerHover = (type: string, number: number) => {
        console.log(type)
        if(number === 1){
            if(type === 'over'){
                setHover(true);
            }else{
                setHover(false);
            }
        }else if(number === 2){
            if(type === 'over'){
                setHover2(true);
            }else{
                setHover2(false);
            }
        }else if(number === 3){
            if(type === 'over'){
                setHover3(true);
            }else{
                setHover3(false);
            }
        }else if(number === 4){
            if(type === 'over'){
                setHover4(true);
            }else{
                setHover4(false);
            }
        }
    }

    useEffect(() => {
        const request : IAction = {
            onError: (error: any) => console.log(error),
            onSuccess: () => {}
        }
        dispatch(actGetHomeBanner(request));

        const requestBck : IAction = {
            onError: (error: any) => console.log(error),
            onSuccess: () => {}
        }
        dispatch(actGetHomeBackground(requestBck));

        const requestSec : IAction = {
            onError: (error: any) => console.log(error),
            onSuccess: () => {}
        }
        dispatch(actGetHomeSections(requestSec));

        const requestMis : IAction = {
            onError: (error: any) => console.log(error),
            onSuccess: () => {}
        }
        dispatch(actGetHomeMision(requestMis));

        const requestVal : IAction = {
            onError: (error: any) => console.log(error),
            onSuccess: () => {}
        }
        dispatch(actGetHomeValores(requestVal));

        const requestTeam : IAction = {
            onError: (error: any) => console.log(error),
            onSuccess: () => {}
        }
        dispatch(actGetHomeTeam(requestTeam));
        // eslint-disable-next-line
    }, [])

    return {
        homeBanner,
        backgroundSection2,
        sections,
        hover,
        hover2,
        hover3,
        hover4,
        handlerHover,
        mision,
        valores,
        team
    }
}

export default useHome;