import React from "react";
import { Container, Grid } from "@mui/material";
import useTerapeuticNumberStyles, {
  StyledSubtitle,
} from "../terapeutic-number.style";
import useControllers from "controllers";

const Ulceras = () => {
  const { StyledTitulo, StyledTerapeuticNumberSection1, StyledImage } =
    useTerapeuticNumberStyles();

  const { useScreenHooks } = useControllers();
  const { useTerapeuticNumber } = useScreenHooks();
  const { useHeridas } = useTerapeuticNumber();
  const { woundsAssets } = useHeridas();

  return (
    <React.Fragment>
      {/* BANNER PRINCIPAL */}
      {woundsAssets.ulceras_Banner_1 !== undefined && (
        <StyledImage
          src={woundsAssets.ulceras_Banner_1.content}
          alt={woundsAssets.ulceras_Banner_1.alt}
          style={{ marginBottom: "3%" }}
        />
      )}
      {/* BANNER PRINCIPAL */}

      {/* ULCERAS  */}
      {woundsAssets.ulceras_imagen_1 && (
        <React.Fragment>
          <Grid item lg={12} className="text-center">
            <StyledTitulo
              style={{
                fontSize: "45px",
                marginTop: "3.9rem",
                marginLeft: "5.6%",
                fontFamily: "Montserrat, bold",
              }}
            >
              Úlceras
            </StyledTitulo>
          </Grid>
          <Grid item md={6}>
            <StyledSubtitle
              style={{
                fontFamily: "Montserrat, bold",
                fontSize: "25px",
                marginLeft: "6.9%",
                marginTop: "7.3%",
              }}
              dangerouslySetInnerHTML={{
                __html:
                  woundsAssets.generalidades_texto1.content.split("--")[0],
              }}
            ></StyledSubtitle>
            <p
              dangerouslySetInnerHTML={{
                __html:
                  woundsAssets.generalidades_texto1.content.split("--")[1],
              }}
              className=""
              style={{
                marginTop: "-2.6%",
                marginLeft: "6.9%",
                fontFamily: "Montserrat, medium",
                color: "#666666",
                fontSize: "17px",
                width: "48%",
                fontWeight: "500",
              }}
            ></p>
          </Grid>
          <Grid container>
            <Grid item md={6}>
              <img
                src={woundsAssets.ulceras_imagen_1.content}
                alt={woundsAssets.ulceras_imagen_1.alt}
                style={{
                  marginTop: "-59.2%",
                  marginLeft: "124.1%",
                }}
              />
            </Grid>
          </Grid>
          {/* ULCERAS  */}

          {/* PADECEN DE DEPRESION */}
          <div
            style={{
              background: "#E3E3E3",
              marginLeft: "5.2%",
              marginRight: "10px",
              marginTop: "0%",
              height: "6.9%",
              borderBottomLeftRadius: "20px",
              borderBottomRightRadius: "20px",
            }}
            className="py-16"
          >
            <Grid container>
              <Grid item md={6}>
                <img
                  src={woundsAssets.ulceras_imagen_2.content}
                  alt={woundsAssets.ulceras_imagen_2.alt}
                  style={{
                    marginTop: "0.1%",
                    marginLeft: "12.4%",
                    width: "70%",
                  }}
                />
              </Grid>
            </Grid>
            <Grid item md={6}>
              <StyledSubtitle
                style={{
                  fontFamily: "Montserrat, bold",
                  fontSize: "25px",
                  marginLeft: "50.3%",
                  marginTop: "-21.4%",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    woundsAssets.depresion_padecer1.content.split("--")[0],
                }}
              ></StyledSubtitle>
              <p
                dangerouslySetInnerHTML={{
                  __html:
                    woundsAssets.depresion_padecer1.content.split("--")[1],
                }}
                className=""
                style={{
                  marginTop: "-2%",
                  marginLeft: "50.3%",
                  fontFamily: "Montserrat, medium",
                  color: "#666666",
                  fontSize: "17px",
                  width: "48%",
                  fontWeight: "500",
                }}
              ></p>
            </Grid>
          </div>
          {/* PADECEN DE DEPRESION */}

          {/* lesiones presion */}
          <StyledTerapeuticNumberSection1
            background={woundsAssets.ulceras_background.content}
          >
            {woundsAssets.ulceras_imagen_4 !== undefined && (
              <React.Fragment>
                <Grid item md={6}>
                  <StyledSubtitle
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "25px",
                      marginLeft: "-33.8%",
                      marginTop: "4.3%",
                    }}
                    dangerouslySetInnerHTML={{
                      __html:
                        woundsAssets.lesiones_por_presion.content.split(
                          "--"
                        )[0],
                    }}
                  ></StyledSubtitle>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        woundsAssets.lesiones_por_presion.content.split(
                          "--"
                        )[1],
                    }}
                    className=""
                    style={{
                      marginTop: "-2.4%",
                      marginLeft: "3%",
                      fontFamily: "Montserrat, medium",
                      color: "#666666",
                      fontSize: "17px",
                      fontWeight: "600",
                      padding: "0 52px",
                    }}
                  ></p>
                </Grid>
                <Grid container>
                  <Grid item md={12}>
                    <img
                      src={woundsAssets.ulceras_imagen_4.content}
                      alt={woundsAssets.ulceras_imagen_4.alt}
                      style={{
                        marginLeft: "0%",
                        marginTop: "-13.4%",
                        height: "773px",
                      }}
                    />
                  </Grid>
                </Grid>
              </React.Fragment>
            )}
          </StyledTerapeuticNumberSection1>
          {/* lesiones presion */}

          {/* PRESION */}
          <StyledSubtitle
            style={{
              marginBottom: "3%",
              marginTop: "2%",
              fontSize: "25px",
              marginLeft: "7.1%",
              fontFamily: "montserrat, bold",
            }}
          >
            {woundsAssets.ulceras_titulo_1.content}
          </StyledSubtitle>
          <p
            style={{
              fontSize: "17px",
              marginLeft: "7.2%",
              marginTop: "-0.5%",
              fontFamily: "Montserrat, medium",
              color: "#666666",
            }}
          >
            {woundsAssets.ulceras_text_1.content}
          </p>
          <Grid container className="justify-center">
            <img
              src={woundsAssets.ulceras_imagen_6.content}
              alt={woundsAssets.ulceras_imagen_6.alt}
              style={{
                width: "64.3%",
                marginTop: "2.2%",
                marginLeft: "4%",
              }}
            />
          </Grid>
          {/* PRESION */}

          {/* CLASIFICACION */}
          <StyledSubtitle
            style={{
              marginBottom: "3%",
              marginTop: "5.8%",
              fontSize: "25px",
              marginLeft: "7%",
              fontFamily: "montserrat, bold",
            }}
          >
            {woundsAssets.ulceras_titulo_3.content}
          </StyledSubtitle>
          <p
            dangerouslySetInnerHTML={{
              __html: woundsAssets.ulceras_text_2.content,
            }}
            style={{
              fontSize: "17px",
              padding: "0px 81px",
              marginTop: "0.5%",
              color: "#666666",
              fontFamily: "Montserrat, medium",
            }}
          ></p>
          <Grid container className="justify-center">
            <img
              src={woundsAssets.ulceras_imagen_7.content}
              alt={woundsAssets.ulceras_imagen_7.alt}
              style={{ width: "92%", marginTop: "3.5%", marginLeft: "3.3%" }}
            />
          </Grid>
          {/* CLASIFICACION */}

          {/* prevenir lesiones */}
          <StyledSubtitle
            style={{
              marginBottom: "3%",
              marginTop: "2.2%",
              fontSize: "25px",
              marginLeft: "7.1%",
              fontFamily: "montserrat, bold",
            }}
          >
            {woundsAssets.ulceras_titulo_4.content}
          </StyledSubtitle>
          <p
            dangerouslySetInnerHTML={{
              __html: woundsAssets.ulceras_text_8.content,
            }}
            style={{
              fontSize: "17px",
              padding: "0px 81px",
              marginTop: "-0.7%",
              fontFamily: "Montserrat, medium",
              color: "#666666",
            }}
          ></p>
          <Grid container className="justify-center">
            <img
              src={woundsAssets.ulceras_imagen_9.content}
              alt={woundsAssets.ulceras_imagen_9.alt}
              style={{ width: "92.2%", marginTop: "2.7%", marginLeft: "2.7%" }}
            />
            <img
              src={woundsAssets.ulceras_imagen_10.content}
              alt={woundsAssets.ulceras_imagen_10.alt}
              style={{ width: "92.2%", marginTop: "0.5%", marginLeft: "2.7%" }}
            />
          </Grid>
          {/* prevenir lesiones */}

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
                    marginTop: "-3%",
                    marginLeft: "3%",
                    fontFamily: "montserrat, bold",
                  }}
                >
                  Referencias
                </h1>
              </Container>
              <p
                dangerouslySetInnerHTML={{
                  __html: woundsAssets.ulceras_refrencias_1.content,
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
          {/* REFERENCIAS */}
        </React.Fragment>
      )}
      {/* ULCERAS  */}
    </React.Fragment>
  );
};

export default Ulceras;
