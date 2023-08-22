import React from 'react';
import { Link } from 'react-router-dom';

const Categories = ({category}) => {
    const {name, _id, maker_id} = category;
    return (
       <div>
         <li className="dark:bg-gray-800 dark:text-gray-50">
        <Link
          to={`/car-maker/${name}`}
          rel="noopener noreferrer"
          href="#"
          className="flex items-center p-2 space-x-3 rounded-md"
        >
          <img alt="" className="w-10 h-8" />
          <span>{name}-(50)</span>
        </Link>
      </li>
      <hr className=' border-orange-500'/>
       </div>
    );
};

export default Categories;