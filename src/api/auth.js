import axios from "axios";

const api = axios.create({
	baseURL: `${process.env.REACT_APP_BASEURL}/public/users`,
	withCredentials: false,
	headers: {
		"Content-Type": "application/json",
	},
});
 
export const signUp = (data) =>
	api
		.post("/", data)
		.then((res) => res.data)
		.catch((error) => {
			throw new Error(error.response.data.message);
		});

export const logIn = (data) =>
	api
		.post("/authenticate", data)
		.then((res) => res.data)
		.catch((error) => {
			throw new Error(error.response.data.message);
		});




