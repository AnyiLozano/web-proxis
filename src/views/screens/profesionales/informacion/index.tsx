import React from "react";
import { Container, Grid } from "@mui/material";
import Slider from "react-slick";
import useControllers from "controllers";
import _ from "lodash";
import { Link } from 'react-router-dom';
import useInformacionStyles from "./informacion.style";

const Informacion = () => {
    // Styles
    const {
        StyledSection4,
        StyledTitleSection2,
        StyledCarousel,
        StyledImage2,
        StyledTitleSection3,
        StyledDescriptionSection2,
        ContainerStyled,
        StyledButton
    } = useInformacionStyles();

    // Controllers
    const { useScreenHooks } = useControllers();
    const { useCuidadores } = useScreenHooks();
    const { contentArtesanal } = useCuidadores();

    return (
        <React.Fragment>
            <StyledSection4 background="http://localhost/api-proxis/wp-content/uploads/2021/12/Recurso-7-3.png" >
                <ContainerStyled>
                    <Grid item md={12} className="flex justify-center py-12">
                        <StyledTitleSection2>Información para prescribir</StyledTitleSection2>
                    </Grid>
                    <Grid item md={12} className="py-12">
                        <Grid container >
                            <Grid item md={6} sm={12}>
                                <Grid item md={12}>
                                    <span>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut. 
                                    </span>
                                </Grid>
                                <Grid item md={12} className="flex justify-center py-16">
                                    <StyledButton>
                                        Más 
                                    </StyledButton>
                                </Grid>
                            </Grid>
                            <Grid item md={6} sm={12}>
                                <Grid item md={12}>
                                    <StyledImage2 src="http://localhost/api-proxis/wp-content/uploads/2021/12/Recurso-2-5.png" />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </ContainerStyled>
            </StyledSection4>
        </React.Fragment>
    );
}

export default Informacion;