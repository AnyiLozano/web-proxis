import { Alert, Checkbox, Container, FormControlLabel, Grid, Snackbar, TextField } from "@mui/material";
import React, { FC, useState } from "react";
import useLoginStyles from "./login.styles";
import { Link } from "react-router-dom";
import useControllers from "controllers";

const Login: FC<{ background: string, show:boolean }> = (background): JSX.Element => {

    const {
        StyledImage,
        StyledTitle,
        StyledSection,
        StyledButton,
        StyledDescription
    } = useLoginStyles();

    // States
    const [width, setWidth] = useState<number>(window.innerWidth);

    // Listeners
    window.addEventListener('resize', () => setWidth(window.innerWidth));

    // Controllers
    const { useScreenHooks } = useControllers();
    const { useAuth } = useScreenHooks();
    const {
        open,
        handleSubmit,
        handleLogin,
        register,
        variant,
        text,
        handleClose
    } = useAuth();

    return (
        <React.Fragment>
            {
                width >= 1200 ? (
                    <StyledSection background={background.background !== undefined ? background.background : "http://api-praxis.eml.com.co/wp-content/uploads/2022/03/registro-1.png"} style={{ height: "60.7rem" }}>
                        <Container>
                            <Grid container>
                                <Grid item lg={6} md={12} className="flex justify-center pb-12 sm:pb-1">
                                    {/* {
                                       !background.show && (
                                            // <StyledImage src="http://api-praxis.test/wp-content/uploads/2022/03/registro-1.png" />
                                        )
                                    } */}
                                </Grid>
                                <Grid item lg={6} className="flex justify-center w-full">
                                    <Grid item md={12}>
                                        <Grid md={12} className="pb-12 sm:pb-12">
                                            <StyledTitle>Ingreso</StyledTitle>
                                        </Grid>
                                        <Grid lg={12} className="pb-4 sm:pb-4 flex justify-center">
                                            <TextField {...register('email')} placeholder="Correo Electronico" className="w-full md:w-9/12" label="Correo Electronico" />
                                        </Grid>
                                        <Grid md={12} className="pb-1 sm:pb-1 flex justify-center">
                                            <TextField {...register('password')} placeholder="Contraseña" className="w-full md:w-9/12" type="password" label="Contraseña" />
                                        </Grid>
                                        <Grid lg={12} className="pb-6 sm:pb-6 flex justify-center">
                                            <FormControlLabel control={<Checkbox defaultChecked />} label="Recordar mis datos" style={{ color: "#666666", fontFamily: "'Montserrat', sans-serif !important" }} />
                                        </Grid>
                                        <Grid lg={12} className="gap-4 pb-6 sm:pb-6 flex justify-center">
                                            <StyledButton onClick={handleSubmit(handleLogin)}>Iniciar</StyledButton>
                                            <Link to="/register">
                                                <StyledButton>Registrarse</StyledButton>
                                            </Link>
                                        </Grid>
                                        {/* <Grid lg={12} className="gap-4 flex justify-center">
                                            <Link to="/recovery-password">
                                                <StyledDescription>Recuperar Contraseña</StyledDescription>
                                            </Link>
                                        </Grid> */}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Container>
                    </StyledSection>
                ) : (
                    <React.Fragment>
                        <StyledSection background="http://api-praxis.test/wp-content/uploads/2022/03/registro-1.png">
                            <Container>
                                <Grid item md={12} xs={12} className="pt-12">
                                    <Grid md={12} className="pb-12 sm:pb-12">
                                        <StyledTitle>Ingreso</StyledTitle>
                                    </Grid>
                                    <Grid lg={12} className="pb-4 sm:pb-4 flex justify-center">
                                        <TextField {...register('email')} placeholder="Correo Electronico" className="w-full md:w-9/12" label="Correo Electronico" />
                                    </Grid>
                                    <Grid md={12} className="pb-1 sm:pb-1 flex justify-center">
                                        <TextField {...register('password')} placeholder="Contraseña" className="w-full md:w-9/12" type="password" label="Contraseña" />
                                    </Grid>
                                    <Grid lg={12} className="pb-6 sm:pb-6 flex justify-center">
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Recordar mis datos" style={{ color: "#666666", fontFamily: "'Montserrat', sans-serif !important" }} />
                                    </Grid>
                                    <Grid lg={12} className="gap-4 pb-6 sm:pb-6 flex justify-center">
                                        <StyledButton onClick={handleSubmit(handleLogin)}>Iniciar</StyledButton>
                                        <Link to="/register">
                                            <StyledButton>Registrarse</StyledButton>
                                        </Link>
                                    </Grid>
                                    <Grid lg={12} className="gap-4 flex justify-center">
                                        <Link to="/recovery-password">
                                            <StyledDescription>Recuperar Contraseña</StyledDescription>
                                        </Link>
                                    </Grid>
                                </Grid>
                                <Grid item md={12} xs={12} className="flex justify-center py-12">
                                    <StyledImage src="http://localhost/api-proxis/wp-content/uploads/2021/12/Recurso-3-3.png" />
                                </Grid>
                            </Container>
                        </StyledSection>
                    </React.Fragment>
                )
            }

            <Snackbar
                open={open}
                autoHideDuration={20000}
                onClose={handleClose}
            >
                <Alert
                    severity={variant === "error" ? "error" : "success"}
                >
                    {text}
                </Alert>
            </Snackbar>
        </React.Fragment>
    );
};

export default Login;