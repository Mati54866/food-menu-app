import React, { useRef, useState } from "react";
import axiosClient from "../client/axiosClient";
import Header from "../Header";
import { useNavigate } from "react-router-dom";

type FormElement = React.FormEvent<HTMLFormElement>;

function RegisterMenu() {
	const menu = useRef<HTMLInputElement>(null);
	const bebida = useRef<HTMLInputElement>(null);
	const dia = useRef<HTMLSelectElement>(null);
	const [submitting, setSubmitting] = useState<boolean>(false);

	const navigate = useNavigate();

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
			const response = await axiosClient.post("/api/registrar", data);
			if (response.status === 200 || response.status === 201) {
				alert("Menu registrado con éxito");
				navigate("/");
			} else {
				alert("No se pudo registrar el menú, intente más tarde.");
			}
		} catch (error) {
			console.error("Error al registrar menú:", error);
			alert("Error al registrar menú, verifique los datos ingresados.");
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<>
			<Header />
			<div className="flex flex-col justify-center mt-10">
				<h1 className="text-2xl font-bold text-center pb-4">
					Agregar minuta 🤘🏻
				</h1>
				<div className="md:flex md:justify-center">
					<div className="md:w-96 bg-white p-6 rounded-lg shadow-xl">
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
									{submitting ? "Creando..." : "Crear minuta"}
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default RegisterMenu;
