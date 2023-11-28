"use client";
import { GlobalProvider } from "../context/globalProvider";
import React, { useState } from "react";
import { Toaster } from "react-hot-toast";

interface Props {
  children: React.ReactNode;
}

export default function ContextProvider({ children }: Props) {
  const [isReady, setIsReady] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 1500);
  }, []);

  if (!isReady) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <span className="loader" />
      </div>
    );
  }

  return (
    <GlobalProvider>
      <Toaster />
      {children}
    </GlobalProvider>
  );
}
