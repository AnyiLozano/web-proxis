import React from "react";
import { Grid } from "@mui/material";
import useCientificaStyles from "./cientifica.style";
import { Link } from "react-router-dom";
import useControllers from "controllers";

const Cientifica = () => {
  // Styles
  const { StyledSection4, StyledTitleSection2, StyledImage2, ContainerStyled } =
    useCientificaStyles();

  const { useScreenHooks } = useControllers();
  const { useProducts } = useScreenHooks();
  const { products } = useProducts();
  const { cuidadores } = products;

  return (
    <React.Fragment>
      <StyledSection4 background={cuidadores !== undefined && cuidadores.artesanalBackground.content}>
        <ContainerStyled>
          <Grid item md={12} className="flex justify-center py-12">
            <StyledTitleSection2>Evidencia científica</StyledTitleSection2>
          </Grid>
          <Grid item md={12} className="py-12">
            <Link to="/">
              <StyledImage2 src={cuidadores !== undefined && cuidadores.evidencia_cientificac.content   } />
            </Link>
          </Grid>
        </ContainerStyled>
      </StyledSection4>
    </React.Fragment>
  );
};

export default Cientifica;
