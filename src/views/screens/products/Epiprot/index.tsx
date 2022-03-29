import { Container, Grid } from "@mui/material";
import useControllers from "controllers";
import React, { FC, useState } from "react";
import useProductsStyles from "../products.style";
import Login from "views/screens/Login";
import useModels from "models";
import { useSelector } from "react-redux";
import {
  StyledImageGeneral,
  StyledSubtitle,
} from "views/screens/terapeutic-number/terapeutic-number.style";

const Epiprot: FC = (): JSX.Element => {
  // Styles
  const {
    StyledImage,
    StyledTerapeuticNumberSection,
    StyledTitulo1,
    StyledTitulo,
  } = useProductsStyles();

  const { useSelectors } = useModels();
  const { useAuthSelectors } = useSelectors();
  const { loginSelector } = useAuthSelectors();
  const login = useSelector(loginSelector);

  // Products
  const { useScreenHooks } = useControllers();
  const { useProducts } = useScreenHooks();
  const { products } = useProducts();

  const obj = {
    background:
      "http://api-praxis.eml.com.co/wp-content/uploads/2022/03/epiprot_epidermico_humano.png",

    show: true,
    height: "34.6rem",
  };

  const { epiprot } = products;

  const [firstImage, setFirstImage] = useState<boolean>(false);

  return (
    <React.Fragment>
      {login.token === undefined ? (
        <React.Fragment>
          {!firstImage ? (
            <div>
              <StyledImage
                style={{  marginBottom: "5%" }}
                src={epiprot !== undefined && epiprot.banner_1.content}
                alt={epiprot !== undefined && epiprot.banner_1.alt}
                onClick={() => setFirstImage(true)}
              />
            </div>
          ) : (
            <Login {...obj} />
          )}
        </React.Fragment>
      ) : (
        <React.Fragment
         
        >
          {epiprot !== undefined && (
            <React.Fragment>
              {/* banner principal */}
              <StyledImage
                style={{  }}
                src={epiprot !== undefined && epiprot.principal_banner.content}
                alt={epiprot !== undefined && epiprot.principal_banner.alt}
              />
              {/* banner principal */}

              {/* epiprot */}
              <StyledTerapeuticNumberSection
                style={{ backgroundSize: "104% 95%" }}
                background={
                  epiprot !== undefined &&
                  epiprot.background_description.content
                }
              >
                <Container>
                  <Grid item lg={12} className="flex justify-center">
                    <StyledImage
                      style={{ marginLeft: "4%", marginTop: "-4.2%" }}
                      src={
                        epiprot !== undefined &&
                        epiprot.title_description.content
                      }
                      alt={
                        epiprot !== undefined && epiprot.title_description.alt
                      }
                    />
                  </Grid>
                  <Grid item lg={12} className="">
                    <StyledTitulo1
                      style={{
                        lineHeight: "1",
                        fontSize: "17px",
                        padding: "0 118px",
                        marginTop: "4.7%",
                        fontFamily: "Montserrat, medium",
                        color: "#666666",
                      }}
                      dangerouslySetInnerHTML={{
                        __html:
                          epiprot !== undefined &&
                          epiprot.text_description.content,
                      }}
                    ></StyledTitulo1>
                  </Grid>
                </Container>
              </StyledTerapeuticNumberSection>
              {/* epiprot */}

              <Container>
                {/* composicion */}
                <StyledTitulo
                  style={{
                    marginTop: "2%",
                    fontFamily: "Montserrat, bold",
                    fontSize: "25px",
                    marginLeft: "5%",
                  }}
                >
                  {epiprot.title_composition.content}
                </StyledTitulo>
                <StyledTitulo1
                  style={{
                    lineHeight: "1",
                    fontSize: "17px",
                    padding: "0 56px",
                    marginTop: "1.7%",
                    fontFamily: "Montserrat, medium",
                    color: "#666666",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: epiprot.text_composition.content,
                  }}
                ></StyledTitulo1>
                <Grid container className="justify-center">
                  <StyledImageGeneral
                    src={epiprot.image_composition.content}
                    alt={epiprot.image_composition.alt}
                    style={{
                      width: "94%",
                      marginLeft: "5%",
                      marginTop: "2.7%",
                    }}
                  />
                </Grid>
                {/* composicion */}

                {/* fuente de obtencion */}
                <StyledTerapeuticNumberSection
                  style={{ paddingBottom: "0rem" }}
                  background={
                    epiprot !== undefined && epiprot.fuente_background.content
                  }
                >
                  <Grid container>
                    <Grid item md={6}>
                      <StyledTitulo
                        style={{
                          marginTop: "-19.4%",
                          marginLeft: "10.3%",
                          fontFamily: "Montserrat, bold",
                          fontSize: "23px",
                        }}
                      >
                        {epiprot.fuente_title.content}
                      </StyledTitulo>
                      <StyledTitulo1
                        style={{
                          fontSize: "17px",
                          marginTop: "-8.5%",
                          lineHeight: "1.2",
                          marginLeft: "10.7%",
                          width: "131%",
                        }}
                        dangerouslySetInnerHTML={{
                          __html: epiprot.fuente_text.content,
                        }}
                      ></StyledTitulo1>
                    </Grid>
                    <Grid item md={6}>
                      <Grid container className="">
                        <StyledImageGeneral
                          style={{
                            width: "77%",
                            marginTop: "-24.1%",
                            marginLeft: "27.4%",
                          }}
                          src={epiprot.fuente_image.content}
                          alt={epiprot.fuente_image.alt}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </StyledTerapeuticNumberSection>
                {/* fuente de obtencion */}

                {/* Contraindicaciones */}
                <Grid container className="justify-center">
                  <StyledImageGeneral
                    src={epiprot.contraindicaciones.content}
                    alt={epiprot.contraindicaciones.alt}
                    style={{ width: "98%", marginLeft: "3%" }}
                  />
                </Grid>
                {/* Contraindicaciones */}

                {/* precauciones */}
                <Grid container className="justify-center">
                  <StyledImageGeneral
                    src={epiprot.precauciones.content}
                    alt={epiprot.precauciones.alt}
                    style={{
                      width: "100%",
                      marginLeft: "2%",
                      marginTop: "-1%",
                    }}
                  />
                </Grid>
                {/* precauciones */}

                {/* INFORMACION PARA PRESCRIBIR */}
                <Grid container>
                  <Grid item md={6}>
                    <StyledTitulo
                      style={{
                        marginTop: "7.9%",
                        fontFamily: "Montserrat, bold",
                        fontSize: 25,
                        fontWeight: "700",
                        marginLeft: "10.4%",
                      }}
                    >
                      Información para prescribir
                    </StyledTitulo>
                    <StyledTitulo1
                      style={{
                        marginTop: "-6.9%",
                        fontFamily: "Montserrat, medium",
                        color: "#666666",
                        fontSize: 17,
                        fontWeight: "600",
                        marginLeft: "10%",
                        lineHeight: "1.1",
                        width: "108%",
                      }}
                      dangerouslySetInnerHTML={{
                        __html: epiprot.info_prescribir.content,
                      }}
                    ></StyledTitulo1>
                  </Grid>
                  <Grid item md={6} className="">
                    <StyledImageGeneral
                      src={epiprot.info_prescribir_image.content}
                      alt={epiprot.info_prescribir_image.alt}
                      style={{
                        width: "100%",
                        marginLeft: "5%",
                        marginTop: "-3.2%",
                      }}
                    />
                  </Grid>
                </Grid>
                <StyledTitulo1
                  style={{
                    marginTop: "-9.3%",
                    fontFamily: "Montserrat, medium",
                    color: "#666666",
                    fontSize: 17,
                    fontWeight: "500",
                    marginLeft: "10%",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: epiprot.categoria_text.content,
                  }}
                ></StyledTitulo1>

                {/* cuadro */}
                <Grid container>
                  {epiprot.table_category !== undefined && (
                    <Grid container className="justify-center">
                      <Grid item md={6}>
                        <StyledImageGeneral
                          src={epiprot.table_category.content}
                          alt={epiprot.table_category.alt}
                          style={{
                            marginTop: "2.2%",
                            width: "80.5%",
                            marginLeft: "22%",
                          }}
                        />
                      </Grid>
                      <Grid item md={6}>
                        <p
                          style={{
                            fontSize: 17,
                            marginLeft: "10.7%",
                            marginTop: "22px",
                            fontFamily: "Montserrat, medium",
                            color: "#666666",
                            fontWeight: "500",
                          }}
                          dangerouslySetInnerHTML={{
                            __html: epiprot.centro_ingenieria.content,
                          }}
                        ></p>
                      </Grid>
                    </Grid>
                  )}
                </Grid>
                <StyledTitulo1
                  style={{
                    fontSize: 17,
                    marginLeft: "10.1%",
                    marginTop: "-57px",
                    fontFamily: "Montserrat, medium",
                    color: "#666666",
                    fontWeight: "500",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: epiprot.table_category_para.content,
                  }}
                ></StyledTitulo1>
                {/* cuadro */}

                {/*  indicaciones*/}
                <Grid container className="mt-12 mb-12">
                  <Grid item md={6}>
                    <Grid item md={12}>
                      <StyledSubtitle
                        style={{
                          marginTop: "6.5%",
                          fontFamily: "Montserrat, bold",
                          fontSize: 25,
                          fontWeight: "700",
                          marginLeft: "10.4%",
                        }}
                      >
                        Indicaciones
                      </StyledSubtitle>
                    </Grid>
                    <Grid item md={12}>
                      <StyledTitulo1
                        style={{
                          marginTop: "-12.9%",
                          fontFamily: "Montserrat, medium",
                          color: "#666666",
                          fontSize: 15,
                          fontWeight: "600",
                          marginLeft: "10%",
                        }}
                        dangerouslySetInnerHTML={{
                          __html: epiprot.indications_text.content,
                        }}
                      ></StyledTitulo1>
                    </Grid>
                  </Grid>
                  <Grid item md={6} className="">
                    <StyledImageGeneral
                      src={epiprot.indications_image.content}
                      style={{
                        width: "100%",
                        marginTop: "-5.8%",
                        height: "124%",
                        marginLeft: "4.5%",
                      }}
                      alt={epiprot.indications_image.alt}
                    />
                  </Grid>
                </Grid>
                {/*  indicaciones*/}

                {/* APLICACION */}
                <StyledTitulo
                  style={{
                    marginTop: "4.2%",
                    fontFamily: "Montserrat, bold",
                    fontSize: 25,
                    fontWeight: "700",
                    marginLeft: "5.1%",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: epiprot.aplicacion_title.content,
                  }}
                ></StyledTitulo>
                <StyledTitulo1
                  style={{
                    marginTop: "-4.5%",
                    fontFamily: "Montserrat, medium",
                    color: "#666666",
                    fontSize: 15,
                    fontWeight: "600",
                    marginLeft: "5.2%",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: epiprot.aplicacion_text.content,
                  }}
                ></StyledTitulo1>
                <Grid item md={12} className="d-flex justify-center">
                  <StyledImageGeneral
                    src={epiprot.aplicacion_image.content}
                    style={{
                      width: "97%",
                      marginLeft: "5.3%",
                      marginTop: "0.5%",
                    }}
                    alt={epiprot.aplicacion_image.alt}
                  />
                </Grid>
                <StyledTitulo1
                  style={{
                    marginTop: "-4.9%",
                    fontFamily: "Montserrat, medium",
                    color: "#666666",
                    fontSize: 15,
                    fontWeight: "600",
                    marginLeft: "5.2%",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: epiprot.aplicacion_para.content,
                  }}
                ></StyledTitulo1>
                {/* APLICACION */}

                {/* CUADRO GRIS */}
                <Grid container className="mt-5">
                  {epiprot.conditions &&
                    epiprot.conditions.map((item: any, key: number) => (
                      <Grid
                        key={key}
                        item
                        md={6}
                        className="d-flex justify-center"
                      >
                        <StyledImageGeneral
                          src={item.content}
                          alt={item.alt}
                          style={{ width: "100%", marginLeft: "5%" }}
                        />
                      </Grid>
                    ))}
                </Grid>
              </Container>
              {/* CUADRO GRIS */}

              {/* CUADRO azul */}
              {epiprot.almacenamiento2 !== undefined && (
                <div
                  style={{
                    background: "#005D93",
                    marginLeft: "0.1%",
                    marginRight: "0px",
                    marginTop: "1.3%",
                    height: "5.4%",
                  }}
                  className="py-16"
                >
                  <p
                    dangerouslySetInnerHTML={{
                      __html: epiprot.almacenamiento2.content,
                    }}
                    className="text-white"
                    style={{
                      padding: "0 160px",
                      marginTop: "-3.7%",
                      marginLeft: "-7.8%",
                      fontFamily: "Montserrat, medium",
                      fontSize: "17px",
                      lineHeight: "1.8",
                    }}
                  ></p>
                </div>
              )}
              {/* CUADRO azul */}

              {/* cuadro 2 */}
              <Container>
                <Grid container className="mt-5 mb-5">
                  {epiprot.final &&
                    epiprot.final.map((item: any, key: number) => (
                      <Grid
                        key={key}
                        item
                        md={6}
                        className="d-flex justify-center"
                      >
                        <StyledImageGeneral
                          src={item.content}
                          alt={item.alt}
                          style={{ width: "100%", marginTop: "-1%",
                          marginLeft: "6%" }}
                        />
                      </Grid>
                    ))}
                </Grid>
              </Container>
              {/* cuadro 2 */}

            </React.Fragment>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Epiprot;
