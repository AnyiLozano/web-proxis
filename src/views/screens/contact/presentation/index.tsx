import { Grid } from "@mui/material";
import useControllers from "controllers";
import React, { FC } from "react";
import useContactStyles from "../contact.style";

const Presentation: FC = (): JSX.Element => {
    // Styles
    const {
        StyledSection,
        StyledTitleSection,
        StyledTextPresentation,
        StyledButtonPresentation,
        StyledIconRight,
        StyledImage,
        StyledContainerImage
    } = useContactStyles();

    // Controllers
    const { useScreenHooks } = useControllers();
    const { useContact } = useScreenHooks();
    const { handleContact, width } = useContact();

    return (
        <React.Fragment>
            {
                width >= 1200
                    ? (
                        <StyledSection background="http://localhost/api-proxis/wp-content/uploads/2021/12/Recurso-4-3.png">
                            <Grid container className="items-center">
                                <StyledContainerImage item md={6}>
                                    <img src="http://localhost/api-proxis/wp-content/uploads/2021/12/Recurso-2-2.png" alt="Chica" />
                                </StyledContainerImage>
                                <Grid item md={6}>
                                    <Grid item lg={12} className="flex justify-center">
                                        <Grid item lg={8}>
                                            <StyledTitleSection className="text-center">Contáctese con nosotros</StyledTitleSection>
                                        </Grid>
                                    </Grid>
                                    <Grid item lg={12} className="flex justify-center">
                                        <Grid item lg={8}>
                                            <StyledTextPresentation>Praxis Pharmaceutical Colombia Ltda</StyledTextPresentation>
                                            <StyledTextPresentation>Dirección: Cr 12 A No. 83-75 OF 601</StyledTextPresentation>
                                            <StyledTextPresentation>Teléfono: 601 756 60 06</StyledTextPresentation>
                                            <StyledTextPresentation>Email: info@praxisph.com.co</StyledTextPresentation>
                                            <StyledTextPresentation>LinkedIn: Praxis Pharmaceutical</StyledTextPresentation>
                                            <Grid item lg={12} className="flex justify-center pb-16">
                                                <StyledButtonPresentation onClick={handleContact}>
                                                    Contáctenos
                                                    <StyledIconRight color="white" />
                                                </StyledButtonPresentation>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </StyledSection>
                    )
                    : (
                        <StyledSection>
                            <Grid container>
                                <Grid item lg={6} xs={12}>
                                    <Grid item lg={12} sm={12}>
                                        <StyledTitleSection className="text-center">Contáctese con nosotros</StyledTitleSection>
                                    </Grid>
                                    <Grid item lg={12} className="flex justify-center">
                                        <Grid item lg={12}>
                                            <StyledTextPresentation>Praxis Pharmaceutical Colombia Ltda</StyledTextPresentation>
                                            <StyledTextPresentation>Dirección: Cr 12 A No. 83-75 OF 601</StyledTextPresentation>
                                            <StyledTextPresentation>Teléfono: 601 756 60 06</StyledTextPresentation>
                                            <StyledTextPresentation>Email: info@praxisph.com.co</StyledTextPresentation>
                                            <StyledTextPresentation>LinkedIn: Praxis Pharmaceutical</StyledTextPresentation>
                                            <Grid item lg={12} className="flex justify-center pb-16">
                                                <StyledButtonPresentation onClick={handleContact}>
                                                    Contáctenos
                                                    <StyledIconRight color="white" />
                                                </StyledButtonPresentation>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item lg={6}>
                                    <StyledImage src="http://localhost/api-proxis/wp-content/uploads/2021/12/Recurso-2-2.png" alt="Chica"/>
                                </Grid>
                            </Grid>
                        </StyledSection>
                    )
            }
        </React.Fragment>
    )
}

export default Presentation;