import { Container, Grid } from '@mui/material';
import useControllers from 'controllers';
import React, { FC } from 'react'
import useProductsStyles from '../products.style';
import _ from "lodash";

const Bulcosan: FC = (): JSX.Element => {
    // Styles
    const {
        StyledImage,
        StyledTerapeuticNumberSection,
        StyledTitulo1,
        StyledTerapeuticNumberSection1,
        StyledTitleSection2,
        StyledDescriptionSection2,
        StyledListItemSection2,
        StyledContainerBibliografia,
        StyledTextBibliografia,
        StyledSubTitleBibliografia,
        StyledTitulo
    } = useProductsStyles();

    // Products
    const { useScreenHooks } = useControllers();
    const { useProducts } = useScreenHooks();
    const { products, width, bibliografias } = useProducts();

    return (
        <React.Fragment>
            <StyledImage src="http://localhost/api-proxis/wp-content/uploads/2021/12/Recurso-8-1.png" alt="Epiprot Principal Image" />
            <StyledTerapeuticNumberSection background="http://localhost/api-proxis/wp-content/uploads/2021/12/Recurso 4.png">
                <Container>
                    <Grid item lg={12} className="flex justify-center">
                        <StyledTitulo>Vulcosan®</StyledTitulo>
                    </Grid>
                    <Grid item lg={12} className="text-center">
                        <StyledTitulo1>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut. </StyledTitulo1>
                    </Grid>
                </Container>
            </StyledTerapeuticNumberSection>
            <StyledTerapeuticNumberSection1 background="http://localhost/api-proxis/wp-content/uploads/2021/12/Recurso-8.png">
                <Container>
                    <Grid item lg={12}>
                        <Grid container>
                            {
                                _.map(products, (item: any, index: number) => {
                                    if (width >= 1024) {
                                        if (item.id !== 4) {
                                            if (index % 2 === 0) {
                                                return (
                                                    <React.Fragment>
                                                        <Grid item lg={6} className="mt-12" key={index}>
                                                            <Grid item lg={12}>
                                                                <StyledTitleSection2>{item.title}</StyledTitleSection2>
                                                            </Grid>
                                                            <Grid item lg={12}>
                                                                {
                                                                    typeof item.description === "string"
                                                                        ? (
                                                                            <StyledDescriptionSection2>{item.description}</StyledDescriptionSection2>
                                                                        ) : (
                                                                            <ul style={{ listStyle: 'disc' }}>
                                                                                {
                                                                                    _.map(item.description, (it: any, idx: number) => (
                                                                                        <React.Fragment>
                                                                                            <StyledListItemSection2 className="mb-2" key={idx}>{it}</StyledListItemSection2>
                                                                                        </React.Fragment>
                                                                                    ))
                                                                                }
                                                                            </ul>
                                                                        )
                                                                }
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item lg={6} className="flex justify-end mt-12">
                                                            <StyledImage src={item.image} alt="image-terapeutic-number" />
                                                        </Grid>
                                                    </React.Fragment>
                                                );
                                            } else {
                                                return (
                                                    <React.Fragment>
                                                        <Grid item lg={6} key={index} className="flex items-center mt-12">
                                                            <StyledImage src={item.image} alt="image-terapeutic-number" />
                                                        </Grid>
                                                        <Grid item lg={6} className="mt-12">
                                                            <Grid item lg={12} className="mt-2">
                                                                <StyledTitleSection2>{item.title}</StyledTitleSection2>
                                                            </Grid>
                                                            <Grid item lg={12} className="mt-4">
                                                                {
                                                                    typeof item.description === "string"
                                                                        ? (
                                                                            <StyledDescriptionSection2>{item.description}</StyledDescriptionSection2>
                                                                        ) : (
                                                                            <ul style={{ listStyle: 'disc' }}>
                                                                                {
                                                                                    _.map(item.description, (it: any, idx: number) => (
                                                                                        <React.Fragment>
                                                                                            <StyledListItemSection2 className="mb-2" key={idx}>{it}</StyledListItemSection2>
                                                                                        </React.Fragment>
                                                                                    ))
                                                                                }
                                                                            </ul>
                                                                        )
                                                                }

                                                            </Grid>
                                                        </Grid>
                                                    </React.Fragment>
                                                )
                                            }
                                        } else {
                                            return (
                                                <Grid item lg={12} className="mt-12">
                                                    <StyledImage src={item.image} alt="Aplication Product" width="100%" />
                                                </Grid>
                                            )
                                        }

                                    } else {
                                        return (
                                            <React.Fragment>
                                                <Grid item lg={6} className="mt-12">
                                                    <Grid item lg={12}>
                                                        <StyledTitleSection2>{item.title}</StyledTitleSection2>
                                                    </Grid>
                                                    <Grid item lg={12}>
                                                        {
                                                            typeof item.description === "string"
                                                                ? (
                                                                    <StyledDescriptionSection2>{item.description}</StyledDescriptionSection2>
                                                                ) : (
                                                                    <ul style={{ listStyle: 'disc' }}>
                                                                        {
                                                                            _.map(item.description, (it: any, idx: number) => (
                                                                                <React.Fragment>
                                                                                    <StyledListItemSection2 className="mb-2" key={idx}>{it}</StyledListItemSection2>
                                                                                </React.Fragment>
                                                                            ))
                                                                        }
                                                                    </ul>
                                                                )
                                                        }
                                                    </Grid>
                                                </Grid>
                                                <Grid item lg={6} className="flex justify-end mt-12">
                                                    <StyledImage src={item.image} alt="image-terapeutic-number" />
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
            <StyledContainerBibliografia>
                <Container>
                    <Grid container>
                        <Grid item lg={6} className="pt-12">
                            <Grid item lg={12} className="pb-6">
                                <StyledSubTitleBibliografia>{bibliografias.title}</StyledSubTitleBibliografia>
                            </Grid>
                            <Grid item lg={12}>
                                <StyledTextBibliografia>{bibliografias.description}</StyledTextBibliografia>
                            </Grid>
                        </Grid>
                        <Grid item lg={6} className="pt-12 flex justify-center">
                            <StyledImage src={bibliografias.image} alt="Products"/>
                        </Grid>
                    </Grid>

                </Container>
            </StyledContainerBibliografia>
            <StyledImage src="http://localhost/api-proxis/wp-content/uploads/2021/12/Recurso-7-1.png" alt="Marcas"/>
        </React.Fragment>
    )
}

export default Bulcosan;
