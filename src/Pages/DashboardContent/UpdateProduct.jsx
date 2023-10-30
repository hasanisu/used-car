import React, { useContext, useEffect, useState } from 'react';
import { reconCarCategories } from '../../api/cars';
import { getImageUrl } from '../../api/imageUpload';
import { getSellerStatus } from '../../api/user';
import AddProductForm from '../../Component/Form/AddProductForm';
import UpdateProductForm from '../../Component/Form/UpdateProductForm';
import { AuthContext } from '../../context/AuthProvider';
import { useLoaderData, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';

const UpdateProduct = () => {
    const singleProduct = useLoaderData();
    const {seller, brand_id, productionYear, transmission} = singleProduct;
    
    const { user } = useContext(AuthContext)
    const [value, setValue] = useState(null)
    const [startDate, setStartDate] = useState(new Date());
    // const [carCetegory, setCartegory] = useState(null)
    const [userStatus, setUserStatus] = useState('')
    const [brandId, setBrandId] = useState(brand_id)
    const [carProductionYear, setCarProductionYear] = useState(productionYear)
    const [carTransmission, setCarTransmission] = useState(transmission)
    const [userLocation, setUserLocation] = useState(seller.location)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    console.log(userLocation, brandId, carProductionYear, carTransmission)


    useEffect(() => {
        reconCarCategories().then(data => {
            setValue(data)
        })
    }, [])

    useEffect(() => {
        getSellerStatus(user?.email)
            .then(data => {
                setUserStatus(data)

            })
    }, [user])


    //for getting category brand id
    const getBrandId = (event) => {
        if(singleProduct){
            setBrandId(singleProduct.brand_id)
        }
        setBrandId(event.target.value)
    }

    //for getting year of production
    const getProductionId = (event) => {
        if(singleProduct){
            setCarProductionYear(singleProduct.productionYear)
        }
        setCarProductionYear(event.target.value)
    }

    //for getting Transmission
    const getTransmissionType = (event) => {
        if(singleProduct){
            setCarTransmission(singleProduct.transmission)
        }
        setCarTransmission(event.target.value)
    }

    //for getting Location
    const getLocationInfo = (event) => {
        if(singleProduct){
            setUserLocation(singleProduct.seller.location)
        }
        setUserLocation(event.target.value)
    }




    const handleToAddProduct = event => {
        event.preventDefault()
        setLoading(true)
        const form = event.target;

        const maker = form.maker.value;
        const model = form.model.value;
        const image = form.image.files[0];
        const buying = form.buying.value;
        const selling = form.selling.value;
        const kilometer = form.kilometer.value;
        const color = form.color.value;
        const problems = form.problems.value;
        const features = form.features.value;
        const phone = form.phone.value;
        const sale = form.sale.value;
        const engine = form.engine.value;
        // console.log(kilometer, maker, model, image, buying, selling, color, problems, features, phone, sale)

        setLoading(true)
        getImageUrl(image)
            .then(data => {
                const carData = {
                    brand_id: brandId,
                    makerName: maker,
                    modelName: model,
                    carImage: data,
                    productionYear: parseFloat(carProductionYear),
                    modifyDate: startDate,
                    buyingPrice: parseInt(buying),
                    sellingPrice: parseInt(selling),
                    kilometer: parseInt(kilometer),
                    transmission: carTransmission,
                    color: color,
                    sale: parseFloat(sale),
                    carProblem: problems,
                    features: features,
                    engine:engine,


                    seller: {
                        name: user?.displayName,
                        image: user?.photoURL,
                        email: user?.email,
                        status: userStatus,
                        location: userLocation,
                        phone: phone,
                    }
                }
                fetch(`http://localhost:5000/all-car/${singleProduct._id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(carData)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.modifiedCount) {
                            setLoading(false)
                            toast.success('product updated successfully')
                            navigate('/dashboard/my-product')
                        }
                    })
            }



            ).catch(err => {

                console.log(err)
                setLoading(false)
            })
    }






    return (
        <div className="mb-10 mt-20">
            <h2 className='text-center text-2xl'>Add your product</h2>
            <UpdateProductForm
                 value={value}
                 setValue={setValue}
                 startDate={startDate}
                 setStartDate={setStartDate}
                 brandId={brandId}
                 setBrandId={setBrandId}
                 productionYear={productionYear}
                 setCarProductionYear={setCarProductionYear}
                 transmission={transmission}
                 setCarTransmission={setCarTransmission}
                 getBrandId={getBrandId}
                 getProductionId={getProductionId}
                 getTransmissionType={getTransmissionType}
                 handleToAddProduct={handleToAddProduct}
                 loading={loading}
                 getLocationInfo={getLocationInfo}
                 singleProduct={singleProduct}



            />
        </div>
    );
};

export default UpdateProduct;