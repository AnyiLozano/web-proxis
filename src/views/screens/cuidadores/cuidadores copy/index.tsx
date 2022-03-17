import { Container, Grid, Tab, Box } from "@mui/material";
import useControllers from "controllers";
import React from "react";
import useCuidadoresStyles from "../cuidadores.styles";
import _ from "lodash";
import TabPanel from "@mui/lab/TabPanel";
import { TabContext, TabList } from "@mui/lab";
import "styles/styles.scss";
import { StyledImageGeneral } from "views/screens/terapeutic-number/terapeutic-number.style";

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
          <StyledImage
            src={cuidadores.principal.content}
            alt={cuidadores.principal.alt}
          />
          <StyledImage
            src={cuidadores.banner_principal.content}
            alt={cuidadores.banner_principal.alt}
            style={{ paddingTop: "0%", width: "100%" }}
          />
          <StyledSection
            background={cuidadores.aliados_background_1.content}
            style={{ backgroundSize: "50% 100%" }}
          >
            <Container style={{ marginTop: "2%" }}>
              <StyledTitulo>
                {cuidadores.title_clasification.content}
              </StyledTitulo>
              <StyledTitulo1>
                {cuidadores.text_clasification.content}
              </StyledTitulo1>
              <Grid item md={12} className="pt-8">
                <Box sx={{ width: "100%", typography: "body1" }}>
                  <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }} 
                    >
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
              </Grid>
            </Container>
          </StyledSection>
          <Container>
            <StyledTitulo className="mt-12">
              {cuidadores.title_why.content}
            </StyledTitulo>
            <StyledTitulo1
              dangerouslySetInnerHTML={{
                __html: cuidadores.text_why.content,
              }}
            ></StyledTitulo1>
            <StyledTitulo className="mt-12">
              {cuidadores.aliados_titulo_3.content}
            </StyledTitulo>
            <StyledTitulo1
              dangerouslySetInnerHTML={{
                __html: cuidadores.aliados_texto_3.content,
              }}
            ></StyledTitulo1>
            <StyledImageGeneral
              src={cuidadores.aliados_imagen_2.content}
              alt={cuidadores.aliados_imagen_2.alt}
              style={{ width: "100%" }}
            />
            <StyledTitulo className="mt-12">
              {cuidadores.aliados_titulo_4.content}
            </StyledTitulo>
            <StyledTitulo1
              dangerouslySetInnerHTML={{
                __html: cuidadores.aliados_texto_4.content,
              }}
            ></StyledTitulo1>
          </Container>
          <StyledSectionBlue className="mt-12">
            <Container>
              <StyledTitulo className="mt-5" style={{ color: "#fff" }}>
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
          </StyledSectionBlue>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default TuPapel;
