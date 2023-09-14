

export const setUserToDb = (currentUser) => {
    const url = `http://localhost:5000/user/${currentUser?.email}`;
     fetch(url, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            authorization: `bearer ${localStorage.getItem('usedCar-token')}`
        },
        body: JSON.stringify(currentUser)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)

         //save token  to in local storage 
         localStorage.setItem('usedCar-token', data.token)
    })
}





export const sellerRequest = async sellerData => {

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
export const getRole = async email => {
    const url = `http://localhost:5000/user/${email}`;
    const res = await fetch(url, {
        headers:{
            authorization: `bearer ${localStorage.getItem('usedCar-token')}`
        }
    });
    const user = await res.json();
    return user?.role


}

// Get role 
export const getSellerStatus = async email => {
    const url = `http://localhost:5000/user/${email}`;
    const res = await fetch(url);
    const user = await res.json();
    return user?.status


}


//Email
export const getSellerProducts = async (email) => {
    const url = `http://localhost:5000/post-cars?email=${email}`;
    const res = await fetch(url)
    const data = await res.json()
    return data;
}




//Get all wishlist
export const allWishlistByEmail = async(email) =>{
    const url = `http://localhost:5000/carts?email=${email}`;
    const res = await fetch(url)
    const data = await res.json()
    return data;
}






// set wishlist to cart
export const addToWishlist = async (addToCart) => {
    const url = `http://localhost:5000/carts`
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(addToCart)
    })
    const data = await res.json()
    return data
}




//delete wishlist
export const deleteToWishlist = async(id)=>{
    const url = `http://localhost:5000/carts/${id}`
    const res = await fetch(url, {
        method: 'DELETE',
    })
    const data = await res.json()
    return data
}




//Get all user For Admin
export const getAllUser = async () =>{
    const url = `http://localhost:5000/users`;
    const res = await fetch(url,{
        headers: {
            authorization: `bearer ${localStorage.getItem('usedCar-token')}`
        }
    })
    const data = await res.json();
    return data
}




//Make Seller
export const makeSeller = async user => {
    delete user._id
    const res = await fetch(`http://localhost:5000/user/${user?.email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({...user, role: 'seller'})
    })
    const data = await res.json()
    return data;
}


// Get All Sellers
export const getAllSellers = async () =>{
    const url = `http://localhost:5000/sellers`;
    const res = await fetch(url,{
        headers: {
            authorization: `bearer ${localStorage.getItem('usedCar-token')}`
        }
    })
    const data = await res.json();
    return data
}


// Get All Buyers
export const getAllBuyers = async () =>{
    const url = `http://localhost:5000/buyers`;
    const res = await fetch(url,{
        headers: {
            authorization: `bearer ${localStorage.getItem('usedCar-token')}`
        }
    })
    const data = await res.json();
    return data
}



//verified Seller
export const verifiedSeller = async user => {
    delete user._id
    const res = await fetch(`http://localhost:5000/user/${user?.email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({...user, status: 'verified'})
    })
    const data = await res.json()
    return data;
}

//verified Seller
// export const statsuPaid = async products => {
    
//     const res = await fetch(`http://localhost:5000/all-car/${products?._id}`, {
//         method: 'PATCH',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify(products)
//     })
//     const data = await res.json()
//     return data;
// }
