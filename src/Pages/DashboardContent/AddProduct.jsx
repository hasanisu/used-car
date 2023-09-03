import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { addToProductDb, reconCarCategories } from '../../api/cars';
import { getImageUrl } from '../../api/imageUpload';
import AddProductForm from '../../Component/Form/AddProductForm';
import { AuthContext } from '../../context/AuthProvider';

const AddProduct = () => {
    const {user} = useContext(AuthContext)
    const [value, setValue] = useState(null)
    const [startDate, setStartDate] = useState(new Date());
    // const [carCetegory, setCartegory] = useState(null)
    const [brandId, setBrandId] = useState(null)
    const [porductionYear, setProductionYear] = useState(null)
    const [transmission, setTransmission] = useState(null)
    const [location, setLocation] = useState(null)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(()=>{
        reconCarCategories().then(data => {
            setValue(data)
        })
    },[])

    //for getting category brand id
    // const getCategoryName = (event) => {
    //     console.log(event.target)
    //     setCartegory(event.target.value)
    // }


    //for getting category brand id
    const getBrandId = (event) => {
        setBrandId(event.target.value)
    }

    //for getting year of production
    const getProductionId = (event)=>{
        setProductionYear(event.target.value)
    }

    //for getting Transmission
    const getTransmissionType = (event)=>{
        setTransmission(event.target.value)
    }

    //for getting Location
    const getLocationInfo = (event)=>{
        setLocation(event.target.value)
    }




    const handleToAddProduct=event=>{
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
        console.log(kilometer)

        setLoading(true)
        getImageUrl(image)
        .then(data =>{
            const carData ={
               brand_id: brandId,
               makerName: maker,
               modelName: model,
               carImage: data,
               productionYear: parseFloat(porductionYear),
               postDate: startDate,
               buyingPrice: buying,
               sellingPrice: selling,
               kilometer: parseInt(kilometer),
               transmission: transmission,
               color: color,
               sale: parseFloat(sale),
               carProblem: problems,
               features: features,
               locaion: location,
               phone: phone,
               
               seller:{
                    name: user?.displayName,
                    image: user?.photoURL,
                    email: user?.email,
               }
            }
            addToProductDb(carData)
            .then(data =>{
                console.log(data)
                setLoading(false)
                toast.success('Your post successfully added')
                navigate('/dashboard/my-product')
            }).catch(err => {
                console.log(err)
                setLoading(false)
            })
        }

        
        
        ).catch(err => {
            
            console.log(err)
            setLoading(false)
        })
    }






    return (
        <div className="mb-10 mt-10">
            <h2 className='text-center'>This is Add product</h2>
            <AddProductForm
            value={value}
            setValue={setValue}
            startDate={startDate}
            setStartDate={setStartDate}
            brandId={brandId}
            setBrandId={setBrandId}
            porductionYear={porductionYear}
            setProductionYear={setProductionYear}
            transmission={transmission}
            setTransmission={setTransmission}
            getBrandId={getBrandId}
            getProductionId={getProductionId}
            getTransmissionType={getTransmissionType}
            handleToAddProduct={handleToAddProduct}
            loading={loading}
            getLocationInfo={getLocationInfo}
            

            
            />
        </div>
    );
};

export default AddProduct;