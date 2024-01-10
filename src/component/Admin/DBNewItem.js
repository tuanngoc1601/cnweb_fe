import React, { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import {
    deleteObject,
    getDownloadURL,
    ref,
    uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../../config/firebase.config";
import { productService } from "../../service";
import Loading from "../Loading";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const DBNewItem = () => {
    const categories = useSelector((state) => state.product.categories.data);
    const [itemName, setItemName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [progress, setProgress] = useState(null);
    const [imageDownloadURL, setImageDownloadURL] = useState(null);

    const uploadImage = (e) => {
        setIsLoading(true);
        const imageFile = e.target.files[0];
        const storageRef = ref(
            storage,
            `products/${Date.now()}_${imageFile.name}`
        );
        const uploadTask = uploadBytesResumable(storageRef, imageFile);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                setProgress(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
            },
            (error) => {
                console.log(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setImageDownloadURL(downloadURL);
                    setIsLoading(false);
                    setProgress(null);
                });
            }
        );
    };

    const deleteImageFromFirebase = (imageDownloadURL) => {
        setIsLoading(true);
        const deleteRef = ref(storage, imageDownloadURL);
        deleteObject(deleteRef).then(() => {
            setImageDownloadURL(null);
            setIsLoading(false);
        });
    };

    const submitNewData = async() => {
        const data = {
            name: itemName,
            description: "Nộm bò khô thơm ngon mọng nước",
            price: price,
            stock_quantity: 100,
            category_id: categories.find((data) => data.name === category)?.id,
            imageURL: imageDownloadURL,
        };

        await productService.handlePostNewProductService(data);
        setImageDownloadURL(null);
        setItemName("");
        setPrice("");
        setCategory(null);
    };

    return (
        <div className="flex items-center justify-center flex-col pt-6 px-24 w-full">
            <div className="border border-gray-300 rounded-md p-4 w-full flex flex-col items-center justify-center gap-4">
                <InputValueField
                    type="text"
                    placeHolder={"Item name here"}
                    stateValue={itemName}
                    stateFunc={setItemName}
                />
                <div className="w-full flex items-center justify-around gap-3 flex-wrap">
                    {categories &&
                        categories.map((data, index) => (
                            <p
                                key={index}
                                className={`px-4 py-3 rounded-md text-xl text-textColor font-semibold cursor-pointer hover:shadow-md border border-gray-200 backdrop-blur-md ${
                                    data.name === category
                                        ? "bg-red-400 text-primary"
                                        : "bg-transparent"
                                }`}
                                onClick={() => setCategory(data.name)}
                            >
                                {data.name}
                            </p>
                        ))}
                </div>
                <InputValueField
                    type={"number"}
                    placeHolder={"Item price here"}
                    stateFunc={setPrice}
                    stateValue={price}
                />
                <div className="w-full bg-card backdrop-blur-md h-370 rounded-md border-2 border-dotted border-gray-300 cursor-pointer">
                    {isLoading ? (
                        <div className="w-full h-full flex flex-col items-center justify-evenly px-24">
                            <Loading />
                            {Math.round(progress) > 0 && (
                                <div className="w-full flex flex-col items-center justify-center gap-2">
                                    <div className="flex justify-between w-full">
                                        <span className="text-base font-medium text-textColor">
                                            Progress
                                        </span>
                                        <span className="text-sm font-medium text-textColor">
                                            {Math.round(progress) > 0 && (
                                                <>{`${Math.round(
                                                    progress
                                                )}%`}</>
                                            )}
                                        </span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div
                                            className="bg-red-600 h-2.5 rounded-full transition-all duration-300 ease-in-out"
                                            style={{
                                                width: `${Math.round(
                                                    progress
                                                )}%`,
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            {!imageDownloadURL ? (
                                <>
                                    <label>
                                        <div className="flex flex-col items-center justify-center h-full w-full cursor-pointer">
                                            <div className="flex flex-col justify-center items-center cursor-pointer">
                                                <p className="font-bold text-4xl">
                                                    <FaCloudUploadAlt className="-rotate-0" />
                                                </p>
                                                <p className="text-lg text-textColor">
                                                    Click to upload an image
                                                </p>
                                            </div>
                                        </div>
                                        <input
                                            type="file"
                                            name="upload-image"
                                            accept="image/*"
                                            onChange={uploadImage}
                                            className="w-0 h-0"
                                        />
                                    </label>
                                </>
                            ) : (
                                <>
                                    <div className="relative w-full h-full overflow-hidden rounded-md">
                                        <motion.img
                                            whileHover={{ scale: 1.15 }}
                                            src={imageDownloadURL}
                                            className="w-full h-full object-cover"
                                        />
                                        <motion.button
                                            type="button"
                                            className="absolute top-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md duration-500 transition-all ease-in-out"
                                            onClick={() =>
                                                deleteImageFromFirebase(
                                                    imageDownloadURL
                                                )
                                            }
                                        >
                                            <MdDelete className="-rotate-0" />
                                        </motion.button>
                                    </div>
                                </>
                            )}
                        </>
                    )}
                </div>
                <motion.button
                    onClick={submitNewData}
                    className="w-9/12 py-2 rounded-md bg-red-400 text-primary hover:bg-red-500 cursor-pointer"
                >
                    Save
                </motion.button>
            </div>
        </div>
    );
};

export const InputValueField = ({
    type,
    placeHolder,
    stateValue,
    stateFunc,
}) => {
    return (
        <>
            <input
                type={type}
                placeholder={placeHolder}
                className="w-full px-4 py-3 bg-lightOverlay outline-none shadow-md rounded-md border border-gray-200 focus:border-red-400"
                value={stateValue}
                onChange={(e) => stateFunc(e.target.value)}
            />
        </>
    );
};

export default DBNewItem;
