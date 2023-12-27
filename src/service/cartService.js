import { createAxiosClient } from "../axios";

const axiosClientCarts = createAxiosClient();

export const handleAddToCartService = (userId, productId) => {
    return axiosClientCarts.post(`/api/v1/cart/addToCart/${userId}`, {
        productId: productId,
    });
};

export const handleGetAllCartService = (userId) => {
    return axiosClientCarts.get(`/api/v1/cart/getAllCart/${userId}`);
};

export const handleUpdateCartService = (userId, productId, type) => {
    return axiosClientCarts.post(`/api/v1/cart/updateCart/${userId}`, null, {
        params: { productId: productId, type: type },
    });
};
