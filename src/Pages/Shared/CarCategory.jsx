import React, { useEffect, useState } from 'react';
import toyota from '../../Assets/car-logo/toyota.png'
import honda from '../../Assets/car-logo/honda.png'
import nissan from '../../Assets/car-logo/Nissan_logo.png'
import suzuki from '../../Assets/car-logo/suzuki.png'
import lexus from '../../Assets/car-logo/lexus.png'
import daihatsu from '../../Assets/car-logo/daihatsu.png'
import sale from '../../Assets/car-logo/pngwing.com.png'
import BodyTypeCar from '../CarSection/BodyTypeCar/BodyTypeCar';
import AccountOpeningDiscount from '../../Component/Card/AccountOpeningDiscount';
import { useQuery } from 'react-query';
import axios from "axios";
import { carCategories, getAllCars, getAllHonda, getAllToyota } from '../../api/cars';
import { Link, useNavigate } from 'react-router-dom';
import Toyota from '../CarSection/Toyota/Toyota';
import Advertisement from '../CarSection/Advertisement/Advertisement';


const CarCategory = () => {
	const [categories, setCategories] = useState([])
	const [allToyota, setAllToyota] = useState([])
	const [allHonda, setAllHonda] = useState([])
	const [allCars, setAllCars] = useState([])

	// const {data: categories = [], isLoading} = useQuery({
	// 	queryKey:['category'],
	// 	queryFn: async ()=>{
	// 		const res = await fetch('http://localhost:5000/categories')
	// 		const data = await res.json()
	// 		return data;
	// 	}

	//   })

	// useEffect(()=>{
	// 	carCategories()
	// 	.then(data => {
	// 		setCategories(data)
	// 		console.log(data)
	// 	})
	// 	.catch(err => console.log(err))
	// },[])

	const navigate = useNavigate()

	useEffect(() => {
		getAllToyota()
			.then(data => {
				setAllToyota(data)
			})
			.catch(err => console.log(err))
	}, [])
	useEffect(() => {
		getAllHonda()
			.then(data => {
				setAllHonda(data)
			})
			.catch(err => console.log(err))
	}, [])



	useEffect(()=>{
		getAllCars()
		.then(data =>{
			console.log(data.productStatus)
			setAllCars(data)
		})
	},[])



	return (
		<div className="h-full p-3 space-y-2 w-86 dark:bg-gray-900 dark:text-gray-100 m-0 mt-20">
			<div className="flex items-center p-2 space-x-4">
				<img src={sale} alt="" className="w-28 h-24 rounded-full dark:bg-gray-500" />
				<div>
					<h2 className="text-2xl font-semibold">Car-Hat</h2>

				</div>
			</div>
			<h2 className='text-2xl text-center font-bold'>--Maker--</h2>
			<div className="divide-y divide-gray-700">
				<ul className="pt-2 pb-4 space-y-1 text-sm">
					<li className="dark:bg-gray-800 dark:text-gray-50">
						<Link to={`/car-maker/toyota`} rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
							<img src={toyota} alt="" className='w-10 h-8' />
							<span>TOYOTA-({allToyota.length})</span>

						</Link>
					</li>
					<hr className='border-red-500' />
					<li className="dark:bg-gray-800 dark:text-gray-50">
						<Link to={`/car-maker/honda`} rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
							<img src={honda} alt="" className='w-10 h-8' />
							<span>HONDA-({allHonda.length})</span>
						</Link>
					</li>
					<hr className='border-red-500' />
					<li className="dark:bg-gray-800 dark:text-gray-50">
						<Link rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
							<img src={nissan} alt="" className='w-10 h-8' />
							<span>NISSAN-(4560)</span>
						</Link>
					</li>
					<hr className='border-red-500' />
					<li className="dark:bg-gray-800 dark:text-gray-50">
						<Link rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
							<img src={suzuki} alt="" className='w-10 h-8' />
							<span>SUZUKI-(4560)</span>
						</Link>
					</li>
					<hr className='border-red-500' />
					<li className="dark:bg-gray-800 dark:text-gray-50">
						<Link rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
							<img src={lexus} alt="" className='w-10 h-8' />
							<span>LEXUS-(4560)</span>
						</Link>
					</li>
					<hr className='border-red-500' />
					<li className="dark:bg-gray-800 dark:text-gray-50">
						<Link rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
							<img src={daihatsu} alt="" className='w-10 h-8' />
							<span>DAIHATSU-(4560)</span>
						</Link>
					</li>
					<hr className='border-red-500' />
				</ul>
			</div>

			<div>
				<BodyTypeCar />
			</div>
			<div>
				<Advertisement allCars={allCars}/>
			</div>
			<div>
				<AccountOpeningDiscount />
			</div>
		</div>
	);
};

export default CarCategory;