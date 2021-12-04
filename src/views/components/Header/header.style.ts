import styled from "styled-components";
import {AppBar} from "@mui/material";

const useHeaderStyles = () => {
    const AppBarComponent = styled(AppBar)`
      background: linear-gradient(transparent 10%,#fff 60%);
    `;

    return {
        AppBarComponent
    }
}

export default useHeaderStyles;