import React from "react";
import { Container, Grid } from "@mui/material";
import useTerapeuticNumberStyles, {
  StyledImageGeneral,
  StyledSubtitle,
} from "../terapeutic-number.style";
import useControllers from "controllers";
import { ITerapeuticNumber } from "models/interfaces/home";

const Diabetes = () => {
  const {
    StyledTerapeuticNumberSection,
    StyledTitulo,
    StyledTitulo1,
    StyledImage,
  } = useTerapeuticNumberStyles();

  const { useScreenHooks } = useControllers();
  const { useTerapeuticNumber } = useScreenHooks();
  const { useHeridas } = useTerapeuticNumber();
  const { woundsAssets } = useHeridas();

  return (
    <React.Fragment>
      {woundsAssets.diabetes_banner_1 && (
        <React.Fragment>
          <StyledImage
            src={woundsAssets.diabetes_banner_1.content}
            alt={woundsAssets.diabetes_banner_1.alt}
          />
          <StyledTerapeuticNumberSection
            background={woundsAssets.diabetes_background_1.content}
          >
            <Container>
              <Grid item lg={12} className="text-center">
                <StyledTitulo>Diabetes</StyledTitulo>
              </Grid>
              <Grid item lg={12} className="text-center">
                <StyledTitulo1 dangerouslySetInnerHTML={{
                  __html: woundsAssets.diabetes_text_1.content,
                }}>
                </StyledTitulo1>
              </Grid>
            </Container>
          </StyledTerapeuticNumberSection>
          <Container maxWidth="xl">
            <StyledSubtitle style={{ textAlign: "center" }}>
              {woundsAssets.diabetes_titulo_1 !== undefined &&
                woundsAssets.diabetes_titulo_1.content}
            </StyledSubtitle>
            <Grid container>
              {woundsAssets.diabetes_cuadro !== undefined &&
                woundsAssets.diabetes_cuadro.map(
                  (item: ITerapeuticNumber, index: number) => (
                    <React.Fragment>
                      {index === 0 ? (
                        <Grid item md={6} className="d-flex justify-end">
                          <StyledImageGeneral
                            src={item.content}
                            alt={item.alt}
                          />
                        </Grid>
                      ) : (
                        <Grid item md={6}>
                          <StyledImageGeneral
                            src={item.content}
                            alt={item.alt}
                          />
                        </Grid>
                      )}
                    </React.Fragment>
                  )
                )}
            </Grid>
            <StyledSubtitle style={{ textAlign: "center" }}>
              {woundsAssets.diabetes_titulo_2 !== undefined &&
                woundsAssets.diabetes_titulo_2.content}
            </StyledSubtitle>
            <p style={{ fontSize: "20px"}}>
              {woundsAssets.diabetes_text_2 !== undefined &&
                woundsAssets.diabetes_text_2.content} 
            </p>
            <Grid item md={12} className="d-flex justify-center">
              <StyledImageGeneral
                src={woundsAssets.diabetes_imagen_1.content}
                style={{ width: "50%" }}
                alt={woundsAssets.diabetes_imagen_1.alt}
              />
            </Grid>
            <Grid container>
              {woundsAssets.diabetes_cuadrose !== undefined &&
                woundsAssets.diabetes_cuadrose.map(
                  (item: ITerapeuticNumber, index: number) => (
                    <Grid item md={6} className="d-flex justify-center">
                      <StyledImageGeneral src={item.content} alt={item.alt} />
                    </Grid>
                  )
                )}
            </Grid>
            <Grid item md={12} className="d-flex justify-center">
              <StyledImageGeneral
                src={woundsAssets.diabetes_image_2.content}
                alt={woundsAssets.diabetes_image_2.alt}
                style={{ width: "100%" }}
              />
            </Grid>
            <StyledSubtitle>
              {woundsAssets.diabetes_titulo_3 !== undefined &&
                woundsAssets.diabetes_titulo_3.content}
            </StyledSubtitle>
            <Grid item md={12} className="d-flex justify-center">
              <StyledImageGeneral
                src={woundsAssets.diabetes_imagen_4.content}
                alt={woundsAssets.diabetes_imagen_4.alt}
              />
            </Grid>
          </Container>
          <StyledTerapeuticNumberSection
            background={woundsAssets.diabetes_background_2.content}
          >
            <Container>
              <Grid item lg={12} className="">
                <StyledTitulo>
                  {woundsAssets.diabetes_titulo_4.content}
                </StyledTitulo>
              </Grid>
              <Grid item lg={12} className="text-center">
                <StyledTitulo1  style={{ marginTop:'-4%' }}>
                  {woundsAssets.diabetes_text_3.content}
                </StyledTitulo1>
              </Grid>
              <Grid item md={12} className="d-flex justify-center">
                <StyledImageGeneral
                  src={woundsAssets.diabetes_imagen_5.content}
                  alt={woundsAssets.diabetes_imagen_5.alt}
                />
              </Grid>
            </Container>
          </StyledTerapeuticNumberSection>
          <Container>
            <Grid item lg={12} className="">
              <StyledTitulo  style={{ marginTop:'5%' }}>
                {woundsAssets.diabetes_titulo_5.content}
              </StyledTitulo>
            </Grid>
            <Grid item lg={12} className="text-center">
              <StyledTitulo1 style={{     marginTop: "-4%" }}
                dangerouslySetInnerHTML={{
                  __html: woundsAssets.diabetes_text_4.content,
                }}
              ></StyledTitulo1>
            </Grid>
          </Container>
          <Container>
            <Grid item md={12} className="d-flex justify-center">
              <StyledImageGeneral
                src={woundsAssets.diabetes_imagen_6.content}
                alt={woundsAssets.diabetes_imagen_6.alt}
              />
            </Grid>
            <StyledTitulo1>
              {woundsAssets.diabetes_text_5.content}
            </StyledTitulo1>
            <Grid item md={12} className="d-flex justify-center">
              <StyledImageGeneral
                src={woundsAssets.diabetes_imagen_7.content}
                alt={woundsAssets.diabetes_imagen_7.alt}
              />
            </Grid>
            <Grid container className="my-12">
              <Grid item md={6} className="d-flex justify-center">
                <StyledImageGeneral
                  src={woundsAssets.diabetes_images_8.content}
                  alt={woundsAssets.diabetes_images_8.alt}
                  style={{ width: "90%" }}
                />
              </Grid>
              <Grid item md={6} className="d-flex justify-center">
                <StyledImageGeneral
                  src={woundsAssets.diabetes_imagen_9.content}
                  style={{ width: "90%" }}
                  alt={woundsAssets.diabetes_imagen_9.alt}
                />
              </Grid>
            </Grid>
            <StyledTitulo style={{ textAlign: "center" }}>
              {woundsAssets.diabetes_titulo_6.content}
            </StyledTitulo>
            <Grid item md={12} className="d-flex justify-center">
              <StyledImageGeneral
                src={woundsAssets.diabetes_imagen_10.content}
                alt={woundsAssets.diabetes_imagen_10.alt}
              />
            </Grid>
          </Container>
        </React.Fragment>
      )}
      {woundsAssets.diabetes_imagen_11 && (
        <Grid item md={12} className="d-flex justify-center">
          <StyledImageGeneral
            style={{ width: "100%" }}
            src={woundsAssets.diabetes_imagen_11.content}
            alt={woundsAssets.diabetes_imagen_11.alt}
          />
        </Grid>
      )}
    </React.Fragment>
  );
};

export default Diabetes;
