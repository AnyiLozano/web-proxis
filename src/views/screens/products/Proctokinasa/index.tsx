import { Container, Grid } from "@mui/material";
import useControllers from "controllers";
import React, { FC } from "react";
import useProductsStyles from "../products.style";
import { StyledImageGeneral } from "views/screens/terapeutic-number/terapeutic-number.style";

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

  return (
    <React.Fragment>
      {proctokinasa !== undefined && (
        <React.Fragment>
          <StyledImage
            src={proctokinasa.banner_principal.content}
            alt={proctokinasa.banner_principal.alt}
          />
          <StyledTerapeuticNumberSection
            background={proctokinasa.background_description.content}
          >
            <Container>
              <Grid item lg={12} className="flex justify-center">
                <StyledTitulo>Proctokinasa®</StyledTitulo>
              </Grid>
              <Grid item lg={12} className="">
                <StyledTitulo1>
                  {proctokinasa.vulcosan_texto_1.content}
                </StyledTitulo1>
              </Grid>
            </Container>
          </StyledTerapeuticNumberSection>
          <Container>
            <Grid container>
              {proctokinasa.content.map((item: any, index: number) => {
                if (index % 2 === 0) {
                  return (
                    <React.Fragment>
                      <Grid item md={6} className="mt-12 pr-5">
                        <StyledTitulo>{item.title}</StyledTitulo>
                        <StyledTitulo1
                          dangerouslySetInnerHTML={{
                            __html: item.text,
                          }}
                        ></StyledTitulo1>
                      </Grid>
                      <Grid item md={6} className="d-flex justify-center mt-12">
                        <StyledImageGeneral
                          src={item.image}
                          alt=""
                          style={{ width: "100%" }}
                        />
                      </Grid>
                    </React.Fragment>
                  );
                } else {
                  return (
                    <React.Fragment>
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
                        <StyledTitulo>{item.title}</StyledTitulo>
                        <StyledTitulo1>{item.text}</StyledTitulo1>
                      </Grid>
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
            <StyledImageGeneral
              src={proctokinasa.references && proctokinasa.references.content}
              alt=""
              style={{ width: "100%" }}
            />
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
