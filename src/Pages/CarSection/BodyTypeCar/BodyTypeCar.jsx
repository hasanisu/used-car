import React, { useEffect } from 'react';
import toyota from '../../../Assets/car-logo/toyota.png'
import honda from '../../../Assets/car-logo/honda.png'
import nissan from '../../../Assets/car-logo/Nissan_logo.png'
import suzuki from '../../../Assets/car-logo/suzuki.png'
import lexus from '../../../Assets/car-logo/lexus.png'
import daihatsu from '../../../Assets/car-logo/daihatsu.png'
import sale from '../../../Assets/car-logo/pngwing.com.png'
import { reconCarCategories } from '../../../api/cars';
import { useState } from 'react';
import BodyCategory from './BodyCategory';
const BodyTypeCar = () => {
const [reconCar, setReconCar] = useState([])

	useEffect(()=>{
		reconCarCategories()
		.then(data => {
			setReconCar(data)
		})
	},[])

    return (
        <div className="p-3 space-y-2 w-86 pr-6 dark:bg-gray-900 dark:text-gray-100 m-0">
			<h2 className='text-2xl text-center font-bold'>--Browse by body Type--</h2>
			<div className="divide-y divide-gray-700">
				<ul className='pt-2 pb-4 space-y-1 text-sm'>
					{reconCar.map(type => <BodyCategory key={type._id} type={type}>

					</BodyCategory>)}
				</ul>
			</div>
		</div>
    );
};

export default BodyTypeCar;