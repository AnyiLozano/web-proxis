import React from "react";
import useCuidadoresStyles from "../cuidadores.styles";
import { Container, Grid } from "@mui/material";
import Slider from "react-slick";
import useControllers from "controllers";
import _ from "lodash";

const Artesanal = () => {
    // Styles
    const {
        StyledSection4,
        StyledTitleSection2,
        StyledCarousel,
        StyledImage2,
        StyledTitleSection3,
        StyledDescriptionSection2,
        ContainerStyled
    } = useCuidadoresStyles();

    // Controllers
    const { useScreenHooks } = useControllers();
    const { useCuidadores } = useScreenHooks();
    const { contentArtesanal } = useCuidadores();

    return (
        <React.Fragment>
            <StyledSection4 background="http://localhost/api-proxis/wp-content/uploads/2021/12/Recurso-7-3.png" >
                <ContainerStyled>
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
                                _.map(contentArtesanal, (item: any, index: number) => (
                                    <div>
                                        <Grid container>
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
            </StyledSection4>
        </React.Fragment>
    );
}

export default Artesanal;