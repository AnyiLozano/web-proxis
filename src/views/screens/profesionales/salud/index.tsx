import React from "react";
import { Grid } from "@mui/material";
import useSaludStyles from "./salud.style";

const Salud = () => {
    // Styles
    const {
        StyledSection4,
        StyledTitleSection2,
        ContainerStyled
    } = useSaludStyles();

    return (
        <React.Fragment>
            <StyledSection4 background="http://localhost/api-proxis/wp-content/uploads/2021/12/Recurso-7-3.png" >
                <ContainerStyled>
                    <Grid item md={12} className="flex justify-center py-12">
                        <StyledTitleSection2>Factor de Crecimiento Epidérmico <br/>
                            recombinante humano</StyledTitleSection2>
                    </Grid>
                    <Grid item lg={12} className="pb-16">
                        <video controls width="100%" >
                            <source src="http://localhost/api-proxis/wp-content/uploads/2021/12/Praxis-English-Academy.mp4"></source>
                        </video>
                    </Grid>
                    <Grid item md={12} className="pb-12">
                        <span className="text-xs md:text-sm">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut. </span>
                    </Grid>
                </ContainerStyled>
            </StyledSection4>
        </React.Fragment>
    );
}

export default Salud;