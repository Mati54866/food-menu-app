import axios from "axios";

const baseURL =
	import.meta.env.VITE_API_URL ||
	(import.meta.env.VITE_API_BASE_URL
		? import.meta.env.VITE_API_BASE_URL.replace(/\/api\/?$/, "")
		: "http://localhost:3000");

const axiosClient = axios.create({
	baseURL,
	timeout: 10000,
	headers: {
		"Content-Type": "application/json",
	},
});

axiosClient.interceptors.response.use(
	(response) => response,
	(error) => {
		const message =
			error.response?.data?.message ||
			error.message ||
			"Error en la comunicación con el servidor";
		console.error("API Error:", message);
		return Promise.reject(error);
	}
);

export default axiosClient;

