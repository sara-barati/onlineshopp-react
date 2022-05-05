import React from "react";
import Headercomonent from "./components/Header/Header.comonent";
import Footercomponent from "./components/Footer/Footer.component";

export default function Mainlayout({ children }) {
  return (
    <div>
      <Headercomonent />
      {children}
      <Footercomponent />
    </div>
  );
}
