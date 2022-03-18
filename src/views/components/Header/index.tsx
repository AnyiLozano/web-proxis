import React, { FC } from "react";
import {
  Box,
  Button,
  Collapse,
  Container,
  Fade,
  Grid,
  List,
  SwipeableDrawer,
} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import useHeaderStyles from "./header.style";
import useControllers from "controllers";
import { Link } from "react-router-dom";
import _ from "lodash";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const Header: FC = (): JSX.Element => {
  const {
    AppBarComponent,
    StyledButtonLogin,
    StyledAccountIcon,
    StyledButtonMenu,
    StyledContainerMenu,
    StyledHamburgerIcon,
    StyledContainerMenu2,
    StyledListItem,
  } = useHeaderStyles();

  const { useScreenHooks, useComponentsHooks } = useControllers();
  const { useHeader } = useComponentsHooks();
  const {
    open,
    closeDrawer,
    openDrawer,
    expandMenu,
    expand,
    expand1,
    login,
    closeSesion,
  } = useHeader();
  const { useGeneral } = useScreenHooks();
  const { menus } = useGeneral();

  return (
    <React.Fragment>
      <AppBarComponent position="fixed">
        <Container maxWidth="xl">
          <Toolbar
            className="py-6"
            style={{ justifyContent: "space-between" }}
            variant="regular"
          >
            <img src={"http://api-praxis.eml.com.co/wp-content/uploads/2022/03/Recurso-13.png"} alt="Logo Profix" />
            <StyledContainerMenu item md={12}>
              <Grid item md={12} className="flex justify-end">
                {login.token !== undefined ? (
                  <React.Fragment>
                    {login.user.role === "admin" ? (
                      <React.Fragment>
                        <StyledButtonLogin
                          className="nav-link dropdown-toggle"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Hola! Dr(a). {login.user.fullname}
                          <StyledAccountIcon />
                        </StyledButtonLogin>
                        <div
                          className="dropdown-menu pr-6"
                          aria-labelledby="navbarDropdown"
                        >
                          <StyledButtonMenu>
                            <Link to="/active-users">Activar usuarios</Link>
                          </StyledButtonMenu>

                          <StyledButtonMenu isSubmenu onClick={() => closeSesion()}>
                            Cerrar Sesion
                          </StyledButtonMenu>
                        </div>
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        <StyledButtonLogin
                          className="nav-link dropdown-toggle"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Hola! Dr(a). {login.user.fullname}
                          <StyledAccountIcon />
                        </StyledButtonLogin>
                        <div
                          className="dropdown-menu pr-6"
                          aria-labelledby="navbarDropdown"
                        >
                          <StyledButtonMenu onClick={() => closeSesion()}>
                            Cerrar Sesion
                          </StyledButtonMenu>
                        </div>
                      </React.Fragment>
                    )}
                  </React.Fragment>
                ) : (
                  <Link to="/login">
                    <StyledButtonLogin>
                      Iniciar Sesión
                      <StyledAccountIcon />
                    </StyledButtonLogin>
                  </Link>
                )}
              </Grid>
              <Grid item md={12} className="flex justify-end">
                <Box
                  sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
                  className="flex justify-end mt-4"
                >
                  {_.map(menus, (item: any, index: any) => {
                    if (
                      item.submenus !== undefined &&
                      item.submenus.length > 0
                    ) {
                      return (
                        <div className="nav-item dropdown" key={index}>
                          <StyledButtonMenu
                            className="nav-link dropdown-toggle"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            {item.post_title}
                          </StyledButtonMenu>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdown"
                          >
                            {_.map(
                              item.submenus,
                              (submenu: any, idx: number) => (
                                <React.Fragment>
                                  <StyledButtonMenu key={idx} isSubmenu>
                                    <Link to={submenu.url}>
                                      {submenu.post_title}
                                    </Link>
                                  </StyledButtonMenu>
                                </React.Fragment>
                              )
                            )}
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <Link to={item.url} key={index}>
                          <StyledButtonMenu>{item.post_title}</StyledButtonMenu>
                        </Link>
                      );
                    }
                  })}
                </Box>
              </Grid>
            </StyledContainerMenu>
            <StyledContainerMenu2 item md={12} sm={12} xs={12}>
              <Button onClick={openDrawer}>
                <StyledHamburgerIcon color="#004289" />
              </Button>
              <SwipeableDrawer
                anchor="right"
                open={open}
                onOpen={openDrawer}
                onClose={closeDrawer}
              >
                <Box className="px-6 py-6">
                  <List>
                    {login.token !== undefined ? (
                      <React.Fragment>
                        {login.user.role === "Administrador" ? (
                          <React.Fragment>
                            <StyledListItem
                              onClick={() => expandMenu("personal")}
                            >
                              <b>Hola!, Dr(a) {login.user.fullname}</b>
                              {expand ? <ExpandLess /> : <ExpandMore />}
                            </StyledListItem>
                            <Collapse in={expand1} timeout="auto" unmountOnExit>
                              <Fade in={expand1}>
                                <List component="div" disablePadding>
                                  <StyledListItem sx={{ pl: 4 }}>
                                    <Link to="/active-users">
                                      Activar Usuarios
                                    </Link>
                                  </StyledListItem>

                                  <StyledListItem
                                    sx={{ pl: 4 }}
                                    onClick={() => closeSesion()}
                                  >
                                    Cerrar Sesion
                                  </StyledListItem>
                                </List>
                              </Fade>
                            </Collapse>
                          </React.Fragment>
                        ) : (
                          <React.Fragment>
                            <StyledListItem
                              onClick={() => expandMenu("personal")}
                            >
                              <b>Hola!, Dr(a) {login.user.fullname}</b>
                              {expand ? <ExpandLess /> : <ExpandMore />}
                            </StyledListItem>
                            <Collapse in={expand} timeout="auto" unmountOnExit>
                              <Fade in={expand}>
                                <List component="div" disablePadding>
                                  <StyledListItem
                                    sx={{ pl: 4 }}
                                    onClick={() => closeSesion()}
                                  >
                                    Cerrar Sesion
                                  </StyledListItem>
                                </List>
                              </Fade>
                            </Collapse>
                          </React.Fragment>
                        )}
                      </React.Fragment>
                    ) : (
                      <StyledListItem>
                        <Link to="/login">
                          <StyledButtonLogin>
                            Iniciar Sesión
                            <StyledAccountIcon />
                          </StyledButtonLogin>
                        </Link>
                      </StyledListItem>
                    )}

                    {_.map(menus, (item: any, index: any) => {
                      if (
                        item.submenus !== undefined &&
                        item.submenus.length > 0
                      ) {
                        return (
                          <React.Fragment>
                            <StyledListItem
                              onClick={() => expandMenu("menu")}
                              key={index}
                            >
                              {item.post_title}
                              {expand ? <ExpandLess /> : <ExpandMore />}
                            </StyledListItem>
                            <Collapse in={expand} timeout="auto" unmountOnExit>
                              <Fade in={expand}>
                                <List component="div" disablePadding>
                                  {_.map(
                                    item.submenus,
                                    (submenu: any, idx: number) => (
                                      <StyledListItem sx={{ pl: 4 }} key={idx}>
                                        <Link to={submenu.url}>
                                          {submenu.post_title}
                                        </Link>
                                      </StyledListItem>
                                    )
                                  )}
                                </List>
                              </Fade>
                            </Collapse>
                          </React.Fragment>
                        );
                      } else {
                        return (
                          <StyledListItem key={index}>
                            <Link to={item.url}>{item.post_title}</Link>
                          </StyledListItem>
                        );
                      }
                    })}
                  </List>
                </Box>
              </SwipeableDrawer>
            </StyledContainerMenu2>
          </Toolbar>
        </Container>
      </AppBarComponent>
    </React.Fragment>
  );
};

export default Header;
