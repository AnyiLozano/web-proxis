import React from "react";
import { Container, Grid } from "@mui/material";
import _ from "lodash";
import useTerapeuticNumberStyles from "../terapeutic-number.style";
import useControllers from "controllers";

const Hemorroides = () => {
  const {
    StyledTerapeuticNumberSection,
    StyledTitulo,
    StyledTitulo1,
    StyledTerapeuticNumberSection1,
    StyledTitleSection2,
    StyledDescriptionSection2,
    StyledImage,
    StyledImage1,
  } = useTerapeuticNumberStyles();

  const { useScreenHooks } = useControllers();
  const { useTerapeuticNumber } = useScreenHooks();
  const { width, useHeridas } = useTerapeuticNumber();
  const { woundsAssets } = useHeridas();

  return (
    <React.Fragment>
      {woundsAssets.hemorroidal_banner_1 && (
        <React.Fragment>
          <StyledImage
            src={woundsAssets.hemorroidal_banner_1.content}
            alt={woundsAssets.hemorroidal_banner_1.alt}
          />

          {/* banner section */}
          <StyledTerapeuticNumberSection
            style={{ backgroundSize: "109% 101%" }}
            background={woundsAssets.hemorroidal_background_1.content}
          >
            <Container>
              <Grid item lg={12} className="text-center">
                <StyledTitulo
                  style={{
                    marginTop: "0%",
                    marginLeft: "4%",
                    fontSize: "44px",
                    fontFamily: "Montserrat, bold",
                  }}
                >
                  Enfermedad hemorroidal
                </StyledTitulo>
              </Grid>
              <Grid item lg={12} className="text-center">
                <StyledTitulo1
                  style={{
                    lineHeight: "1",
                    fontSize: "17px",
                    padding: "2px 145px",
                    fontFamily: "Montserrat, medium",
                    color: "#666666",
                  }}
                >
                  {woundsAssets.hemorroidal_text_1.content}
                </StyledTitulo1>
              </Grid>
            </Container>
          </StyledTerapeuticNumberSection>
          {/* banner section */}
          <StyledTerapeuticNumberSection1
            background={
              woundsAssets.hemorroidal_background_p &&
              woundsAssets.hemorroidal_background_p.content
            }
          >
            <Container>
              <Grid item lg={12}>
                <Grid container>
                  {_.map(
                    woundsAssets.hemorroidal_content,
                    (item: any, index: any) => {
                      if (width >= 1024) {
                        if (index % 2 === 0) {
                          return (
                            <React.Fragment>
                              <Grid item md={6} className="mt-12">
                                <Grid item lg={12}>
                                  <StyledTitleSection2
                                    style={{
                                      marginTop: "0%",
                                      marginLeft: "0%",
                                      fontSize: "25px",
                                      fontFamily: "Montserrat, bold",
                                      marginBottom: "3%",
                                      fontWeight: "600"
                                    }}
                                  >
                                    {item.title}
                                  </StyledTitleSection2>
                                </Grid>
                                <Grid item lg={12}>
                                  <StyledDescriptionSection2
                                  style={{
                                    marginTop: "0%",
                                    marginLeft: "0%",
                                    fontSize: "17px",
                                    fontFamily: "Montserrat, medium",
                                    fontWeight: "500"
                                  }}
                                  >
                                    {item.description}
                                  </StyledDescriptionSection2>
                                </Grid>
                              </Grid>
                              <Grid
                                item
                                md={6}
                                className="flex justify-end mt-12"
                              >
                                <StyledImage1
                                  src={item.image}
                                  alt="image-terapeutic-number"
                                  className="ml-6"
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
                                lg={6}
                                key={index}
                                className="flex justify-center items-center mt-12"
                              >
                                <StyledImage1
                                  src={item.image}
                                  alt="image-terapeutic-number"
                                  className="mr-6"
                                />
                              </Grid>
                              <Grid item lg={6} className="mt-12">
                                <Grid item lg={12} className="mt-2">
                                  <StyledTitleSection2 
                                  style={{
                                    marginTop: "0%",
                                    marginLeft: "0%",
                                    fontSize: "25px",
                                    fontFamily: "Montserrat, bold",
                                    marginBottom: "3%",
                                    fontWeight: "600"
                                  }}
                                  >
                                    {item.title}
                                  </StyledTitleSection2>
                                </Grid>
                                <Grid item lg={12} className="mt-4">
                                  <StyledDescriptionSection2 
                                  style={{
                                    marginTop: "0%",
                                    marginLeft: "0%",
                                    fontSize: "17px",
                                    fontFamily: "Montserrat, medium",
                                    fontWeight: "500"
                                  }}
                                  >
                                    {item.description}
                                  </StyledDescriptionSection2>
                                </Grid>
                              </Grid>
                            </React.Fragment>
                          );
                        }
                      } else {
                        return (
                          <React.Fragment>
                            <Grid item lg={12} className="mt-12">
                              <Grid item lg={12}>
                                <StyledTitleSection2 
                                style={{
                                  marginTop: "0%",
                                  marginLeft: "0%",
                                  fontSize: "25px",
                                  fontFamily: "Montserrat, bold",
                                  marginBottom: "3%",
                                  fontWeight: "600"
                                }}
                                >
                                  {item.title}
                                </StyledTitleSection2>
                              </Grid>
                              <Grid item lg={12}>
                                <StyledDescriptionSection2 
                                 style={{
                                  marginTop: "0%",
                                  marginLeft: "0%",
                                  fontSize: "17px",
                                  fontFamily: "Montserrat, medium",
                                  fontWeight: "500"
                                }}
                                >
                                  {item.description}
                                </StyledDescriptionSection2>
                              </Grid>
                            </Grid>
                            <Grid
                              item
                              lg={12}
                              sm={12}
                              xs={12}
                              className="flex justify-center mt-12"
                            >
                              <StyledImage1
                                src={item.image}
                                alt="image-terapeutic-number"
                              />
                            </Grid>
                          </React.Fragment>
                        );
                      }
                    }
                  )}
                </Grid>
              </Grid>
            </Container>
          </StyledTerapeuticNumberSection1>

          {/* REFERENCIAS */}
          {woundsAssets.hemorroidal_background_referencias !== undefined && (
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
              __html: woundsAssets.hemorroidal_background_referencias.content,
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
          
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Hemorroides;
