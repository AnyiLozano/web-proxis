import React from "react";
import useCuidadoresStyles from "../cuidadores.styles";
import { Grid } from "@mui/material";
import useControllers from "controllers";
import _ from "lodash";

const Artesanal = () => {
  // Styles
  const {
    StyledSection4,
    StyledCarousel,
    StyledImage2,
    ContainerStyled,
    StyledTitleSection2 
  } = useCuidadoresStyles();

  // Controllers
  const { useScreenHooks } = useControllers();
  const { useProducts } = useScreenHooks();
  const { products } = useProducts();
  const { cuidadores } = products;

  return (
    <React.Fragment>
      {cuidadores !== undefined && (
        <React.Fragment>
          <StyledSection4 background={cuidadores.artesanalBackground.content}>
            <ContainerStyled>
              <Grid item md={12} className="flex justify-center py-12">
                <StyledTitleSection2>
                  Un poco de historia del cuidado
                </StyledTitleSection2>
              </Grid>
              <Grid item lg={12} className="pb-16">
                <StyledCarousel
                  arrows={true}
                  dots={false}
                  speed={10000}
                  slidesToShow={1}
                  slidesToScroll={1}
                  autoplay={true}
                  responsive={[
                    {
                      breakpoint: 1024,
                      settings: {
                        dots: false,
                        arrows: false,
                      },
                    },
                  ]}
                >
                  {_.map(
                    cuidadores.slider.length > 0 && cuidadores.slider,
                    (item: any, index: number) => (
                      <div>
                        <Grid container key={index}>
                          <Grid item md={6} lg={6} className="px-6">
                            <StyledImage2
                              src={item.image}
                              style={{ width: "100%", borderRadius: 20 }}
                            />
                          </Grid>
                          <Grid
                            item
                            md={6}
                            lg={6}
                            className="flex items-center px-6"
                          >
                            <Grid item md={12}>
                              <Grid item md={12}>
                                <StyledImage2
                                  src={item.text}
                                  style={{ width: "100%" }}
                                />
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </div>
                    )
                  )}
                </StyledCarousel>
              </Grid>
            </ContainerStyled>
          </StyledSection4>
        </React.Fragment>
      )}

      {/* <ContainerStyled>
                    <Grid item md={12} className="flex justify-center py-12">
                        <StyledTitleSection2>Un poco de historia del cuidado</StyledTitleSection2>
                    </Grid>
                    <Grid item lg={12} className="pb-16">
                        <StyledCarousel
                            arrows={true}
                            dots={false}
                            speed={10000}
                            slidesToShow={1}
                            slidesToScroll={1}
                            autoplay={true}
                            responsive={[
                                {
                                    breakpoint: 1024,
                                    settings: {
                                        dots: false,
                                        arrows: false
                                    }
                                }
                            ]}
                        >
                            {
                                _.map(cuidadores.slider, (item: any, index: number) => (
                                    <div>
                                        <Grid container key={index}>
                                            <Grid item md={6} lg={6} className="px-6">
                                                <StyledImage2 src={item.image} style={{ width: '100%', borderRadius: 20 }} />
                                            </Grid>
                                            <Grid item md={6} lg={6} className="flex items-center px-6">
                                                <Grid item md={12}>
                                                    <Grid item md={12} className="py-6">
                                                        <StyledTitleSection3>{item.title}</StyledTitleSection3>
                                                    </Grid>
                                                    <Grid item md={12}>
                                                        <StyledDescriptionSection2>{item.text}</StyledDescriptionSection2>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </div>
                                ))
                            }
                        </StyledCarousel>
                    </Grid>
                </ContainerStyled>
            </StyledSection4> */}
    </React.Fragment>
  );
};

export default Artesanal;
