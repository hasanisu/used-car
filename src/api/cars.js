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


    
