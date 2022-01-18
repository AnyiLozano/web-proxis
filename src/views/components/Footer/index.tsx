import React, { FC, useState } from "react";
import useFooterStyles from "./footer.style";
import { Container, Grid } from "@mui/material";

const Footer: FC = (): JSX.Element => {
    const {
        StyledContainerCopyright,
        StyledContainerFooter,
        StyledTitleSection,
        StyledSubtitleSection,
        StyledTextSection,
    } = useFooterStyles();

    const [width, setWidth] = useState(window.innerWidth);

    window.addEventListener('resize', () => setWidth(window.innerWidth));

    return (
        <React.Fragment>
            <React.Fragment>
                <StyledContainerFooter>
                    <Container>
                        <Grid item lg={12} className="flex justify-center">
                            <StyledTitleSection>Contáctenos</StyledTitleSection>
                        </Grid>
                        {
                            width >= 1200 ? (
                                <Grid container className="pb-12 flex justify-center md:justify-start">
                                    <Grid item lg={3}>
                                        <StyledSubtitleSection>Redes Sociales:</StyledSubtitleSection>
                                        <Grid item lg={12} className="flex justify-center">
                                            <img src="http://localhost/api-proxis/wp-content/uploads/2021/12/linkeding.png" alt="linkeding" />
                                        </Grid>
                                    </Grid>
                                    <Grid item lg={5}>
                                        <StyledTextSection><b>Praxis Pharmaceutical Colombia Ltda</b></StyledTextSection><br />
                                        <StyledTextSection><b>Dirección:</b> Cr 12 A No. 83-75 OF 601</StyledTextSection>
                                    </Grid>
                                    <Grid item lg={4}>
                                        <StyledTextSection><b>Teléfono:</b> 601 756 60 06</StyledTextSection><br />
                                        <StyledTextSection><b>Email:</b> info@praxisph.com.co</StyledTextSection>
                                    </Grid>
                                </Grid>
                            ) : (
                                <Grid container className="pb-12 flex justify-center md:justify-start">
                                    <Grid item md={12} lg={12} xs={12} sm={12}>
                                        <StyledSubtitleSection  className="text-center">Redes Sociales:</StyledSubtitleSection>
                                        <Grid item lg={12} className="flex justify-center">
                                            <img src="http://localhost/api-proxis/wp-content/uploads/2021/12/linkeding.png" alt="linkeding" />
                                        </Grid>
                                    </Grid>
                                    <Grid item md={12} lg={12} xs={12} sm={12} className="mt-8">
                                        <StyledTextSection className="text-center"><b>Praxis Pharmaceutical Colombia Ltda</b></StyledTextSection><br />
                                        <StyledTextSection><b>Dirección:</b> Cr 12 A No. 83-75 OF 601</StyledTextSection>
                                    </Grid>
                                    <Grid item md={12} lg={12} xs={12} sm={12} className="mt-6">
                                        <StyledTextSection className="text-center"><b>Teléfono:</b> 601 756 60 06</StyledTextSection><br />
                                        <StyledTextSection className="text-center"><b>Email:</b> info@praxisph.com.co</StyledTextSection>
                                    </Grid>
                                </Grid>
                            )
                        }
                    </Container>
                </StyledContainerFooter>
                <StyledContainerCopyright>
                    <span>Copyright {new Date().getFullYear()} &copy; Praxis Pharmaceutical</span>
                </StyledContainerCopyright>
            </React.Fragment>
        </React.Fragment>
    );
}

export default Footer;