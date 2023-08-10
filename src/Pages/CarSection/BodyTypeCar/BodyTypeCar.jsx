import React from 'react';
import toyota from '../../../Assets/car-logo/toyota.png'
import honda from '../../../Assets/car-logo/honda.png'
import nissan from '../../../Assets/car-logo/Nissan_logo.png'
import suzuki from '../../../Assets/car-logo/suzuki.png'
import lexus from '../../../Assets/car-logo/lexus.png'
import daihatsu from '../../../Assets/car-logo/daihatsu.png'
import sale from '../../../Assets/car-logo/pngwing.com.png'
const BodyTypeCar = () => {
    return (
        <div className="p-3 space-y-2 w-86 pr-6 dark:bg-gray-900 dark:text-gray-100 m-0">
			<h2 className='text-2xl text-center font-bold'>--Browse by body Type--</h2>
			<div className="divide-y divide-gray-700">
				<ul className="pt-2 pb-4 space-y-1 text-sm">
					<li className="dark:bg-gray-800 dark:text-gray-50">
						<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
							<img src={toyota} alt="" className='w-10 h-8 ' />
							<span>Sedan (50)</span>
						</a>
					</li>
					<hr className='border-red-500' />
					<li className="dark:bg-gray-800 dark:text-gray-50">
						<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
							<img src={honda} alt="" className='w-10 h-8' />
							<span>Coupe (150)</span>
						</a>
					</li>
					<hr className='border-red-500' />
					<li className="dark:bg-gray-800 dark:text-gray-50">
						<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
							<img src={nissan} alt="" className='w-10 h-8' />
							<span>Dump (4560)</span>
						</a>
					</li>
					<hr className='border-red-500' />
					<li className="dark:bg-gray-800 dark:text-gray-50">
						<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
							<img src={suzuki} alt="" className='w-10 h-8' />
							<span>Hatchback (4560)</span>
						</a>
					</li>
					<hr className='border-red-500' />
					<li className="dark:bg-gray-800 dark:text-gray-50">
						<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
							<img src={lexus} alt="" className='w-10 h-8' />
							<span>SUV (4560)</span>
						</a>
					</li>
					<hr className='border-red-500' />
					<li className="dark:bg-gray-800 dark:text-gray-50">
						<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
							<img src={daihatsu} alt="" className='w-10 h-8' />
							<span>Wagon (4560)</span>
						</a>
					</li>
					<hr className='border-red-500' />

				</ul>
			</div>
		</div>
    );
};

export default BodyTypeCar;