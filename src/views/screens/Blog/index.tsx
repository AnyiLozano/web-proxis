import { Container, Grid } from "@mui/material";
import React, { FC } from "react";
import useBlogStyles from "./blog.styles";
import _ from "lodash";
import useControllers from "controllers";
// import Slider from "react-slick";
import { useHistory } from "react-router-dom";
import { StyledContainer } from "../Home/home.styles";

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

  /** Controllers */
  const { useScreenHooks } = useControllers();
  const { useBlog } = useScreenHooks();
  const { postsAssets, recentPosts } = useBlog("principal");
  const history = useHistory();

  return (
    <React.Fragment>
      <StyledContainer maxWidth="lg">
        {postsAssets !== undefined && (
          <React.Fragment>
            <StyledImageBanner
              style={{ marginTop: "12%" }}
              src={postsAssets.blog_banner_principal?.content}
              alt="Blog's Banner Image"
            />
            <StyledBlogFirstSection
              style={{ backgroundSize: "108% 86%" }}
              background={postsAssets.blog_background_recent?.content}
              className="sm:py-36"
            >
              <Container>
                <StyledTitle2
                  className="pb-16"
                  style={{
                    textAlign: "center",
                    fontWeight: "600",
                    fontFamily: "montserrat, bold",
                  }}
                >
                  Reciente
                </StyledTitle2>
                <Grid container>
                  {_.map(recentPosts, (item: any, index: any) => {
                    if (index === 0) {
                      return (
                        <Grid item lg={3} key={index} className="px-6">
                          <StyledImage
                            src={postsAssets.blog_number_1?.content}
                            alt="pre-test"
                            style={{ position: "absolute   " }}
                          />
                          <Grid item lg={12}>
                            <StyledImage
                              src={item.image}
                              alt="Test"
                              style={{ width: "100%" }}
                            />
                          </Grid>
                          <p
                            style={{
                              fontSize: "17px",
                              fontFamily: "Montserrat, medium",
                              color: "#666666",
                              fontWeight: "500",
                              marginTop: "8%"
                            }}
                          >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Officiis, a obcaecati?
                          </p>
                          <StyledButtonViewMore
                            onClick={() => history.push(`/detail/${item.id}`)}
                            style={{
                              fontSize: "17px",
                              fontFamily: "Montserrat, medium",
                              color: "#666666",
                              fontWeight: "500",
                            }}
                          >
                            Seguir Leyendo
                          </StyledButtonViewMore>
                        </Grid>
                      );
                    } else if (index === 1) {
                      return (
                        <Grid item lg={3} key={index} className="px-6">
                          <Grid item lg={12}>
                            <StyledImage
                              src={postsAssets.blog_number_2?.content}
                              alt="pre-test"
                              style={{ position: "absolute   " }}
                            />
                            <StyledImage
                              src={item.image}
                              alt="Test"
                              style={{ width: "100%" }}
                            />
                          </Grid>
                          <p
                            style={{
                              fontSize: "17px",
                              fontFamily: "Montserrat, medium",
                              color: "#666666",
                              fontWeight: "500",
                              marginTop: "8%"
                            }}
                          >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Officiis, a obcaecati?
                          </p>
                          <StyledButtonViewMore
                            onClick={() => history.push(`/detail/${item.id}`)}
                            style={{
                              fontSize: "17px",
                              fontFamily: "Montserrat, medium",
                              color: "#666666",
                              fontWeight: "500",
                            }}
                          >
                            Seguir Leyendo
                          </StyledButtonViewMore>
                        </Grid>
                      );
                    } else if (index === 2) {
                      return (
                        <Grid item lg={3} key={index} className="px-6">
                          <Grid item lg={12}>
                            <StyledImage
                              src={postsAssets.blog_number_3?.content}
                              alt="pre-test"
                              style={{ position: "absolute   " }}
                            />
                            <StyledImage
                              src={item.image}
                              alt="Test"
                              style={{ width: "100%" }}
                            />
                          </Grid>
                          <p
                            style={{
                              fontSize: "17px",
                              fontFamily: "Montserrat, medium",
                              color: "#666666",
                              fontWeight: "500",
                              marginTop: "8%"
                            }}
                          >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Officiis, a obcaecati?
                          </p>
                          <StyledButtonViewMore
                            onClick={() => history.push(`/detail/${item.id}`)}
                            style={{
                              fontSize: "17px",
                              fontFamily: "Montserrat, medium",
                              color: "#666666",
                              fontWeight: "500",
                            }}
                          >
                            Seguir Leyendo
                          </StyledButtonViewMore>
                        </Grid>
                      );
                    } else if (index === 3) {
                      return (
                        <Grid item lg={3} key={index} className="px-6">
                          <Grid item lg={12}>
                            <StyledImage
                              src={postsAssets.blog_number_4?.content}
                              alt="pre-test"
                              style={{ position: "absolute   " }}
                            />
                            <StyledImage
                              src={item.image}
                              alt="Test"
                              style={{ width: "100%" }}
                            />
                          </Grid>
                          <p
                            style={{
                              fontSize: "17px",
                              fontFamily: "Montserrat, medium",
                              color: "#666666",
                              fontWeight: "500",
                              marginTop: "8%"
                            }}
                          >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Officiis, a obcaecati?
                          </p>
                          <StyledButtonViewMore
                            onClick={() => history.push(`/detail/${item.id}`)}
                            style={{
                              fontSize: "17px",
                              fontFamily: "Montserrat, medium",
                              color: "#666666",
                              fontWeight: "500",
                            }}
                          >
                            Seguir Leyendo
                          </StyledButtonViewMore>
                        </Grid>
                      );
                    }
                  })}
                </Grid>
              </Container>
            </StyledBlogFirstSection>
            <StyledContainer2>
              <Container className="py-16">
                <Grid container>
                  {_.map(recentPosts, (item: any, index: any) => (
                    <Grid item lg={4} className="py-6 px-6">
                      <Grid item lg={12}>
                        <StyledTitle2
                            style={{ fontSize: "22px", fontWeight: "700", fontFamily: "montserrat, bold"

                          }}
                        >
                          Lorem ipsum dolor sit amet consectetur
                        </StyledTitle2>
                        <StyledTextDescription
                          style={{ fontSize: "15px" }}
                          dangerouslySetInnerHTML={{
                            __html:
                              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, a obcaecati?",
                          }}
                        ></StyledTextDescription>
                        <StyledButtonViewMore
                          onClick={() => history.push(`/detail/${item.id}`)}
                          style={{
                            fontSize: "17px",
                            fontFamily: "Montserrat, medium",
                            color: "#666666",
                            fontWeight: "500",
                          }}
                        >
                          Seguir Leyendo
                        </StyledButtonViewMore>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </StyledContainer2>
          </React.Fragment>
        )}
        {/* 
            
                
            </StyledBlogFirstSection>
            
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
            </StyledBlogFirstSection> */}
      </StyledContainer>
    </React.Fragment>
  );
};

export default Blog;
