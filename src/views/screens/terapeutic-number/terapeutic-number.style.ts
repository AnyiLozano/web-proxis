import styled from "styled-components";
import tw from "twin.macro";
import { AppBar, Grid } from "@mui/material";

const useTerapeuticNumberStyles = () => {
  const StyledTerapeuticNumberSection = styled.section`
      ${tw`py-16 xl:py-36`}
      background-image: url('${(props: any) => props.background}');
      background-repeat: no-repeat;
      background-size: 100% 100%;
    `
  const StyledTitulo = styled.h1`
      color: #004289;
      font-weight: 600;
      font-size: 45px;
    `
  const StyledTitulo1 = styled.p`
      font-style: italic;
      color: #000;
      font-size: 20px;
      text-align: justify;
      font-family: 'Montserrat';
      padding-top: 4rem;
      @media (max-width: 500px) {
        font-size: 1rem;
      }
    `

  const StyledTerapeuticNumberSection1 = styled.section`
      ${tw`py-48 xl:py-36`}
      background-image: url('${(props: any) => props.background}');
      //background-repeat: no-repeat;
      background-size: 100%;
      @media (max-width: 1200px) {
        padding-top: 0rem !important;
        padding-bottom: 6rem !important;
      }


    `

  const StyledTitleSection2 = styled.h1`
      ${tw``}
      color: #004289;
      font-family: 'Montserrat', sans-serif;
      font-size: 2rem;
    `

  const StyledDescriptionSection2 = styled.p`
      ${tw``}
      color: #000;
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      text-align: justify;
    `

  const StyledAppBarPage = styled(AppBar)`
      ${tw``}
      background-color: transparent !important; 
      background: linear-gradient(to top,#004269e0 100%,transparent);
      margin-top: 8.9rem;
      
      @media (max-width: 1023px){
        margin-top: 7rem;
      }
    `;

  const StyledGrid = styled(Grid)`
      ${tw``}
      border-left: 1px solid #ffffff30;
      border-right: 1px solid #ffffff30;
      height: 4.4vw;
      background-color: ${(props: any) => {
      if (props.selected) {
        return "#ffffff30"
      } else {
        return "transparent"
      }
    }};

      @media (max-width: 1024px) {
          height: 15.3vw;
      }
    `;

  const StyledGrid2 = styled(Grid)`
      ${tw``}
      border-left: 1px solid #ffffff30;
      border-right: 1px solid #ffffff30;
      height: 4.4vw;
      background-color: ${(props: any) => {
      if (props.selected) {
        return "#ffffff30"
      } else {
        return "transparent"
      }
    }};

      @media (max-width: 1024px) {
          height: 15.3vw;
      }
    `;

  const StyledGrid3 = styled(Grid)`
      ${tw``}
      border-left: 1px solid #ffffff30;
      border-right: 1px solid #ffffff30;
      height: 4.4vw;
      background-color: ${(props: any) => {
      if (props.selected) {
        return "#ffffff30"
      } else {
        return "transparent"
      }
    }};

      @media (max-width: 1024px) {
          height: 15.3vw;
      }
    `;

  const StyledGrid4 = styled(Grid)`
      ${tw``}
      border-left: 1px solid #ffffff30;
      border-right: 1px solid #ffffff30;
      height: 4.4vw;
      background-color: ${(props: any) => {
      if (props.selected) {
        return "#ffffff30"
      } else {
        return "transparent"
      }
    }};

      @media (max-width: 1024px) {
          height: 15.3vw;
          text-align: center;
      }
    `;

  const StyledContainerBibliografia = styled.section`
      ${tw`py-16`}
      background-color: #005DA2;
    `;

  const StyledTitleBibliografia = styled.h1`
      ${tw`text-white text-center`}
      font-size: 4rem;
      font-weight: bolder;
      
      @media (max-width: 600px) {
        font-size: 2rem;
      }
    `

  const StyledTextBibliografia = styled.h1`
      ${tw`text-white`}
      text-align: justify;
      font-family: 'Montserrat', sans-serif;
      font-size: 1.25rem;
    `;

  const StyledImage = styled.img`
  width: 100%;
  margin-top: 8.9rem;
    @media(max-width: 1023px) {
      margin-top: 6.9rem;
    }
    `;
  const StyledImage1 = styled.img`
    width: 100%;
  `;


  return {
    StyledTerapeuticNumberSection,
    StyledTitulo,
    StyledTitulo1,
    StyledTerapeuticNumberSection1,
    StyledTitleSection2,
    StyledDescriptionSection2,
    StyledAppBarPage,
    StyledGrid,
    StyledGrid2,
    StyledGrid3,
    StyledGrid4,
    StyledContainerBibliografia,
    StyledTitleBibliografia,
    StyledTextBibliografia,
    StyledImage,
    StyledImage1
  }
}

export default useTerapeuticNumberStyles;