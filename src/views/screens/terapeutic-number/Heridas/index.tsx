import React from "react";
import { Box, Container, Grid, Tab } from "@mui/material";
import _ from "lodash";
import useTerapeuticNumberStyles, {
  StyledImageGeneral,
  StyledSubtitle,
  StyledTabContainer,
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
    StyledImage,
  } = useTerapeuticNumberStyles();

  /** Controllers */
  const { useScreenHooks } = useControllers();
  const { useTerapeuticNumber } = useScreenHooks();
  const { useHeridas } = useTerapeuticNumber();
  const { tabs, woundsAssets } = useHeridas();

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
        src={
          woundsAssets.principal_banner !== undefined &&
          woundsAssets.principal_banner.content
        }
        alt={
          woundsAssets.principal_banner !== undefined &&
          woundsAssets.principal_banner.alt
        }
      />
      <StyledTerapeuticNumberSection
        background={
          woundsAssets.background_description !== undefined &&
          woundsAssets.background_description.content
        }
      >
        <Container>
          <Grid item lg={12} className="text-center">
            <StyledTitulo alt="¿Qué son las heridas?">Heridas</StyledTitulo>
          </Grid>
          <Grid item lg={12} className="text-center">
            <StyledTitulo1>
              {woundsAssets.description !== undefined &&
                woundsAssets.description.content}
            </StyledTitulo1>
          </Grid>
        </Container>
      </StyledTerapeuticNumberSection>
      <Container maxWidth="xl">
        <StyledTerapeuticNumberSection1
          background={
            woundsAssets.background_p && woundsAssets.background_p.content
          }
        >
          <Grid container>
            {_.map(
              woundsAssets.wounds1 !== undefined && woundsAssets.wounds1,
              (item: ITerapeuticNumber, index: number) => (
                <Grid item md={12} key={index}>
                  <img
                    src={item.content}
                    alt={item.alt}
                    style={{ width: "100%" }}
                  />
                </Grid>
              )
            )}
          </Grid>
          <Grid container>
            {_.map(
              woundsAssets.wounds2 !== undefined && woundsAssets.wounds2,
              (item: ITerapeuticNumber, index: number) => (
                <Grid item md={12} key={index}>
                  <img
                    src={item.content}
                    alt={item.alt}
                    style={{ width: "100%" }}
                  />
                </Grid>
              )
            )}
          </Grid>
          <Grid container style={{ marginTop: "2%" }}>
            <Grid item md={12}>
              <StyledTitulo
                alt="¿Qué son las heridas?"
                style={{ textAlign: "center" }}
              >
                Clasificación
              </StyledTitulo>
            </Grid>
            <Grid
              item
              md={12}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <StyledImageGeneral
                src={
                  woundsAssets.clasification !== undefined &&
                  woundsAssets.clasification.content
                }
                alt=""
              />
            </Grid>
          </Grid>
          <Container maxWidth="xl">
            <StyledSubtitle>Tipos de tejido en una herida</StyledSubtitle>
            <p>
              {woundsAssets.wound_type_description !== undefined &&
                woundsAssets.wound_type_description.content}
            </p>
            <StyledTabContainer container className="pt-8 justify-center">
              <Box sx={{ width: "100%", typography: "body1" }}>
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: "transparent" }}>
                    <TabList
                      onChange={handleChange}
                      aria-label="lab API tabs example"
                    >
                      {_.map(tabs, (item: any, index: number) => (
                        <Tab
                          className="mr-1"
                          label={item}
                          value={index.toString()}
                          style={{ backgroundColor: "#8A8A8A" }}
                        />
                      ))}
                    </TabList>
                  </Box>
                  <TabPanel
                    value="0"
                    style={{
                      backgroundColor: "transparent !important",
                      padding: 0,
                    }}
                  >
                    <Grid
                      container
                      className="justify-center align-items-center"
                    >
                      {_.map(woundsAssets.tabs, (item: any, index: number) => (
                        <React.Fragment>
                          {item.section.includes("1-image") && (
                            <Grid item md={12} className="pr-12" key={index}>
                              <img src={item.content} alt="" />
                            </Grid>
                          )}
                        </React.Fragment>
                      ))}
                    </Grid>
                  </TabPanel>
                  <TabPanel
                    value="1"
                    style={{
                      backgroundColor: "transparent !important",
                      padding: 0,
                    }}
                  >
                    <Grid
                      container
                      className="justify-center align-items-center"
                    >
                      {_.map(woundsAssets.tabs, (item: any, index: number) => (
                        <React.Fragment>
                          {item.section.includes("2-image") && (
                            <Grid item md={12} className="pr-12" key={index}>
                              <img src={item.content} alt="" />
                            </Grid>
                          )}
                        </React.Fragment>
                      ))}
                    </Grid>
                  </TabPanel>
                  <TabPanel
                    value="2"
                    style={{
                      backgroundColor: "transparent !important",
                      padding: 0,
                    }}
                  >
                    <Grid
                      container
                      className="justify-center align-items-center"
                    >
                      {_.map(woundsAssets.tabs, (item: any, index: number) => (
                        <React.Fragment>
                          {item.section.includes("3-image") && (
                            <Grid item md={12} className="pr-12" key={index}>
                              <img src={item.content} alt="" />
                            </Grid>
                          )}
                        </React.Fragment>
                      ))}
                    </Grid>
                  </TabPanel>
                  <TabPanel
                    value="3"
                    style={{
                      backgroundColor: "transparent !important",
                      padding: 0,
                    }}
                  >
                    <Grid
                      container
                      className="justify-center align-items-center"
                    >
                      {_.map(woundsAssets.tabs, (item: any, index: number) => (
                        <React.Fragment>
                          {item.section.includes("4-image") && (
                            <Grid item md={12} className="pr-12" key={index}>
                              <img src={item.content} alt="" />
                            </Grid>
                          )}
                        </React.Fragment>
                      ))}
                    </Grid>
                  </TabPanel>
                  <TabPanel
                    value="4"
                    style={{
                      backgroundColor: "transparent !important",
                      padding: 0,
                    }}
                  >
                    <Grid
                      container
                      className="justify-center align-items-center"
                    >
                      {_.map(woundsAssets.tabs, (item: any, index: number) => (
                        <React.Fragment>
                          {item.section.includes("5-image") && (
                            <Grid item md={12} className="pr-12" key={index}>
                              <img src={item.content} alt="" />
                            </Grid>
                          )}
                        </React.Fragment>
                      ))}
                    </Grid>
                  </TabPanel>
                </TabContext>
              </Box>
            </StyledTabContainer>
          </Container>
        </StyledTerapeuticNumberSection1>

        <img
          style={{ width: "100%" }}
          alt={
            woundsAssets.recomendation_wounds !== undefined &&
            woundsAssets.recomendation_wounds.alt
          }
          src={
            woundsAssets.recomendation_wounds !== undefined &&
            woundsAssets.recomendation_wounds.content
          }
        />

        {woundsAssets.lavado !== undefined && (
          <Grid container>
            {_.map(
              woundsAssets.lavado,
              (item: ITerapeuticNumber, index: number) => (
                <Grid
                  item
                  md={6}
                  style={
                    index === 1
                      ? {
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }
                      : {}
                  }
                >
                  <StyledImageGeneral
                    key={index}
                    alt={item.alt}
                    src={item.content}
                  />
                </Grid>
              )
            )}
          </Grid>
        )}
        {woundsAssets.remembers_wounds !== undefined && (
          <Grid container className="justify-center">
            <StyledImageGeneral
              src={woundsAssets.remembers_wounds.content}
              alt={woundsAssets.remembers_wounds.alt}
              style={{ margin: "5% 0" }}
            />
          </Grid>
        )}
        {woundsAssets.aux_person !== undefined && (
          <Grid container className="justify-center mb-5">
            <StyledImageGeneral
              alt={woundsAssets.aux_person.alt}
              src={woundsAssets.aux_person.content}
            />
          </Grid>
        )}
      </Container>

      {woundsAssets.references !== undefined && (
        <img
          alt={woundsAssets.references.alt}
          style={{ width: "100%" }}
          src={woundsAssets.references.content}
        />
      )}

      <Container maxWidth="xl">
        {woundsAssets.quiq_wounds !== undefined && (
          <React.Fragment>
            <StyledSubtitle style={{ textAlign: "center", fontWeight: "bold" }}>
              Heridas Quirúrgicas
            </StyledSubtitle>
            <img
              src={woundsAssets.quiq_wounds.content}
              alt={woundsAssets.quiq_wounds.alt}
              style={{ width: "100%" }}
            />
          </React.Fragment>
        )}
        <StyledTerapeuticNumberSection1
          style={{ backgroundRepeat: "no-repeat" }}
          background={
            woundsAssets.Fondo_Background1 &&
            woundsAssets.Fondo_Background1.content
          }
        >
          {woundsAssets.quirurgicas_1 !== undefined && (
            <React.Fragment>
              <StyledSubtitle
                style={{ textAlign: "center", fontWeight: "bold" }}
              >
                Una herida quirúrgica
              </StyledSubtitle>
              <Grid container className="justify-center">
                <StyledImageGeneral
                  src={woundsAssets.quirurgicas_1.content}
                  alt={woundsAssets.quirurgicas_1.alt}
                  style={{ marginBottom: "3%" }}
                />
              </Grid>
            </React.Fragment>
          )}
          {woundsAssets.caracteristicas_cuadro !== undefined && (
            <React.Fragment>
              <img
                src={woundsAssets.caracteristicas_cuadro.content}
                alt={woundsAssets.caracteristicas_cuadro.alt}
                style={{ width: "100%" }}
              />
            </React.Fragment>
          )}
        </StyledTerapeuticNumberSection1>
        {woundsAssets.factoresTitle !== undefined && (
          <React.Fragment>
            <StyledSubtitle style={{ marginBottom: "3%" }}>
              {woundsAssets.factoresTitle.content}
            </StyledSubtitle>
            <p>{woundsAssets.factoresDescription.content}</p>
            <Grid container className="justify-center">
              <StyledImageGeneral
                src={woundsAssets.factoresImage.content}
                alt={woundsAssets.factoresImage.content}
                style={{ marginTop: "2%" }}
              />
            </Grid>
            <p>{woundsAssets.factoresSubDescription.content}</p>
            <StyledSubtitle style={{ marginBottom: "3%" }}>
              {woundsAssets.complicacionesTitle.content}
            </StyledSubtitle>
            <Grid container className="justify-center">
              <StyledImageGeneral
                src={woundsAssets.complicacionesImage.content}
                alt={woundsAssets.complicacionesImage.content}
                style={{ marginTop: "2%" }}
              />
            </Grid>
            <StyledSubtitle style={{ marginBottom: "3%" }}>
              {woundsAssets.Heridas_titulo3.content}
            </StyledSubtitle>
            <p
              dangerouslySetInnerHTML={{
                __html: woundsAssets.Herida_texto_4.content,
              }}
            ></p>
            <Grid container className="justify-center">
              <StyledImageGeneral
                src={woundsAssets.Heridas_imagen_13.content}
                alt={woundsAssets.Heridas_imagen_13.content}
                style={{ marginTop: "2%" }}
              />
            </Grid>
            <img
              src={woundsAssets.Heridas_imagen_14.content}
              alt={woundsAssets.Heridas_imagen_14.content}
              style={{ width: "100%", marginTop: "2%" }}
            />
            <Grid container className="justify-center">
              <StyledImageGeneral
                src={woundsAssets.Heridas_imagen_15.content}
                style={{ width: "100%" }}
                alt={woundsAssets.Heridas_imagen_15.content}
              />
            </Grid>
            <StyledSubtitle
              style={{
                marginBottom: "3%",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {woundsAssets.Heridas_texto_17.content}
            </StyledSubtitle>
          </React.Fragment>
        )}
      </Container>
    </React.Fragment>
  );
};

export default Heridas;
