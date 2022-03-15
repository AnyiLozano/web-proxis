import { Grid } from "@mui/material";
import React, { FC } from "react";
import { Link, useParams } from "react-router-dom";
import Cientifica from "./cientifica";
import Informacion from "./informacion";
import useProfesionalesStyles from "./profesionales.style";
import Salud from "./salud";

const Profesionales: FC = (): JSX.Element => {
    // Products
    const {
        StyledAppBarPage,
        StyledGrid,
        StyledGrid2,
        StyledGrid3
    } = useProfesionalesStyles();

    const { type } = useParams();

    return (
        <React.Fragment>
            <StyledAppBarPage position="absolute">
                <Grid container>
                    <StyledGrid xs={6} className="flex justify-center items-center" selected={type === "salud" && true}>
                        <Link to="/profesionales/salud" className="text-white">
                        Factor de Crecimiento Epidérmico
                        </Link>
                    </StyledGrid>
                    <StyledGrid2 xs={6} className="flex justify-center items-center" selected={type === "cientifica" && true}>
                        <Link to="/profesionales/cientifica" className="text-white">
                        Evidencia científica
                        </Link>
                    </StyledGrid2>
                   
                </Grid>
            </StyledAppBarPage>
            {
                type === "salud" 
                    ? <Salud/>
                    : type === "cientifica"
                        ? <Cientifica/>
                        : <Informacion/>
            }
        </React.Fragment>
    )
}

export default Profesionales;