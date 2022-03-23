import React from "react";
import { Container, Grid } from "@mui/material";
import useTerapeuticNumberStyles, {
  StyledSubtitle,
} from "../terapeutic-number.style";
import useControllers from "controllers";

const Ulceras = () => {
  const { StyledTitulo, StyledTerapeuticNumberSection1, StyledImage } =
    useTerapeuticNumberStyles();

  const { useScreenHooks } = useControllers();
  const { useTerapeuticNumber } = useScreenHooks();
  const { useHeridas } = useTerapeuticNumber();
  const { woundsAssets } = useHeridas();

  return (
    <React.Fragment>
      {/* BANNER PRINCIPAL */}
      {woundsAssets.ulceras_Banner_1 !== undefined && (
        <StyledImage
          src={woundsAssets.ulceras_Banner_1.content}
          alt={woundsAssets.ulceras_Banner_1.alt}
          style={{ marginBottom: "3%" }}
        />
      )}
      {/* BANNER PRINCIPAL */}

      {/* ULCERAS  */}
      {woundsAssets.ulceras_imagen_1 && (
        <React.Fragment>
          <Container maxWidth="xl">
            <Grid item lg={12} className="text-center">
              <StyledTitulo
                style={{
                  fontSize: "45px",
                  marginTop: "3.3rem",
                  marginLeft: "4.4%",
                }}
              >
                Úlceras
              </StyledTitulo>
            </Grid>
            <Grid item lg={12} className="text-center">
              <img
                src={woundsAssets.ulceras_imagen_1.content}
                alt={woundsAssets.ulceras_imagen_1.alt}
                style={{ marginTop: "-6.7%", marginLeft: "5.3%", width: "93%" }}
              />
            </Grid>
            <Grid item lg={12} className="text-center">
              <img
                src={woundsAssets.ulceras_imagen_2.content}
                alt={woundsAssets.ulceras_imagen_2.alt}
                style={{ width: "100%", marginLeft: "2%", marginTop: "-0.4%" }}
              />
            </Grid>
            <StyledTerapeuticNumberSection1
              background={woundsAssets.ulceras_background.content}
            >
              <img
                src={woundsAssets.ulceras_imagen_4.content}
                alt={woundsAssets.ulceras_imagen_4.alt}
                style={{
                  width: "97%",
                  marginLeft: "54.3px",
                  marginTop: "1.2%",
                  height: "774px",
                }}
              />
            </StyledTerapeuticNumberSection1>
            {/* PRESION */}
            <StyledSubtitle
              style={{
                marginBottom: "3%",
                marginTop: "3%",
                fontSize: "28.3px",
                marginLeft: "5%",
              }}
            >
              {woundsAssets.ulceras_titulo_1.content}
            </StyledSubtitle>
            <p
              style={{
                fontSize: "20px",
                lineHeight: "1",
                padding: "0 58px",
                marginTop: "-1%",
              }}
            >
              {woundsAssets.ulceras_text_1.content}
            </p>
            <Grid container className="justify-center">
              <img
                src={woundsAssets.ulceras_imagen_6.content}
                alt={woundsAssets.ulceras_imagen_6.alt}
                style={{
                  width: "67.3%",
                  marginTop: "1.4%",
                  marginLeft: "4.4%",
                }}
              />
            </Grid>
            {/* CLASIFICACION */}
            <StyledSubtitle
              style={{
                marginBottom: "3%",
                marginTop: "5.7%",
                fontSize: "28.4px",
                marginLeft: "5.2%",
              }}
            >
              {woundsAssets.ulceras_titulo_3.content}
            </StyledSubtitle>
            <p
              dangerouslySetInnerHTML={{
                __html: woundsAssets.ulceras_text_2.content,
              }}
              style={{
                fontSize: "20px",
                lineHeight: "1",
                padding: "0 57px",
                marginTop: "-0.3%",
              }}
            ></p>
            <Grid container className="justify-center">
              <img
                src={woundsAssets.ulceras_imagen_7.content}
                alt={woundsAssets.ulceras_imagen_7.alt}
                style={{ width: "95%", marginTop: "3%", marginLeft: "3%" }}
              />
            </Grid>
            {/* CLASIFICACION */}

            {/* prevenir lesiones */}
            <StyledSubtitle
              style={{
                marginBottom: "3%",
                marginTop: "2.8%",
                fontSize: "28px",
                marginLeft: "5.3%",
              }}
            >
              {woundsAssets.ulceras_titulo_4.content}
            </StyledSubtitle>
            <p
              dangerouslySetInnerHTML={{
                __html: woundsAssets.ulceras_text_8.content,
              }}
              style={{
                fontSize: "20px",
                lineHeight: "1",
                padding: "0 58px",
                marginTop: "-1%",
              }}
            ></p>
            <Grid container className="justify-center">
              <img
                src={woundsAssets.ulceras_imagen_9.content}
                alt={woundsAssets.ulceras_imagen_9.alt}
                style={{ width: "97%", marginTop: "1.9%", marginLeft: "3%" }}
              />
              <img
                src={woundsAssets.ulceras_imagen_10.content}
                alt={woundsAssets.ulceras_imagen_10.alt}
                style={{ width: "97%", marginTop: "-0.1%", marginLeft: "3%" }}
              />
            </Grid>
          </Container>
          {/* REFERENCIAS */}
          {woundsAssets.references !== undefined && (
            <div style={{ background: "#014380" }} className="py-12">
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
                  __html: woundsAssets.references.content,
                }}
                className="text-white text-xs"
                style={{ padding: "0 160px", marginTop: "-1.2%" }}
              ></p>
            </div>
          )}
          {/* REFERENCIAS */}
        </React.Fragment>
      )}
      {/* ULCERAS  */}
    </React.Fragment>
  );
};

export default Ulceras;
