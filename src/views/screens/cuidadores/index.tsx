import { Toolbar } from '@mui/material';
import React from 'react'
import useCuidadoresStyles from './cuidadores.styles';
import { Link, useParams } from "react-router-dom";
import TuPapel from './cuidadores copy';
import Artesanal from './artesanal';

const Cuidadores = () => {
    // Styles
    const {
        StyledAppBarPage,
        StyledGrid,
        StyledGrid2
    } = useCuidadoresStyles();

    const { type } = useParams();

    console.log(type);

    return (
        <React.Fragment>
            <StyledAppBarPage position="absolute">
                <Toolbar>
                    <StyledGrid xs={6} className="flex justify-center items-center" selected={type === "tu-papel" && true}>
                        <Link to="/cuidadores/tu-papel" className="text-white">
                            Tu papel
                        </Link>
                    </StyledGrid>
                    <StyledGrid2 xs={6} className="flex justify-center items-center" selected={type === "artesanal" && true}>
                        <Link to="/cuidadores/artesanal" className="text-white">
                            Una tarea artesanal
                        </Link>
                    </StyledGrid2>
                </Toolbar>
            </StyledAppBarPage>
            {
                type === "tu-papel" 
                    ? <TuPapel/>
                    : <Artesanal/>
            }
        </React.Fragment>
    )
}

export default Cuidadores;