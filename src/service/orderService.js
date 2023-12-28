import { createAxiosClient } from "../axios";

const axiosClientOrders = createAxiosClient();

export const handleOrderSubmitService = (userId, orderDetails) => {
    return axiosClientOrders.post(`/api/v1/orders/placeOrder/${userId}`, orderDetails);
};
