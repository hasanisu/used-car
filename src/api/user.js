export const setUserToDb = async (currentUser) =>{
    // const currentUser = {
    //     name,
    //     email,
    //     image,
    // }
    const url = `http://localhost:5000/user/${currentUser?.email}`;
    const response = await fetch(url, {
        method: 'PUT',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
    const data = await response.json();
    return data
}


export const sellerRequest = async sellerData =>{

    const url = `http://localhost:5000/user/${sellerData?.email}`;
    
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(sellerData)
    })

    const data = await response.json();

    return data
}


// Get role 
export const getRole = async email =>{
    const url = `http://localhost:5000/user/${email}`;
    const res = await fetch(url);
    const user = await res.json();
    return user?.role


}


export const makeSeller = async user =>{
    delete user._id 
    const res = await fetch(`http://localhost:5000/user/${user?.email}`,{
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body:JSON.stringify({...user, role: 'seller'})
    })
    const data = await res.json()
    return data;
}