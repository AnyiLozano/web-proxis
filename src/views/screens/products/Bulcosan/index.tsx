import { Container, Grid } from "@mui/material";
import useControllers from "controllers";
import React, { FC } from "react";
import useProductsStyles from "../products.style";
import { StyledImageGeneral } from "views/screens/terapeutic-number/terapeutic-number.style";

const Bulcosan: FC = (): JSX.Element => {
  // Styles
  const {
    StyledImage,
    StyledTerapeuticNumberSection,
    StyledTitulo1,
    StyledTitulo,
  } = useProductsStyles();

  // Products
  const { useScreenHooks } = useControllers();
  const { useProducts } = useScreenHooks();
  const { products } = useProducts();

  const { bulcosan } = products;

  return (
    <React.Fragment>
      {bulcosan !== undefined && (
        <React.Fragment>
          <StyledImage
            src={bulcosan.banner_principal.content}
            alt={bulcosan.banner_principal.alt}
          />
          <StyledTerapeuticNumberSection
            background={bulcosan.background_description.content}
          >
            <Container>
              <Grid item lg={12} className="flex justify-center">
                <StyledImageGeneral
                  src={bulcosan.vulcosan_titulo_1.content}
                  alt={bulcosan.vulcosan_titulo_1.alt}
                  style={{ width: "auto" }}
                />
              </Grid>
              <Grid item lg={12} className="">
                <StyledTitulo1
                  dangerouslySetInnerHTML={{
                    __html:
                      bulcosan !== undefined &&
                      bulcosan.vulcosan_texto_1.content,
                  }}
                ></StyledTitulo1>
              </Grid>
            </Container>
          </StyledTerapeuticNumberSection>
          <Container className="mt-12">
            <Grid container>
              <Grid item md={6}>
                <StyledImageGeneral
                  src={bulcosan.indicaciones.content}
                  alt={bulcosan.indicaciones.alt}
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item md={6}>
                <StyledImageGeneral
                  src={bulcosan.indicaciones_image.content}
                  alt={bulcosan.indicaciones_image.alt}
                  style={{ width: "100%" }}
                />
              </Grid>
            </Grid>
            <StyledTerapeuticNumberSection
              background={bulcosan.caracteristicas_background.content}
            >
              <Grid container className="mt-5">
                <Grid item md={6}>
                  <StyledImageGeneral
                    src={bulcosan.caracteristicas.content}
                    alt={bulcosan.caracteristicas.alt}
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid item md={6}>
                  <StyledImageGeneral
                    src={bulcosan.caracteristicas_image.content}
                    alt={bulcosan.caracteristicas_image.alt}
                    style={{ width: "100%" }}
                  />
                </Grid>
              </Grid>
              <Grid container className="mt-14">
                <Grid item md={6}>
                  <StyledImageGeneral
                    src={bulcosan.ventajas.content}
                    alt={bulcosan.ventajas.alt}
                    style={{ width: "100%", marginTop: "3%" }}
                  />
                </Grid>
                <Grid item md={6}>
                  <StyledImageGeneral
                    src={bulcosan.ventajas_imagen.content}
                    alt={bulcosan.ventajas_imagen.alt}
                    style={{ width: "100%" }}
                  />
                </Grid>
              </Grid>
            </StyledTerapeuticNumberSection>
            <StyledTitulo>{bulcosan.aplicacion_title.content}</StyledTitulo>
            <Grid container className="mt-5 justify-center">
              <StyledImageGeneral
                src={bulcosan.aplicacion_image.content}
                alt={bulcosan.aplicacion_image.alt}
                style={{ width: "100%" }}
              />
            </Grid>
            <StyledTitulo className="mt-10">
              {bulcosan.facil_title.content}
            </StyledTitulo>
            <Grid container className="mt-12">
              <Grid
                item
                md={6}
                className="d-flex justify-center align-items-center"
              >
                <StyledImageGeneral
                  src={bulcosan.facil_image.content}
                  alt={bulcosan.facil_image.alt}
                  style={{ width: "50%" }}
                />
              </Grid>
              <Grid
                item
                md={6}
                className="d-flex justify-center align-items-center"
              >
                <StyledImageGeneral
                  src={bulcosan.facil_image2.content}
                  alt={bulcosan.facil_image2.alt}
                  style={{ width: "100%" }}
                />
              </Grid>
            </Grid>
          </Container>
          <Grid container className="mt-5">
            <Grid item md={12}>
              <StyledImageGeneral
                src={bulcosan.references.content}
                alt={bulcosan.references.alt}
                style={{ width: "100%" }}
              />
            </Grid>
          </Grid>
          <Container>
            <Grid container className="mt-12 mb-12 align-items-center">
              <StyledTitulo>{bulcosan.consiguelo.content}</StyledTitulo>
              <a href="https://www.cruzverde.com.co/aposito-esteril-caja-x-10-vulcosan-phmb-10cm-x-10cm/COCV_386040.html" target="_blank" rel="noreferrer">
              <StyledImageGeneral
                src={bulcosan.cruz.content}
                style={{ width: "auto", marginTop: "0%", marginLeft: "2%" }}
                alt={bulcosan.cruz.alt}
              />
                </a>
            </Grid>
          </Container>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Bulcosan;
