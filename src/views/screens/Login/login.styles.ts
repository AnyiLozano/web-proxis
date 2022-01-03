import { Button } from "@mui/material";
import styled from "styled-components";
import tw from "twin.macro";

const useLoginStyles = () => {
    const StyledSection = styled.section`
        ${tw``}
        margin-top: 8.9rem;
        background-image: url('${(props: any) => props.background}');
        background-size: 100% 100%;
        background-repeat: no-repeat;

        @media (min-width: 1024px){
            display: flex;
            align-items: center;
        }

        @media (max-width: 1023px){
            margin-top: 6.9rem;
            height: auto;

        }
    `;

    const StyledImage = styled.img`
    
    `;

    const StyledTitle = styled.h1`
        color: #004289;
        font-family: 'Montserrat', sans-serif;
        font-size: 2.5rem;
        font-weight: 700;
        text-align: center;
    `;

    const StyledButton = styled(Button)`
        color: #fff !important;
        background-color: #004289 !important;
        width: 150px;
        font-family: "Montserrat", sans-serif !important;
    `;

    const StyledDescription = styled.p`
        color: #666666;
        font-family: 'Montserrat', sans-serif;
    `;

    return {
        StyledImage,
        StyledTitle,
        StyledSection,
        StyledButton,
        StyledDescription
    };
}

export default useLoginStyles;