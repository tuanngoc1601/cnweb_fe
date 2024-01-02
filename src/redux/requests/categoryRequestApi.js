import {
    getProductByCategoryStart,
    getProductByCategorySuccess,
    getProductByCategoryFailed,
} from "../categorySlice";
import { categoryService } from "../../service";

export const getProductByCategory = async (categoryId, dispatch) => {
    dispatch(getProductByCategoryStart());
    try {
        const res = await categoryService.handleGetProductsByCategoryService(categoryId);
        dispatch(getProductByCategorySuccess(res.data.data));
    } catch (err) {
        dispatch(getProductByCategoryFailed());
    }
};
