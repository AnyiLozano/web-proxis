import { Container, Grid } from "@mui/material";
import useControllers from "controllers";
import React, { FC } from "react";
import useBlogStyles from "../blog.styles";
import 'styles/styles.scss';
import { Controller } from "react-hook-form";

const BlogDetail: FC = (): JSX.Element => {

    // // Styles
    // const {
    //     StyledImage,
    //     StyledDate,
    //     StyledTitlePost,
    //     StyledTextData,
    //     StyledTitle2,
    //     StyledTextarea,
    //     StyledButtonViewMore
    // } = useBlogStyles();

    // console.log();

    // const { useScreenHooks } = useControllers();
    // const { useBlog } = useScreenHooks();
    // const { control, handleSubmit, handleComment, post, login } = useBlog();

    return (
        <React.Fragment>
            <p>Hola</p>
            {/* <StyledImage src={post.portada_img} alt="Post's Image" />
            <Container>
                <StyledDate>{post.post_date}</StyledDate>
                <StyledTitlePost className="pt-12 text-center">{post.post_title}</StyledTitlePost>
                <StyledTextData className="pt-12" dangerouslySetInnerHTML={{ __html: post.post_content }}></StyledTextData>
                {
                    login.token !== undefined && post.categories === "Sin categoría" && (
                        <Grid className="py-6">
                            <StyledTitle2 className="py-6">Deja tu respuesta</StyledTitle2>
                            <Controller
                                control={control}
                                name="comment"
                                render={({ field }) => (
                                    <StyledTextarea
                                        onChange={field.onChange}
                                        value={field.value}
                                    ></StyledTextarea>
                                )}
                            />

                            <Grid item lg={12} className="py-2 flex justify-center">
                                <StyledButtonViewMore onClick={handleSubmit(handleComment)}>Enviar</StyledButtonViewMore>
                            </Grid>
                        </Grid>
                    )
                }
            </Container> */}
        </React.Fragment>
    )
}

export default BlogDetail;