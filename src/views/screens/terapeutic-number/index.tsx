import React, { FC } from "react";
import useTerapeuticNumberStyles from "./terapeutic-number.style";
import Heridas from "./Heridas";
import Ulceras from "./ulceras";
import { useParams, Link } from "react-router-dom";
import Diabetes from "./diabetes";
import Hemorroides from "./hemorroides";
import { Grid } from "@mui/material";

const TerapeuticNumber: FC = (): JSX.Element => {
    const {
        StyledAppBarPage,
        StyledGrid,
        StyledGrid3,
        StyledGrid4,
        StyledGrid2
    } = useTerapeuticNumberStyles();

    const { type } = useParams();

    return (
        <React.Fragment>
            <StyledAppBarPage position="absolute">
                <Grid container>
                    <StyledGrid xs={3} className="flex justify-center items-center" selected={type === "heridas" && true}>
                        <Link to="/terapeutic-number/heridas" className="text-white text-md">
                            Heridas
                        </Link>
                    </StyledGrid>
                    <StyledGrid2 xs={3} className="flex justify-center items-center" selected={type === "ulceras" && true}>
                        <Link to="/terapeutic-number/ulceras" className="text-white text-md">
                            Úlceras
                        </Link>
                    </StyledGrid2>
                    <StyledGrid3 xs={3} className="flex justify-center items-center" selected={type === "diabetes" && true}>
                        <Link to="/terapeutic-number/diabetes" className="text-white text-md">
                            Diabetes
                        </Link>
                    </StyledGrid3>
                    <StyledGrid4 xs={3} className="flex justify-center items-center" selected={type === "enfermedad-hemorrodial" && true}>
                        <Link to="/terapeutic-number/enfermedad-hemorrodial" className="text-white text-md">
                            Enfermedad hemorroidal
                        </Link>
                    </StyledGrid4>
                </Grid>
            </StyledAppBarPage>

            {
                type === "heridas"
                    ? <Heridas />
                    : type === "ulceras"
                        ? <Ulceras />
                        : type === "diabetes"
                            ? <Diabetes />
                            : <Hemorroides />
            }


        </React.Fragment>
    );
};

export default TerapeuticNumber;