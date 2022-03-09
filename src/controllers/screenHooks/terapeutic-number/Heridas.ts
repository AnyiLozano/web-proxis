import useApi from "api";
import { useEffect, useState } from "react";
import { ITerapeuticNumber } from "../../../models/interfaces/home/index";
import { IAction } from "../../../models/interfaces/index";
import _ from "lodash";

const useHeridas = () => {
  /** Actions */
  const { useActions } = useApi();
  const { dispatch, useTerapeuticNumberActions } = useActions();
  const { actGetAssets } = useTerapeuticNumberActions();

  /** States */
  const [principalBannerHeridas, setPrincipalBannerHeridas] =
    useState<ITerapeuticNumber>({ alt: "", content: "", id: 0, section: "" });
  const [backgroundDescription, setBackgroundDescription] =
    useState<ITerapeuticNumber>({ alt: "", content: "", id: 0, section: "" });
  const [lavado, setLavado] = useState<ITerapeuticNumber[]>([]);
  const [recomendation, setRecomendation] = useState<ITerapeuticNumber>({
    alt: "",
    content: "",
    id: 0,
    section: "",
  });
  const [heridasType, setHeridasType] = useState<ITerapeuticNumber>({
    alt: "",
    content: "",
    id: 0,
    section: "",
  });
  const [clasification, setClasification] = useState<ITerapeuticNumber>({
    alt: "",
    content: "",
    id: 0,
    section: "",
  });
  const [background2, setBackground2] = useState<ITerapeuticNumber>({
    alt: "",
    content: "",
    id: 0,
    section: "",
  });
  const [herida1, setHerida1] = useState<ITerapeuticNumber>({
    alt: "",
    content: "",
    id: 0,
    section: "",
  });
  const [herida2, setHerida2] = useState<ITerapeuticNumber>({
    alt: "",
    content: "",
    id: 0,
    section: "",
  });
  const [textDescription, setTextDescription] = useState<ITerapeuticNumber>({
    alt: "",
    content: "",
    id: 0,
    section: "",
  });

  // let lavado: ITerapeuticNumber[] = [];

  // /** Handlers */
  // const setGlobalState = (state: string, item: ITerapeuticNumber) => {
  //   if (state === "lavado") {
  //     lavado.push(item);
  //   }
  // };

  useEffect(() => {
    const request: IAction = {
      onError: (error: any) => console.log(error),
      onSuccess: (data: any) => {
        setLavado(data.lavado);
        setPrincipalBannerHeridas(
          data.find(
            (item: ITerapeuticNumber) => item.section === "Heridas_banner_1"
          )
        );
        setBackgroundDescription(
          data.find((item: ITerapeuticNumber) => item.section === "background")
        );
        setTextDescription(
          data.find(
            (item: ITerapeuticNumber) =>
              item.section === "Heridas-text-description"
          )
        );
        setHerida1(
          data.find((item: ITerapeuticNumber) => item.section === "Herida1")
        );
        setHerida2(
          data.find((item: ITerapeuticNumber) => item.section === "Herida2")
        );
        setBackground2(
          data.find(
            (item: ITerapeuticNumber) => item.section === "background-heridas-2"
          )
        );
        setClasification(
          data.find(
            (item: ITerapeuticNumber) =>
              item.section === "clasificacion-heridas"
          )
        );
        setHeridasType(
          data.find(
            (item: ITerapeuticNumber) => item.section === "heridas-type"
          )
        );

        setRecomendation(
          data.find(
            (item: ITerapeuticNumber) =>
              item.section === "Heridas-recomendation"
          )
        );

        // _.map(data, (item: ITerapeuticNumber) => {
        //   if (item.section.includes("heridas-lavado-")) {
        //     setGlobalState("lavado", item);
        //   }
        // });
      },
    };

    dispatch(actGetAssets(request));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const tabs = ["Necrótico", "Fibrina", "Esfacelo", "Granular", "Epitelial"];

  return {
    principalBannerHeridas,
    backgroundDescription,
    textDescription,
    herida1,
    herida2,
    background2,
    clasification,
    heridasType,
    tabs,
    recomendation,
    lavado,
  };
};

export default useHeridas;
