import { pool } from "../db/conexion.js";

// health check
export const healthCheck = (req, res) => {
	res.status(200).json({
		status: "ok",
		timestamp: new Date().toISOString(),
		uptime: process.uptime(),
	});
};

// listar menus
export const listarMenus = async (req, res) => {
	try {
		const [result] = await pool.query("SELECT * FROM menus ORDER BY id_menu DESC");
		res.status(200).json(result);
	} catch (error) {
		res.status(500).json({
			status: 500,
			message: "Error en el servidor: " + error.message,
		});
	}
};

// listar menu
export const listarMenu = async (req, res) => {
	try {
		const { id_menu } = req.params;
		const [result] = await pool.query("SELECT * FROM menus WHERE id_menu=?", [
			id_menu,
		]);

		if (result.length > 0) {
			res.status(200).json(result[0]);
		} else {
			res.status(404).json({
				status: 404,
				message: "Menu no encontrado",
			});
		}
	} catch (error) {
		res.status(500).json({
			status: 500,
			message: "Error en el servidor: " + error.message,
		});
	}
};

// registrar menu
export const registrarMenu = async (req, res) => {
	try {
		const { menu, bebida, dia } = req.body;

		if (!menu || !bebida || !dia || !String(menu).trim() || !String(bebida).trim() || !String(dia).trim()) {
			return res.status(400).json({
				status: 400,
				message: "Todos los campos (menu, bebida, dia) son obligatorios",
			});
		}

		const [result] = await pool.query(
			"INSERT INTO menus (menu, bebida, dia) VALUES (?,?,?)",
			[String(menu).trim(), String(bebida).trim(), String(dia).trim()]
		);
		if (result.affectedRows > 0) {
			res.status(201).json({
				status: 201,
				id_menu: result.insertId,
				message: "Menu registrado correctamente",
			});
		} else {
			res.status(400).json({
				status: 400,
				message: "No se pudo registrar el menu",
			});
		}
	} catch (error) {
		res.status(500).json({
			status: 500,
			message: "Error en el servidor: " + error.message,
		});
	}
};

// actualizar menu
export const actualizarMenu = async (req, res) => {
	try {
		const { id_menu } = req.params;
		const { menu, bebida, dia } = req.body;

		if (!menu || !bebida || !dia || !String(menu).trim() || !String(bebida).trim() || !String(dia).trim()) {
			return res.status(400).json({
				status: 400,
				message: "Todos los campos (menu, bebida, dia) son obligatorios",
			});
		}

		const [result] = await pool.query(
			"UPDATE menus SET menu=?, bebida=?, dia=? WHERE id_menu=?",
			[String(menu).trim(), String(bebida).trim(), String(dia).trim(), id_menu]
		);
		if (result.affectedRows > 0) {
			res.status(200).json({
				status: 200,
				message: "Menu actualizado correctamente",
			});
		} else {
			res.status(404).json({
				status: 404,
				message: "Menu no encontrado para actualizar",
			});
		}
	} catch (error) {
		res.status(500).json({
			status: 500,
			message: "Error en el servidor: " + error.message,
		});
	}
};

// eliminar menu
export const eliminarMenu = async (req, res) => {
	try {
		const { id_menu } = req.params;
		const [row] = await pool.query("DELETE FROM menus WHERE id_menu=?", [
			id_menu,
		]);
		if (row.affectedRows > 0) {
			res.status(200).json({
				status: 200,
				message: "Menu eliminado con éxito",
			});
		} else {
			res.status(404).json({
				status: 404,
				message: "Menu no encontrado",
			});
		}
	} catch (error) {
		res.status(500).json({
			status: 500,
			message: "Error en el servidor: " + error.message,
		});
	}
};
