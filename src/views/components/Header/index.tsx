import React, { FC } from "react";
import { AppBar, Toolbar } from "@mui/material";
import useHeaderStyles from "./header.style";

const Header : FC = () : JSX.Element => {
    const {
        AppBarComponent,
    } = useHeaderStyles();

    return (
        <React.Fragment>
           <AppBarComponent position="absolute">
                <Toolbar>
                    
                </Toolbar>
           </AppBarComponent>
        </React.Fragment>
    );
}

export default Header;