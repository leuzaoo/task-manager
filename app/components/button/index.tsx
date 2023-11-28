"use client";

import { useGlobalState } from "@/app/context/globalProvider";
import styled from "styled-components";

interface Props {
  icon?: React.ReactNode;
  name?: string;
  background?: string;
  padding?: string;
  borderRad?: string;
  border?: string;
  fontWeight?: string;
  fontSize?: string;
  click?: () => void;
  type?: "submit" | "button" | undefined;
}

export default function Button({
  icon,
  name,
  background,
  padding,
  borderRad,
  border,
  fontWeight,
  fontSize,
  click,
  type,
}: Props) {
  const { theme } = useGlobalState();
  return (
    <ButtonStyled
      type={type}
      style={{
        background: background,
        padding: padding || "8px 12px",
        borderRadius: borderRad || "12px",
        fontWeight: fontWeight || "400",
        fontSize: fontSize,
        border: border || "none",
      }}
      theme={theme}
    >
      {icon && icon}
      {name}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button``;
