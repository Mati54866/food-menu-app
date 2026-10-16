import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import MenuRoutes from "./src/routes/menu.routes.js";

const servidor = express();

const corsOrigin = process.env.CORS_ORIGIN || "*";
servidor.use(cors({ origin: corsOrigin }));
servidor.use(bodyParser.json());
servidor.use(bodyParser.urlencoded({ extended: false }));

servidor.use("/api", MenuRoutes);

const PORT = process.env.PORT || 3000;
servidor.listen(PORT, () => {
	console.log(`Funcionando en el puerto ${PORT} ^.^`);
});
