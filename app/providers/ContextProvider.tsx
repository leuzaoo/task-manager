"use client";
import { GlobalProvider } from "../context/globalProvider";

interface Props {
  children: React.ReactNode;
}

export default function ContextProvider({ children }: Props) {
  return <GlobalProvider>{children}</GlobalProvider>;
}
