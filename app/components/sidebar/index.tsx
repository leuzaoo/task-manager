"use client"
import React from "react";
import styled from "styled-components";
import { useGlobalState } from "@/app/context/globalProvider";

const SidebarStyled = styled.nav``;

export default function Sidebar() {
  const { theme } = useGlobalState();
  console.log(theme);
  return <SidebarStyled theme={theme}>Sidebar</SidebarStyled>;
}
