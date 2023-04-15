import styled from "styled-components";
import { theme } from "../../theme";

export const Title = styled("h1")`
  margin: 0;
  margin-bottom: 30px;

  text-align: center;
  font-family: ${theme.fonts.montserrat};
  font-weight: ${theme.fontWeights.bold};
  font-size: 24px;
  line-height: 1.375;
  color: ${theme.colors.black};

  ${theme.mq.tablet} {
    margin-bottom: 40px;
    font-size: 48px;
  }
`;
