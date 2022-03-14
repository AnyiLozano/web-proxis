import { Container, Grid } from "@mui/material";
import useControllers from "controllers";
import React, { FC } from "react";
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
      "http://api-praxis.test/wp-content/uploads/2022/03/Banner_login.png",
    show: true,
  };

  const { epiprot } = products;

  return (
    <React.Fragment>
      {login.token === undefined ? (
        <React.Fragment>
          <Login {...obj} />
        </React.Fragment>
      ) : (
        <React.Fragment>
          {epiprot !== undefined && (
            <React.Fragment>
              <StyledImage
                src={epiprot !== undefined && epiprot.principal_banner.content}
                alt={epiprot !== undefined && epiprot.principal_banner.alt}
              />
              <StyledTerapeuticNumberSection
                background={
                  epiprot !== undefined &&
                  epiprot.background_description.content
                }
              >
                <Container>
                  <Grid item lg={12} className="flex justify-center">
                    <StyledImage
                      src={
                        epiprot !== undefined &&
                        epiprot.title_description.content
                      }
                      alt={
                        epiprot !== undefined && epiprot.title_description.alt
                      }
                    />
                  </Grid>
                  <Grid item lg={12} className="text-center">
                    <StyledTitulo1
                      dangerouslySetInnerHTML={{
                        __html:
                          epiprot !== undefined &&
                          epiprot.text_description.content,
                      }}
                    ></StyledTitulo1>
                  </Grid>
                </Container>
              </StyledTerapeuticNumberSection>
              <Container>
                <StyledTitulo style={{ textAlign: "center" }}>
                  {epiprot.title_composition.content}
                </StyledTitulo>
                <StyledTitulo1
                  dangerouslySetInnerHTML={{
                    __html: epiprot.text_composition.content,
                  }}
                ></StyledTitulo1>
                <Grid container className="justify-center">
                  <StyledImageGeneral
                    src={epiprot.image_composition.content}
                    alt={epiprot.image_composition.alt}
                    style={{ width: "100%" }}
                  />
                </Grid>
                <StyledTerapeuticNumberSection
                  style={{ paddingBottom: "0rem" }}
                  background={
                    epiprot !== undefined && epiprot.fuente_background.content
                  }
                >
                  <Grid container>
                    <Grid item md={6}>
                      <StyledTitulo
                        style={{ textAlign: "center", margin: "3% 0%" }}
                      >
                        {epiprot.fuente_title.content}
                      </StyledTitulo>
                      <StyledTitulo1
                        style={{ fontSize: 13, paddingTop: "2rem" }}
                        dangerouslySetInnerHTML={{
                          __html: epiprot.fuente_text.content,
                        }}
                      ></StyledTitulo1>
                    </Grid>
                    <Grid item md={6}>
                      <Grid container className="justify-end">
                        <StyledImageGeneral
                          src={epiprot.fuente_image.content}
                          alt={epiprot.fuente_image.alt}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </StyledTerapeuticNumberSection>
                <Grid container className="justify-center">
                  <StyledImageGeneral
                    src={epiprot.contraindicaciones.content}
                    alt={epiprot.contraindicaciones.alt}
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid container className="justify-center">
                  <StyledImageGeneral
                    src={epiprot.precauciones.content}
                    alt={epiprot.precauciones.alt}
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid container>
                  <Grid item md={6}>
                    <StyledTitulo>Información para prescribir</StyledTitulo>
                    <StyledTitulo1
                      style={{  fontSize: 18, textAlign: "left" }}
                      dangerouslySetInnerHTML={{
                        __html: epiprot.info_prescribir.content,
                      }}
                    ></StyledTitulo1>
                  </Grid>
                  <Grid item md={6} className="d-flex justify-center">
                    <StyledImageGeneral
                      src={epiprot.info_prescribir_image.content}
                      alt={epiprot.info_prescribir_image.alt}
                      style={{ width: "100%" }}
                    />
                  </Grid>
                </Grid>
                <StyledTitulo1
                  style={{ paddingLeft: "4%" }}
                  dangerouslySetInnerHTML={{
                    __html: epiprot.categoria_text.content,
                  }}
                ></StyledTitulo1>
                <Grid container>
                  <Grid item md={6} className="d-flex justify-center">
                    <StyledImageGeneral
                      src={epiprot.table_category.content}
                      alt={epiprot.table_category.alt}
                      style={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid
                    item
                    md={6}
                    className="d-flex justify-center align-items-center"
                  >
                    <StyledImageGeneral
                      src={epiprot.table_category_text.content}
                      alt={epiprot.table_category_text.alt}
                      style={{ width: "85%", height: "70%" }}
                    />
                  </Grid>
                </Grid>
                <StyledTitulo1
                  style={{ paddingLeft: "4%" }}
                  dangerouslySetInnerHTML={{
                    __html: epiprot.table_category_para.content,
                  }}
                ></StyledTitulo1>
                <Grid container className="mt-12 mb-12">
                  <Grid item md={6}>
                    <Grid item md={12}>
                      <StyledSubtitle>Indicaciones</StyledSubtitle>
                    </Grid>
                    <Grid item md={12}>
                      <StyledTitulo1
                        dangerouslySetInnerHTML={{
                          __html: epiprot.indications_text.content,
                        }}
                        style={{ paddingTop: "0rem" }}
                      ></StyledTitulo1>
                    </Grid>
                  </Grid>
                  <Grid item md={6} className="d-flex justify-center">
                    <StyledImageGeneral
                      src={epiprot.indications_image.content}
                      style={{ width: "100%" }}
                      alt={epiprot.indications_image.alt}
                    />
                  </Grid>
                </Grid>
                <StyledTitulo
                  dangerouslySetInnerHTML={{
                    __html: epiprot.aplicacion_title.content,
                  }}
                ></StyledTitulo>
                <StyledTitulo1
                  style={{ paddingTop: "2rem" }}
                  dangerouslySetInnerHTML={{
                    __html: epiprot.aplicacion_text.content,
                  }}
                ></StyledTitulo1>
                <Grid item md={12} className="d-flex justify-center">
                  <StyledImageGeneral
                    src={epiprot.aplicacion_image.content}
                    style={{ width: "100%" }}
                    alt={epiprot.aplicacion_image.alt}
                  />
                </Grid>
                <StyledTitulo1
                  style={{ paddingTop: "2rem" }}
                  dangerouslySetInnerHTML={{
                    __html: epiprot.aplicacion_para.content,
                  }}
                ></StyledTitulo1>
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
                          style={{ width: "100%" }}
                        />
                      </Grid>
                    ))}
                </Grid>
              </Container>
              <Grid item md={12} className="d-flex justify-center">
                <StyledImageGeneral
                  src={epiprot.almacenamiento2.content}
                  style={{ width: "100%" }}
                  alt={epiprot.almacenamiento2.alt}
                />
              </Grid>
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
                          style={{ width: "100%" }}
                        />
                      </Grid>
                    ))}
                </Grid>
              </Container>
            </React.Fragment>
          )}
          {/*           
          <StyledTerapeuticNumberSection1 background="http://localhost/api-proxis/wp-content/uploads/2021/12/Recurso-8.png">
            <Container>
              <Grid item lg={12}>
                <Grid container>
                  {_.map(products, (item: any, index: number) => {
                    if (width >= 1024) {
                      if (item.id !== 4) {
                        if (index % 2 === 0) {
                          return (
                            <React.Fragment>
                              <Grid item lg={6} className="mt-12" key={index}>
                                <Grid item lg={12}>
                                  <StyledTitleSection2>
                                    {item.title}
                                  </StyledTitleSection2>
                                </Grid>
                                <Grid item lg={12}>
                                  {typeof item.description === "string" ? (
                                    <StyledDescriptionSection2>
                                      {item.description}
                                    </StyledDescriptionSection2>
                                  ) : (
                                    <ul style={{ listStyle: "disc" }}>
                                      {_.map(
                                        item.description,
                                        (it: any, idx: number) => (
                                          <React.Fragment>
                                            <StyledListItemSection2
                                              className="mb-2"
                                              key={idx}
                                            >
                                              {it}
                                            </StyledListItemSection2>
                                          </React.Fragment>
                                        )
                                      )}
                                    </ul>
                                  )}
                                </Grid>
                              </Grid>
                              <Grid
                                item
                                lg={6}
                                className="flex justify-end mt-12"
                              >
                                <StyledImage
                                  src={item.image}
                                  alt="image-terapeutic-number"
                                />
                              </Grid>
                            </React.Fragment>
                          );
                        } else {
                          return (
                            <React.Fragment>
                              <Grid
                                item
                                lg={6}
                                key={index}
                                className="flex items-center mt-12"
                              >
                                <StyledImage
                                  src={item.image}
                                  alt="image-terapeutic-number"
                                />
                              </Grid>
                              <Grid item lg={6} className="mt-12">
                                <Grid item lg={12} className="mt-2">
                                  <StyledTitleSection2>
                                    {item.title}
                                  </StyledTitleSection2>
                                </Grid>
                                <Grid item lg={12} className="mt-4">
                                  {typeof item.description === "string" ? (
                                    <StyledDescriptionSection2>
                                      {item.description}
                                    </StyledDescriptionSection2>
                                  ) : (
                                    <ul style={{ listStyle: "disc" }}>
                                      {_.map(
                                        item.description,
                                        (it: any, idx: number) => (
                                          <React.Fragment>
                                            <StyledListItemSection2
                                              className="mb-2"
                                              key={idx}
                                            >
                                              {it}
                                            </StyledListItemSection2>
                                          </React.Fragment>
                                        )
                                      )}
                                    </ul>
                                  )}
                                </Grid>
                              </Grid>
                            </React.Fragment>
                          );
                        }
                      } else {
                        return (
                          <Grid item lg={12} className="mt-12">
                            <StyledImage
                              src={item.image}
                              alt="Aplication Product"
                              width="100%"
                            />
                          </Grid>
                        );
                      }
                    } else {
                      return (
                        <React.Fragment>
                          <Grid item lg={6} className="mt-12">
                            <Grid item lg={12}>
                              <StyledTitleSection2>
                                {item.title}
                              </StyledTitleSection2>
                            </Grid>
                            <Grid item lg={12}>
                              {typeof item.description === "string" ? (
                                <StyledDescriptionSection2>
                                  {item.description}
                                </StyledDescriptionSection2>
                              ) : (
                                <ul style={{ listStyle: "disc" }}>
                                  {_.map(
                                    item.description,
                                    (it: any, idx: number) => (
                                      <React.Fragment>
                                        <StyledListItemSection2
                                          className="mb-2"
                                          key={idx}
                                        >
                                          {it}
                                        </StyledListItemSection2>
                                      </React.Fragment>
                                    )
                                  )}
                                </ul>
                              )}
                            </Grid>
                          </Grid>
                          <Grid item lg={6} className="flex justify-end mt-12">
                            <StyledImage
                              src={item.image}
                              alt="image-terapeutic-number"
                            />
                          </Grid>
                        </React.Fragment>
                      );
                    }
                  })}
                </Grid>
              </Grid>
            </Container>
          </StyledTerapeuticNumberSection1> */}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Epiprot;
