import axios from "./axios";

export const getPhotos = () => axios.get("/photos");
// export const getPhotos = () => axios.get("/photos?_page=0&_limit=10");

