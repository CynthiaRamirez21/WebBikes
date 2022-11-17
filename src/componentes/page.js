import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "../componentes/page/inicio";
import { ProductosList } from "./page/productos/ProductosList";
import { ProductoDetalle } from "./page/productos/ProductoDetalle";
import { QuienesSomos } from "./page/quienesomos/QuienesSomos";
import { Contacto } from "./page/contacto/Contacto";

export default function page()
{
	return (
		<section>
			<Routes>
				{/* <Route path="/" element={<Inicio />} /> */}
				<Route path="/" element={<QuienesSomos />} />
				<Route path="/quienessomos" element={<QuienesSomos />} />
				<Route path="/productos" element={<ProductosList />} />
				<Route path="/producto/:id" element={<ProductoDetalle />} />
				<Route path="/contacto" element={<Contacto />} />
			</Routes>
		</section>
	);
}