import { AppBar, Container, Grid, Tab, Tabs, Typography, useTheme, Box } from '@mui/material';
import useControllers from 'controllers';
import React from 'react'
import useCuidadoresStyles from '../cuidadores.styles';
import _ from "lodash";
import TabPanel from '@mui/lab/TabPanel';
import { TabContext, TabList } from '@mui/lab';
import "styles/styles.scss";



const TuPapel = () => {
    // Styles
    const {
        StyledImage,
        StyledSection,
        StyledTitleSection2,
        StyledImage2,
        StyledTitleSection3,
        StyledDescriptionSection2,
        StyledSectionBlue,
        StyledTitleSection4,
        StyledDescriptionSection3
    } = useCuidadoresStyles();

    // Controllers
    const { useScreenHooks } = useControllers();
    const { useCuidadores } = useScreenHooks();
    const {
        principal_image,
        your_papel,
        clasification,
        necesity,
        overChange,
        why
    } = useCuidadores();

    // States
    const [value, setValue] = React.useState<string>("0");

    // Changes
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <React.Fragment>
            <StyledImage src={principal_image?.content} alt="Tu Papel" />
            <StyledSection background="http://localhost/api-proxis/wp-content/uploads/2021/12/Recurso-5-7.png">
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
            </StyledSectionBlue>
        </React.Fragment>
    )
}

export default TuPapel;
