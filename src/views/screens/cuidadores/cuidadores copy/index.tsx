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
          <StyledSection background={cuidadores.aliados_background_1.content} style={{ backgroundSize: "50% 100%" }}>
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
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                      <TabList
                        onChange={handleChange}
                        aria-label="lab API tabs example"
                      >
                        {_.map(data, (item: any, index: number) => (
                          <Tab
                            className="mr-1"
                            label={item}
                            value={index.toString()}
                          />
                        ))}
                      </TabList>
                    </Box>
                    {_.map(cuidadores.tultis, (item: any, index: number) => (
                      <TabPanel
                        value={index.toString()}
                        style={{ backgroundColor: "transparent", padding: 0 }}
                      >
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
      {/* <StyledSection background="http://localhost/api-proxis/wp-content/uploads/2021/12/Recurso-5-7.png">
                <Container>
                    <StyledTitleSection2 className="py-16">Tu Papel</StyledTitleSection2>
                    <Grid container>
                        <Grid item md={6} className="pr-6">
                            <StyledTitleSection3>¿Quien es el cuidador?</StyledTitleSection3>
                            <br />
                            <StyledDescriptionSection2>{your_papel?.text}</StyledDescriptionSection2>
                        </Grid>
                        <Grid item md={6} className="flex justify-center">
                            <StyledImage2 src={your_papel?.image} />
                        </Grid>
                        <Grid item md={12} className="pt-16">
                            <StyledTitleSection3>Clasificación de los cuidadores:</StyledTitleSection3>
                        </Grid>
                        <Grid item md={12} className="pt-8">
                            <StyledDescriptionSection2>{clasification?.text}</StyledDescriptionSection2>
                        </Grid>
                        <Grid item md={12} className="pt-8">
                            <Box sx={{ width: '100%', typography: 'body1' }}>
                                <TabContext value={value}>
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                                            {
                                                _.map(clasification?.tabs, (item: any, index: number) => (
                                                    <Tab className="mr-1" label={`Item ${index + 1}`} value={index.toString()} />
                                                ))
                                            }
                                        </TabList>
                                    </Box>
                                    {
                                        _.map(clasification?.tabs, (item: any, index: number) => (
                                            <TabPanel value={index.toString()} style={{ backgroundColor: "#004289" }}>
                                                <Grid container className="justify-center">
                                                    <Grid item md={6} className="pr-12">
                                                        <StyledImage2 src={item.image} style={{ width: '100%' }}/>
                                                    </Grid>
                                                    <Grid item md={6}>
                                                        <StyledDescriptionSection3>{item.text}</StyledDescriptionSection3>
                                                    </Grid>
                                                </Grid>
                                            </TabPanel>
                                        ))
                                    }
                                </TabContext>
                            </Box>
                        </Grid>
                        <Grid item md={6} className="pr-6 pt-12">
                            <StyledTitleSection3>¿Por qué se cuida?</StyledTitleSection3>
                            <br />
                            <StyledDescriptionSection2>{why?.text}</StyledDescriptionSection2>
                        </Grid>
                        <Grid item md={6} className="flex justify-center pt-12">
                            <StyledImage2 src={why?.image} />
                        </Grid>
                        {
                            _.map(necesity, (item: any, index: number) => (
                                <Grid item md={6} className="py-12 pr-6">
                                    <StyledTitleSection3 className="pb-6" style={{ fontSize: '0.9rem' }}>{item.text}</StyledTitleSection3>
                                    <StyledImage2 src={item.image} style={{ background: "#0099DB20", width: '100%' }} />
                                </Grid>
                            ))
                        }
                    </Grid>
                </Container>
            </StyledSection>
            <StyledSectionBlue>
                <Container>
                    <Grid container>
                        <Grid item md={12}>
                            <StyledTitleSection4>¿Como disminuir la sobrecarga en el cuidador?</StyledTitleSection4>
                        </Grid>
                        {
                            _.map(overChange, (item: any, index: number) => (
                                <Grid item sm={4} className="pr-6 ">
                                    <StyledImage2 className="pt-12" src={item.image} style={{ width: '100%' }} />
                                    <StyledDescriptionSection3 className="pt-6">{item.text}</StyledDescriptionSection3>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Container>
            </StyledSectionBlue> */}
    </React.Fragment>
  );
};

export default TuPapel;
