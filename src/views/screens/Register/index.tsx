import { Checkbox, Container, FormControlLabel, Grid, TextField } from "@mui/material";
import React, { FC, useState } from "react";
import useLoginStyles from "./register.styles";
import { Link } from "react-router-dom";
import Select from "react-select";
import useControllers from "controllers";
import { Controller } from "react-hook-form";

const Register: FC = (): JSX.Element => {
    const {
        StyledImage,
        StyledTitle,
        StyledSection,
        StyledButton,
        StyledDescription,
        StyledSelect
    } = useLoginStyles();

    // States
    const [width, setWidth] = useState<number>(window.innerWidth);

    // Listeners
    window.addEventListener('resize', () => setWidth(window.innerWidth));

    // Controllers
    const { useScreenHooks } = useControllers();
    const { useAuth } = useScreenHooks();
    const { handleRegister, registerRegister, handleSubmitRegister } = useAuth();

    return (
        <React.Fragment>
            {
                width >= 1200 ? (
                    <StyledSection background="http://localhost/api-proxis/wp-content/uploads/2021/12/Recurso-7-3.png" style={{ height: "50.7rem" }}>
                        <Container>
                            <Grid container>
                                <Grid item lg={6} md={12} className="flex justify-center items-center">
                                    <Grid item lg={12} className="flex justify-center">
                                        <StyledImage src="http://localhost/api-proxis/wp-content/uploads/2021/12/Recurso-3-3.png" />
                                    </Grid>
                                </Grid>
                                <Grid item lg={6} className="flex justify-center w-full">
                                    <Grid item md={12}>
                                        <Grid md={12} className="pb-12 sm:pb-12">
                                            <StyledTitle>Registro</StyledTitle>
                                        </Grid>
                                        <Grid lg={12} className="pb-4 sm:pb-4 flex justify-center">
                                            <Controller
                                                control={registerRegister}
                                                name="username"
                                                render={({ field }) => (
                                                    <TextField
                                                        placeholder="Usuario"
                                                        className="w-full md:w-9/12"
                                                        label="Usuario"
                                                        {...field}
                                                    />
                                                )}

                                            />
                                        </Grid>
                                        <Grid lg={12} className="pb-4 sm:pb-4 flex justify-center">
                                            <Controller
                                                control={registerRegister}
                                                name="name"
                                                render={({ field }) => (
                                                    <TextField
                                                        placeholder="Nombres"
                                                        className="w-full md:w-9/12"
                                                        label="Nombres"
                                                        {...field}
                                                    />
                                                )}
                                            />
                                        </Grid>
                                        <Grid lg={12} className="pb-4 sm:pb-4 flex justify-center">
                                            <Controller
                                                control={registerRegister}
                                                name="last_name"
                                                render={({ field }) => (
                                                    <TextField
                                                        placeholder="Apellidos"
                                                        className="w-full md:w-9/12"
                                                        label="Apellidos"
                                                        {...field}
                                                    />
                                                )}
                                            />
                                        </Grid>
                                        <Grid md={12} className="pb-4 sm:pb-4 flex justify-center">
                                            <Controller
                                                control={registerRegister}
                                                name="phone"
                                                render={({ field }) => (
                                                    <TextField
                                                        placeholder="Telefono"
                                                        className="w-full md:w-9/12"
                                                        label="Telefono"
                                                        {...field}
                                                    />
                                                )}
                                            />
                                        </Grid>
                                        <Grid md={12} className="pb-4 sm:pb-4 flex justify-center">
                                            <Controller
                                                control={registerRegister}
                                                name="email"
                                                render={({ field }) => (
                                                    <TextField
                                                        placeholder="Correo Electronico"
                                                        className="w-full md:w-9/12"
                                                        label="Correo Electronico"
                                                        type="email"
                                                        {...field}
                                                    />
                                                )}
                                            />
                                        </Grid>
                                        <Grid md={12} className="pb-4 sm:pb-4 flex justify-center">
                                            <Controller
                                                control={registerRegister}
                                                name="password"
                                                render={({ field }) => (
                                                    <TextField
                                                        placeholder="Contraseña"
                                                        className="w-full md:w-9/12"
                                                        type="password"
                                                        label="Contraseña"
                                                        {...field}
                                                    />
                                                )}
                                            />

                                        </Grid>
                                        <Grid lg={12} className="pb-4 sm:pb-4 flex justify-center">
                                            <Controller
                                                control={registerRegister}
                                                name="profesion"
                                                render={({ field }) => (
                                                    <StyledSelect
                                                        placeholder="Profesion"
                                                        options={[{ value: 1, label: "Cardiologo" }]}
                                                        style={{ background: 'transparent' }}
                                                        {...field}
                                                    />
                                                )}
                                            />

                                        </Grid>
                                        <Grid lg={12} className="gap-4 py-6 sm:pb-6 flex justify-center">
                                            <StyledButton onClick={handleSubmitRegister(handleRegister)}>Registrarse</StyledButton>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Container>
                    </StyledSection>
                ) : (
                    <React.Fragment>
                        <StyledSection background="http://localhost/api-proxis/wp-content/uploads/2021/12/Recurso-7-3.png">
                            <Container>
                                <Grid item md={12} xs={12} className="pt-12">
                                    <Grid md={12} className="pb-12 sm:pb-12">
                                        <StyledTitle>Registro</StyledTitle>
                                    </Grid>
                                    <Grid lg={12} className="pb-4 sm:pb-4 flex justify-center">
                                        <Controller
                                            control={registerRegister}
                                            name="username"
                                            render={({ field }) => (
                                                <TextField
                                                    placeholder="Usuario"
                                                    className="w-full md:w-9/12"
                                                    label="Usuario"
                                                    {...field}
                                                />
                                            )}

                                        />
                                    </Grid>
                                    <Grid lg={12} className="pb-4 sm:pb-4 flex justify-center">
                                        <Controller
                                            control={registerRegister}
                                            name="name"
                                            render={({ field }) => (
                                                <TextField
                                                    placeholder="Nombres"
                                                    className="w-full md:w-9/12"
                                                    label="Nombres"
                                                    {...field}
                                                />
                                            )}
                                        />
                                    </Grid>
                                    <Grid lg={12} className="pb-4 sm:pb-4 flex justify-center">
                                        <Controller
                                            control={registerRegister}
                                            name="last_name"
                                            render={({ field }) => (
                                                <TextField
                                                    placeholder="Apellidos"
                                                    className="w-full md:w-9/12"
                                                    label="Apellidos"
                                                    {...field}
                                                />
                                            )}
                                        />
                                    </Grid>
                                    <Grid md={12} className="pb-4 sm:pb-4 flex justify-center">
                                        <Controller
                                            control={registerRegister}
                                            name="phone"
                                            render={({ field }) => (
                                                <TextField
                                                    placeholder="Telefono"
                                                    className="w-full md:w-9/12"
                                                    label="Telefono"
                                                    {...field}
                                                />
                                            )}
                                        />
                                    </Grid>
                                    <Grid md={12} className="pb-4 sm:pb-4 flex justify-center">
                                        <Controller
                                            control={registerRegister}
                                            name="email"
                                            render={({ field }) => (
                                                <TextField
                                                    placeholder="Correo Electronico"
                                                    className="w-full md:w-9/12"
                                                    label="Correo Electronico"
                                                    type="email"
                                                    {...field}
                                                />
                                            )}
                                        />
                                    </Grid>
                                    <Grid md={12} className="pb-4 sm:pb-4 flex justify-center">
                                        <Controller
                                            control={registerRegister}
                                            name="password"
                                            render={({ field }) => (
                                                <TextField
                                                    placeholder="Contraseña"
                                                    className="w-full md:w-9/12"
                                                    type="password"
                                                    label="Contraseña"
                                                    {...field}
                                                />
                                            )}
                                        />

                                    </Grid>
                                    <Grid lg={12} className="pb-4 sm:pb-4 flex justify-center">
                                        <Controller
                                            control={registerRegister}
                                            name="profesion"
                                            render={({ field }) => (
                                                <StyledSelect
                                                    placeholder="Profesion"
                                                    options={[{ value: 1, label: "Cardiologo" }]}
                                                    style={{ background: 'transparent' }}
                                                    {...field}
                                                />
                                            )}
                                        />

                                    </Grid>
                                    <Grid lg={12} className="gap-4 py-6 sm:pb-6 flex justify-center">
                                        <StyledButton onClick={handleSubmitRegister(handleRegister)}>Registrarse</StyledButton>
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
        </React.Fragment>
    );
};

export default Register;