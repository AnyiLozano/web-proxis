import React, {FC} from "react";
import {Box, Button, Collapse, Container, Fade, Grid, List, SwipeableDrawer, Toolbar} from "@mui/material";
import useHeaderStyles from "./header.style";
import useControllers from "controllers";
import {Link} from "react-router-dom";
import _ from "lodash";
import {ExpandLess, ExpandMore} from "@mui/icons-material";

const Header: FC = (): JSX.Element => {
    const {
        AppBarComponent,
        StyledButtonLogin,
        StyledAccountIcon,
        StyledButtonMenu,
        StyledContainerMenu,
        StyledHamburgerIcon,
        StyledContainerMenu2,
        StyledListItem
    } = useHeaderStyles();

    const {useScreenHooks, useComponentsHooks} = useControllers();
    const {useHeader} = useComponentsHooks();
    const {
        open,
        closeDrawer,
        openDrawer,
        expandMenu,
        expand
    } = useHeader();
    const {useGeneral} = useScreenHooks();
    const {assets, menus} = useGeneral();
    const {logo} = assets;
    return (
        <React.Fragment>
            <AppBarComponent position="absolute">
                <Container maxWidth="xl">

                    <Toolbar className="py-6">
                        <img src={logo} alt="Logo Profix"/>
                        <StyledContainerMenu item md={12}>
                            <Grid item md={12} className="flex justify-end">
                                <Link to="/login">
                                    <StyledButtonLogin>
                                        Iniciar Sesión
                                        <StyledAccountIcon/>
                                    </StyledButtonLogin>
                                </Link>
                            </Grid>
                            <Grid item md={12} className="flex justify-end">
                                <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}
                                     className="flex justify-end mt-4">
                                    {
                                        _.map(menus, (item: any, index: any) => {
                                            if (item.submenus !== undefined && item.submenus.length > 0) {
                                                return (
                                                    <div className="nav-item dropdown">
                                                        <StyledButtonMenu
                                                            className="nav-link dropdown-toggle"
                                                            id="navbarDropdown"
                                                            role="button"
                                                            data-toggle="dropdown"
                                                            aria-expanded="false"
                                                        >
                                                            {item.text}
                                                        </StyledButtonMenu>
                                                        <div className="dropdown-menu px-6" aria-labelledby="navbarDropdown">
                                                            {
                                                                _.map(item.submenus, (submenu: any, idx: number) => (
                                                                    <StyledButtonMenu>
                                                                        <Link to={submenu.path} key={idx}>
                                                                            {submenu.text}
                                                                        </Link>
                                                                    </StyledButtonMenu>
                                                                ))
                                                            }
                                                        </div>
                                                    </div>
                                                );
                                            } else {
                                                return (
                                                    <Link to={item.path} key={index}>
                                                        <StyledButtonMenu>
                                                            {item.text}
                                                        </StyledButtonMenu>
                                                    </Link>
                                                );
                                            }
                                        })
                                    }
                                </Box>
                            </Grid>
                        </StyledContainerMenu>
                        <StyledContainerMenu2 item md={12} sm={12} xs={12}>
                            <Button onClick={openDrawer}>
                                <StyledHamburgerIcon color="#004289"/>
                            </Button>
                            <SwipeableDrawer
                                anchor="right"
                                open={open}
                                onOpen={openDrawer}
                                onClose={closeDrawer}
                            >
                                <Box className="px-6 py-6">
                                    <List>
                                        {
                                            _.map(menus, (item: any, index: any) => {
                                                if (item.submenus !== undefined && item.submenus.length > 0) {
                                                    return (
                                                        <React.Fragment>
                                                            <StyledListItem onClick={expandMenu} key={index}>
                                                                {item.text}
                                                                {expand ? <ExpandLess/> : <ExpandMore/>}
                                                            </StyledListItem>
                                                            <Collapse in={expand} timeout="auto" unmountOnExit>
                                                                <Fade in={expand}>
                                                                    <List component="div" disablePadding>
                                                                        {
                                                                            _.map(item.submenus, (submenu: any, idx: number) => (
                                                                                <StyledListItem sx={{pl: 4}}>
                                                                                    <Link to={submenu.path}>
                                                                                        {submenu.text}
                                                                                    </Link>
                                                                                </StyledListItem>
                                                                            ))
                                                                        }
                                                                    </List>
                                                                </Fade>
                                                            </Collapse>
                                                        </React.Fragment>
                                                    )
                                                } else {
                                                    return (
                                                        <StyledListItem key={index}>
                                                            <Link to={item.path}>
                                                                {item.text}
                                                            </Link>
                                                        </StyledListItem>
                                                    );
                                                }
                                            })
                                        }
                                        <StyledListItem>
                                            <Link to="/login">
                                                <StyledButtonLogin>
                                                    Iniciar Sesión
                                                    <StyledAccountIcon/>
                                                </StyledButtonLogin>
                                            </Link>
                                        </StyledListItem>
                                    </List>
                                </Box>
                            </SwipeableDrawer>
                        </StyledContainerMenu2>
                    </Toolbar>
                </Container>
            </AppBarComponent>
        </React.Fragment>
    );
}

export default Header;