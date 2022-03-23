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
        {_.map(
          woundsAssets.wounds1 !== undefined && woundsAssets.wounds1,
          (item: ITerapeuticNumber, index: number) => (
            <Grid item md={12} key={index}>
              <img
                src={item.content}
                alt={item.alt}
                style={{ width: "100%", marginTop: "-0.5%", height: "105%" }}
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
                style={{
                  width: "1130.8px",
                  marginLeft: "0.1%",
                  marginTop: "2.8%",
                }}
              />
            </Grid>
          )
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
              fontSize: "28.4px",
              marginTop: "1.1rem",
              marginLeft: "3.6%",
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
        <StyledSubtitle style={{ padding: "0.3% 23px", fontSize: "28px" }}>
          Tipos de tejido en una herida
        </StyledSubtitle>
        <p
          style={{
            fontSize: "20px",
            marginLeft: "5.2%",
            marginTop: "-2.3%",
            lineHeight: "1.1",
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
          style={{ marginLeft: "4%" }}
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
          marginTop: "-1%",
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
                <StyledImageGeneral
                  key={index}
                  alt={item.alt}
                  src={item.content}
                  style={index === 1 ? { width: "86%" } : { }}
                />
              </Grid>
            )
          )}
        </Grid>
      )}
      {/* CURACION HERIDAS DE UNA EMERGENCIA */}

      {/* GUANTES ANTES DE INICIAR */}
      {woundsAssets.remembers_wounds !== undefined && (
          <Grid container className="justify-center">
            <StyledImageGeneral
              src={woundsAssets.remembers_wounds.content}
              alt={woundsAssets.remembers_wounds.alt}
              style={{ margin: "4% 0", width: "76.5%", marginLeft: "4%" }}
            />
          </Grid>
        )}
      {/* GUANTES ANTES DE INICIAR */}

      {/* CASO ATENDER HERIDAD */}
      {woundsAssets.aux_person !== undefined && (
        <Grid container className="justify-center mb-5">
          <StyledImageGeneral
            alt={woundsAssets.aux_person.alt}
            src={woundsAssets.aux_person.content}
            style={{ width: "94%", marginLeft: "4.3%", marginTop: "-1%", height: "292px"   }}
          />
        </Grid>
      )}
      {/* CASO ATENDER HERIDAD */}

      {/* REFERENCIAS */}
      {woundsAssets.references !== undefined && (
        <div style={{ background: "#014380" }}
        className="py-16"
        >
          <Container maxWidth="lg">
            <h1 className="pb-12 text-center text-white" style={{ fontSize: 30, fontWeight: "700", marginTop: "-3%", marginLeft: "5%" }}>Referencias</h1>
          </Container>
            <p dangerouslySetInnerHTML={{__html: woundsAssets.references.content}} className="text-white text-xs" style={{ padding: "0 160px", marginTop: "-1.2%" }}></p>

        </div>
      )}
      {/* REFERENCIAS */}

      {/* HERIDAS QUIRURGICAS */}
      {/* <Container> */}
      {woundsAssets.quiq_wounds !== undefined && (
          <React.Fragment>
            <StyledSubtitle style={{ textAlign: "center", fontWeight: "bold", fontSize: "43px", marginLeft: "7%" }}>
              Heridas quirúrgicas
            </StyledSubtitle>
            <img
              src={woundsAssets.quiq_wounds.content}
              alt={woundsAssets.quiq_wounds.alt}
              style={{ width: "1181px", marginTop: "-1.4%", marginLeft: "0%",  height: "382px" }}
            />
          </React.Fragment>
        )}
      {/* HERIDAS QUIRURGICAS */}

      {/* UNA HERIDAD QUIRURGICA */}
      {/* <StyledTerapeuticNumberSection1
          style={{ backgroundRepeat: "no-repeat" }}
          background={
            woundsAssets.Fondo_Background1 &&
            woundsAssets.Fondo_Background1.content
          }
        > */}
          {woundsAssets.quirurgicas_1 !== undefined && (
            <React.Fragment>
              <StyledSubtitle
                style={{ textAlign: "center", fontWeight: "bold", marginTop: "2.6%", marginLeft: "7%", fontSize: "28px" }}
              >
                Una herida quirúrgica
              </StyledSubtitle>
              <Grid container className="justify-center">
                <StyledImageGeneral
                  src={woundsAssets.quirurgicas_1.content}
                  alt={woundsAssets.quirurgicas_1.alt}
                  style={{  marginBottom: "3%", width: "80%", marginTop: "-1.4%", marginLeft: "3.8%"
                 }}
                />
              </Grid>
            </React.Fragment>
          )}
          {woundsAssets.caracteristicas_cuadro !== undefined && (
            <React.Fragment>
              <img
                src={woundsAssets.caracteristicas_cuadro.content}
                alt={woundsAssets.caracteristicas_cuadro.alt}
                style={{ width: "1220px", marginLeft: "0%", marginTop: "-1%", height: "500px"
               }}
              />
            </React.Fragment>
          )} 
        {/* </StyledTerapeuticNumberSection1>
      {/* UNA HERIDAD QUIRURGICA */}

      {/* FACTORES QUIRURUGICAS */}
      {woundsAssets.factoresTitle !== undefined && (
          <React.Fragment>
            <StyledSubtitle style={{ marginBottom: "3%", marginLeft: "7.1%", fontSize: "28.4px", marginTop: "3.8%" }}>
              {woundsAssets.factoresTitle.content}
            </StyledSubtitle>
            <p style={{ fontSize: "18.6px", padding: "0px 81px", marginTop: "-1%", lineHeight: "1.1" }}>
              {woundsAssets.factoresDescription.content}
            </p>
            <Grid container className="justify-center">
              <StyledImageGeneral
                src={woundsAssets.factoresImage.content}
                alt={woundsAssets.factoresImage.content}
                style={{ marginTop: "2%", width: "91%", marginLeft: "4%"}}
              />
            </Grid>
            <p style={{ fontSize: "20px", padding: "17px 83px", lineHeight: "1" }}>
              {woundsAssets.factoresSubDescription.content}
            </p>
            <StyledSubtitle style={{ marginBottom: "3%", marginLeft: "7%", marginTop: "1.6%", fontSize: "28.6px" }}>
              {woundsAssets.complicacionesTitle.content}
            </StyledSubtitle>
            <Grid container className="justify-center">
              <StyledImageGeneral
                src={woundsAssets.complicacionesImage.content}
                alt={woundsAssets.complicacionesImage.content}
                style={{ marginTop: "-1%", width: "641px", marginLeft: "5%"}}
              />
            </Grid>
            <StyledSubtitle style={{ marginBottom: "3%", marginTop: "6.7%", fontSize: "28.2px", marginLeft: "7%" }}>
              {woundsAssets.Heridas_titulo3.content}
            </StyledSubtitle>
            <p
              style={{ fontSize: "20px", padding: "0px 81px", lineHeight: "1" }}
              dangerouslySetInnerHTML={{
                __html: woundsAssets.Herida_texto_4.content,
              }}
            ></p>
            <Grid container className="justify-center">
              <StyledImageGeneral
                src={woundsAssets.Heridas_imagen_13.content}
                alt={woundsAssets.Heridas_imagen_13.content}
                style={{ marginTop: "2%", width: "70%", marginLeft: "3%" }}
              />
            </Grid>
            <img
              src={woundsAssets.Heridas_imagen_14.content}
              alt={woundsAssets.Heridas_imagen_14.content}
              style={{ width: "1152%", marginTop: "0.7%" }}
            />
            <Grid container className="justify-center">
              <StyledImageGeneral
                src={woundsAssets.Heridas_imagen_15.content}
                style={{ width: "1150px", marginTop: "3%", height: "506px"}}
                alt={woundsAssets.Heridas_imagen_15.content}
              />
            </Grid>
            <StyledSubtitle
              style={{
                marginBottom: "3%",
                fontWeight: "bold",
                marginLeft: "7.7%",
                marginTop: "2.4%",
                fontSize: "32px",
                textAlign: "center"
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
