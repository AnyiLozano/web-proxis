import React from "react";
import { Container, Grid } from "@mui/material";
import useTerapeuticNumberStyles, {
  StyledImageGeneral,
  StyledSubtitle,
} from "../terapeutic-number.style";
import useControllers from "controllers";
import { ITerapeuticNumber } from "models/interfaces/home";

const Diabetes = () => {
  const {
    StyledTerapeuticNumberSection,
    StyledTitulo,
    StyledTitulo1,
    StyledImage,
  } = useTerapeuticNumberStyles();

  const { useScreenHooks } = useControllers();
  const { useTerapeuticNumber } = useScreenHooks();
  const { useHeridas } = useTerapeuticNumber();
  const { woundsAssets } = useHeridas();

  return (
    <div
      // style={{
      //   backgroundImage:
      //     "url('http://api-praxis.eml.com.co/wp-content/uploads/2022/03/SALU_DIABETES.png')",
      //   height: "7500px",
      // }}
    >
      {woundsAssets.diabetes_banner_1 && (
        <React.Fragment>
          {/* bannerPRINCIPAL */}
          <StyledImage
            src={woundsAssets.diabetes_banner_1.content}
            alt={woundsAssets.diabetes_banner_1.alt}
          />
          {/* bannerPRINCIPAL */}

          {/* BANNER DIABETES */}
          <StyledTerapeuticNumberSection
            style={{ backgroundSize: "109% 92%" }}
            background={woundsAssets.diabetes_background_1.content}
          >
            <Container>
              <Grid item lg={12} className="text-center">
                <StyledTitulo
                  style={{
                    marginTop: "0.6%",
                    marginLeft: "4.3%",
                    fontFamily: "Montserrat, bold",
                    fontSize: "39px",
                  }}
                >
                  Diabetes
                </StyledTitulo>
              </Grid>
              <Grid item lg={12} className="text-center">
                <StyledTitulo1
                  style={{
                    lineHeight: "1",
                    fontSize: "17px",
                    padding: "0 118px",
                    marginTop: "2.6%",
                    fontFamily: "Montserrat, medium",
                    color: "#666666",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: woundsAssets.diabetes_text_1.content,
                  }}
                ></StyledTitulo1>
              </Grid>
            </Container>
          </StyledTerapeuticNumberSection>
          {/* BANNER DIABETES */}

          {/* mMITOS Y VERDADES */}
          <Container maxWidth="xl">
            <StyledSubtitle
              style={{
                textAlign: "center",
                marginTop: "2%",
                fontSize: "30px",
                marginLeft: "11.6%",
                fontFamily: "Montserrat, bold",
              }}
            >
              {woundsAssets.diabetes_titulo_1 !== undefined &&
                woundsAssets.diabetes_titulo_1.content}
            </StyledSubtitle>
            <Grid container>
              {woundsAssets.diabetes_cuadro !== undefined &&
                woundsAssets.diabetes_cuadro.map(
                  (item: ITerapeuticNumber, index: number) => (
                    <React.Fragment>
                      {index === 0 ? (
                        <Grid item md={6} className="d-flex justify-end">
                          <StyledImageGeneral
                            src={item.content}
                            alt={item.alt}
                            style={{ width: "81.8%", marginTop: "-3.6%" }}
                          />
                        </Grid>
                      ) : (
                        <Grid item md={6}>
                          <StyledImageGeneral
                            src={item.content}
                            alt={item.alt}
                            style={{
                              width: "82.8%",
                              marginTop: "-3.6%",
                              marginLeft: "5%",
                            }}
                          />
                        </Grid>
                      )}
                    </React.Fragment>
                  )
                )}
            </Grid>
          </Container>
          {/* mMITOS Y VERDADES */}

          {/* complicaciones  */}
          <StyledTerapeuticNumberSection
            style={{
              backgroundPosition: "top right",
              paddingTop: 0,
              paddingBottom: 0,
            }}
            background={woundsAssets.ulceras_background.content}
          >
            <Container>
              <StyledSubtitle
                style={{
                  textAlign: "",
                  marginTop: "2%",
                  fontSize: "25px",
                  marginLeft: "5%",
                  fontFamily: "Montserrat, bold",
                }}
              >
                {woundsAssets.diabetes_titulo_2 !== undefined &&
                  woundsAssets.diabetes_titulo_2.content}
              </StyledSubtitle>
              <p
                style={{
                  fontSize: "17px",
                  marginTop: "-2.7%",
                  padding: "0 55px",
                  fontFamily: "Montserrat, medium",
                  color: "#666666",
                  fontWeight: "500",
                }}
              >
                {woundsAssets.diabetes_text_2 !== undefined &&
                  woundsAssets.diabetes_text_2.content}
              </p>
              <Grid item md={12} className="d-flex justify-center">
                <StyledImageGeneral
                  src={woundsAssets.diabetes_imagen_1.content}
                  style={{
                    width: "63.1%",
                    marginLeft: "1.5%",
                    marginTop: "0.7%",
                  }}
                  alt={woundsAssets.diabetes_imagen_1.alt}
                />
              </Grid>
              <Grid container>
                {woundsAssets.diabetes_cuadrose !== undefined &&
                  woundsAssets.diabetes_cuadrose.map(
                    (item: ITerapeuticNumber, index: number) => (
                      <Grid item md={6} className="d-flex justify-center">
                        <StyledImageGeneral
                          src={item.content}
                          alt={item.alt}
                          style={{
                            width: "96%",
                            marginTop: "2%",
                            marginLeft: "8%",
                          }}
                        />
                      </Grid>
                    )
                  )}
              </Grid>
            </Container>
          </StyledTerapeuticNumberSection>
          {/* complicaciones  */}

          {/* PACIENTES DIABETES FAMILIA */}
          {woundsAssets.diabetes_image_2 !== undefined && (
            <React.Fragment>
              <Grid container>
                <Grid item md={6}>
                  <StyledSubtitle
                    style={{
                      fontFamily: "Montserrat, bold",
                      fontSize: "25px",
                      marginLeft: "14.3%",
                      marginTop: "4.8%",
                    }}
                    dangerouslySetInnerHTML={{
                      __html:
                        woundsAssets.paciente_diabetes_familiar.content.split(
                          "--"
                        )[0],
                    }}
                  ></StyledSubtitle>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        woundsAssets.paciente_diabetes_familiar.content.split(
                          "--"
                        )[1],
                    }}
                    className=""
                    style={{
                      fontFamily: "Montserrat, medium",
                      color: "#666666",
                      fontSize: "17px",
                      fontWeight: "600",
                      width: "83%",
                      marginLeft: "14%",
                      marginTop: "5.9%",
                      lineHeight: "1.1",
                    }}
                  ></p>
                </Grid>
                <Grid item md={6}>
                  <img
                    src={woundsAssets.diabetes_image_2.content}
                    alt={woundsAssets.diabetes_image_2.alt}
                    style={{
                      marginLeft: "0%",
                      marginTop: "3.6%",
                      height: "101%",
                    }}
                  />
                </Grid>
              </Grid>
            </React.Fragment>
          )}
          <Container>
            {/* PACIENTES DIABETES FAMILIA */}

            {/* FAMILIA CUIDADOR */}
            <StyledSubtitle
              style={{
                marginTop: "5.3%",
                fontSize: "25px",
                marginLeft: "5.3%",
                fontFamily: "Montserrat, bold",
              }}
            >
              {woundsAssets.diabetes_titulo_3 !== undefined &&
                woundsAssets.diabetes_titulo_3.content}
            </StyledSubtitle>
            <Grid item md={12} className="d-flex justify-center">
              <StyledImageGeneral
                style={{ marginTop: "-0.5%", marginLeft: "1.6%" }}
                src={woundsAssets.diabetes_imagen_4.content}
                alt={woundsAssets.diabetes_imagen_4.alt}
              />
            </Grid>
            {/* FAMILIA CUIDADOR */}
          </Container>

          {/* HABITOS SALUDABLES */}
          <StyledTerapeuticNumberSection
            style={{ height: "803px" }}
            background={woundsAssets.diabetes_background_2.content}
          >
            <Container>
              <Grid item lg={12} className="">
                <StyledTitulo
                  style={{
                    fontSize: "25px",
                    marginLeft: "5.2%",
                    marginTop: "-2.7%",
                    fontFamily: "Montserrat, bold",
                  }}
                >
                  {woundsAssets.diabetes_titulo_4.content}
                </StyledTitulo>
              </Grid>
              <Grid item lg={12} className="text-center">
                <StyledTitulo1
                  style={{
                    marginTop: "2%",
                    marginLeft: "5.2%",
                    fontFamily: "Montserrat, medium",
                    color: "#666666",
                    fontWeight: "500",
                  }}
                >
                  {woundsAssets.diabetes_text_3.content}
                </StyledTitulo1>
              </Grid>
              <Grid item md={12} className="d-flex justify-center">
                <StyledImageGeneral
                  style={{
                    padding: "0 56px",
                    marginTop: "1.6%",
                    width: "63%",
                    marginLeft: "6%",
                  }}
                  src={woundsAssets.diabetes_imagen_5.content}
                  alt={woundsAssets.diabetes_imagen_5.alt}
                />
              </Grid>
            </Container>
          </StyledTerapeuticNumberSection>
          {/* HABITOS SALUDABLES */}

          {/* ALIMENTACION ADECUADA */}
          <StyledTerapeuticNumberSection
            style={{
              backgroundPosition: "top right",
              paddingTop: 0,
              paddingBottom: 0,
            }}
            background={woundsAssets.ulceras_background.content}
          >
          <Container>
            <Grid item lg={12} className="">
              <StyledTitulo
                style={{
                  marginTop: "4.3%",
                  fontSize: "25px",
                  fontFamily: "Montserrat, bold",
                  marginLeft: "5%",
                }}
              >
                {woundsAssets.diabetes_titulo_5.content}
              </StyledTitulo>
            </Grid>
            <Grid item lg={12} className="text-center">
              <StyledTitulo1
                style={{
                  marginTop: "2.4%",
                  lineHeight: "1",
                  marginLeft: "56px",
                  fontFamily: "Montserrat, medium",
                  color: "#666666",
                  fontWeight: "500",
                }}
                dangerouslySetInnerHTML={{
                  __html: woundsAssets.diabetes_text_4.content,
                }}
              ></StyledTitulo1>
            </Grid>
          </Container>
          <Container>
            <Grid item md={12} className="d-flex justify-center">
              <StyledImageGeneral
                style={{ width: "1045px", marginLeft: "4%", marginTop: "4.5%" }}
                src={woundsAssets.diabetes_imagen_6.content}
                alt={woundsAssets.diabetes_imagen_6.alt}
              />
            </Grid>
          </Container>
          </StyledTerapeuticNumberSection>
          <Container>
            <StyledTitulo1
              style={{
                marginLeft: "56px",
                marginTop: "39.3px",
                fontFamily: "Montserrat, medium",
                color: "#666666",
                fontWeight: "500",
              }}
              dangerouslySetInnerHTML={{
                __html: woundsAssets.diabetes_text_5.content,
              }}
            ></StyledTitulo1>
            {/* ALIMENTACION ADECUADA */}

            {/* PLATOS */}
            <Grid item md={12} className="d-flex justify-center">
              <StyledImageGeneral
                style={{
                  width: "798px",
                  marginTop: "7.2px",
                  marginLeft: "0.4%",
                }}
                src={woundsAssets.diabetes_imagen_7.content}
                alt={woundsAssets.diabetes_imagen_7.alt}
              />
            </Grid>
            {/* PLATOS */}

            {/* ejercisio  */}
            {woundsAssets.diabetes_imagen_9 !== undefined && (
              <React.Fragment>
                <Grid item md={6}>
                  <StyledSubtitle
                    style={{
                      textAlign: "center",
                      fontFamily: "Montserrat, bold",
                      fontSize: "25px",
                      marginLeft: "-44.8%",
                      marginTop: "5.4%",
                    }}
                    dangerouslySetInnerHTML={{
                      __html:
                        woundsAssets.ejercisio_texto_1.content.split("--")[0],
                    }}
                  ></StyledSubtitle>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        woundsAssets.ejercisio_texto_1.content.split("--")[1],
                    }}
                    className=""
                    style={{
                      marginTop: "-1.3%",
                      marginLeft: "5.2%",
                      fontFamily: "Montserrat, medium",
                      color: "#666666",
                      fontSize: "17px",
                      fontWeight: "500",
                      width: "46.4%",
                      lineHeight: "1.2",
                    }}
                  ></p>
                </Grid>
                <Grid container>
                  <Grid item md={12}>
                    <img
                      src={woundsAssets.diabetes_imagen_9.content}
                      alt={woundsAssets.diabetes_imagen_9.alt}
                      style={{
                        marginLeft: "51.9%",
                        marginTop: "-29.1%",
                      }}
                    />
                  </Grid>
                </Grid>
              </React.Fragment>
            )}

            {/* RECOMENDACIONES */}
            <StyledTitulo
              style={{
                fontSize: "25px",
                marginTop: "3.2%",
                fontFamily: "Montserrat, bold",
                marginLeft: "5%",
              }}
            >
              {woundsAssets.diabetes_titulo_6.content}
            </StyledTitulo>
          </Container>

          {/* background image */}
          <StyledTerapeuticNumberSection
            background={woundsAssets.ulceras_background.content}
          >
            <Container maxWidth="xl">
              <Grid item md={12} className="d-flex justify-center">
                <StyledImageGeneral
                  style={{
                    marginTop: "3%",
                    width: "1008.4px",
                    marginLeft: "42.9px",
                  }}
                  src={woundsAssets.diabetes_imagen_10.content}
                  alt={woundsAssets.diabetes_imagen_10.alt}
                />
              </Grid>
            </Container>
          </StyledTerapeuticNumberSection>
          {/* background image */}
        </React.Fragment>
      )}
      {/* RECOMENDACIONES */}

      {/* REFERENCIAS */}
      {woundsAssets.diabetes_imagen_11 !== undefined && (
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
              __html: woundsAssets.diabetes_imagen_11.content,
            }}
            className="text-white text-xs"
            style={{
              padding: "0 160px",
              marginTop: "-2.2%",
              marginLeft: "-0.1%",
              fontFamily: "Montserrat, medium",
            }}
          ></p>
        </div>
      )}


      {/* {woundsAssets.diabetes_imagen_11 !== undefined && (
        <div style={{ background: "#014380" }} className="py-16">
          <Container maxWidth="lg">
            <h1
              className="pb-12 text-center text-white"
              style={{
                fontSize: 30,
                fontWeight: "700",
                marginTop: "-3%",
                marginLeft: "5%",
              }}
            >
              Referencias
            </h1>
          </Container>
          <p
            dangerouslySetInnerHTML={{
              __html: woundsAssets.diabetes_imagen_11.content,
            }}
            className="text-white text-xs"
            style={{ padding: "0 160px", marginTop: "-1.2%" }}
          ></p>
        </div>
      )} */}
      {/* REFERENCIAS */}
    </div>
  );
};

export default Diabetes;
