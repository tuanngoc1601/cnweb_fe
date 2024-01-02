import {
    getProductStart,
    getProductSuccess,
    getProductFailed,
    getCategoriesStart,
    getCategoriesSuccess,
    getCategoriesFailed,
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

export const getAllCategories = async (dispatch) => {
    dispatch(getCategoriesStart());
    try {
        const res = await productService.handleGetAllCategoriesService();
        dispatch(getCategoriesSuccess(res.data.data));
    } catch (e) {
        dispatch(getCategoriesFailed());
    }
};
