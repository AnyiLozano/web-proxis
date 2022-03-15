import React, { FC } from "react";
import useProductsStyles from "./products.style";
import { Link, useParams } from "react-router-dom";
import Epiprot from "./Epiprot";
import Bulcosan from "./Bulcosan";
import Proctokinasa from "./Proctokinasa";
import { Grid } from "@mui/material";

const Products: FC = (): JSX.Element => {
    // Products
    const {
        StyledAppBarPage,
        StyledGrid,
        StyledGrid2,
        StyledGrid3
    } = useProductsStyles();

    const { type } = useParams();

    return (
        <React.Fragment>
            <StyledAppBarPage position="absolute">
                <Grid container>
                    <StyledGrid xs={4} lg={4} md={4} xl={4} className="flex justify-center items-center" selected={type === "epiprot" && true}>
                        <Link to="/products/epiprot" className="text-white">
                            Epiprot®
                        </Link>
                    </StyledGrid>
                    <StyledGrid2 xs={4} className="flex justify-center items-center" selected={type === "bulcosan" && true}>
                        <Link to="/products/bulcosan" className="text-white">
                            Bulcosan®
                        </Link>
                    </StyledGrid2>
                    <StyledGrid3 xs={4} className="flex justify-center items-center" selected={type === "proctokinasa" && true}>
                        <Link to="/products/proctokinasa" className="text-white">
                            Proctokinasa®
                        </Link>
                    </StyledGrid3>
                </Grid>
            </StyledAppBarPage>
            {
                type === "epiprot" 
                    ? <Epiprot/>
                    : type === "bulcosan"
                        ? <Bulcosan/>
                        : <Proctokinasa/>
            }
        </React.Fragment>
    )
}

export default Products;