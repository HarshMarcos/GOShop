import styled from "styled-components";
import { Button } from "@mui/material";

export const LightPurpleButton = styled(Button)`
  && {
    background-color: #7f56da;
    color: #fff;
    &:hover {
      background-color: #7a1ccb;
    }
  }
`;

export const BlueButton = styled(Button)`
  && {
    background-color: #080a43;
    color: #fff;
    &:hover {
      background-color: #0a1e82;
    }
  }
`;
export const BasicButton = styled(Button)`
  && {
    background-color: #4d1c9c;
    color: #fff;
    &:hover {
      background-color: #7a1ccb;
    }
  }
`;

export const IndigoButton = styled(Button)`
  && {
    background-color: #2f2b80;
    color: white;
    &:hover {
      background-color: #534ea6;
      border-color: #473d90;
      box-shadow: none;
    }
  }
`;
