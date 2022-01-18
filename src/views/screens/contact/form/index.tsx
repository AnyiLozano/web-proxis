import { Alert, Card, Container, Grid, Snackbar, TextField } from "@mui/material";
import useControllers from "controllers";
import React, { FC } from "react";
import { Controller } from "react-hook-form";
import useContactStyles from "../contact.style";

const FormContact: FC = (): JSX.Element => {
    const { StyledSection, StyledButtonPresentation, StyledTitleSection, StyledTitle, StyledImage } = useContactStyles();

    const { useScreenHooks } = useControllers();
    const { useContact } = useScreenHooks();
    const {
        width,
        control,
        handleSentContact,
        handleSubmit,
        open,
        variant,
        text,
        handleClose,
    } = useContact();

    return (
        <React.Fragment>
            {
                width >= 1200 ? (
                    <StyledSection background="http://localhost/api-proxis/wp-content/uploads/2021/12/Recurso-2-3.png" style={{ height: 1080, display: 'flex', alignItems: 'center' }}>
                        <Container>
                            <Grid item lg={12} className="flex justify-center">
                                <Card sx={{ width: '50%', background: '#ffffffc4', padding: "2rem", marginBottom: '4rem' }}>
                                    <Grid item lg={12} className="flex justify-center">
                                        <StyledTitleSection>Contáctenos</StyledTitleSection>
                                    </Grid>
                                    <Grid item lg={12} className="md:pt-6">
                                        <Controller
                                            control={control}
                                            rules={{
                                                required: {
                                                    value: true,
                                                    message: "Este campo es obligatorio."
                                                }
                                            }}
                                            name="name"
                                            render={({ field, fieldState, formState }) => {
                                                return (
                                                    <React.Fragment>
                                                        <TextField
                                                            label="Nombre Completo"
                                                            type="text"
                                                            id={field.name}
                                                            fullWidth
                                                            name={field.name}
                                                            onChange={(e) => {
                                                                field.onChange(e);
                                                            }}
                                                            ref={field.ref}
                                                            value={field.value}
                                                        />
                                                        <small>{fieldState.error?.message}</small>
                                                    </React.Fragment>
                                                )
                                            }}
                                        />

                                    </Grid>
                                    <Grid item lg={12} className="md:pt-6">
                                        <Controller
                                            control={control}
                                            rules={{
                                                required: {
                                                    value: true,
                                                    message: "Este campo es obligatorio."
                                                }
                                            }}
                                            name="email"
                                            render={({ field, fieldState, formState }) => {
                                                return (
                                                    <React.Fragment>
                                                        <TextField
                                                            label="Correo Electronico"
                                                            type="email"
                                                            id={field.name}
                                                            fullWidth
                                                            name={field.name}
                                                            onChange={(e) => {
                                                                field.onChange(e);
                                                            }}
                                                            ref={field.ref}
                                                            value={field.value}
                                                        />
                                                        <small>{fieldState.error?.message}</small>
                                                    </React.Fragment>
                                                )
                                            }}
                                        />
                                    </Grid>
                                    <Grid item lg={12} className="md:pt-6">
                                        <Controller
                                            control={control}
                                            name="message"
                                            rules={{
                                                required: {
                                                    value: true,
                                                    message: "El campo es requerido"
                                                }
                                            }}
                                            render={({ field, fieldState, formState }) => {
                                                return (
                                                    <TextField
                                                        label="Mensaje"
                                                        type="text"
                                                        multiline
                                                        rows={6}
                                                        id={field.name}
                                                        onChange={(e) => {
                                                            field.onChange(e);
                                                        }}
                                                        value={field.value}
                                                        fullWidth
                                                    />
                                                )
                                            }}
                                        />

                                    </Grid>
                                    <Grid item lg={12} className="md:pt-6 flex justify-center">
                                        <StyledButtonPresentation onClick={handleSubmit(handleSentContact)}>Enviar</StyledButtonPresentation>
                                    </Grid>
                                </Card>
                            </Grid>
                        </Container>
                    </StyledSection>
                ) : (
                    <StyledSection className="pt-36">
                        <Grid item md={12} className="flex justify-center">
                            <Card sx={{ width: '90%', background: '#ffffffc4', padding: "2rem", marginBottom: '4rem' }}>
                                <Grid item lg={12} className="flex justify-center">
                                    <StyledTitle className="py-8">Contáctenos</StyledTitle>
                                </Grid>
                                <Grid item lg={12} className="pt-6">
                                    <Controller
                                        control={control}
                                        rules={{
                                            required: {
                                                value: true,
                                                message: "Este campo es obligatorio."
                                            }
                                        }}
                                        name="name"
                                        render={({ field, fieldState, formState }) => {
                                            return (
                                                <React.Fragment>
                                                    <TextField
                                                        label="Nombre Completo"
                                                        type="text"
                                                        id={field.name}
                                                        fullWidth
                                                        name={field.name}
                                                        onChange={(e) => {
                                                            field.onChange(e);
                                                        }}
                                                        ref={field.ref}
                                                        value={field.value}
                                                    />
                                                    <small>{fieldState.error?.message}</small>
                                                </React.Fragment>
                                            )
                                        }}
                                    />
                                </Grid>
                                <Grid item lg={12} className="pt-6">
                                    <Controller
                                        control={control}
                                        rules={{
                                            required: {
                                                value: true,
                                                message: "Este campo es obligatorio."
                                            }
                                        }}
                                        name="email"
                                        render={({ field, fieldState, formState }) => {
                                            return (
                                                <React.Fragment>
                                                    <TextField
                                                        label="Correo Electronico"
                                                        type="email"
                                                        id={field.name}
                                                        fullWidth
                                                        name={field.name}
                                                        onChange={(e) => {
                                                            field.onChange(e);
                                                        }}
                                                        ref={field.ref}
                                                        value={field.value}
                                                    />
                                                    <small>{fieldState.error?.message}</small>
                                                </React.Fragment>
                                            )
                                        }}
                                    />
                                </Grid>
                                <Grid item lg={12} className="pt-6">
                                    <Controller
                                        control={control}
                                        name="message"
                                        rules={{
                                            required: {
                                                value: true,
                                                message: "El campo es requerido"
                                            }
                                        }}
                                        render={({ field, fieldState, formState }) => {
                                            return (
                                                <TextField
                                                    label="Mensaje"
                                                    type="text"
                                                    multiline
                                                    rows={6}
                                                    id={field.name}
                                                    onChange={(e) => {
                                                        field.onChange(e);
                                                    }}
                                                    value={field.value}
                                                    fullWidth
                                                />
                                            )
                                        }}
                                    />
                                </Grid>
                                <Grid item lg={12} className="pt-6 flex justify-center">
                                    <StyledButtonPresentation onClick={handleSubmit(handleSentContact)}>Enviar</StyledButtonPresentation>
                                </Grid>
                            </Card>
                        </Grid>
                        <Grid item lg={12}>
                            <StyledImage src="http://localhost/api-proxis/wp-content/uploads/2021/12/Recurso-2-2.png" alt="Chica" />
                        </Grid>
                    </StyledSection>
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
}

export default FormContact;