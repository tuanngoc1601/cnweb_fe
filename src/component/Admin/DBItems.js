import React from "react";
import { useSelector, useDispatch } from "react-redux";
import DataTable from "./DataTable";
import { HiCurrencyRupee } from "react-icons/hi2";
import { productService } from "../../service";
import { productRequestApi } from "../../redux/requests";

const DBItems = () => {
    const products = useSelector((state) => state.product.products.data);
    const dispatch = useDispatch();
    return (
        <div className="flex items-center justify-self-center gap-4 pt-6 w-full">
            <DataTable
                title={"Products"}
                columns={[
                    {
                        title: "Image",
                        field: "imageURL",
                        render: (rowData) => (
                            <img
                                src={rowData.imageURL}
                                className="w-32 h-16 object-contain rounded-md"
                            />
                        ),
                    },
                    {
                        title: "Name",
                        field: "name",
                    },
                    {
                        title: "Category",
                        field: "Category.name",
                    },
                    {
                        title: "Price",
                        field: "price",
                        render: (rowData) => (
                            <p className="text-xl font-semibold text-textColor flex items-center justify-center">
                                <HiCurrencyRupee className="text-red-400" />
                                {parseFloat(rowData.price).toFixed(2)}
                            </p>
                        ),
                    },
                ]}
                data={products}
                actions={[
                    {
                        icon: "edit",
                        tooltip: "Edit Data",
                        onClick: (event, rowData) => {
                            alert("You want to edit " + rowData.productId);
                        },
                    },
                    {
                        icon: "delete",
                        tooltip: "Delete Data",
                        onClick: async (event, rowData) => {
                            if (
                                window.confirm(
                                    "Are you sure, you want to perform this action?"
                                )
                            ) {
                                await productService.handleDeleteProductService(
                                    rowData.id
                                );
                                productRequestApi.getAllProducts(dispatch);
                            }
                        },
                    },
                ]}
            />
        </div>
    );
};

export default DBItems;
