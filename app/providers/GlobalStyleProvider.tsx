"use client";

import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const GlobalStyles = styled.div`
  background-color: red;
`;

export default function GlobalStyleProvider({ children }: Props) {
  return <GlobalStyles>{children}</GlobalStyles>;
}
