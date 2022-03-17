import React from "react";
import { Container, Grid } from "@mui/material";
import useTerapeuticNumberStyles, {
  StyledSubtitle,
} from "../terapeutic-number.style";
import useControllers from "controllers";

const Ulceras = () => {
  const {
    StyledTitulo,
    StyledTerapeuticNumberSection1,
    StyledImage,
  } = useTerapeuticNumberStyles();

  const { useScreenHooks } = useControllers();
  const { useTerapeuticNumber } = useScreenHooks();
  const { useHeridas } = useTerapeuticNumber();
  const { woundsAssets } = useHeridas();

  return (
    <React.Fragment>
      {woundsAssets.ulceras_Banner_1 !== undefined && (
        <StyledImage
          src={woundsAssets.ulceras_Banner_1.content}
          alt={woundsAssets.ulceras_Banner_1.alt}
          style={{ marginBottom: "3%" }}
        />
      )}
      {woundsAssets.ulceras_imagen_1 && (
        <React.Fragment>
          <Container maxWidth="xl">
            <Grid item lg={12} className="text-center">
              <StyledTitulo>Úlceras</StyledTitulo>
            </Grid>
            <Grid item lg={12} className="text-center">
              <img
                src={woundsAssets.ulceras_imagen_1.content}
                alt={woundsAssets.ulceras_imagen_1.alt}
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item lg={12} className="text-center">
              <img
                src={woundsAssets.ulceras_imagen_2.content}
                alt={woundsAssets.ulceras_imagen_2.alt}
                style={{ width: "100%" }}
              />
            </Grid>
            <StyledTerapeuticNumberSection1
              background={woundsAssets.ulceras_background.content}
            >
              <img
                src={woundsAssets.ulceras_imagen_4.content}
                alt={woundsAssets.ulceras_imagen_4.alt}
                style={{ width: "100%" }}
              />
            </StyledTerapeuticNumberSection1>
            <StyledSubtitle style={{ marginBottom: "3%" }}>
              {woundsAssets.ulceras_titulo_1.content}
            </StyledSubtitle>
            <p style={{ fontSize: "20px" }}>{woundsAssets.ulceras_text_1.content}</p>
            <Grid container className="justify-center">
              <img
                src={woundsAssets.ulceras_imagen_6.content}
                alt={woundsAssets.ulceras_imagen_6.alt}
                style={{ width: "75%", marginTop: "3%" }}
              />
            </Grid>
            <StyledSubtitle style={{ marginBottom: "3%" }}>
              {woundsAssets.ulceras_titulo_3.content}
            </StyledSubtitle>
            <p dangerouslySetInnerHTML={{ 
                __html: woundsAssets.ulceras_text_2.content, 
                }} style={{ fontSize: "20px" }}
                ></p>
            <Grid container className="justify-center">
              <img
                src={woundsAssets.ulceras_imagen_7.content}
                alt={woundsAssets.ulceras_imagen_7.alt}
                style={{ width: "75%", marginTop: "3%" }}
              />
            </Grid>
            <StyledSubtitle style={{ marginBottom: "3%" }}>
              {woundsAssets.ulceras_titulo_4.content}
            </StyledSubtitle>
            <p
              dangerouslySetInnerHTML={{
                __html: woundsAssets.ulceras_text_8.content,
              }} style={{ fontSize: "20px" }}
            ></p>
            <Grid container className="justify-center">
              <img
                src={woundsAssets.ulceras_imagen_9.content}
                alt={woundsAssets.ulceras_imagen_9.alt}
                style={{ width: "75%", marginTop: "3%" }}
              />
              <img
                src={woundsAssets.ulceras_imagen_10.content}
                alt={woundsAssets.ulceras_imagen_10.alt}
                style={{ width: "75%", marginTop: "2%" }}
              />
            </Grid>
          </Container>
          <img
            src={woundsAssets.ulceras_refrencias_1.content}
            alt={woundsAssets.ulceras_refrencias_1.alt}
            style={{ width: "100%", marginTop: "2%" }}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Ulceras;
