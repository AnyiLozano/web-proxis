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
          {/* bannerPRINCIPAL */}
          <StyledImage
            src={woundsAssets.diabetes_banner_1.content}
            alt={woundsAssets.diabetes_banner_1.alt}
          />
          {/* bannerPRINCIPAL */}

          {/* BANNER DIABETES */}
          <StyledTerapeuticNumberSection
            style={{ backgroundSize: "109% 85%" }}
            background={woundsAssets.diabetes_background_1.content}
          >
            <Container>
              <Grid item lg={12} className="text-center">
                <StyledTitulo
                  style={{
                    marginTop: "0%",
                    marginLeft: "4%",
                    fontSize: "44px",
                  }}
                >
                  Diabetes
                </StyledTitulo>
              </Grid>
              <Grid item lg={12} className="text-center">
                <StyledTitulo1
                  style={{
                    lineHeight: "1",
                    fontSize: "18px",
                    padding: "26px 145px",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: woundsAssets.diabetes_text_1.content,
                  }}
                ></StyledTitulo1>
              </Grid>
            </Container>
          </StyledTerapeuticNumberSection>
          {/* BANNER DIABETES */}

          {/* mMITOS Y VERDADES */}
          <Container maxWidth="xl">
            <StyledSubtitle
              style={{
                textAlign: "center",
                marginTop: "-3%",
                fontSize: "30px",
                marginLeft: "7%",
              }}
            >
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
                            style={{ width: "82.8%", marginTop: "-4%" }}
                          />
                        </Grid>
                      ) : (
                        <Grid item md={6}>
                          <StyledImageGeneral
                            src={item.content}
                            alt={item.alt}
                            style={{
                              width: "82.8%",
                              marginTop: "-4%",
                              marginLeft: "5%",
                            }}
                          />
                        </Grid>
                      )}
                    </React.Fragment>
                  )
                )}
            </Grid>
          </Container>
          {/* mMITOS Y VERDADES */}

          {/* complicaciones  */}
          <StyledTerapeuticNumberSection
            style={{
              backgroundPosition: "top right",
              paddingTop: 0,
              paddingBottom: 0,
            }}
            background={woundsAssets.ulceras_background.content}
          >
            <Container>
              <StyledSubtitle
                style={{
                  textAlign: "",
                  marginTop: "1.5%",
                  fontSize: "28.5px",
                  marginLeft: "5%",
                }}
              >
                {woundsAssets.diabetes_titulo_2 !== undefined &&
                  woundsAssets.diabetes_titulo_2.content}
              </StyledSubtitle>
              <p
                style={{
                  fontSize: "20px",
                  marginTop: "-2.7%",
                  lineHeight: "1",
                  padding: "0 55px",
                }}
              >
                {woundsAssets.diabetes_text_2 !== undefined &&
                  woundsAssets.diabetes_text_2.content}
              </p>
              <Grid item md={12} className="d-flex justify-center">
                <StyledImageGeneral
                  src={woundsAssets.diabetes_imagen_1.content}
                  style={{ width: "63.1%", marginLeft: "1.5%" }}
                  alt={woundsAssets.diabetes_imagen_1.alt}
                />
              </Grid>
              <Grid container>
                {woundsAssets.diabetes_cuadrose !== undefined &&
                  woundsAssets.diabetes_cuadrose.map(
                    (item: ITerapeuticNumber, index: number) => (
                      <Grid item md={6} className="d-flex justify-center">
                        <StyledImageGeneral
                          src={item.content}
                          alt={item.alt}
                          style={{
                            width: "96%",
                            marginTop: "2%",
                            marginLeft: "8%",
                          }}
                        />
                      </Grid>
                    )
                  )}
              </Grid>
            </Container>
          </StyledTerapeuticNumberSection>
          {/* complicaciones  */}

          {/* PACIENTES DIABETES FAMILIA */}
          <Container>
            <Grid item md={12} className="d-flex justify-center">
              <StyledImageGeneral
                src={woundsAssets.diabetes_image_2.content}
                alt={woundsAssets.diabetes_image_2.alt}
                style={{ width: "98%", marginLeft: "6.4%", height: "463px" }}
              />
            </Grid>
            {/* PACIENTES DIABETES FAMILIA */}

            {/* FAMILIA CUIDADOR */}
            <StyledSubtitle
              style={{
                marginTop: "2.6%",
                fontSize: "27.8px",
                marginLeft: "5.3%",
              }}
            >
              {woundsAssets.diabetes_titulo_3 !== undefined &&
                woundsAssets.diabetes_titulo_3.content}
            </StyledSubtitle>
            <Grid item md={12} className="d-flex justify-center">
              <StyledImageGeneral
                style={{ marginTop: "-0.5%", marginLeft: "1.6%" }}
                src={woundsAssets.diabetes_imagen_4.content}
                alt={woundsAssets.diabetes_imagen_4.alt}
              />
            </Grid>
            {/* FAMILIA CUIDADOR */}
          </Container>

          {/* HABITOS SALUDABLES */}
          <StyledTerapeuticNumberSection
            style={{ height: "803px" }}
            background={woundsAssets.diabetes_background_2.content}
          >
            <Container>
              <Grid item lg={12} className="">
                <StyledTitulo
                  style={{
                    fontSize: "28px",
                    marginLeft: "5.2%",
                    marginTop: "-2.7%",
                  }}
                >
                  {woundsAssets.diabetes_titulo_4.content}
                </StyledTitulo>
              </Grid>
              <Grid item lg={12} className="text-center">
                <StyledTitulo1
                  style={{
                    lineHeight: "1",
                    padding: "0 56px",
                    marginTop: "0.6%",
                  }}
                >
                  {woundsAssets.diabetes_text_3.content}
                </StyledTitulo1>
              </Grid>
              <Grid item md={12} className="d-flex justify-center">
                <StyledImageGeneral
                  style={{
                    padding: "0 56px",
                    marginTop: "1.6%",
                    width: "63%",
                    marginLeft: "6%",
                  }}
                  src={woundsAssets.diabetes_imagen_5.content}
                  alt={woundsAssets.diabetes_imagen_5.alt}
                />
              </Grid>
            </Container>
          </StyledTerapeuticNumberSection>
          {/* HABITOS SALUDABLES */}

          {/* ALIMENTACION ADECUADA */}
          <StyledTerapeuticNumberSection
            style={{
              backgroundPosition: "top right",
              paddingTop: 0,
              paddingBottom: 0,
            }}
            background={woundsAssets.ulceras_background.content}
          >
            <Container>
              <Grid item lg={12} className="">
                <StyledTitulo style={{ marginTop: "4%", fontSize: "28.4px" }}>
                  {woundsAssets.diabetes_titulo_5.content}
                </StyledTitulo>
              </Grid>
              <Grid item lg={12} className="text-center">
                <StyledTitulo1
                  style={{
                    marginTop: "2.4%",
                    lineHeight: "1",
                    padding: "0 58px",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: woundsAssets.diabetes_text_4.content,
                  }}
                ></StyledTitulo1>
              </Grid>
            </Container>
            <Container>
              <Grid item md={12} className="d-flex justify-center">
                <StyledImageGeneral
                  style={{ width: "1045px", marginLeft: "3.9%" }}
                  src={woundsAssets.diabetes_imagen_6.content}
                  alt={woundsAssets.diabetes_imagen_6.alt}
                />
              </Grid>
            </Container>
          </StyledTerapeuticNumberSection>
          <Container>
            <StyledTitulo1
              style={{
                padding: "0 58px",
                lineHeight: "1",
                marginTop: "39.3px",
              }}
              dangerouslySetInnerHTML={{
                __html: woundsAssets.diabetes_text_5.content,
              }}
            ></StyledTitulo1>
            {/* ALIMENTACION ADECUADA */}

            {/* PLATOS */}
            <Grid item md={12} className="d-flex justify-center">
              <StyledImageGeneral
                style={{
                  width: "798px",
                  marginTop: "16.2px",
                  marginLeft: "0.4%",
                }}
                src={woundsAssets.diabetes_imagen_7.content}
                alt={woundsAssets.diabetes_imagen_7.alt}
              />
            </Grid>
            {/* PLATOS */}

            {/* ejercisio  */}
            <Grid container className="my-12">
              <Grid item md={6} className="d-flex justify-center">
                <StyledImageGeneral
                  src={woundsAssets.diabetes_images_8.content}
                  alt={woundsAssets.diabetes_images_8.alt}
                  style={{ width: "90%", marginLeft: "10%" }}
                />
              </Grid>
              <Grid item md={6} className="d-flex justify-center">
                <StyledImageGeneral
                  src={woundsAssets.diabetes_imagen_9.content}
                  style={{ width: "100%", marginLeft: "9%", marginTop: "-5%" }}
                  alt={woundsAssets.diabetes_imagen_9.alt}
                />
              </Grid>
              {/* ejercisio  */}
            </Grid>
            {/* RECOMENDACIONES */}
            <StyledTitulo style={{ fontSize: "28.6px", marginTop: "-1%" }}>
              {woundsAssets.diabetes_titulo_6.content}
            </StyledTitulo>
            {/* RECOMENDACIONES */}
          </Container>

          {/* senor */}
          <StyledTerapeuticNumberSection
            background={woundsAssets.ulceras_background.content}
          >
            <Container maxWidth="xl">
              <Grid item md={12} className="d-flex justify-center">
                <StyledImageGeneral
                  style={{
                    marginTop: "3%",
                    width: "1008.4px",
                    marginLeft: "42.9px",
                  }}
                  src={woundsAssets.diabetes_imagen_10.content}
                  alt={woundsAssets.diabetes_imagen_10.alt}
                />
              </Grid>
            </Container>
          </StyledTerapeuticNumberSection>
          {/* senor */}
        </React.Fragment>
      )}

      {/* REFERENCIAS */}
      {woundsAssets.diabetes_imagen_11 !== undefined && (
        <div style={{ background: "#014380" }} className="py-16">
          <Container maxWidth="lg">
            <h1
              className="pb-12 text-center text-white"
              style={{
                fontSize: 30,
                fontWeight: "700",
                marginTop: "-3%",
                marginLeft: "5%",
              }}
            >
              Referencias
            </h1>
          </Container>
          <p
            dangerouslySetInnerHTML={{
              __html: woundsAssets.diabetes_imagen_11.content,
            }}
            className="text-white text-xs"
            style={{ padding: "0 160px", marginTop: "-1.2%" }}
          ></p>    
        </div>
      )}
      {/* REFERENCIAS */}
    </React.Fragment>
  );
};

export default Diabetes;


