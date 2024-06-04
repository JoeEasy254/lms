"use client";

import { useState, CSSProperties } from "react";
import HashLoader from "react-spinners/HashLoader";

function Loader() {
  return (
    <div className="flex justify-center mt-9">
      <HashLoader
        color={"green"}
        loading={true}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loader;
