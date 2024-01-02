import { createAxiosClient } from "../axios";

const axiosClientProducts = createAxiosClient();

export const handleGetAllProductsService = () => {
    return axiosClientProducts.get("/api/v1/product/all-products");
};

export const handleGetAllCategoriesService = () => {
    return axiosClientProducts.get("/api/v1/product/getAllCategories");
};
