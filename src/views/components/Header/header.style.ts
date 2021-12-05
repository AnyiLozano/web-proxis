import styled from "styled-components";
import {AppBar, Button, Grid, ListItemButton} from "@mui/material";
import tw from "twin.macro";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';

const useHeaderStyles = () => {
    const AppBarComponent = styled(AppBar)`
      background: linear-gradient(transparent 10%,#fff 60%);
    `;

    const StyledButtonLogin = styled(Button)`
      ${tw ``}
      background-color: #004289 !important;
      color: #fff !important;
      text-transform: capitalize !important;
      border-radius: 10px !important;
      font-family: 'Montserrat', sans-serif !important;
    `;

    const StyledAccountIcon = styled(AccountCircleIcon)`
      ${tw `ml-2`}
    `;

    const StyledButtonMenu = styled(Button)`
      ${tw ``}
      font-size: 1rem !important;
      margin-left: 1rem !important;
      font-weight: 600 !important;
      text-transform: capitalize !important;
      font-family: 'Montserrat', sans-serif !important;
    `;

    const StyledDownIcon = styled(ArrowDropDownIcon)`
      ${tw ``}
    `;

    const StyledContainerMenu = styled(Grid)`
      @media (max-width: 1023px){
        display: none;
      }
    `

    const StyledHamburgerIcon = styled(MenuIcon)`
      display: none;
      color: #004289 !important;
      @media (max-width: 1023px){
        display: block;
      }
    `

    const StyledContainerMenu2 = styled(Grid)`
      ${tw `justify-end `}
      display: none ;
      @media (max-width: 1023px){
        display: flex;
      }
    `

    const StyledListItem = styled(ListItemButton)`
      color: #004289 !important;
    `

    return {
        AppBarComponent,
        StyledButtonLogin,
        StyledAccountIcon,
        StyledButtonMenu,
        StyledDownIcon,
        StyledContainerMenu,
        StyledHamburgerIcon,
        StyledContainerMenu2,
        StyledListItem
    }
}

export default useHeaderStyles;