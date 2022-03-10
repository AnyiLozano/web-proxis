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
        alt="terapeutica"
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
            <StyledTitulo
              alt="¿Qué son las heridas?"
              style={{ textAlign: "center" }}
            >
              Clasificación
            </StyledTitulo>
            <img
              src={
                woundsAssets.clasification !== undefined &&
                woundsAssets.clasification.content
              }
              alt=""
              style={{ width: "100%" }}
            />
          </Grid>
          <Container maxWidth="xl">
            <StyledSubtitle>Tipos de tejido en una herida</StyledSubtitle>
            <p>
              {woundsAssets.wound_type_description !== undefined &&
                woundsAssets.wound_type_description.content}
            </p>
            <Grid item md={12} className="pt-8">
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
                      backgroundColor: "#E3E3E3",
                      marginBottom: "3%",
                      borderRadius: 10,
                      width: "80%",
                    }}
                  >
                    <Container>
                      <Grid
                        container
                        className="justify-center align-items-center"
                      >
                        {_.map(
                          woundsAssets.tabs,
                          (item: any, index: number) => (
                            <React.Fragment>
                              {item.section.includes("1-image") && (
                                <Grid item md={3} className="pr-12" key={index}>
                                  <img
                                    src={item.content}
                                    alt=""
                                    style={{ margin: "10% 0" }}
                                  />
                                </Grid>
                              )}
                              {item.section.includes("1-text") && (
                                <Grid item md={9}>
                                  <p>{item.content}</p>
                                </Grid>
                              )}
                            </React.Fragment>
                          )
                        )}
                      </Grid>
                    </Container>
                  </TabPanel>
                  <TabPanel
                    value="1"
                    style={{
                      backgroundColor: "#E3E3E3",
                      marginBottom: "3%",
                      borderRadius: 10,
                      width: "80%",
                    }}
                  >
                    <Container>
                      <Grid
                        container
                        className="justify-center align-items-center"
                      >
                        {_.map(
                          woundsAssets.tabs,
                          (item: any, index: number) => (
                            <React.Fragment>
                              {item.section.includes("2-image") && (
                                <Grid item md={3} className="pr-12" key={index}>
                                  <img
                                    src={item.content}
                                    style={{ margin: "10% 0" }}
                                    alt=""
                                  />
                                </Grid>
                              )}
                              {item.section.includes("2-text") && (
                                <Grid item md={6}>
                                  <img src={item.content} alt={item.alt} />
                                </Grid>
                              )}
                            </React.Fragment>
                          )
                        )}
                      </Grid>
                    </Container>
                  </TabPanel>
                  <TabPanel
                    value="2"
                    style={{
                      backgroundColor: "#E3E3E3",
                      marginBottom: "3%",
                      borderRadius: 10,
                      width: "80%",
                    }}
                  >
                    <Container>
                      <Grid
                        container
                        className="justify-center align-items-center"
                      >
                        {_.map(
                          woundsAssets.tabs,
                          (item: any, index: number) => (
                            <React.Fragment>
                              {item.section.includes("3-image") && (
                                <Grid item md={3} className="pr-12" key={index}>
                                  <img
                                    src={item.content}
                                    style={{ margin: "10% 0" }}
                                    alt=""
                                  />
                                </Grid>
                              )}
                              {item.section.includes("3-text") && (
                                <Grid item md={6}>
                                  <img src={item.content} alt={item.alt} />
                                </Grid>
                              )}
                            </React.Fragment>
                          )
                        )}
                      </Grid>
                    </Container>
                  </TabPanel>
                  <TabPanel
                    value="3"
                    style={{
                      backgroundColor: "#E3E3E3",
                      marginBottom: "3%",
                      borderRadius: 10,
                      width: "80%",
                    }}
                  >
                    <Container>
                      <Grid
                        container
                        className="justify-center align-items-center"
                      >
                        {_.map(
                          woundsAssets.tabs,
                          (item: any, index: number) => (
                            <React.Fragment>
                              {item.section.includes("4-image") && (
                                <Grid item md={3} className="pr-12" key={index}>
                                  <img
                                    src={item.content}
                                    style={{ margin: "10% 0" }}
                                    alt=""
                                  />
                                </Grid>
                              )}
                              {item.section.includes("4-text") && (
                                <Grid item md={6}>
                                  <img src={item.content} alt={item.alt} />
                                </Grid>
                              )}
                            </React.Fragment>
                          )
                        )}
                      </Grid>
                    </Container>
                  </TabPanel>
                  <TabPanel
                    value="4"
                    style={{
                      backgroundColor: "#E3E3E3",
                      marginBottom: "3%",
                      borderRadius: 10,
                      width: "80%",
                    }}
                  >
                    <Container>
                      <Grid
                        container
                        className="justify-center align-items-center"
                      >
                        {_.map(
                          woundsAssets.tabs,
                          (item: any, index: number) => (
                            <React.Fragment>
                              {item.section.includes("5-image") && (
                                <Grid item md={3} className="pr-12" key={index}>
                                  <img
                                    src={item.content}
                                    style={{ margin: "10% 0" }}
                                    alt=""
                                  />
                                </Grid>
                              )}
                              {item.section.includes("5-text") && (
                                <Grid item md={6}>
                                  <img src={item.content} alt={item.alt} />
                                </Grid>
                              )}
                            </React.Fragment>
                          )
                        )}
                      </Grid>
                    </Container>
                  </TabPanel>
                </TabContext>
              </Box>
            </Grid>
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
                  <img
                    key={index}
                    style={{ width: "70%" }}
                    alt={item.alt}
                    src={item.content}
                  />
                </Grid>
              )
            )}
          </Grid>
        )}
        {woundsAssets.remembers_wounds !== undefined && (
          <img
            src={woundsAssets.remembers_wounds.content}
            alt={woundsAssets.remembers_wounds.alt}
            style={{ width: "100%", margin: "5% 0" }}
          />
        )}
        {woundsAssets.aux_person !== undefined && (
          <img
            alt={woundsAssets.aux_person.alt}
            style={{ width: "100%" }}
            src={woundsAssets.aux_person.content}
          />
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
            woundsAssets.Fondo_Background1 && woundsAssets.Fondo_Background1.content
          }
        >
          {woundsAssets.quirurgicas_1 !== undefined && (
            <React.Fragment>
              <StyledSubtitle
                style={{ textAlign: "center", fontWeight: "bold" }}
              >
                Una herida quirúrgica
              </StyledSubtitle>
              <img
                src={woundsAssets.quirurgicas_1.content}
                alt={woundsAssets.quirurgicas_1.alt}
                style={{ width: "100%", marginBottom: "3%" }}
              />
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
            <img
              src={woundsAssets.factoresImage.content}
              alt={woundsAssets.factoresImage.content}
              style={{ width: "100%", marginTop: "2%" }}
            />
            <p>{woundsAssets.factoresSubDescription.content}</p>
            <StyledSubtitle style={{ marginBottom: "3%" }}>
              {woundsAssets.complicacionesTitle.content}
            </StyledSubtitle>
            <img
              src={woundsAssets.complicacionesImage.content}
              alt={woundsAssets.complicacionesImage.content}
              style={{ width: "100%", marginTop: "2%" }}
            />
            <StyledSubtitle style={{ marginBottom: "3%" }}>
              {woundsAssets.Heridas_titulo3.content}
            </StyledSubtitle> 
            <p dangerouslySetInnerHTML={{ __html: woundsAssets.Herida_texto_4.content}}></p>
            <img
              src={woundsAssets.Heridas_imagen_13.content}
              alt={woundsAssets.Heridas_imagen_13.content}
              style={{ width: "100%", marginTop: "2%" }}
            />
            <img
              src={woundsAssets.Heridas_imagen_14.content}
              alt={woundsAssets.Heridas_imagen_14.content}
              style={{ width: "100%", marginTop: "2%" }}
            />
            <img
              src={woundsAssets.Heridas_imagen_15.content}
              alt={woundsAssets.Heridas_imagen_15.content}
              style={{ width: "100%", marginTop: "2%" }}
            />
            <StyledSubtitle style={{ marginBottom: "3%", textAlign: "center", fontWeight: "bold" }}>
              {woundsAssets.Heridas_texto_17.content}
            </StyledSubtitle> 
          </React.Fragment>
        )}
      </Container>
    </React.Fragment>
  );
};

export default Heridas;
