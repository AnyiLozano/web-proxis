import React, { FC } from "react";
import { Toolbar } from "@mui/material";
import useTerapeuticNumberStyles from "./terapeutic-number.style";
import Heridas from "./Heridas";
import Ulceras from "./ulceras";
import { useParams, Link } from "react-router-dom";
import Diabetes from "./diabetes";
import Hemorroides from "./hemorroides";

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
                <Toolbar>
                    <StyledGrid xs={3} className="flex justify-center items-center" selected={type === "heridas" && true}>
                        <Link to="/terapeutic-number/heridas" className="text-white text-xs">
                            Heridas
                        </Link>
                    </StyledGrid>
                    <StyledGrid2 xs={3} className="flex justify-center items-center" selected={type === "ulceras" && true}>
                        <Link to="/terapeutic-number/ulceras" className="text-white text-xs">
                            Ulceras
                        </Link>
                    </StyledGrid2>
                    <StyledGrid3 xs={3} className="flex justify-center items-center" selected={type === "diabetes" && true}>
                        <Link to="/terapeutic-number/diabetes" className="text-white text-xs">
                            Diabetes
                        </Link>
                    </StyledGrid3>
                    <StyledGrid4 xs={3} className="flex justify-center items-center" selected={type === "enfermedad-hemorrodial" && true}>
                        <Link to="/terapeutic-number/enfermedad-hemorrodial" className="text-white text-xs">
                            Enfermedad Hemorrodial
                        </Link>
                    </StyledGrid4>
                </Toolbar>
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