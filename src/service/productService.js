import { createAxiosClient } from "../axios";
import { logoutSuccess } from "../redux/authSlice";

const axiosClientProducts = createAxiosClient(logoutSuccess);

export const handleGetAllProductsService = () => {
    return axiosClientProducts.get("/api/v1/product/all-products");
};
