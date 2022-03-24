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
      {/* Banner Principal */}
      <StyledImage
        src={
          woundsAssets.principal_banner !== undefined &&
          woundsAssets.principal_banner.content
        }
        alt={
          woundsAssets.principal_banner !== undefined &&
          woundsAssets.principal_banner.alt
        }
      />

      {/* Banner Description Heridas */}
      <StyledTerapeuticNumberSection
        background={
          woundsAssets.background_description !== undefined &&
          woundsAssets.background_description.content
        }
      >
        <Container maxWidth="md">
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
      {/* Banner Description Heridas */}

      {/* HERIDAS INFECTADAS */}
      <StyledTerapeuticNumberSection1
        background={
          woundsAssets.background_p && woundsAssets.background_p.content
        }
      ></StyledTerapeuticNumberSection1>
      <Grid container>
        {woundsAssets.wounds1 !== undefined && (
          <React.Fragment>
            <Grid md={6} className="d-flex align-items-center">
              <Grid md={12}>
                <Grid item md={12}>
                  <StyledSubtitle
                    style={{
                      fontSize: "24px",
                      fontFamily: "montserrat, bold",
                      marginTop: "10%",
                      paddingBottom: "0%",
                      padding: "0 48px",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: woundsAssets.wounds1[1].content.split("--")[0],
                    }}
                  ></StyledSubtitle>
                </Grid>
                <Grid item md={12}>
                  <p
                    style={{
                      fontSize: "17px",
                      marginTop: "0.7%",
                      lineHeight: "1.1",
                      paddingBottom: "5%",
                      padding: "0 30px",
                      marginLeft: "9%",
                      fontFamily: "montserrat, medium italic",
                      color: "#4D4D4D",
                      fontWeight: "500",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: woundsAssets.wounds1[1].content.split("--")[1],
                    }}
                  ></p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={6} className="d-flex justify-end">
              <img
                src={woundsAssets.wounds1[0].content}
                alt={woundsAssets.wounds1[0].alt}
                style={{
                  width: "95%",
                  marginTop: "2%",
                  height: "99%",
                }}
              />
            </Grid>
          </React.Fragment>
        )}
        {woundsAssets.wounds2 !== undefined && (
          <React.Fragment>
            <Grid item md={6} className="d-flex justify-end">
              <img
                src={woundsAssets.wounds2[0].content}
                alt={woundsAssets.wounds2[0].alt}
                style={{
                  width: "100%",
                  marginTop: "4%",
                  height: "88.3%",
                }}
              />
            </Grid>
            <Grid md={6} className="d-flex align-items-center">
              <Grid md={12}>
                <StyledSubtitle
                  style={{
                    padding: "0% 23px",
                    fontSize: "24px",
                    marginTop: "8%",
                    marginLeft: "16px",
                    fontFamily: "montserrat, bold",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: woundsAssets.wounds2[1].content.split("--")[0],
                  }}
                ></StyledSubtitle>
                <p
                  style={{
                    fontSize: "17px",
                    marginLeft: "7%",
                    marginTop: "5.7%",
                    lineHeight: "1.1",
                    paddingBottom: "5%",
                    fontFamily: "montserrat, medium italic",
                    color: "#4D4D4D",
                    fontWeight: "500",

                  }}
                  dangerouslySetInnerHTML={{
                    __html: woundsAssets.wounds2[1].content.split("--")[1],
                  }}
                ></p>
              </Grid>
            </Grid>
          </React.Fragment>
        )}
      </Grid>
      {/* HERIDAS INFECTADAS */}

      {/* CLASIFICACION */}
      <Grid container style={{ marginTop: "2%" }}>
        <Grid item md={12}>
          <StyledTitulo
            alt="¿Qué son las heridas?"
            className="pl-10"
            style={{
              textAlign: "",
              fontSize: "24px",
              marginTop: "0.7rem",
              marginLeft: "3.7%",
              fontFamily: "montserrat, bold",
            }}
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
            style={{ width: "1110px", marginLeft: "4.5%" }}
          />
        </Grid>
      </Grid>
      {/* CLASIFICACION */}

      {/* TEJIDOS EN UNA HERIDAD */}
      <Container maxWidth="xl">
        <StyledSubtitle
          style={{
            padding: "0.3% 25px",
            fontSize: "24px",
            fontFamily: "montserrat, bold",
          }}
        >
          Tipos de tejido en una herida
        </StyledSubtitle>
        <p
          style={{
            fontSize: "17px",
            marginLeft: "5.2%",
            marginTop: "-1.8%",
            fontFamily: "montserrat",
            color: "4D4D4D",
            fontWeight: "500"
          }}
        >
          {woundsAssets.wound_type_description !== undefined &&
            woundsAssets.wound_type_description.content}
        </p>
      </Container>

      <StyledTabContainer
        container
        className="pt-8 justify-center"
        style={{ display: "grid" }}
      >
        <Box
          style={{ marginLeft: "4%", marginTop: "1.7%" }}
          sx={{
            width: "100%",
            typography: "body1",
          }}
        >
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "transparent" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                {_.map(tabs, (item: any, index: number) => (
                  <Tab
                    className="mr-1 heridas-tabs"
                    label={item}
                    value={index.toString()}
                    style={{
                      backgroundColor: "#8A8A8A",
                      textTransform: "capitalize",
                    }}
                  />
                ))}
              </TabList>
            </Box>
            <TabPanel value="0">
              <Grid container className="justify-center align-items-center">
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
            <TabPanel value="1">
              <Grid container className="justify-center align-items-center">
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
            <TabPanel value="2">
              <Grid container className="justify-center align-items-center">
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
            <TabPanel value="3">
              <Grid container className="justify-center align-items-center">
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
            <TabPanel value="4">
              <Grid container className="justify-center align-items-center">
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
      {/* TEJIDOS EN UNA HERIDAD */}

      {/* LAVADO DE MANOS */}
      <img
        style={{
          width: "1128PX",
          marginLeft: "2.8%",
          marginRight: "auto",
          marginTop: "-2%",
        }}
        alt={
          woundsAssets.recomendation_wounds !== undefined &&
          woundsAssets.recomendation_wounds.alt
        }
        src={
          woundsAssets.recomendation_wounds !== undefined &&
          woundsAssets.recomendation_wounds.content
        }
      />
      {/* LAVADO DE MANOS */}

      {/* CURACION HERIDAS DE UNA EMERGENCIA */}
      {woundsAssets.lavado !== undefined && (
        <Grid container className="justify-center">
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
                        marginTop: "1.6%",
                      }
                    : {}
                }
              >
                {index === 0 ? (
                  <StyledImageGeneral
                    key={index}
                    alt={item.alt}
                    src={item.content}
                  />
                ) : (
                  <React.Fragment>
                    <Grid md={12}>
                      <StyledSubtitle
                        style={{
                          padding: "0.3% 9px",
                          fontSize: "24px",
                          fontFamily: "montserrat, bold",
                          marginTop: "-1%",
                        }}
                      >
                        {item.content.split("--")[0]}
                      </StyledSubtitle>
                      <p
                        style={{
                          fontSize: "17px",
                          marginLeft: "7.2%",
                          marginTop: "5.5%",
                          fontFamily: "montserrat",
                          color: "4D4D4D",
                          fontWeight: "500"
                        }}
                      >
                        {item.content.split("--")[1]}
                      </p>
                    </Grid>
                  </React.Fragment>
                )}
              </Grid>
            )
          )}
        </Grid>
      )}
      {/* CURACION HERIDAS DE UNA EMERGENCIA */}

      {/* GUANTES ANTES DE INICIAR */}
      {woundsAssets.remembers_wounds !== undefined && (
        <Grid container className="justify-center">
          <StyledSubtitle
            style={{
              padding: "0.3% 9px",
              fontSize: "25px",
              fontFamily: "montserrat, bold",
              marginTop: "3.4%",
              marginLeft: "6.8%",
            }}
          >
            {woundsAssets.remembers_wounds[1].content.split("--")[0]}
          </StyledSubtitle>

          <StyledImageGeneral
            src={woundsAssets.remembers_wounds[0].content}
            alt={woundsAssets.remembers_wounds[0].alt}
            style={{
              marginTop: "-1.8%",
              width: "76.5%",
              marginLeft: "3.9%",
            }}
          />
          <p
            style={{
              fontSize: 17,
              marginLeft: "4.5%",
              marginTop: 18,
              lineHeight: "1.1",
              fontFamily: "montserrat",
              color: "#004280",
              fontWeight: "700"
            }}
          >
            {woundsAssets.remembers_wounds[1].content.split("--")[1]}
          </p>
        </Grid>
      )}
      {/* GUANTES ANTES DE INICIAR */}

      {/* CASO ATENDER HERIDAD */}
      {/* {woundsAssets. !== undefined && (
        <Grid container className="justify-center mb-5">
          <StyledImageGeneral
            alt={woundsAssets.aux_person.alt}
            src={woundsAssets.aux_person.content}
            style={{
              width: "94%",
              marginLeft: "4.3%",
              marginTop: "-1%",
              height: "292px",
            }}
          />
        </Grid>
      )} */}

      {woundsAssets.aux_person !== undefined && (
        <div
          style={{
            background: "#E3E3E3",
            marginLeft: "57px",
            marginRight: "15px",
            marginTop: "2.4%",
            height: "3%",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
          }}
          className="py-16"
        >
          <Container maxWidth="lg">
            <h1
              className="pb-12 text-center"
              style={{
                fontSize: 24,
                fontWeight: "700",
                marginTop: "-4.2%",
                marginLeft: "-55.1%",
                color: "#004280",
              }}
            >
              En caso de atender a una persona herida:
            </h1>
          </Container>
          <p
            dangerouslySetInnerHTML={{
              __html: woundsAssets.aux_person.content,
            }}
            className=""
            style={{
              padding: "0 126px",
              marginTop: "-1.9%",
              fontFamily: "montserrat",
              fontSize: 15,
              color: "#343434",
              fontWeight: "600",
            }}
          ></p>
        </div>
      )}
      {/* CASO ATENDER HERIDAD 

      {/* REFERENCIAS */}
      {woundsAssets.references !== undefined && (
        <div
          style={{
            background: "#005D93",
            marginLeft: "0.1%",
            marginRight: "0px",
            marginTop: "3%",
            height: "4.8%",
          }}
          className="py-16"
        >
          <Container maxWidth="lg">
            <h1
              className="pb-12 text-center text-white"
              style={{
                fontSize: 25,
                fontWeight: "700",
                marginTop: "-2.6%",
                marginLeft: "4.1%",
                fontFamily: "montserrat, bold",
              }}
            >
              Referencias:
            </h1>
          </Container>
          <p
            dangerouslySetInnerHTML={{
              __html: woundsAssets.references.content,
            }}
            className="text-white text-xs"
            style={{
              padding: "0 160px",
              marginTop: "-2.2%",
              marginLeft: "-0.1%",
              fontFamily: "montserrat",
            }}
          ></p>
        </div>
      )}
      {/* REFERENCIAS */}

      {/* HERIDAS QUIRURGICAS */}
      {/* <Container>  */}
      {woundsAssets.quiq_wounds !== undefined && (
        <React.Fragment>
          <StyledSubtitle
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "42px",
              marginLeft: "5.9%",
              marginTop: "4.9%",
            }}
          >
            Heridas quirúrgicas
          </StyledSubtitle>
          <Grid item md={6}>
            <StyledSubtitle
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "25px",
                marginLeft: "-51.1%",
                marginTop: "7.3%",
              }}
              dangerouslySetInnerHTML={{
                __html: woundsAssets.quirurgicas_text.content.split("--")[0],
              }}
            ></StyledSubtitle>
            <p
              dangerouslySetInnerHTML={{
                __html: woundsAssets.quirurgicas_text.content.split("--")[1],
              }}
              className=""
              style={{
                // padding: "0 160px",
                marginTop: "-0.2%",
                marginLeft: "6.9%",
                fontFamily: "montserrat, bold",
                fontSize: "17px",
                width: "48%",
                fontWeight: "500"
              }}
            ></p>
          </Grid>
          <Grid container>
            <Grid item md={6}>
              <img
                src={woundsAssets.quiq_wounds.content}
                alt={woundsAssets.quiq_wounds.alt}
                style={{
                  width: "500px",
                  marginTop: "-62.2%",
                  marginLeft: "113.1%",
                  height: "382px",
                }}
              />
            </Grid>
          </Grid>
        </React.Fragment>
      )}
      {/* HERIDAS QUIRURGICAS */}

      {/* UNA HERIDAD QUIRURGICA */}
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
              style={{
                textAlign: "center",
                fontWeight: "bold",
                marginTop: "2.6%",
                marginLeft: "7%",
                fontSize: "28px",
                zIndex: 1,
              }}
            >
              Una herida quirúrgica
            </StyledSubtitle>
            <Grid container className="justify-center">
              <StyledImageGeneral
                src={woundsAssets.quirurgicas_1.content}
                alt={woundsAssets.quirurgicas_1.alt}
                style={{
                  marginBottom: "3%",
                  width: "80%",
                  marginTop: "-1.4%",
                  marginLeft: "3.8%",
                }}
              />
            </Grid>
          </React.Fragment>
        )}

        {/* caracteristicas */}
        {woundsAssets.caracteristicas_cuadro !== undefined && (
          <React.Fragment>
            <Grid item md={6}>
              <StyledSubtitle
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "25px",
                  marginLeft: "-41.8%",
                  marginTop: "1.8%",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    woundsAssets.heridas_casracteristicas.content.split(
                      "--"
                    )[0],
                }}
              ></StyledSubtitle>
              <p
                dangerouslySetInnerHTML={{
                  __html:
                    woundsAssets.heridas_casracteristicas.content.split(
                      "--"
                    )[1],
                }}
                className=""
                style={{
                  marginTop: "-2%",
                  marginLeft: "6.9%",
                  fontFamily: "montserrat, bold",
                  fontSize: "17px",
                fontWeight: "600",
                color: "#4d4d4d"

                }}
              ></p>
            </Grid>
            <Grid container>
              <Grid item md={12}>
                <img
                  src={woundsAssets.caracteristicas_cuadro.content}
                  alt={woundsAssets.caracteristicas_cuadro.alt}
                  style={{
                    marginLeft: "0%",
                    marginTop: "-11.8%",
                    height: "500px",
                  }}
                />
              </Grid>
            </Grid>
          </React.Fragment>
        )}
      </StyledTerapeuticNumberSection1>
      {/* caracteristicas */}

      {/* UNA HERIDAD QUIRURGICA */}

      {/* FACTORES QUIRURUGICAS */}
      {woundsAssets.factoresTitle !== undefined && (
        <React.Fragment>
          <StyledSubtitle
            style={{
              marginBottom: "3%",
              marginLeft: "7.1%",
              fontSize: "28.4px",
              marginTop: "3.8%",
            }}
          >
            {woundsAssets.factoresTitle.content}
          </StyledSubtitle>
          <p
            style={{
              fontSize: "17px",
              padding: "0px 81px",
              marginTop: "-1%",
              fontFamily: "montserrat, bold",
              fontWeight: "500",
            }}
          >
            {woundsAssets.factoresDescription.content}
          </p>
          <Grid container className="justify-center">
            <StyledImageGeneral
              src={woundsAssets.factoresImage.content}
              alt={woundsAssets.factoresImage.content}
              style={{ marginTop: "2.5%", width: "91%", marginLeft: "4%" }}
            />
          </Grid>
          <p
            style={{
              fontSize: "17px",
              padding: "17px 83px",
              fontFamily: "montserrat, bold",
              marginTop: "0.2%",
              fontWeight: "500",  
            }}
          >
            {woundsAssets.factoresSubDescription.content}
          </p>
          {/* factores 1 */}

          {/* identificar */}
          <StyledSubtitle
            style={{
              marginBottom: "3%",
              marginLeft: "7%",
              marginTop: "2.3%",
              fontSize: "28.6px",
            }}
          >
            {woundsAssets.complicacionesTitle.content}
          </StyledSubtitle>
          <Grid container className="justify-center">
            <StyledImageGeneral
              src={woundsAssets.complicacionesImage.content}
              alt={woundsAssets.complicacionesImage.content}
              style={{ marginTop: "-1%", width: "641px", marginLeft: "1%" }}
            />
          </Grid>
          {/* identificar */}

          {/* signos */}
          <StyledSubtitle
            style={{
              marginBottom: "3%",
              marginTop: "6.7%",
              fontSize: "25px",
              marginLeft: "7%",
            }}
          >
            {woundsAssets.Heridas_titulo3.content}
          </StyledSubtitle>

          <p
            style={{ fontSize: "17px", padding: "6px 81px", fontWeight: "500" }}
            dangerouslySetInnerHTML={{
              __html: woundsAssets.Herida_texto_4.content,
            }}
          ></p>
          <Grid container className="justify-center">
            <StyledImageGeneral
              src={woundsAssets.Heridas_imagen_13.content}
              alt={woundsAssets.Heridas_imagen_13.content}
              style={{ marginTop: "3.9%", width: "70%", marginLeft: "3%" }}
            />
          </Grid>
          {/* signos */}

          {/* cuadro sintomas */}
          {woundsAssets.Heridas_imagen_14 !== undefined && (
            <div
              style={{
                background: "#005D93",
                marginLeft: "0.9px",
                marginRight: "-1px",
                marginTop: "1.3%",
                height: "2.5%",
              }}
              className="py-16"
            >
              <Container maxWidth="lg">
                <h1
                  className="pb-12 text-center"
                  style={{
                    fontSize: 24,
                    fontWeight: "700",
                    marginTop: "-3%",
                    marginLeft: "-51.6%",
                    color: "#fff",
                    fontFamily: "montserrat, bold",
                  }}
                >
                  ¿Qué hacer si tengo estos síntomas?
                </h1>
              </Container>
              <p
                dangerouslySetInnerHTML={{
                  __html: woundsAssets.Heridas_imagen_14.content,
                }}
                className=""
                style={{
                  padding: "0 137px",
                  marginTop: "-1.9%",
                  fontFamily: "montserrat",
                  fontSize: 15,
                  color: "#fff",
                  fontWeight: "600",
                }}
              ></p>
            </div>
          )}
          {/* <img
            src={woundsAssets.Heridas_imagen_14.content}
            alt={woundsAssets.Heridas_imagen_14.content}
            style={{ width: "1152%", marginTop: "0.7%" }}
          /> */}
          {/* cuadro sintomas */}

          {/* CUIDAR UNA HERIDAD CASA */}
          {woundsAssets.Heridas_imagen_15 !== undefined && (
        <React.Fragment>
          <Grid item md={6}>
            <StyledSubtitle
              style={{
                fontWeight: "montserrat, bold",
                fontSize: "25px",   
                marginLeft: "7.4%",
                marginTop: "5.1%",
              }}
              dangerouslySetInnerHTML={{
                __html: woundsAssets.cuidar_text_heridad.content.split("--")[0],
              }}
            ></StyledSubtitle>
            <p
              dangerouslySetInnerHTML={{
                __html: woundsAssets.cuidar_text_heridad.content.split("--")[1],
              }}
              className=""
              style={{
                // padding: "0 160px",
                marginTop: "-5.9%",
                marginLeft: "7.1%",
                fontFamily: "montserrat, bold",
                fontSize: "17px",
                width: "48%",
              fontWeight: "500",

              }}
            ></p>
          </Grid>
          <Grid container>
            <Grid item md={6}>
              <img
                src={woundsAssets.Heridas_imagen_15.content}
                alt={woundsAssets.Heridas_imagen_15.alt}
                style={{
                  marginTop: "-84.3%",
                  marginLeft: "100.3%",
                  height: "505px",
                fontFamily: "montserrat",
                }}
              />
            </Grid>
          </Grid>
        </React.Fragment>
      )}
          {/* <Grid container className="justify-center">
            <StyledImageGeneral
              src={woundsAssets.Heridas_imagen_15.content}
              style={{ width: "1150px", marginTop: "3%", height: "506px" }}
              alt={woundsAssets.Heridas_imagen_15.content}
            />
          </Grid> */}
          {/* CUIDAR UNA HERIDAD CASA */}

          <StyledSubtitle
            style={{
              marginBottom: "3%",
              fontWeight: "bold",
              marginLeft: "7.3%",
              marginTop: "3.3%",
              fontSize: "25px",
              textAlign: "center",
              fontFamily: "montserrat, bold",
              
            }}
          >
            {woundsAssets.Heridas_texto_17.content}
          </StyledSubtitle>
        </React.Fragment>
      )}
      {/* FACTORES QUIRURUGICAS */}
    </React.Fragment>
  );
};

export default Heridas;
