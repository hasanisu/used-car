import React, { useEffect } from 'react';
import { reconCarCategories } from '../../../api/cars';
import { useState } from 'react';
import BodyCategory from './BodyCategory';
import MainLoader from '../../../Component/Loader/MainLoader';
const BodyTypeCar = () => {
const [reconCar, setReconCar] = useState([])
const [loading, setLoading] = useState(true)

	useEffect(()=>{
		reconCarCategories()
		.then(data => {
			setLoading(false)
			setReconCar(data)
		})
	},[])

    return (
       <div>
		{
			loading ? <MainLoader/> :
			<div className="p-3 space-y-2 w-86 pr-6 dark:bg-gray-900 dark:text-gray-100 m-0">
			<h2 className='text-2xl text-center font-bold'>--Browse by body Type--</h2>
			<div className="divide-y divide-gray-700">
				<ul className='pt-2 pb-4 space-y-1 text-sm'>
					{reconCar.map(type => <BodyCategory key={type._id} type={type}>

					</BodyCategory>)}
				</ul>
			</div>
		</div>
		}
	   </div>
    );
};

export default BodyTypeCar;