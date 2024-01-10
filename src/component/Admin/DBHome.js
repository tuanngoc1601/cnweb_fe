import React from "react";
import { CChart } from "@coreui/react-chartjs";
import { useSelector } from "react-redux";

const DBHome = () => {
    const products = useSelector((state) => state.product.products.data);
    const drinks = products.filter(
        (item) => item["Category.name"] === "Drinks"
    );
    const deserts = products.filter(
        (item) => item["Category.name"] === "Deserts"
    );
    const fruits = products.filter(
        (item) => item["Category.name"] === "Fruits"
    );
    const rices = products.filter((item) => item["Category.name"] === "Rice");
    const curry = products.filter((item) => item["Category.name"] === "Curry");
    const chinese = products.filter(
        (item) => item["Category.name"] === "Chinese"
    );
    const bread = products.filter((item) => item["Category.name"] === "Bread");

    return (
        <div className="flex items-center justify-center flex-col pt-6 w-full h-full">
            <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-4 h-full">
                <div className="flex items-center justify-center">
                    <div className="w-340 md:w-508">
                        <CChart
                            type="bar"
                            data={{
                                labels: [
                                    "Drinks",
                                    "Deserts",
                                    "Fruits",
                                    "Rice",
                                    "Curry",
                                    "Bread",
                                    "Chinese",
                                ],
                                datasets: [
                                    {
                                        label: "Category wise Count",
                                        backgroundColor: "#f87979",
                                        data: [
                                            drinks?.length,
                                            deserts?.length,
                                            fruits?.length,
                                            rices?.length,
                                            curry?.length,
                                            bread?.length,
                                            chinese?.length,
                                        ],
                                    },
                                ],
                            }}
                            labels="months"
                        />
                    </div>
                </div>
                <div className="w-full h-full flex items-center justify-center">
                    <div className="w-275 md:w-460">
                        <CChart
                            type="doughnut"
                            data={{
                                labels: [
                                    "Orders",
                                    "Deliveried",
                                    "Cancelled",
                                    "Paid",
                                    "Not Paid",
                                ],
                                datasets: [
                                    {
                                        backgroundColor: [
                                            "#51ff00",
                                            "#00b6ff",
                                            "#008bFF",
                                            "#ffd100",
                                            "#ff00fb",
                                        ],
                                        data: [40, 20, 80, 10, 30],
                                    },
                                ],
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DBHome;
