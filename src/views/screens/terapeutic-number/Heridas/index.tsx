import React from "react";
import {Container, Grid} from "@mui/material";
import _ from "lodash";
import useTerapeuticNumberStyles from "../terapeutic-number.style";
import useControllers from "controllers";

const Heridas = () => {
    const {
        StyledTerapeuticNumberSection,
        StyledTitulo,
        StyledTitulo1,
        StyledTerapeuticNumberSection1,
        StyledTitleSection2,
        StyledDescriptionSection2,
        StyledContainerBibliografia,
        StyledTitleBibliografia,
        StyledTextBibliografia,
        StyledImage,
        StyledImage1
    } = useTerapeuticNumberStyles();

    const { useScreenHooks } = useControllers();
    const { useTerapeuticNumber } = useScreenHooks();
    const { width, bibliografias, heridas } = useTerapeuticNumber();

    console.log(heridas)

    return (
        <React.Fragment>
             <StyledImage className="mt-28" src={heridas?.image?.image} alt="terapeutica" />
            <StyledTerapeuticNumberSection background="http://localhost/api-proxis/wp-content/uploads/2021/12/Recurso 4.png">
                <Container>
                    <Grid item lg={12} className="text-center">
                        <StyledTitulo>Heridas</StyledTitulo>
                    </Grid>
                    <Grid item lg={12} className="text-center">
                        <StyledTitulo1>{heridas?.description?.description}</StyledTitulo1>
                    </Grid>
                </Container>
            </StyledTerapeuticNumberSection>
            <StyledTerapeuticNumberSection1 background="http://localhost/api-proxis/wp-content/uploads/2021/12/Recurso-8.png">
                <Container>
                    <Grid item lg={12}>
                        <Grid container>
                            {
                                heridas?.lines && _.map(heridas?.lines, (item: any, index: any) => {
                                    if(width >= 1024){
                                        if(index%2 === 0){
                                            return (
                                                <React.Fragment>
                                                    <Grid item md={6} className="mt-12">
                                                        <Grid item lg={12}>
                                                            <StyledTitleSection2>{item.title}</StyledTitleSection2>
                                                        </Grid>
                                                        <Grid item md={12}>
                                                            <StyledDescriptionSection2>{item.description}</StyledDescriptionSection2>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item md={6} className="flex justify-end mt-12">
                                                        <StyledImage1 src={item.image} className="ml-6" alt="image-terapeutic-number"/>
                                                    </Grid>
                                                </React.Fragment>
                                            )
                                        }else{
                                            return (
                                                <React.Fragment>
                                                    <Grid item md={6} key={index} className="flex items-center mt-12">
                                                        <StyledImage1 src={item.image} className="mr-6" alt="image-terapeutic-number"/>
                                                    </Grid>
                                                    <Grid item md={6} className="mt-12">
                                                        <Grid item lg={12} className="mt-2">
                                                            <StyledTitleSection2>{item.title}</StyledTitleSection2>
                                                        </Grid>
                                                        <Grid item md={12} className="mt-4">
                                                            <StyledDescriptionSection2>{item.description}</StyledDescriptionSection2>
                                                        </Grid>
                                                    </Grid>
                                                </React.Fragment>
                                            )
                                        }
                                    }else{
                                        return (
                                            <React.Fragment>
                                                <Grid item lg={6} className="mt-12">
                                                    <Grid item lg={12}>
                                                        <StyledTitleSection2>{item.title}</StyledTitleSection2>
                                                    </Grid>
                                                    <Grid item lg={12}>
                                                        <StyledDescriptionSection2>{item.text}</StyledDescriptionSection2>
                                                    </Grid>
                                                </Grid>
                                                <Grid item lg={6} className="flex justify-end mt-12">
                                                    <StyledImage1 src={item.image} alt="image-terapeutic-number"/>
                                                </Grid>
                                            </React.Fragment>
                                        );
                                    }
                                })
                            }
                        </Grid>
                    </Grid>
                </Container>
            </StyledTerapeuticNumberSection1>
            {/*<StyledContainerBibliografia>
                <Container>
                    <Grid item lg={12}>
                        <StyledTitleBibliografia>Bibliografia: </StyledTitleBibliografia>
                    </Grid>
                    <Grid item lg={12} className="pt-12">
                        <StyledTextBibliografia>{bibliografias.bibliografiaHeridas}</StyledTextBibliografia>
                    </Grid>
                </Container>
            </StyledContainerBibliografia> */}
        </React.Fragment>
    );
}

export default Heridas;