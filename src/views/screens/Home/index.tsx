import React, {FC} from "react";
import useControllers from "controllers";
import useHomeStyles from "./home.styles";
import {Container, Grid} from "@mui/material";
import {Link} from "react-router-dom";
import _ from "lodash";
import "styles/styles.scss";

const Home: FC = (): JSX.Element => {
    // Controllers
    const {useScreenHooks} = useControllers();
    const {useHome} = useScreenHooks();
    const {
        homeBanner,
        backgroundSection2,
        sections,
        hover,
        hover2,
        hover3,
        hover4,
        handlerHover
    } = useHome();

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
            <img className="principal-image" src={homeBanner.content} alt="Home Banner Praxis"/>
            <StyledSectionsHome background={backgroundSection2}>
                <Grid item lg={12} className="text-center">
                    <StyledTitleSection>Secciones:</StyledTitleSection>
                </Grid>
                <Grid item lg={12} className="flex justify-center md:py-16 sm:py-14 py-14">
                    {
                        _.map(sections, (item: any, index: any) => {
                            if (item.id === 1) {
                                return (
                                    <div
                                        className="col-lg-3"
                                        onMouseLeave={() => handlerHover('leave', 1)}
                                        onMouseOver={() => handlerHover('over', 1)}
                                        key={index}
                                        style={{zIndex: hover ? 1 : undefined}}
                                    >
                                        <Link to={item.path}>
                                            {
                                                hover ? (
                                                    <StyledImgSections1 src={item.imageHover} alt="section-1"/>
                                                ) : (
                                                    <StyledImgSections1 src={item.image} alt="section-1"/>
                                                )
                                            }
                                        </Link>
                                    </div>
                                )
                            } else if (item.id === 2) {
                                return (
                                    <div
                                        className="2xl:-ml-36 -ml-16 sm:-ml-28 xs:-ml-12 col-lg-3"
                                        onMouseLeave={() => handlerHover('leave', 2)}
                                        onMouseOver={() => handlerHover('over', 2)}
                                        key={index}
                                        style={{zIndex: hover2 ? 1 : undefined}}
                                    >
                                        <Link to={item.path}>
                                            {
                                                hover2 ? (
                                                    <StyledImgSections2 src={item.imageHover} alt="section-1"/>
                                                ) : (
                                                    <StyledImgSections2 src={item.image} alt="section-1"/>
                                                )
                                            }
                                        </Link>
                                    </div>
                                );
                            } else if (item.id === 3) {
                                return (
                                    <div
                                        className="2xl:-ml-36 -ml-16 sm:-ml-28 xs:-ml-12 col-lg-3"
                                        onMouseLeave={() => handlerHover('leave', 3)}
                                        onMouseOver={() => handlerHover('over', 3)}
                                        key={index}
                                        style={{zIndex: hover3 ? 1 : undefined}}
                                    >
                                        <Link to={item.path}>
                                            {
                                                hover3 ? (
                                                    <StyledImgSections3 src={item.imageHover} alt="section-1"/>
                                                ) : (
                                                    <StyledImgSections3 src={item.image} alt="section-1"/>
                                                )
                                            }
                                        </Link>
                                    </div>
                                );
                            } else if (item.id === 4) {
                                // @ts-ignore
                                return (
                                    <div
                                        className="2xl:-ml-36 -ml-16 sm:-ml-28 xs:-ml-12 col-lg-3"
                                        onMouseLeave={() => handlerHover('leave', 4)}
                                        onMouseOver={() => handlerHover('over', 4)}
                                        key={index}
                                        style={{zIndex: hover4 ? 1 : undefined}}
                                    >
                                        <Link to={item.path}>
                                            {
                                                hover4 ? (
                                                    <StyledImgSections4 src={item.imageHover} alt="section-1"/>
                                                ) : (
                                                    <StyledImgSections4 src={item.image} alt="section-1"/>
                                                )
                                            }
                                        </Link>
                                    </div>
                                );
                            }
                        })
                    }
                </Grid>
            </StyledSectionsHome>
            <StyledSectionPraxis className="py-12">
                <Container maxWidth="lg">
                    <Grid item lg={12} className="flex justify-center ">
                    </Grid>
                    <Grid container className="lg:py-12">
                        <img src="http://localhost/api-proxis/wp-content/uploads/2021/12/Recurso-5-1.png" alt="mision" width="100%"/>
                    </Grid>
                    <img src="http://localhost/api-proxis/wp-content/uploads/2021/12/equipo12.png" alt="team" width="100%" className="pt-6 lg:py-16"/>
                </Container>

            </StyledSectionPraxis>
        </React.Fragment>
    )
}

export default Home;