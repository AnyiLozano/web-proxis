import React, { FC } from "react";

const GeneralLayout : FC = ({ children }) : JSX.Element => {
    return (
        <div>{children}</div>
    );
} 

export default GeneralLayout;