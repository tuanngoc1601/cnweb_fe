import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { categoryRequestApi } from "../redux/requests";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import SliderCard from "../component/Home/SliderCard";
import { IoMdSearch } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

const Category = () => {
    const { categoryId } = useParams();
    const [searchTerm, setSearchTerm] = useState("");
    const products = useSelector((state) => state.category.categories.data);
    const categories = useSelector((state) => state.product.categories.data);
    const categoryName = categories.find(
        (category) => category.id == categoryId
    ).name;
    const [productList, setProductList] = useState(products);
    const dispatch = useDispatch();
    const handleOnChange = (e) => {
        setSearchTerm(e.target.value);
    };

    useEffect(() => {
        categoryRequestApi.getProductByCategory(parseInt(categoryId), dispatch);
    }, [categoryId]);

    useEffect(() => {
        if (searchTerm !== "") {
            let newList = products.filter((product) =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setProductList(newList);
        } else {
            setProductList(products);
        }
    }, [searchTerm, products]);

    return (
        <div className="w-full min-h-screen flex items-center justify-start flex-col bg-primary">
            <Header />
            <div className="w-full flex flex-col items-start justify-center mt-40 px-6 md:px-24 2xl:px-96 gap-12 pb-24">
                <div className="flex flex-row items-center justify-start gap-6">
                    <span className="text-3xl">{categoryName}</span>
                    <div className="flex flex-row items-center border border-slate-700 rounded-full">
                        <span className="ms-4">
                            <IoMdSearch className="text-iconColor text-2xl" />
                        </span>
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchTerm}
                            className="w-48 bg-transparent border-none outline-none px-4 py-2 "
                            onChange={(e) => handleOnChange(e)}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    {productList.length > 0 ? (
                        <>
                            {productList.map((product, index) => (
                                <SliderCard key={index} data={product} />
                            ))}
                        </>
                    ) : (
                        <p className="text-center font-bold text-3xl my-8">
                            Not found
                        </p>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Category;
