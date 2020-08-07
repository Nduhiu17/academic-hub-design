import React from "react";
import { Nav } from "./Nav";
import Footer from "../../Footer";

export default function AdminLayout(props) {
  return (
    <div>
      <Nav />
      {props.children}
      <Footer />
    </div>
  );
}
