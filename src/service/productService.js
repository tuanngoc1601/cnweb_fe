import { createAxiosClient } from "../axios";

const axiosClientProducts = createAxiosClient();

export const handleGetAllProductsService = () => {
    return axiosClientProducts.get("/api/v1/product/all-products");
};

export const handleGetAllCategoriesService = () => {
    return axiosClientProducts.get("/api/v1/product/getAllCategories");
};

export const handleGetProductByIdService = (productId) => {
    return axiosClientProducts.get(
        `/api/v1/product/getProductById/${productId}`
    );
};

export const handlePostNewProductService = (newProduct) => {
    return axiosClientProducts.post(
        "/api/v1/product/postNewProduct",
        newProduct
    );
};

export const handleDeleteProductService = (productId) => {
    return axiosClientProducts.delete("/api/v1/product/deleteProduct", {
        data: { productId: productId },
    });
};
