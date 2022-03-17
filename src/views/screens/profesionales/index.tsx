import { Grid } from "@mui/material";
import useControllers from "controllers";
import useModels from "models";
import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Login from "../Login";
import useProductsStyles from "../products/products.style";
import Cientifica from "./cientifica";
import Informacion from "./informacion";
import useProfesionalesStyles from "./profesionales.style";
import Salud from "./salud";

const Profesionales: FC = (): JSX.Element => {
  // Products
  const { StyledAppBarPage, StyledGrid, StyledGrid2, StyledGrid3 } =
    useProfesionalesStyles();

  const { useSelectors } = useModels();
  const { useAuthSelectors } = useSelectors();
  const { loginSelector } = useAuthSelectors();
  const login = useSelector(loginSelector);
  const { StyledImage } = useProductsStyles();

  // Profesioanles
  const { useScreenHooks } = useControllers();
  const { useProducts } = useScreenHooks();
  const { products } = useProducts();

  const { epiprot } = products;

  const obj = {
    background:
      "https://api-praxis.eml.com.co/wp-content/uploads/2022/03/Banner_login.png",
    show: true,
  };

  const { type } = useParams();

  const [firstImage, setFirstImage] = useState<boolean>(false);

  return (
    <React.Fragment>
      {login.token === undefined ? (
        <React.Fragment>
          <Login {...obj} />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <StyledAppBarPage position="absolute">
            <Grid container>
              <StyledGrid
                xs={6}
                className="flex justify-center items-center"
                selected={type === "salud" && true}
              >
                <Link to="/profesionales/salud" className="text-white">
                  Factor de Crecimiento Epidérmico
                </Link>
              </StyledGrid>
              <StyledGrid2
                xs={6}
                className="flex justify-center items-center"
                selected={type === "cientifica" && true}
              >
                <Link to="/profesionales/cientifica" className="text-white">
                  Evidencia científica
                </Link>
              </StyledGrid2>
            </Grid>
          </StyledAppBarPage>
          {type === "salud" ? (
            <Salud />
          ) : type === "cientifica" ? (
            <Cientifica />
          ) : (
            <Informacion />
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Profesionales;
