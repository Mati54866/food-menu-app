import React, { useRef, useEffect, useState } from "react";
import axiosClient from "../client/axiosClient";
import Header from "../Header";
import { useNavigate, useParams } from "react-router-dom";
import { MenuItem } from "../models/MenuModel";

type FormElement = React.FormEvent<HTMLFormElement>;

function UpdateMenu() {
	const menu = useRef<HTMLInputElement>(null);
	const bebida = useRef<HTMLInputElement>(null);
	const dia = useRef<HTMLSelectElement>(null);
	const [submitting, setSubmitting] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(true);
	const navigate = useNavigate();

	// Obtener id
	const { id_menu } = useParams<{ id_menu: string }>();

	useEffect(() => {
		const fetchMenu = async (): Promise<void> => {
			try {
				setLoading(true);
				const response = await axiosClient.get<MenuItem>(`/api/listar/${id_menu}`);
				const data = response.data;

				if (menu.current) menu.current.value = data.menu || "";
				if (bebida.current) bebida.current.value = data.bebida || "";
				if (dia.current) dia.current.value = data.dia || "";
			} catch (error) {
				alert("Error al cargar los datos del menú");
				console.error(error);
			} finally {
				setLoading(false);
			}
		};
		if (id_menu) {
			fetchMenu();
		}
	}, [id_menu]);

	const handleSubmit = async (e: FormElement) => {
		e.preventDefault();

		const menuVal = menu.current?.value.trim();
		const bebidaVal = bebida.current?.value.trim();
		const diaVal = dia.current?.value.trim();

		if (!menuVal || !bebidaVal || !diaVal) {
			alert("Por favor ingrese todos los campos requeridos");
			return;
		}

		const data = {
			menu: menuVal,
			bebida: bebidaVal,
			dia: diaVal,
		};

		try {
			setSubmitting(true);
			const response = await axiosClient.put(`/api/actualizar/${id_menu}`, data);
			if (response.status === 200) {
				alert("Menú actualizado con éxito");
				navigate("/");
			} else {
				alert("No se pudo actualizar el menú, intente más tarde.");
			}
		} catch (error) {
			console.error("Error al actualizar el menu:", error);
			alert("Error al actualizar el menú");
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<>
			<Header />
			<div className="flex flex-col justify-center mt-10">
				<h1 className="text-2xl font-bold text-center pb-4">
					Actualizar Minuta ✏️
				</h1>
				<div className="md:flex md:justify-center">
					<div className="md:w-96 bg-white p-6 rounded-lg shadow-xl">
						{loading ? (
							<p className="text-center text-gray-500 py-6">Cargando minuta...</p>
						) : (
							<form onSubmit={handleSubmit}>
								<label className="block text-gray-600 text-sm font-bold mb-2">
									Menu
								</label>
								<input
									type="text"
									placeholder="Ingrese el menu"
									className="rounded-lg border-2 p-2 border-gray-500 w-11/12"
									ref={menu}
									required
								/>
								<label className="block text-gray-600 text-sm font-bold mb-2 mt-4">
									Bebida
								</label>
								<input
									type="text"
									placeholder="Ingrese bebida"
									className="rounded-lg border-2 p-2 border-gray-500 w-11/12"
									ref={bebida}
									required
								/>
								<label className="block text-gray-600 text-sm font-bold mb-2 mt-4">
									Seleccione día
								</label>
								<select
									className="rounded-lg border-2 p-2 border-gray-500 w-11/12"
									ref={dia}
									required
								>
									<option value="" hidden>
										Seleccione dia
									</option>
									<option value="Lunes">Lunes</option>
									<option value="Martes">Martes</option>
									<option value="Miercoles">Miercoles</option>
									<option value="Jueves">Jueves</option>
									<option value="Viernes">Viernes</option>
									<option value="Sabado">Sabado</option>
									<option value="Domingo">Domingo</option>
								</select>
								<div className="flex justify-center mt-6">
									<button
										type="submit"
										disabled={submitting}
										className="transition ease-in-out delay-150 bg-stone-400 hover:-translate-y-1 hover:scale-105 hover:bg-zinc-600 duration-300 text-white rounded-lg px-4 py-2 disabled:opacity-50"
									>
										{submitting ? "Actualizando..." : "Actualizar"}
									</button>
								</div>
							</form>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default UpdateMenu;

