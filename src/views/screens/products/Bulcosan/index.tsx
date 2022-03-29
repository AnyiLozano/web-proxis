import { Container, Grid } from "@mui/material";
import useControllers from "controllers";
import React, { FC } from "react";
import useProductsStyles from "../products.style";
import {
  StyledImageGeneral,
  StyledSubtitle,
} from "views/screens/terapeutic-number/terapeutic-number.style";

const Bulcosan: FC = (): JSX.Element => {
  // Styles
  const {
    StyledImage,
    StyledTerapeuticNumberSection,
    StyledTitulo1,
    StyledTitulo,
  } = useProductsStyles();

  // Products
  const { useScreenHooks } = useControllers();
  const { useProducts } = useScreenHooks();
  const { products } = useProducts();

  const { bulcosan } = products;

  return (
    <React.Fragment
      // style={{
      //   backgroundImage:
      //     "url('http://api-praxis.eml.com.co/wp-content/uploads/2022/03/polimero.png')",
      //   height: "5500px",
      // }}
    >
      {bulcosan !== undefined && (
        <React.Fragment>
          {/* banner */}
          <StyledImage
            src={bulcosan.banner_principal.content}
            alt={bulcosan.banner_principal.alt}
          />
          {/* banner */}

          {/* vulcosan  */}
          <StyledTerapeuticNumberSection
            style={{ backgroundSize: "104% 96%" }}
            background={bulcosan.background_description.content}
          >
            <Container>
              <Grid item lg={12} className="flex justify-center">
                <StyledImageGeneral
                  src={bulcosan.vulcosan_titulo_1.content}
                  alt={bulcosan.vulcosan_titulo_1.alt}
                  style={{
                    width: "auto",
                    marginTop: "-1%",
                    marginLeft: "4.8%",
                  }}
                />
              </Grid>

              <Grid item lg={12} className="">
                <StyledTitulo1
                  style={{
                    lineHeight: "1",
                    fontSize: "17px",
                    padding: "0 56px",
                    marginTop: "2.7%",
                    fontFamily: "Montserrat, medium",
                    color: "#666666",
                    marginLeft: "5.4%",
                  }}
                  dangerouslySetInnerHTML={{
                    __html:
                      bulcosan !== undefined &&
                      bulcosan.vulcosan_texto_1.content,
                  }}
                ></StyledTitulo1>
              </Grid>
            </Container>
          </StyledTerapeuticNumberSection>
          {/* vulcosan  */}

          {/* cuadro text heridad */}
          {bulcosan.indicaciones_image !== undefined && (
            <React.Fragment>
              <Grid item md={6}>
                <StyledSubtitle
                  style={{
                    textAlign: "center",
                    fontFamily: "Montserrat, bold",
                    fontSize: "25px",
                    marginLeft: "-44.1%",
                    marginTop: "2.8%",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: bulcosan.indicaciones.content.split("--")[0],
                  }}
                ></StyledSubtitle>
                <p
                  dangerouslySetInnerHTML={{
                    __html: bulcosan.indicaciones.content.split("--")[1],
                  }}
                  className=""
                  style={{
                    // padding: "0 160px",
                    marginTop: "-3%",
                    marginLeft: "9.5%",
                    fontFamily: "Montserrat, medium",
                    color: "#666666",
                    fontSize: "17px",
                    width: "48%",
                    fontWeight: "500",
                    lineHeight: "2.2",
                  }}
                ></p>
                <p
                  dangerouslySetInnerHTML={{
                    __html: bulcosan.indicaciones.content.split("--")[2],
                  }}
                  className=""
                  style={{
                    // padding: "0 160px",
                    marginTop: "-4.8%",
                    fontFamily: "Montserrat, medium",
                    color: "#666666",
                    fontSize: "17px",
                    width: "63%",
                    fontWeight: "500",
                    padding: "0 7%",
                  }}
                ></p>
              </Grid>
              <Grid container>
                <Grid item md={6}>
                  <img
                    src={bulcosan.indicaciones_image.content}
                    alt={bulcosan.indicaciones_image.alt}
                    style={{
                      width: "500px",
                      marginTop: "-73%",
                      marginLeft: "113.1%",
                      height: "414.6px",
                    }}
                  />
                </Grid>
              </Grid>
            </React.Fragment>
          )}
          <Container className="mt-12">
            {/* cuadro text heridad */}

            {/* cuadro text heridad */}
            <StyledTerapeuticNumberSection
              background={bulcosan.caracteristicas_background.content}
            >
              <Grid container className="mt-5">
                {bulcosan.caracteristicas !== undefined && (
                  <React.Fragment>
                    <Grid container>
                      <Grid item md={6}>
                        <img
                          src={bulcosan.caracteristicas.content}
                          alt={bulcosan.caracteristicas.alt}
                          style={{
                            width: "500px",
                            marginTop: "-32.7%",
                            marginLeft: "-4.2%",
                            height: "414.6px",
                          }}
                        />
                      </Grid>
                      <Grid item md={6}>
                        <StyledSubtitle
                          style={{
                            textAlign: "center",
                            fontFamily: "Montserrat, bold",
                            fontSize: "25px",
                            marginLeft: "-44.1%",
                            marginTop: "-29.2%",
                          }}
                          dangerouslySetInnerHTML={{
                            __html:
                              bulcosan.caracteristicas_image.content.split(
                                "--"
                              )[0],
                          }}
                        ></StyledSubtitle>
                        <p
                          dangerouslySetInnerHTML={{
                            __html:
                              bulcosan.caracteristicas_image.content.split(
                                "--"
                              )[1],
                          }}
                          className=""
                          style={{
                            // padding: "0 160px",
                            marginTop: "-1.8%",
                            marginLeft: "12.7%",
                            fontFamily: "Montserrat, medium",
                            color: "#666666",
                            fontSize: "17px",
                            fontWeight: "500",
                          }}
                        ></p>
                      </Grid>
                    </Grid>
                  </React.Fragment>
                )}

                {/* cuadro3 */}
              </Grid>
              <Grid container className="mt-14">
                <Grid item md={6}>
                  <StyledImageGeneral
                    src={bulcosan.ventajas.content}
                    alt={bulcosan.ventajas.alt}
                    style={{
                      width: "100%",
                      marginTop: "6%",
                      marginLeft: "10%",
                    }}
                  />
                </Grid>
                <Grid item md={6}>
                  <StyledImageGeneral
                    src={bulcosan.ventajas_imagen.content}
                    alt={bulcosan.ventajas_imagen.alt}
                    style={{
                      width: "100%",
                      marginLeft: "4%",
                      height: "125.5%",
                      marginTop: "-4%",
                    }}
                  />
                </Grid>
              </Grid>
              {/* cuadro3 */}
            </StyledTerapeuticNumberSection>
            <StyledTitulo
              style={{
                textAlign: "center",
                fontFamily: "Montserrat, bold",
                fontSize: "25px",
                marginLeft: "-77.1%",
                marginTop: "-5.7%",
              }}
            >
              {bulcosan.aplicacion_title.content}
            </StyledTitulo>
            <Grid container className="mt-5 justify-center">
              <StyledImageGeneral
                src={bulcosan.aplicacion_image.content}
                alt={bulcosan.aplicacion_image.alt}
                style={{ width: "100%", marginLeft: "4%", marginTop: "1%" }}
              />
            </Grid>
            <StyledTitulo
              className=""
              style={{
                textAlign: "center",
                fontFamily: "Montserrat, bold",
                fontSize: "25px",
                marginLeft: "-67.1%",
                marginTop: "4.9%",
              }}
            >
              {bulcosan.facil_title.content}
            </StyledTitulo>
            <Grid container className="mt-12">
              <Grid
                item
                md={6}
                className="d-flex justify-center align-items-center"
              >
                <StyledImageGeneral
                  src={bulcosan.facil_image.content}
                  alt={bulcosan.facil_image.alt}
                  style={{ width: "50%", marginLeft: "-10%", marginTop: "-4%" }}
                />
              </Grid>
              <Grid
                item
                md={6}
                className="d-flex justify-center align-items-center"
              >
                <StyledImageGeneral
                  src={bulcosan.facil_image2.content}
                  alt={bulcosan.facil_image2.alt}
                  style={{
                    width: "100%",
                    marginLeft: "-34%",
                    marginTop: "-6%",
                  }}
                />
              </Grid>
            </Grid>
          </Container>

          {/* VUADRO AZUL */}
          {bulcosan.references !== undefined && (
            <div
              style={{
                background: "#005D93",
                marginLeft: "0.1%",
                marginRight: "0px",
                marginTop: "4.3%",
                height: "4.4%",
              }}
              className="py-16"
            >
              <StyledSubtitle
                style={{
                  textAlign: "center",
                  fontFamily: "Montserrat, bold",
                  fontSize: "25px",
                  marginLeft: "-61.1%",
                  marginTop: "-3.7%",
                  color: "#fff"
                }}
                dangerouslySetInnerHTML={{
                  __html: bulcosan.references.content.split("--")[0],
                }}
              ></StyledSubtitle>
              <p
                dangerouslySetInnerHTML={{
                  __html: bulcosan.references.content.split("--")[1]
                }}
                className="text-white"
                style={{
                  padding: "0 160px",
                  marginTop: "-2.7%",
                  marginLeft: "-3.3%",
                  fontFamily: "Montserrat, medium",
                  fontSize: "17px",
                  lineHeight: "1.8",
                }}
              ></p>
            </div>
          )}
          <Grid container className="mt-5">
            {/* <Grid item md={12}>
              <StyledImageGeneral
                src={bulcosan.references.content}
                alt={bulcosan.references.alt}
                style={{ width: "100%" }}
              />
            </Grid> */}
          </Grid>
          {/* VUADRO AZUL */}

          <Container>
            <Grid container className="mt-12 mb-12 align-items-center">
              <StyledTitulo
               style={{
                padding: "0 160px",
                marginTop: "-2.1%",
                marginLeft: "-3.9%",
                fontFamily: "Montserrat, bold",
                fontSize: "25px",
              }}
               >{bulcosan.consiguelo.content}</StyledTitulo>
              <a
                href="https://www.cruzverde.com.co/aposito-esteril-caja-x-10-vulcosan-phmb-10cm-x-10cm/COCV_386040.html"
                target="_blank"
                rel="noreferrer"
              >
                <StyledImageGeneral
                  src={bulcosan.cruz.content}
                  style={{ width: "auto", marginTop: "-8%", marginLeft: "-64.6%" }}
                  alt={bulcosan.cruz.alt}
                />
              </a>
            </Grid>
          </Container>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Bulcosan;
