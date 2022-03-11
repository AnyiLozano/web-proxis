import React from "react";
import { Grid } from "@mui/material";
import useSaludStyles from "./salud.style";
import useControllers from "controllers";

const Salud = () => {
  // Styles
  const { StyledSection4, StyledTitleSection2, ContainerStyled } =
    useSaludStyles();

  const { useScreenHooks } = useControllers();
  const { useProducts } = useScreenHooks();
  const { products } = useProducts();
  const { cuidadores } = products;
  return (
    <React.Fragment>
      {cuidadores !== undefined && (
        <React.Fragment>
          <StyledSection4 background={cuidadores.fondso_salud.content}>
            <ContainerStyled>
              <Grid item md={12} className="flex justify-center py-12">
                <StyledTitleSection2>
                  {cuidadores.Titulo_1.content}
                </StyledTitleSection2>
              </Grid>
              <Grid item lg={12} className="pb-16">
                {/* <video controls width="100%">
                  <source src="http://localhost/api-proxis/wp-content/uploads/2021/12/Praxis-English-Academy.mp4"></source>
                </video> */}
                <img
                  src={cuidadores.banner_video.content}
                  alt={cuidadores.banner_video.alt}
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item md={12} className="pb-12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: cuidadores.text_factores.content,
                  }}
                  className="text-xs md:text-sm"
                ></span>
              </Grid>
              <img
                src={cuidadores.ancestral_slider_.content}
                alt={cuidadores.ancestral_slider_.alt}
                style={{ width: "100%" }}
              />
              <img
                src={cuidadores.ancestral_slider_99.content}
                alt={cuidadores.ancestral_slider_99.alt}
                style={{ width: "100%", marginBottom: "3%" }}
              />
            </ContainerStyled>
          </StyledSection4>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Salud;
