import React, { FC } from "react";
import useControllers from "controllers";

const Home : FC = () : JSX.Element => {
    const { useHome } = useControllers();
    const {} = useHome();
    return (
        <span>Hola Soy El Home!</span>
    )
}

export default Home;