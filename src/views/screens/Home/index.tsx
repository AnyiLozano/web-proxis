import React, { FC } from "react";
import useControllers from "controllers";
import useHomeStyles from "./home.styles";
import { Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "styles/styles.scss";

const Home: FC = (): JSX.Element => {
    // Controllers
    const { useScreenHooks } = useControllers();
    const { useHome } = useScreenHooks();
    const {
        gerencialTeam,
        homeBanner,
        misionVision,
        handlerHover,
        hover,
        section1,
        section2,
        section3,
        section4,
        background
    } = useHome();
    console.log(background.content)
    // Styles
    const {
        StyledSectionsHome,
        StyledTitleSection,
        StyledImgSections1,
        StyledImgSections2,
        StyledImgSections3,
        StyledImgSections4,
        StyledSectionPraxis,
    } = useHomeStyles();
    return (
        <React.Fragment>
            <img className="principal-image" src={homeBanner.content} alt="Home Banner Praxis" />
            <StyledSectionsHome background={background.content}>
                <Grid item lg={12} className="text-center">
                    <StyledTitleSection>Secciones:</StyledTitleSection>
                </Grid>

                <Grid item lg={12} className="flex justify-center md:py-16 sm:py-14 py-14">
                    <div
                        className="col-lg-3"
                        onMouseLeave={() => handlerHover('leave', 1)}
                        onMouseOver={() => handlerHover('over', 1)}
                        style={{ zIndex: hover.hover && hover.id === 1 ? 1 : undefined }}
                    >
                        <Link to="/terapeutic-number/1">
                            {
                                hover.hover && hover.id === 1 ? (
                                    <StyledImgSections1 src={section1 && section1.sectionHover?.content} alt={section1.sectionHover?.alt} />
                                ) : (
                                    <StyledImgSections1 src={section1 && section1.section?.content} alt={section1.section?.alt} />
                                )
                            }
                        </Link>
                    </div>
                    <div
                        className="2xl:-ml-36 -ml-16 sm:-ml-28 xs:-ml-12 col-lg-3"
                        onMouseLeave={() => handlerHover('leave', 2)}
                        onMouseOver={() => handlerHover('over', 2)}
                        style={{ zIndex: hover.hover && hover.id === 2 ? 1 : undefined }}
                    >
                        <Link to="/aliados/pacientes">
                            {
                                hover.hover && hover.id === 2 ? (
                                    <StyledImgSections2 src={section2 && section2.sectionHover?.content} alt={section2.sectionHover?.alt} />
                                ) : (
                                    <StyledImgSections2 src={section2 && section2.section?.content} alt={section2 && section2.section?.alt} />
                                )
                            }
                        </Link>
                    </div>
                    <div
                        className="2xl:-ml-36 -ml-16 sm:-ml-28 xs:-ml-12 col-lg-3"
                        onMouseLeave={() => handlerHover('leave', 3)}
                        onMouseOver={() => handlerHover('over', 3)}
                        style={{ zIndex: hover.hover && hover.id === 3 ? 1 : undefined }}
                    >
                        <Link to="/products/1">
                            {
                                hover.hover && hover.id === 3 ? (
                                    <StyledImgSections3 src={section3 && section3.sectionHover?.content} alt={section3.sectionHover?.alt} />
                                ) : (
                                    <StyledImgSections3 src={section3 && section3.section?.content} alt={section3.section?.alt} />
                                )
                            }
                        </Link>
                    </div>
                    <div
                        className="2xl:-ml-36 -ml-16 sm:-ml-28 xs:-ml-12 col-lg-3"
                        onMouseLeave={() => handlerHover('leave', 4)}
                        onMouseOver={() => handlerHover('over', 4)}
                        style={{ zIndex: hover.hover && hover.id === 4 ? 1 : undefined }}
                    >
                        <Link to="/blog">
                            {
                                hover.hover && hover.id === 4 ? (
                                    <StyledImgSections4 src={section4 && section4.sectionHover?.content} alt={section3.sectionHover?.alt} />
                                ) : (
                                    <StyledImgSections4 src={section4 && section4.section?.content} alt={section4 && section4.section?.alt} />
                                )
                            }
                        </Link>
                    </div>
                </Grid>
            </StyledSectionsHome >
            <StyledSectionPraxis className="py-12">
                <Container maxWidth="lg">
                    <Grid container className="lg:py-12">
                        <img src={misionVision.content} alt={misionVision.alt} width="100%" />
                    </Grid>
                    <img src={gerencialTeam.content} alt={gerencialTeam.alt} width="100%" className="pt-6 lg:py-16" />
                </Container>

            </StyledSectionPraxis>
        </React.Fragment >
    )
}

export default Home;