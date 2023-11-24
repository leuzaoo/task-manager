"use client";
import { useGlobalState } from "@/app/context/globalProvider";
import React from "react";
import styled from "styled-components";
import CreateContent from "../modals/CreateContent";

type Props = {};

export default function Task({}: Props) {
  const { theme } = useGlobalState();
  return (
    <TaskStyled theme={theme}>
      <CreateContent />
    </TaskStyled>
  );
}

const TaskStyled = styled.main`
  padding: 2rem;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colorBg2};
  border: 1px solid ${(props) => props.theme.borderColor2};
  border-radius: 1rem;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }
`;
