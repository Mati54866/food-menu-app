import { useEffect, useState } from "react";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
import axiosClient from "../client/axiosClient";
import { MenuItem } from "../models/MenuModel";

function Menu() {
	const [menus, setMenus] = useState<MenuItem[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
	const navigate = useNavigate();

	// Delete menu
	const handleDelete = async (id_menu: number): Promise<void> => {
		const confirmed = window.confirm("¿Está seguro de que desea eliminar este menú?");
		if (!confirmed) return;

		try {
			const response = await axiosClient.delete(`/api/eliminar/${id_menu}`);

			if (response.status === 200) {
				setMenus((prev) => prev.filter((m) => m.id_menu !== id_menu));
				alert("Menú eliminado con éxito");
			}
		} catch (err) {
			console.error("Error al eliminar el menú:", err);
			alert("No se pudo eliminar el menú, intente más tarde.");
		}
	};

	// Lista los datos de la API con array de dependencias para evitar bucle infinito
	useEffect(() => {
		let isMounted = true;

		const getMenus = async () => {
			try {
				setLoading(true);
				const response = await axiosClient.get("/api/listar");
				if (isMounted && response.status === 200) {
					setMenus(Array.isArray(response.data) ? response.data : []);
					setError(null);
				}
			} catch (err) {
				if (isMounted) {
					console.error("Error al obtener menús:", err);
					setError("No se pudieron cargar los menús.");
				}
			} finally {
				if (isMounted) {
					setLoading(false);
				}
			}
		};

		getMenus();

		return () => {
			isMounted = false;
		};
	}, []);

	return (
		<>
			<Header />
			<div className="flex justify-center pb-10">
				<button
					className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white rounded-lg px-3 py-2 m-2 shadow"
					onClick={() => navigate("register")}
				>
					Registrar menú
				</button>
			</div>

			<div className="flex justify-center rounded-xl px-6 xl:px-60 lg:px-40 md:px-16 sm:px-10">
				<div className="w-full overflow-hidden rounded-lg shadow-lg border px-4 py-6 bg-gray-50/50">
					{loading ? (
						<p className="text-center text-gray-500 font-medium py-10">
							Cargando menús...
						</p>
					) : error ? (
						<p className="text-center text-red-500 font-medium py-10">
							{error}
						</p>
					) : menus.length === 0 ? (
						<div className="text-center py-10 text-gray-500">
							<p className="text-lg font-semibold">No hay minutas registradas 👀</p>
							<p className="text-sm mt-1">Haz clic en &quot;Registrar menú&quot; para agregar una nueva.</p>
						</div>
					) : (
						<div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
							{menus.map((m) => (
								<div
									key={m.id_menu}
									className="bg-white rounded-lg shadow-md px-4 py-4 flex flex-col justify-between hover:shadow-lg transition-shadow"
								>
									<div>
										<div className="text-neutral-700 font-semibold pb-4">
											<span className="font-bold text-slate-950 text-xl underline underline-offset-4">
												Minuta {m.id_menu} 👀
											</span>
										</div>

										<div className="text-neutral-700 font-semibold pb-2">
											<strong>Menu:</strong>
											<span className="pl-2 font-normal text-slate-600">
												{m.menu}
											</span>
										</div>

										<div className="text-neutral-700 font-semibold pb-2">
											<strong>Bebida:</strong>
											<span className="pl-2 font-normal text-slate-600">
												{m.bebida}
											</span>
										</div>
										<div className="text-neutral-700 font-semibold pb-2">
											<strong>Día:</strong>
											<span className="pl-2 font-normal text-slate-600">
												{m.dia}
											</span>
										</div>
									</div>

									<div className="flex justify-between pt-4 border-t mt-3">
										<button
											type="button"
											className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300 text-white rounded-lg px-3 py-1.5"
											onClick={() => navigate(`update/${m.id_menu}`)}
										>
											Editar
										</button>
										<button
											type="button"
											className="transition ease-in-out delay-150 bg-red-500 hover:-translate-y-1 hover:scale-105 hover:bg-amber-600 duration-300 text-white rounded-lg px-3 py-1.5"
											onClick={() => handleDelete(m.id_menu)}
										>
											Eliminar
										</button>
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</>
	);
}

export default Menu;
