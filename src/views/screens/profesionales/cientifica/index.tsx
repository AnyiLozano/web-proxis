import React from "react";
import { Container, Grid} from "@mui/material";
import Slider from "react-slick";
import useControllers from "controllers";
import _ from "lodash";
import useCientificaStyles from "./cientifica.style";
import { Link } from 'react-router-dom';

const Cientifica = () => {
    // Styles
    const {
        StyledSection4,
        StyledTitleSection2,
        StyledCarousel,
        StyledImage2,
        StyledTitleSection3,
        StyledDescriptionSection2,
        ContainerStyled
    } = useCientificaStyles();

    // Controllers
    const { useScreenHooks } = useControllers();
    const { useCuidadores } = useScreenHooks();
    const { contentArtesanal } = useCuidadores();

    return (
        <React.Fragment>
            <StyledSection4 background="http://localhost/api-proxis/wp-content/uploads/2021/12/Recurso-7-3.png" >
                <ContainerStyled>
                    <Grid item md={12} className="flex justify-center py-12">
                        <StyledTitleSection2>Evidencia científica</StyledTitleSection2>
                    </Grid>
                    <Grid item md={12} className="py-12">
                        <Link to="/">
                            <StyledImage2 src="http://localhost/api-proxis/wp-content/uploads/2021/12/Recurso-1-2.png" />
                        </Link>
                    </Grid>
                </ContainerStyled>
            </StyledSection4>
        </React.Fragment>
    );
}

export default Cientifica;