import React from "react";
import { Box, Container, Grid, Tab } from "@mui/material";
import _ from "lodash";
import useTerapeuticNumberStyles, {
  StyledSubtitle,
} from "../terapeutic-number.style";
import useControllers from "controllers";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { ITerapeuticNumber } from "../../../../models/interfaces/home/index";

const Heridas = () => {
  const {
    StyledTerapeuticNumberSection,
    StyledTitulo,
    StyledTitulo1,
    StyledTerapeuticNumberSection1,
    // StyledTitleSection2,
    // StyledDescriptionSection2,
    // StyledContainerBibliografia,
    // StyledTitleBibliografia,
    // StyledTextBibliografia,
    StyledImage,
    // StyledImage1,
  } = useTerapeuticNumberStyles();

  /** Controllers */
  const { useScreenHooks } = useControllers();
  const { useTerapeuticNumber } = useScreenHooks();
  const { useHeridas } = useTerapeuticNumber();
  const {
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
  } = useHeridas();

  console.log(lavado);

  /** States */
  const [value, setValue] = React.useState<string>("0");

  /** Handlers */
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <StyledImage
        className="mt-28"
        src={principalBannerHeridas.content}
        alt="terapeutica"
      />
      <StyledTerapeuticNumberSection background={backgroundDescription.content}>
        <Container>
          <Grid item lg={12} className="text-center">
            <StyledTitulo alt="¿Qué son las heridas?">Heridas</StyledTitulo>
          </Grid>
          <Grid item lg={12} className="text-center">
            <StyledTitulo1>{textDescription.content}</StyledTitulo1>
          </Grid>
        </Container>
      </StyledTerapeuticNumberSection>
      <StyledTerapeuticNumberSection1 background={background2.content}>
        <img
          src={herida1.content}
          alt={herida1.alt}
          style={{ width: "100%" }}
        />
        <img
          src={herida2.content}
          alt={herida2.alt}
          style={{ width: "100%" }}
        />
        <Container maxWidth="lg" style={{ marginTop: "2%" }}>
          <StyledTitulo
            alt="¿Qué son las heridas?"
            style={{ textAlign: "center" }}
          >
            Clasificación
          </StyledTitulo>
          <img src={clasification.content} alt="" style={{ width: "100%" }} />
        </Container>
        <Container maxWidth="xl">
          <StyledSubtitle>Tipos de tejido en una herida</StyledSubtitle>
          <p>{heridasType.content}</p>
          <Grid item md={12} className="pt-8">
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    {_.map(tabs, (item: any, index: number) => (
                      <Tab
                        className="mr-1"
                        label={item}
                        value={index.toString()}
                      />
                    ))}
                  </TabList>
                </Box>
                {/* {_.map(clasification?.tabs, (item: any, index: number) => (
                  <TabPanel
                    value={index.toString()}
                    style={{ backgroundColor: "#004289" }}
                  >
                    <Grid container className="justify-center">
                      <Grid item md={6} className="pr-12">
                        <img
                          src={item.image}
                          alt=""
                          style={{ width: "100%" }}
                        />
                      </Grid>
                      <Grid item md={6}>
                        <p>{item.text}</p>
                      </Grid>
                    </Grid>
                  </TabPanel>
                ))} */}
              </TabContext>
            </Box>
          </Grid>
        </Container>
      </StyledTerapeuticNumberSection1>
      <Container>
        <img
          style={{ width: "100%" }}
          alt={recomendation.alt}
          src={recomendation.content}
        />
      </Container>
      <Grid container>
        {lavado &&
          _.map(lavado, (item: ITerapeuticNumber, index: number) => (
            <Grid item md={6}>
              <img
                key={index}
                style={{ width: "70%" }}
                alt={item.alt}
                src={item.content}
              />
            </Grid>
          ))}
      </Grid>

      {/*<StyledContainerBibliografia>
                <Container>
                    <Grid item lg={12}>
                        <StyledTitleBibliografia>Bibliografia: </StyledTitleBibliografia>
                    </Grid>
                    <Grid item lg={12} className="pt-12">
                        <StyledTextBibliografia>{bibliografias.bibliografiaHeridas}</StyledTextBibliografia>
                    </Grid>
                </Container>
            </StyledContainerBibliografia> */}
    </React.Fragment>
  );
};

export default Heridas;
