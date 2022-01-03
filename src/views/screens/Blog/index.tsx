import { Card, CardContent, Container, Grid, Typography } from "@mui/material";
import React, { FC } from "react";
import useBlogStyles from "./blog.styles";
import _ from "lodash";
import useControllers from "controllers";
import Slider from "react-slick";
import { useHistory } from "react-router-dom";

const Blog: FC = (): JSX.Element => {
    // Styles
    const {
        StyledImageBanner,
        StyledBlogFirstSection,
        StyledImage,
        StyledTextDescription,
        StyledButtonViewMore,
        StyledContainer2,
        StyledTitle2,
    } = useBlogStyles();

    //Controllers
    const { useScreenHooks } = useControllers();
    const { useBlog } = useScreenHooks();
    const { recient, blogs, comments } = useBlog();

    const history = useHistory()

    return (
        <React.Fragment>
            <StyledImageBanner src="http://localhost/api-proxis/wp-content/uploads/2021/12/Recurso-1.png" alt="Blog's Banner Image" />
            <StyledBlogFirstSection background="http://localhost/api-proxis/wp-content/uploads/2021/12/Recurso 4.png" className="sm:py-36
            ">
                <Container>
                    <Grid container>
                        {
                            _.map(recient, (item: any, index: any) => {
                                if (index === 0) {
                                    return (
                                        <Grid item lg={4} key={index} className="px-6">
                                            <Grid item lg={12}>
                                                <StyledImage src="http://localhost/api-proxis/wp-content/uploads/2021/12/Recurso-4-2.png" alt="pre-test" style={{ position: 'absolute   ' }} />
                                                <StyledImage src={item.image} alt="Test" style={{ width: '100%' }} />
                                            </Grid>
                                            <StyledTextDescription>{item.title}</StyledTextDescription>
                                            <StyledButtonViewMore onClick={() => history.push(`/detail/${item.id}`)}>Seguir Leyendo</StyledButtonViewMore>
                                        </Grid>
                                    )
                                } else if (index === 1) {
                                    return (
                                        <Grid item lg={4} key={index} className="px-6">
                                            <Grid item lg={12}>
                                                <StyledImage src="http://localhost/api-proxis/wp-content/uploads/2021/12/Recurso-5-6.png" alt="pre-test" style={{ position: 'absolute   ' }} />
                                                <StyledImage src={item.image} alt="Test" style={{ width: '100%' }} />
                                            </Grid>
                                            <StyledTextDescription>{item.title}</StyledTextDescription>
                                            <StyledButtonViewMore onClick={() => history.push(`/detail/${item.id}`)}>Seguir Leyendo</StyledButtonViewMore>
                                        </Grid>
                                    )
                                } else {
                                    return (
                                        <Grid item lg={4} key={index} className="px-6">
                                            <Grid item lg={12}>
                                                <StyledImage src="http://localhost/api-proxis/wp-content/uploads/2021/12/Recurso-6-2.png" alt="pre-test" style={{ position: 'absolute   ' }} />
                                                <StyledImage src={item.image} alt="Test" style={{ width: '100%' }} />
                                            </Grid>
                                            <StyledTextDescription>{item.title}</StyledTextDescription>
                                            <StyledButtonViewMore onClick={() => history.push(`/detail/${item.id}`)}>Seguir Leyendo</StyledButtonViewMore>
                                        </Grid>
                                    )
                                }
                            })
                        }
                    </Grid>
                </Container>
            </StyledBlogFirstSection>
            <StyledContainer2>
                <Container className="py-16">
                    <Grid container>
                        {
                            _.map(blogs, (item: any, index: any) => (
                                <Grid item lg={6} className="py-6 px-6">
                                    <Grid item lg={12}>
                                        <StyledTitle2>{item.title}</StyledTitle2>
                                        <StyledTextDescription dangerouslySetInnerHTML={{ __html: item.except }}></StyledTextDescription>
                                        <StyledButtonViewMore onClick={() => history.push(`/detail/${item.id}`)}>Seguir Leyendo</StyledButtonViewMore>
                                    </Grid>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Container>
            </StyledContainer2>
            <StyledBlogFirstSection background="http://localhost/api-proxis/wp-content/uploads/2021/12/Recurso 4.png" >
                <Container>
                    <Grid item lg={12} className="py-1 md:py-6">
                        <Grid item lg={12} className="flex justify-center">
                            <StyledTitle2>Comentarios</StyledTitle2>
                        </Grid>
                        <Grid item lg={12} className="py-8">
                            <Slider
                                slidesToShow={3}
                                slideToScroll={1}
                                arrows={true}
                                autoplay={true}
                                speed={5000}
                                responsive={[
                                    {
                                        breakpoint: 1025,
                                        settings: {
                                            slidesToShow: 2,
                                            arrows: false
                                        }
                                    },
                                    {
                                        breakpoint: 600,
                                        settings: {
                                            slidesToShow: 1,
                                            arrows: false
                                        }
                                    }
                                ]}
                            >
                                {
                                    _.map(comments, (item: any, index: any) => (
                                        <div>
                                            <Card sx={{ maxWidth: '100%' }} className="mr-6">
                                                <CardContent>
                                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom className="py-3">
                                                        {new Date(item.date).toDateString()}
                                                    </Typography>
                                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom className="py-3">
                                                        <b>{item.author_name}</b>
                                                    </Typography>
                                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom dangerouslySetInnerHTML={{ __html: item.content.rendered }}></Typography>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    ))
                                }
                            </Slider>
                        </Grid>
                    </Grid>
                </Container>
            </StyledBlogFirstSection>
        </React.Fragment>
    )
};

export default Blog