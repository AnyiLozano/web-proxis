import { Container, Grid } from '@mui/material';
import useControllers from 'controllers';
import React from 'react'
import usePacientesStyles from './pacientes.styles';
import _ from "lodash";
import { Link } from "react-router-dom";

const Pacientes = () => {
    // Controllers
    const { useScreenHooks } = useControllers();
    const { usePacientes } = useScreenHooks();
    const { image, background, posts } = usePacientes();

    // Styles
    const {
        StyledImage,
        StyledImage1,
        StyledSection,
        StyledTitle,
        StyledTitle2,
        StyledButtonViewMore
    } = usePacientesStyles();
    return (
        <React.Fragment>
            <Grid item lg={12}>
                <StyledImage1 src={image?.content} alt="Pacients' Image" />
            </Grid>
            <StyledSection item lg={12} background={background?.content}>
                <Container>
                    <Grid item lg={12}>
                        <StyledTitle className="text-center">Historias de vida</StyledTitle>
                    </Grid>
                    <Grid item lg={12}>
                        <Grid container>
                            {
                                _.map(posts, (item: any, index: number) => (
                                    <Grid item lg={4} className="px-10 pb-10">
                                        <StyledImage src={item.image} alt="image" className="pb-6" />
                                        <StyledTitle2>{item.post_title}</StyledTitle2>
                                        <Grid item lg={12} className="flex justify-center">
                                            <Link to={`/detail/${item.ID}`}>
                                                <StyledButtonViewMore>Seguir Leyendo</StyledButtonViewMore>
                                            </Link>
                                        </Grid>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Grid>
                </Container>
            </StyledSection>
        </React.Fragment>
    )
}

export default Pacientes;
