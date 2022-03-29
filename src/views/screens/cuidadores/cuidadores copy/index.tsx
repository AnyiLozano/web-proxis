import { Container, Grid, Tab, Box } from "@mui/material";
import useControllers from "controllers";
import React from "react";
import useCuidadoresStyles from "../cuidadores.styles";
import _ from "lodash";
import TabPanel from "@mui/lab/TabPanel";
import { TabContext, TabList } from "@mui/lab";
import "styles/styles.scss";
import {
  StyledImageGeneral,
  StyledSubtitle,
} from "views/screens/terapeutic-number/terapeutic-number.style";

const TuPapel = () => {
  // Styles
  const {
    StyledImage,
    StyledSection,
    StyledSectionBlue,
    StyledTitulo,
    StyledTitulo1,
  } = useCuidadoresStyles();

  // Controllers
  const { useScreenHooks } = useControllers();
  const { useProducts } = useScreenHooks();
  const { products } = useProducts();
  const { cuidadores } = products;

  const data: any[] = [
    "Cuidador Formal",
    "Cuidador Informal",
    "Cuidador Principal",
    "Cuidador Secundario",
  ];

  // States
  const [value, setValue] = React.useState<string>("0");

  // Changes
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      {cuidadores !== undefined && (
        <React.Fragment>
          {/* Banner */}
          <StyledImage
            src={cuidadores.principal.content}
            alt={cuidadores.principal.alt}
          />
          {/* Banner */}

          {/* sefundo banner */}
          {cuidadores.banner_principal !== undefined && (
            <React.Fragment>
              <StyledSubtitle
                style={{
                  textAlign: "center",
                  fontFamily: "montserrat, bold",
                  fontSize: "45.8px",
                  marginLeft: "7.5%",
                  marginTop: "9.1%",
                }}
              >
                Tu papel
              </StyledSubtitle>
              <Grid item md={6}>
                <StyledSubtitle
                  style={{
                    textAlign: "center",
                    fontFamily: "Montserrat, bold",
                    fontSize: "25px",
                    marginLeft: "-57.4%",
                    marginTop: "6.5%",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: cuidadores.papel_1.content.split("--")[0],
                  }}
                ></StyledSubtitle>
                <p
                  dangerouslySetInnerHTML={{
                    __html: cuidadores.papel_1.content.split("--")[1],
                  }}
                  className=""
                  style={{
                    marginTop: "-1.9%",
                    marginLeft: "6.9%",
                    fontFamily: "Montserrat, medium",
                    color: "#666666",
                    fontSize: "17px",
                    width: "48%",
                    fontWeight: "500",
                  }}
                ></p>
              </Grid>
              <Grid container>
                <Grid item md={6}>
                  <img
                    src={cuidadores.banner_principal.content}
                    alt={cuidadores.banner_principal.alt}
                    style={{
                      marginTop: "-61.4%",
                      marginLeft: "100.2%",
                      height: "439px",
                    }}
                  />
                </Grid>
              </Grid>
            </React.Fragment>
          )}
          {/* sefundo banner */}

          {/* clasificadores cuidadores  */}
          {/* <StyledSection
            background={cuidadores.aliados_background_1.content}
            style={{ backgroundSize: "50% 100%" }}
          > */}
          <Container style={{ marginTop: "2%" }}>
            <StyledTitulo
              style={{
                fontSize: "25px",
                fontFamily: "montserrat, bold",
                marginTop: "3.6%",
                paddingBottom: "0%",
                marginLeft: "5%",
              }}
            >
              {cuidadores.title_clasification.content}
            </StyledTitulo>
            <StyledTitulo1
              style={{
                marginTop: "0.1%",
                marginLeft: "4.9%",
                fontFamily: "Montserrat, medium",
                color: "#666666",
                fontSize: "17px",
                fontWeight: "500",
              }}
            >
              {cuidadores.text_clasification.content}
            </StyledTitulo1>
            <Grid item md={12} className="pt-8">
              <div className="cuadroazul">
                <Box sx={{ typography: "body1" }}>
                  <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                      <TabList
                        onChange={handleChange}
                        aria-label="lab API tabs example"
                      >
                        {_.map(data, (item: any, index: number) => (
                          <Tab
                            style={{ textTransform: "capitalize" }}
                            className="mr-1 tad-cuidadores"
                            label={item}
                            value={index.toString()}
                          />
                        ))}
                      </TabList>
                    </Box>
                    {_.map(cuidadores.tultis, (item: any, index: number) => (
                      <TabPanel value={index.toString()}>
                        <img
                          src={item.content}
                          style={{ width: "100%" }}
                          alt=""
                        />
                      </TabPanel>
                    ))}
                  </TabContext>
                </Box>
              </div>
            </Grid>
          </Container>
          {/* </StyledSection> */}

          {/* por que se cuida */}
          <Container>
            <StyledTitulo
              className=""
              style={{
                fontSize: "25px",
                fontFamily: "montserrat, bold",
                marginTop: "5.4%",
                paddingBottom: "0%",
                marginLeft: "5%",
              }}
            >
              {cuidadores.title_why.content}
            </StyledTitulo>
            <StyledTitulo1
              style={{
                marginTop: "-1.7%",
                marginLeft: "5%",
                fontFamily: "Montserrat, medium",
                color: "#666666",
                fontSize: "17px",
                fontWeight: "500",
                paddingBottom: "3%",
              }}
              dangerouslySetInnerHTML={{
                __html: cuidadores.text_why.content,
              }}
            ></StyledTitulo1>
            {/* por que se cuida */}

            {/* necesidades cuidador */}
            <StyledTitulo className=""
            style={{
              fontSize: "25px",
              fontFamily: "montserrat, bold",
              marginTop: "1.4%",
              paddingBottom: "0%",
              marginLeft: "5%"
            }}
            >
              {cuidadores.aliados_titulo_3.content}
            </StyledTitulo>
            <StyledTitulo1
            style={{
              marginTop: "-1.7%",
              marginLeft: "5%",
              fontFamily: "Montserrat, medium",
              color: "#666666",
              fontSize: "17px",
              fontWeight: "500",
            }}
              dangerouslySetInnerHTML={{
                __html: cuidadores.aliados_texto_3.content,
              }}
            ></StyledTitulo1>
            <StyledImageGeneral
              src={cuidadores.aliados_imagen_2.content}
              alt={cuidadores.aliados_imagen_2.alt}
              style={{ width: "81%", marginLeft: "11.6%", marginTop: "3%" }}
            />
            {/* necesidades cuidador */}


            {/* SOBRECARGA */}
            <StyledTitulo className=""
              style={{
                fontSize: "25px",
                fontFamily: "montserrat, bold",
                marginTop: "5.7%",
                paddingBottom: "0%",
                marginLeft: "5%"
              }}
            >
              {cuidadores.aliados_titulo_4.content}
            </StyledTitulo>
            <StyledTitulo1
             style={{
              marginTop: "-1.1%",
              marginLeft: "5%",
              fontFamily: "Montserrat, medium",
              color: "#666666",
              fontSize: "17px",
              fontWeight: "500",
              lineHeight: "1.2"
            }}
              dangerouslySetInnerHTML={{
                __html: cuidadores.aliados_texto_4.content,
              }}
            ></StyledTitulo1>
            {/* SOBRECARGA */}

          </Container>

          {/* disminuir sobrecarga */}
          <StyledSectionBlue className="mt-12">
            <Container>
              <StyledTitulo className="mt-5" style={{ color: "#fff", fontSize: "25px",
                fontFamily: "montserrat, bold",
                marginTop: "5.7%",
                paddingBottom: "0%",
                marginLeft: "5%" }}>
                {cuidadores.aliados_titulo_5.content}
              </StyledTitulo>
              <StyledImageGeneral
                src={cuidadores.aliados_imagen_3.content}
                alt={cuidadores.aliados_imagen_3.alt}
                style={{ width: "100%" }}
              />
              <StyledImageGeneral
                src={cuidadores.aliados_imagen_4.content}
                alt={cuidadores.aliados_imagen_4.alt}
                style={{ width: "100%" }}
              />
              <StyledImageGeneral
                src={cuidadores.aliados_imagen_5.content}
                alt={cuidadores.aliados_imagen_5.alt}
                style={{ width: "100%" }}
              />
            </Container>
          {/* disminuir sobrecarga */}

          </StyledSectionBlue>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default TuPapel;
