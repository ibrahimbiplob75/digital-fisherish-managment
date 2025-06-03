import axios from "axios";

const publicAxios = axios.create({
  //https://fisheris-server-hwg15wayh-md-ibrahim-biplobs-projects.vercel.app/
  baseURL: "http://localhost:5000",
});
const AxiosPublic = () => {
    return [publicAxios];
};

export default AxiosPublic;