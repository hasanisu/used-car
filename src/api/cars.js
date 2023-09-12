import { async } from "@firebase/util";

// All Used Car Category Api
export const reconCarCategories = async ()=>{
    const url = 'http://localhost:5000/usedCarCategory'
    const res = await fetch(url);
    const data = res.json()
    return data 
}

// All used car category by id api
export const getUsedCar = async (id)=>{
    const url = `http://localhost:5000/category/${id}`
    const res = await fetch(url);
    const data = res.json()
    return data 
}


export const carCategories = async ()=>{
    const url = 'http://localhost:5000/categories'
    const res = await fetch(url);
    const data = res.json()
    return data 
}
export const getAllToyota = async ()=>{
    const url = 'http://localhost:5000/all-cars/toyota'
    const res = await fetch(url);
    const data = res.json()
    return data 
}

export const getAllHonda = async ()=>{
    const url = 'http://localhost:5000/all-cars/honda'
    const res = await fetch(url);
    const data = res.json()
    return data 
}


// Add car to db api

export const addToProductDb = async(carData)=>{
    const url = 'http://localhost:5000/all-car'
    const res = await fetch(url, {
    method: 'POST',
    headers:{
        "content-type": "application/json",
    },
    body:JSON.stringify(carData)
    })
    const data = await res.json();
    return data
}


//Get all cars 
export const getAllCars = async ()=>{
    const url = 'http://localhost:5000/all-car'
    const res = await fetch(url)
    const data = await res.json()
    return data
}


    
