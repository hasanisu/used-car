import React, { useContext, useEffect, useState } from 'react';
import { reconCarCategories } from '../../api/cars';
import { getImageUrl } from '../../api/imageUpload';
import { getSellerStatus } from '../../api/user';
import AddProductForm from '../../Component/Form/AddProductForm';
import UpdateProductForm from '../../Component/Form/UpdateProductForm';
import { AuthContext } from '../../context/AuthProvider';
import { useLoaderData } from 'react-router-dom'

const UpdateProduct = () => {
    const singleProduct = useLoaderData();
    // console.log(singleProduct)
    const { user } = useContext(AuthContext)
    const [value, setValue] = useState(null)
    const [startDate, setStartDate] = useState(new Date());
    // const [carCetegory, setCartegory] = useState(null)
    const [userStatus, setUserStatus] = useState(null)
    const [brandId, setBrandId] = useState(null)
    const [productionYear, setProductionYear] = useState(null)
    const [transmission, setTransmission] = useState(null)
    const [userLocation, setUserLocation] = useState(null)
    const [loading, setLoading] = useState(false)
    // const navigate = useNavigate()

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
        setBrandId(event.target.value)
    }

    //for getting year of production
    const getProductionId = (event) => {
        setProductionYear(event.target.value)
    }

    //for getting Transmission
    const getTransmissionType = (event) => {
        setTransmission(event.target.value)
    }

    //for getting Location
    const getLocationInfo = (event) => {
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
        // console.log(kilometer, maker, model, image, buying, selling, color, problems, features, phone, sale)

        setLoading(true)
        getImageUrl(image)
            .then(data => {
                const carData = {
                    brand_id: brandId,
                    makerName: maker,
                    modelName: model,
                    carImage: data,
                    productionYear: parseFloat(productionYear),
                    modifyDate: startDate,
                    buyingPrice: buying,
                    sellingPrice: selling,
                    kilometer: parseInt(kilometer),
                    transmission: transmission,
                    color: color,
                    sale: parseFloat(sale),
                    carProblem: problems,
                    features: features,


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
                    body: JSON.stringify()
                })
                    .then(res => res.json(carData))
                    .then(data => {
                        console.log(data)
                        if (data.modifiedCount) {


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
                setProductionYear={setProductionYear}
                transmission={transmission}
                setTransmission={setTransmission}
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