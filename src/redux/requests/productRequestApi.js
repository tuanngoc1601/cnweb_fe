import {
    getProductStart,
    getProductSuccess,
    getProductFailed,
    getCategoriesStart,
    getCategoriesSuccess,
    getCategoriesFailed,
    getProductDetailStart,
    getProductDetailFailed,
    getProductDetailSuccess,
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

export const getProductDetail = async (productId, dispatch) => {
    dispatch(getProductDetailStart());
    try {
        const res = await productService.handleGetProductByIdService(productId);
        dispatch(getProductDetailSuccess(res.data.product));
    } catch (e) {
        dispatch(getProductDetailFailed());
    }
};
