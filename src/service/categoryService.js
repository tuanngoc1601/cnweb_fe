import { createAxiosClient } from "../axios";

const axiosClientCategories = createAxiosClient();

export const handleGetProductsByCategoryService = (categoryId) => {
    return axiosClientCategories.get(`/api/v1/product/getProductByCategoryId/${categoryId}`);
};
