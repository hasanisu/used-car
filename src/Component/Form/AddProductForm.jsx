import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import { reconCarCategories } from '../../api/cars';
import Spinner from '../Loader/Spinner';

const AddProductForm = ({
    value,
    setValue,
    startDate,
    setStartDate,
    brandId,
    getBrandId, 
    getProductionId,
    getTransmissionType,
    handleToAddProduct,
    loading,
    getLocationInfo,

}) => {
    
  
    return (
        <div>
            <div className='flex justify-center mx-auto max-w-4xl'>
                <form onSubmit={handleToAddProduct} className=" card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <div className="card-body">

                        <div className='flex justify-between gap-4'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>

                                <select onChange={getBrandId} className="select select-bordered">
                                    <option disabled selected>Select</option>
                                    {value?.map(cat =>

                                    <option key={cat._id} value={cat.category_id}>
                                        {cat.categoryName}
                                    </option>

                                    )}
                                </select>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Brand Id</span>
                                </label>

                                <input type="text" name="" id="" defaultValue={brandId} readOnly className="input input-bordered" />
                            </div>
                        </div>


                        <div className='flex justify-between gap-4'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Maker Name</span>
                                </label>
                                <input name='maker' type="text" placeholder="email" className="input input-bordered text-md uppercase" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Model Name</span>
                                </label>
                                <input name='model' type="text" placeholder="password" className="input input-bordered text-md uppercase" />
                            </div>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input name='image'  accept='image/*' type="file" placeholder="image" className="input input-bordered pt-2" />
                        </div>


                        <div className='flex justify-between gap-4'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Production Year</span>
                                </label>
                                <select onChange={getProductionId} className="select select-bordered text-md uppercase">
                                    <option disabled selected>Allow last 10 years</option>
                                    <option>2023</option>
                                    <option>2022</option>
                                    <option>2021</option>
                                    <option>2020</option>
                                    <option>2019</option>
                                    <option>2018</option>
                                    <option>2017</option>
                                    <option>2016</option>
                                    <option>2015</option>
                                    <option>2014</option>
                                    <option>2013</option>

                                </select>
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Publish Date</span>
                                </label>

                                <DatePicker 
                                showDisabledMonthNavigation
                                dateFormat="yyyy/MM/dd"
                                className='w-full text-center py-3 bg-gray-700 rounded-md text-md' 
                                selected={startDate} 
                                onChange={(date) => setStartDate(date)} 
                                minDate={new Date()}
                                calendarClassName="rasta-stripes"
                                />


                            </div>
                        </div>



                        <div className='flex justify-between gap-4'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Buying Price</span>
                                </label>
                                <input name='buying' type="text" placeholder="buying price" className="input input-bordered text-md" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Selling Price</span>
                                </label>
                                <input name='selling' type="text" placeholder="selling price" className="input input-bordered text-md" />
                            </div>
                        </div>

                        <div className='flex justify-between gap-4'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Kilometer</span>
                                </label>
                                <input name='kilometer' type="number" placeholder="kilometer" className="input input-bordered" />
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text ">Transmission</span>
                                </label>
                                <select onChange={getTransmissionType} className="select select-bordered">
                                    <option disabled selected>Select</option>
                                    <option>Automatic</option>
                                    <option>Manual</option>


                                </select>
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Color</span>
                                </label>
                                <input name='color' type="text" placeholder="color" className="input input-bordered text-md uppercase" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Sale</span>
                                </label>
                                <input name='sale' type="text" placeholder="sale" className="input input-bordered text-md uppercase" />
                            </div>
                        </div>

                        <div className='flex justify-between gap-4'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Problems</span>
                                </label>
                                <textarea name='problems' className="textarea textarea-bordered h-24 text-md uppercase" placeholder="problems"></textarea>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Features</span>
                                </label>
                                <textarea name='features' className="textarea textarea-bordered h-24 text-md uppercase" placeholder="features"></textarea>
                            </div>
                        </div>

                        <h2 className='mt-5 text-2xl'>Contact Info</h2>
                        <div className='flex justify-between gap-4'>
                       <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <select onChange={getLocationInfo} className="select select-bordered text-md uppercase">
                                    <option disabled selected>Please Select</option>
                                    <option>Tokyo</option>
                                    <option>Chiba</option>
                                    <option>Saitama</option>
                                    <option>Kanagawa</option>
                                    <option>Nagoya</option>
                                    <option>Osaka</option>
                                    <option>Ibaraki</option>
                                    <option>Sendai</option>
                                    <option>Hokkaido</option>
                                    <option>Fukuoka</option>
                                    <option>Shimane</option>
                                    <option>Gunma</option>
                                    <option>Nagano</option>
                                    <option>Gifu</option>
                                    <option>Hiroshima</option>

                                </select>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input name='phone' type="text" placeholder="phone" className="input input-bordered text-md uppercase" />
                            </div>

                       </div>




                        <div className="form-control mt-6">
                            <button className="btn btn-primary">
                                {loading ? <Spinner/> : 'Add Product'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProductForm;