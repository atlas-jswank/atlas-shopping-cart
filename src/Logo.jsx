import React from "react";
import LogoPng from "./assets/logo.png";

export default function Logo() {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "2rem" }}>
      <img src={LogoPng} alt="Atlas Logo" className="logo" />
    </div>
  );
}
