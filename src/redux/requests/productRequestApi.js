import {
    getProductStart,
    getProductSuccess,
    getProductFailed
} from "../productSlice";
import { productService } from "../../service";

export const getAllProducts = async (dispatch) => {
    dispatch(getProductStart());
    try {
        const res = await productService.handleGetAllProductsService();
        dispatch(getProductSuccess(res.data.data));
    } catch (err) {
        dispatch(getProductFailed());
    }
};
