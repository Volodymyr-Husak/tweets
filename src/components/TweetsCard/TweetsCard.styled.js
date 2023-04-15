import styled from "styled-components";
import { theme } from "../../theme";
// import Button from "@mui/material/Button";

export const CardContainer = styled("div")`
  position: relative;
  //   position: absolute;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );

  box-shadow: -2.5776965618133545px 6.873857021331787px 20.621572494506836px 0px
    #0000003b;

  // padding: 28px 0 36px 0x;
  //   padding-top: 28px;
  height: 460px;
  width: 360px;

  // margin: 0;
  // max-width: 360px;
  border-radius: 20px;
  //   ${theme.mq.tablet} {
  //     height: 8px;
  //     width: 280px;
  //   }
  //   ${theme.mq.desktop} {
  //     width: 340px;
  //   }
`;

export const HeroImage = styled("img")`
  margin-top: 28px;
  margin-bottom: 18px;
  // margin-left: 20px;
`;

export const GoItImage = styled("img")`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const MiddleLine = styled("div")`
  //   position: absolute;
  //   top: calc(50% - 4px);
  //   top: 40px;
  //   left: 0;

  with: 100%;
  height: 8px;
  box-shadow: 0px 3.4369285106658936px 2.5776965618133545px 0px #fbf8ff inset;

  box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px #0000000f;

  box-shadow: 0px -1.7184642553329468px 3.4369285106658936px 0px #ae7be3 inset;
  background-color: #ebd8ff;

  margin-bottom: 62px;
`;

export const InfoText = styled("p")`
  font-family: ${theme.fonts.montserrat};
  font-size: 20px;
  font-weight: ${theme.fontWeights.medium};
  line-height: 1.22;

  color: ${theme.colors.grey};

  margin: 0;
  margin-top: 16px;
  text-align: center;
`;

export const Button = styled("button")`
  font-family: ${theme.fonts.montserrat};
  font-size: 18px;
  font-weight: ${theme.fontWeights.semiBold};
  line-height: 1.22;

  background-color: ${theme.colors.grey};
  color: ${theme.colors.textBtn};

  margin-top: 26px;
  width: 196px;
  height: 50px;

  border-radius: 10.31px;
  border: 0;

  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }
  //   &:focus {
  //     transform: scale(1);
  //   }
`;

export const AvatarContainer = styled("div")`
  position: absolute;
  top: calc(178px + 8px);
  left: calc(150px - 8px);

  border-radius: 50%;
  background-color: ${theme.colors.grey};
  box-shadow: 0px 4.391631126403809px 3.2937235832214355px 0px #fbf8ff inset;

  box-shadow: 0px 4.391631126403809px 4.391631126403809px 0px #0000000f;

  box-shadow: 0px -2.1958155632019043px 4.391631126403809px 0px #ae7be3 inset;

  width: 80px;
  height: 80px;
`;
export const BackgroundAvatar = styled("div")`
  position: absolute;
  top: 9px;
  left: 9px;

  border-radius: 50%;
  background-color: ${theme.colors.accent};
  //   background-color: red;
  width: 62px;
  height: 62px;
`;

export const Avatar = styled("img")``;
