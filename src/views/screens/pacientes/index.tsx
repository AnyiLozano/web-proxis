import { Container, Grid } from '@mui/material';
import useControllers from 'controllers';
import React from 'react'
import usePacientesStyles from './pacientes.styles';
import _ from "lodash";
import { Link } from "react-router-dom";
import { StyledContainer } from '../terapeutic-number/terapeutic-number.style';

const Pacientes = () => {
    const { useScreenHooks } = useControllers();
  const { useBlog } = useScreenHooks();
  const { recentPosts } = useBlog("principal");

    // Styles
    const {
        StyledImage,
        StyledImage1,
        StyledSection,
        StyledTitle,
        StyledButtonViewMore
    } = usePacientesStyles();
    return (
        <React.Fragment>
            <StyledContainer maxWidth="lg">
            <Grid item lg={12}>
                <StyledImage1 src={"http://api-praxis.eml.com.co/wp-content/uploads/2022/03/pacientesfondobackground.png"} alt="Pacients' Image" />
            </Grid>
            <StyledSection item lg={12} background='http://api-praxis.eml.com.co/wp-content/uploads/2022/03/historias_de_vida.png'>
                <Container>
                    <Grid item lg={12}> 
                        <StyledTitle className="text-center" style={{ fontFamily: "montserrat, bold", }}>Historias de vida</StyledTitle>
                    </Grid>
                    <Grid item lg={12}>
                        <Grid container>
                            {
                                _.map(recentPosts, (item: any, index: number) => (
                                    <Grid item lg={4} className="px-10 pb-10">
                                        <StyledImage src={item.image} alt="image" className="pb-6 w-full" />
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nobis esse in suscipit et. Tempore labore temporibus ut pariatur est dolore nihil earum! Similique harum assumenda repudiandae quis. Inventore, autem?</p>
                                        <Grid item lg={12} className="">
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
            </StyledContainer>
        </React.Fragment>
    )
}

export default Pacientes;
