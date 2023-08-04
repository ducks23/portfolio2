"use client";

import React from "react";
import { CircularProgress } from "@mui/material";

const CarLoader = () => {
  return (
    <div className="flex pt-[40%] pb-[60%] max-h-screen mx-auto justify-center">
      <CircularProgress color="secondary" />
    </div>
  );
};

export default CarLoader;
