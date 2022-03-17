import { Container, Grid } from "@mui/material";
// import useControllers from "controllers";
import React, { FC } from "react";
import useBlogStyles from "../blog.styles";
import "styles/styles.scss";
// import { Controller } from "react-hook-form";

const BlogDetail: FC = (): JSX.Element => {
  // // Styles
  const {
    StyledImage,
    StyledDate,
    StyledTitlePost,
    StyledTextData,
    StyledTitle2,
    StyledTextarea,
    StyledButtonViewMore,
  } = useBlogStyles();

  console.log();

  //   const { useScreenHooks } = useControllers();
  //   const { useBlog } = useScreenHooks();
  // const { control, handleSubmit, handleComment, post, login } = useBlog();

  return (
    <React.Fragment>
      {/* <p>Hola</p> */}
      <StyledImage
        src={
          "http://api-praxis.eml.com.co/wp-content/uploads/2022/03/portadablog.png"
        }
        width="100%"
        alt="Post's Image"
      />
      <Container>
        <StyledDate>15-03-2022</StyledDate>
        <StyledTitlePost className="pt-12 text-center">
          Lorem ipsum dolor sit amet consectetur.
        </StyledTitlePost>
        <StyledTextData className="pt-12">
          <Grid container>
            <Grid md={12} item>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
              quam, nisi nulla repudiandae vitae quidem quas atque porro
              eligendi, minima ratione doloribus non nemo repellendus, iusto
              deleniti itaque aliquid dolorum! Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Voluptatum, corrupti id hic quam
              omnis nam magni fuga sint totam eius cum velit! Unde non adipisci
              accusamus perferendis ad sed fuga. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quibusdam voluptatum reprehenderit
              perspiciatis vel ad, sed alias voluptas labore error excepturi
              cumque sequi eveniet inventore minus architecto aspernatur ipsa,
              ab dignissimos. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Ratione quas provident dolore? Earum numquam,
              minima impedit accusantium, quas consequuntur inventore
              consectetur, cum ullam commodi molestias mollitia. Ut facere est
              dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolorum repudiandae asperiores ex ab dolorem. Voluptas,
              reprehenderit numquam nihil dolores dolore ad commodi veritatis
              dolor et nisi, officiis assumenda? Magnam, alias.
            </Grid>
            <br />
            <Grid item md={6} className="pt-6">
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
              quam, nisi nulla repudiandae vitae quidem quas atque porro
              eligendi, minima ratione doloribus non nemo repellendus, iusto
              deleniti itaque aliquid dolorum! Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Voluptatum, corrupti id hic quam
              omnis nam magni fuga sint totam eius cum velit! Unde non adipisci
              accusamus perferendis ad sed fuga. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quibusdam voluptatum reprehenderit
              perspiciatis vel ad, sed alias voluptas labore error excepturi
              cumque sequi eveniet inventore minus architecto aspernatur ipsa,
              ab dignissimos. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Ratione quas provident dolore? Earum numquam,
              minima impedit accusantium, quas consequuntur inventore
              consectetur, cum ullam commodi molestias mollitia. Ut facere est
              dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolorum repudiandae asperiores ex ab dolorem. Voluptas,
              reprehenderit numquam nihil dolores dolore ad commodi veritatis
              dolor et nisi, officiis assumenda? Magnam, alias.
            </Grid>
            <Grid item md={6} className="pt-6">
              <img
                src="http://api-praxis.eml.com.co/wp-content/uploads/2022/03/cuadro-azul.png"
                alt=""
                className="ml-6 w-full"
              />{" "}
            </Grid>
            <Grid md={12} item className="mt-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
              quam, nisi nulla repudiandae vitae quidem quas atque porro
              eligendi, minima ratione doloribus non nemo repellendus, iusto
              deleniti itaque aliquid dolorum! Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Voluptatum, corrupti id hic quam
              omnis nam magni fuga sint totam eius cum velit! Unde non adipisci
              accusamus perferendis ad sed fuga. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quibusdam voluptatum reprehenderit
              perspiciatis vel ad, sed alias voluptas labore error excepturi
              cumque sequi eveniet inventore minus architecto aspernatur ipsa,
              ab dignissimos. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Ratione quas provident dolore? Earum numquam,
              minima impedit accusantium, quas consequuntur inventore
              consectetur, cum ullam commodi molestias mollitia. Ut facere est
              dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolorum repudiandae asperiores ex ab dolorem. Voluptas,
              reprehenderit numquam nihil dolores dolore ad commodi veritatis
              dolor et nisi, officiis assumenda? Magnam, alias.
            </Grid>
          </Grid>
        </StyledTextData>
        <Grid className="pt-16 mt-12">
          <StyledTitle2 className="py-6">Deja tu respuesta</StyledTitle2>
          {/* <Controller
              control={control}
              name="comment"
              render={({ field }) => ( */}
          <StyledTextarea
            style={{ padding: 15 }}
          //   onChange={field.onChange}
          //   value={field.value}
          ></StyledTextarea>
          {/* )}
            /> */}

          <Grid item lg={12} className="py-2 flex justify-center">
            <StyledButtonViewMore /*onClick={handleSubmit(handleComment)}*/>
              Enviar
            </StyledButtonViewMore>
          </Grid>
        </Grid>
        {/* {login.token !== undefined && post.categories === "Sin categoría" && (
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
              <StyledButtonViewMore onClick={handleSubmit(handleComment)}>
                Enviar
              </StyledButtonViewMore>
            </Grid>
          </Grid>
        )} */}
      </Container>
    </React.Fragment>
  );
};

export default BlogDetail;
