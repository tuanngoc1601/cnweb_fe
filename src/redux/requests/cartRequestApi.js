import {
    getAllCartStart,
    getAllCartSuccess,
    getAllCartFailed
} from "../cartSlice";
import { cartService } from "../../service";

export const getAllCarts = async (userId, dispatch) => {
    dispatch(getAllCartStart());
    try {
        const res = await cartService.handleGetAllCartService(userId);
        dispatch(getAllCartSuccess(res.data.cart));
    } catch (err) {
        dispatch(getAllCartFailed());
    }
};
