import React, { useEffect, useState } from 'react';

const VehicalSearch = () => {
    const [makerName, setMakerName] = useState([])
    const [models, setModel] = useState('')

    useEffect(() => {
        fetch('cars.json')
            .then(res => res.json())
            .then(data => {
                setMakerName(data)
                console.log(data);
            })
    }, [])

    const getValue = (event) => {
        console.log(event.target.value)
        setModel(event.target.value)
    }


    return (
        <div className='shadow-lg mt-10 pb-10'>
            <form >
                <div className='flex justify-center items-center gap-4'>
                    <div className="form-control w-full max-w-xs mt-10">
                        <select onChange={getValue} className="select select-bordered">
                            <option >Select Maker</option>
                            {
                                makerName.map((maker, i) => <>
                                    <option key={i}>
                                        {maker.name}
                                    </option>

                                </>)
                            }
                        </select>
                    </div>

                    <div className='form-control w-full max-w-xs mt-10'>
                        <select className="select select-bordered">
                            <option >Price Range</option>
                            <option >50,000-100,000</option>
                            <option >100.001-300,000</option>
                            <option >300,001-500,000</option>
                            <option >500,001-1,500,000</option>
                        </select>
                    </div>

                </div>
                <div className='flex justify-center items-center mt-5'>
                <button className='btn btn-primary'>Search</button>
                </div>
            </form>
        </div>
    );
};

export default VehicalSearch;