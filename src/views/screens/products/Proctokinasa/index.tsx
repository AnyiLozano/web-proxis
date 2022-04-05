import { Container, Grid } from "@mui/material";
import useControllers from "controllers";
import React, { FC, useState } from "react";
import useProductsStyles from "../products.style";
import { StyledImageGeneral } from "views/screens/terapeutic-number/terapeutic-number.style";
import {
  StyledDescriptionText,
  StyledImageResponsive,
  StyledSectionDescription,
  StyledTitleText,
} from "../Epiprot/epiprot.responsive.styles";

const Proctokinasa: FC = (): JSX.Element => {
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

  const { proctokinasa } = products;

  /** States */
  const [width, setWidth] = useState<number>(window.innerWidth);

  window.addEventListener("resize", () => setWidth(window.innerWidth));

  return (
    <React.Fragment>
      {proctokinasa !== undefined && (
        <React.Fragment>
          <StyledImage
            src={proctokinasa.banner_principal.content}
            alt={proctokinasa.banner_principal.alt}
          />
          {width > 1024 ? (
            <StyledTerapeuticNumberSection
              style={{ backgroundSize: "105% 124%" }}
              background={proctokinasa.background_description.content}
            >
              <Container>
                <Grid item lg={12} className="flex justify-center">
                  <StyledTitulo
                    style={{
                      fontFamily: "Montserrat, bold",
                      fontSize: "25px",
                      marginTop: "-8.2%",
                    }}
                  >
                    Proctokinasa®
                  </StyledTitulo>
                </Grid>
                <Grid item lg={12} className="">
                  <StyledTitulo1
                    style={{
                      lineHeight: "1",
                      padding: "0 56px",
                      marginTop: "-1.3%",
                      fontFamily: "Montserrat, medium",
                      fontSize: "17px",
                      color: "#666666",
                      marginLeft: "5.4%",
                    }}
                  >
                    {proctokinasa.vulcosan_texto_1.content}
                  </StyledTitulo1>
                </Grid>
              </Container>
            </StyledTerapeuticNumberSection>
          ) : (
            <StyledSectionDescription
              background={proctokinasa.background_description.content}
            >
              <Container>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  className="d-flex justify-center"
                >
                  <StyledTitleText>Proctokinasa®</StyledTitleText>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  className="d-flex justify-center"
                >
                  <StyledDescriptionText>
                    {proctokinasa.vulcosan_texto_1.content}
                  </StyledDescriptionText>
                </Grid>
              </Container>
            </StyledSectionDescription>
          )}
          <Container>
            <Grid container>
              {proctokinasa.content.map((item: any, index: number) => {
                if (index % 2 === 0) {
                  return (
                    <React.Fragment>
                      {width > 1024 ? (
                        <>
                          <Grid item md={6} className="mt-12 pr-5">
                            <StyledTitulo
                              style={{
                                fontSize: 25,
                                fontFamily: "Montserrat, bold",
                              }}
                            >
                              {item.title}
                            </StyledTitulo>
                            <StyledTitulo1
                              dangerouslySetInnerHTML={{
                                __html: item.text,
                              }}
                              style={{
                                fontSize: 17,
                                fontFamily: "Montserrat, bold",
                                color: "#666666",
                                fontWeight: "500",
                              }}
                            ></StyledTitulo1>
                          </Grid>
                          <Grid
                            item
                            md={6}
                            className="d-flex justify-center mt-12"
                          >
                            <StyledImageGeneral
                              src={item.image}
                              alt=""
                              style={{ width: "100%" }}
                            />
                          </Grid>
                        </>
                      ) : (
                        <>
                          <Grid
                            item
                            xs={12}
                            sm={12}
                            md={12}
                            className="d-flex justify-center mt-12"
                          >
                            <StyledImageResponsive
                              src={item.image}
                              alt=""
                              style={{ width: "100%", maxWidth: "100%" }}
                            />
                          </Grid>
                          <Grid item xs={12} sm={12} md={12} className="mt-6">
                            <StyledTitleText>{item.title}</StyledTitleText>
                            <StyledDescriptionText
                              dangerouslySetInnerHTML={{
                                __html: item.text,
                              }}
                            ></StyledDescriptionText>
                          </Grid>
                        </>
                      )}
                    </React.Fragment>
                  );
                } else {
                  return (
                    <React.Fragment>
                      {width > 1024 ? (
                        <>
                          <Grid
                            item
                            md={6}
                            className="d-flex justify-center mt-12 pr-5"
                          >
                            <StyledImageGeneral
                              src={item.image}
                              alt=""
                              style={{ width: "100%" }}
                            />
                          </Grid>

                          <Grid item md={6} className="mt-12">
                            <StyledTitulo
                              style={{
                                fontSize: 25,
                                fontFamily: "Montserrat, bold",
                              }}
                            >
                              {item.title}
                            </StyledTitulo>
                            <StyledTitulo1
                              dangerouslySetInnerHTML={{
                                __html: item.text,
                              }}
                              style={{
                                fontSize: 17,
                                fontFamily: "Montserrat, bold",
                                color: "#666666",
                                fontWeight: "500",
                              }}
                            ></StyledTitulo1>
                          </Grid>
                        </>
                      ) : (
                        <>
                          <Grid
                            item
                            xs={12}
                            sm={12}
                            md={12}
                            className="d-flex justify-center mt-12"
                          >
                            <StyledImageResponsive
                              src={item.image}
                              alt=""
                              style={{ width: "100%", maxWidth: "100%" }}
                            />
                          </Grid>
                          <Grid item xs={12} sm={12} md={12} className="mt-6">
                            <StyledTitleText>{item.title}</StyledTitleText>
                            <StyledDescriptionText
                              dangerouslySetInnerHTML={{
                                __html: item.text,
                              }}
                            ></StyledDescriptionText>
                          </Grid>
                        </>
                      )}
                    </React.Fragment>
                  );
                }
              })}
            </Grid>
            <Grid item md={12} className="mt-12">
              <StyledImageGeneral
                src={
                  proctokinasa.preImage !== undefined &&
                  proctokinasa.preImage.content
                }
                alt=""
                style={{ width: "100%" }}
              />
            </Grid>
          </Container>
          <Grid container className="mt-12">
            {width > 1024 ? (
              <StyledImageGeneral
                src={proctokinasa.references && proctokinasa.references.content}
                alt=""
                style={{ width: "100%" }}
              />
            ) : (
              <StyledImageResponsive
                src={proctokinasa.tipos_tejidos && proctokinasa.tipos_tejidos.content}
                alt=""
                style={{ maxWidth: "100%" }}
              />
            )}
          </Grid>
        </React.Fragment>
      )}

      {/* <StyledTerapeuticNumberSection1 background="http://localhost/api-proxis/wp-content/uploads/2021/12/Recurso-8.png">
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
                          <Grid item lg={6} className="flex justify-end mt-12">
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
  );
};

export default Proctokinasa;
