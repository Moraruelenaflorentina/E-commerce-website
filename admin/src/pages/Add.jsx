import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Add = ({ token }) => {

    const [image1, setImage1] = useState(false)
    const [image2, setImage2] = useState(false)
    const [image3, setImage3] = useState(false)
    const [image4, setImage4] = useState(false)

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("Men");
    const [subCategory, setSubCategory] = useState("Tops");
    const [bestseller, setBestseller] = useState(false);
    const [sizes, setSizes] = useState([]);

    // Clothing sizes
    const clothingSizes = ["S", "M", "L", "XL", "XXL"];
    // Shoe sizes
    const shoeSizes = ["32","34","36","38", "39", "40", "41", "42", "43", "44"];

    const getActiveSizes = () => {
        return subCategory === "Sneakers" ? shoeSizes : clothingSizes;
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData()
            formData.append("name", name)
            formData.append("description", description)
            formData.append("price", price)
            formData.append("category", category)
            formData.append("subcategory", subCategory)
            formData.append("bestseller", bestseller)
            formData.append("sizes", JSON.stringify(sizes))

            image1 && formData.append("image1", image1)
            image2 && formData.append("image2", image2)
            image3 && formData.append("image3", image3)
            image4 && formData.append("image4", image4)

            const response = await axios.post(backendUrl + "/api/products/add", formData, { headers: { token } })
            if (response.data.success) {
                toast.success(response.data.message)
                setName('')
                setDescription('')
                setImage1(false)
                setImage2(false)
                setImage3(false)
                setImage4(false)
                setPrice('')
                setSizes([])
                setBestseller(false)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    const inputStyle = "w-full max-w-[500px] px-3 py-2 bg-gray-900 text-gray-200 border border-gray-700 rounded";

    return (
        <div className="min-h-screen bg-black text-gray-200 p-6">
            <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-4'>

                {/* Upload Images */}
                <div>
                    <p className='mb-2 font-medium'>Upload Images</p>
                    <div className='flex gap-2'>
                        {[image1, image2, image3, image4].map((img, index) => (
                            <label key={index} htmlFor={`image${index + 1}`}>
                                <img className='w-20 rounded bg-gray-800 p-1'
                                    src={!img ? assets.upload_area : URL.createObjectURL(img)} alt="" />
                                <input
                                    onChange={(e) => {
                                        const setter = [setImage1, setImage2, setImage3, setImage4][index];
                                        setter(e.target.files[0]);
                                    }}
                                    type="file"
                                    id={`image${index + 1}`}
                                    hidden
                                />
                            </label>
                        ))}
                    </div>
                </div>

                {/* Product Name */}
                <div className='w-full'>
                    <p className='mb-2'>Product Name</p>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        className={inputStyle}
                        type="text"
                        placeholder='Type here'
                        required
                    />
                </div>

                {/* Product Description */}
                <div className='w-full'>
                    <p className='mb-2'>Product Description</p>
                    <textarea
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        className={inputStyle}
                        placeholder='Write content here'
                        required
                    />
                </div>

                {/* Category / Subcategory / Price */}
                <div className='flex flex-col sm:flex-row gap-4 w-full'>
                    <div>
                        <p className='mb-2'>Product category</p>
                        <select
                            onChange={(e) => setCategory(e.target.value)}
                            className={inputStyle}
                        >
                            <option value="Men">Men</option>
                            <option value="Women">Women</option>
                            <option value="Kids">Kids</option>
                        </select>
                    </div>

                    <div>
                        <p className='mb-2'>Sub category</p>
                        <select
                            onChange={(e) => { 
                                setSubCategory(e.target.value);
                                setSizes([]); // reset sizes when subcategory changes
                            }}
                            className={inputStyle}
                        >
                            <option value="Tops">Tops</option>
                            <option value="Sneakers">Sneakers</option>
                        </select>
                    </div>

                    <div>
                        <p className='mb-2'>Product price</p>
                        <input
                            onChange={(e) => setPrice(e.target.value)}
                            value={price}
                            className={`${inputStyle} w-[120px]`}
                            type="Number"
                            placeholder='25'
                        />
                    </div>
                </div>

                {/* Sizes */}
                <div>
                    <p className='mb-2'>Product Sizes</p>
                    <div className='flex gap-3'>
                        {getActiveSizes().map(size => (
                            <div
                                key={size}
                                onClick={() =>
                                    setSizes(prev => prev.includes(size)
                                        ? prev.filter(s => s !== size)
                                        : [...prev, size])
                                }
                            >
                                <p className={`${sizes.includes(size)
                                    ? "bg-gray-600 text-white"
                                    : "bg-gray-800 text-gray-300"
                                    } px-3 py-1 cursor-pointer rounded`}>
                                    {size}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bestseller */}
                <div className='flex gap-2 mt-2 items-center'>
                    <input
                        onChange={() => setBestseller(prev => !prev)}
                        checked={bestseller}
                        type='checkbox'
                        id='bestseller'
                    />
                    <label className='cursor-pointer' htmlFor='bestseller'>Add to bestseller</label>
                </div>

                {/* Submit button */}
                <button
                    type='submit'
                    className='w-32 py-3 mt-4 bg-white text-black font-semibold rounded hover:bg-gray-200 transition'
                >
                    ADD
                </button>

            </form>
        </div>
    )
}

export default Add
