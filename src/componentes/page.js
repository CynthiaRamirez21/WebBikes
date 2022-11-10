import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "../componentes/page/inicio";
import { ProductosList } from "./page/productos/ProductosList";
import { ProductoDetalle } from "./page/productos/ProductoDetalle";

export default function page() {
  return (
	<section>
		<Routes>
			<Route path="/" element={<Inicio />} />
			<Route path="/productos" element={<ProductosList />} />
			<Route path="/producto/:id" element={<ProductoDetalle />} />
		</Routes>
    </section>
  );
}