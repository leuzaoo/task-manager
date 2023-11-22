"use client";
import { SignIn } from "@clerk/nextjs";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div>
      <SignIn />
    </div>
  );
}
