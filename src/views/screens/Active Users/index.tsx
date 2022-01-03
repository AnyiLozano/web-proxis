import { Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Theme, withStyles } from "@mui/material";
import React, { FC } from "react";
import _ from "lodash";
import useActiveUsers from "./hook";
import useActiveStyles from "./active.styles";

const ActiveUsers: FC = (): JSX.Element => {
    // Controller
    const { users, activateUser, deletedUser } = useActiveUsers();
    console.log(users)
    const { StyledContainer } = useActiveStyles()

    return (
        <React.Fragment>
            <StyledContainer background="http://localhost/api-proxis/wp-content/uploads/2021/12/Recurso-7-3.png">
                <Container>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableCell align="center">Nombre Completo</TableCell>
                                <TableCell align="center">Profesion</TableCell>
                                <TableCell align="center">Correo Electronico</TableCell>
                                <TableCell align="center">Telefono</TableCell>
                                <TableCell align="center">Aprobar</TableCell>
                                <TableCell align="center">Eliminar</TableCell>
                            </TableHead>
                            <TableBody>
                                {
                                    _.map(users, (item: any, index: any) => (
                                        <TableRow key={index}>
                                            <TableCell align="center">{item.fullname}</TableCell>
                                            <TableCell align="center">{item.profesion}</TableCell>
                                            <TableCell align="center">{item.email}</TableCell>
                                            <TableCell align="center">{item.phone}</TableCell>
                                            <TableCell align="center" onClick={() => activateUser(item.id)}>
                                                <Grid item md={12} className="flex justify-center">
                                                    <img src="http://localhost/api-proxis/wp-content/uploads/2021/12/Recurso-1-1.png" />
                                                </Grid>
                                            </TableCell>
                                            <TableCell align="center" onClick={() => deletedUser(item.id)}>
                                                <Grid item md={12} className="flex justify-center">
                                                    <img src="http://localhost/api-proxis/wp-content/uploads/2021/12/Recurso-2-4.png" />
                                                </Grid>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Container>
            </StyledContainer>
        </React.Fragment>
    );
};

export default ActiveUsers;