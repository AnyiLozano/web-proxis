import useApi from "api";
import { IAction } from "models/interfaces";
import { IHomeAssets } from "models/interfaces/home";
import { useEffect, useState } from "react";

const useHome = () => {
    /** Api */
    const { useActions } = useApi();
    const { dispatch, useHomeActions } = useActions();
    const { actGetHomeAssets } = useHomeActions();

    /** States */
    const [homeBanner, setHomeBanner] = useState<IHomeAssets>({ alt: "", content: "", section: "", id: 0 });
    const [gerencialTeam, setGerencialTeam] = useState<IHomeAssets>({ alt: "", content: "", section: "", id: 0 });
    const [misionVision, setMisionVision] = useState<IHomeAssets>({ alt: "", content: "", section: "", id: 0 });
    const [background, setBackground] = useState<IHomeAssets>({ alt: "", content: "", section: "", id: 0 });
    const [sections, setSections] = useState<any>([]);
    const [section1, setSections1] = useState<any>({});
    const [section2, setSections2] = useState<any>({});
    const [section3, setSections3] = useState<any>({});
    const [section4, setSections4] = useState<any>({});
    const [hover, setHover] = useState<{ hover: boolean, id: number }>({ hover: false, id: 0 });

    /** Handlers */
    const handlerHover = (type: string, id: number) => {
        if(id !== hover.id) {
            type === "over" ? setHover({ hover: true, id: id }) : setHover({ hover: false, id: 0 });
        }else{
            return false;
        }
    }

    let obj : any = {}
    let obj2 : any = {}
    let obj3 : any = {}
    let obj4 : any = {}

    /** Effects */
    useEffect(() => {
        const request: IAction = {
            onError: (error) => console.log(error),
            onSuccess: (data: IHomeAssets[]) => {
                // eslint-disable-next-line
                data && data.map((item: IHomeAssets) => {
                    if (item.section === "Banner Home") {
                        setHomeBanner(item);
                    } else if (item.section === "Gerencial Team") {
                        setGerencialTeam(item);
                    } else if (item.section === "Mision - Vision") {
                        setMisionVision(item);
                    } else if (item.section.includes("Secciones-")) {
                        if(item.id === 4){
                            obj.section = item
                        }else if(item.id === 8){
                            obj.sectionHover = item;
                            setSections1(obj)
                        }

                        if(item.id === 5){
                            obj2.section = item
                        }else if(item.id === 9){
                            obj2.sectionHover = item;
                            setSections2(obj2)
                        }

                        if(item.id === 6){
                            obj3.section = item
                        }else if(item.id === 10){
                            obj3.sectionHover = item;
                            setSections3(obj3)
                        }

                        if(item.id === 7){
                            obj4.section = item
                        }else if(item.id === 11){
                            obj4.sectionHover = item;
                            setSections4(obj4)
                        } 
                    } else if(item.alt === 'background'){
                        setBackground(item)
                    }
                })

                setSections(sections);
            }
        }

        dispatch(actGetHomeAssets(request));
        // eslint-disable-next-line
    }, [dispatch]);

    return {
        homeBanner,
        gerencialTeam,
        misionVision,
        sections,
        hover,
        handlerHover,
        section1,
        section2,
        section3,
        section4,
        background
    }
}

export default useHome;