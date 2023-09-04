import { async } from "@firebase/util";
import app from "../firebase/firebase.config";

export const setUserToDb = async (currentUser) => {
    // const currentUser = {
    //     name,
    //     email,
    //     image,
    // }
    const url = `http://localhost:5000/user/${currentUser?.email}`;
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
    const data = await response.json();
    return data
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
    const res = await fetch(url);
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


export const makeSeller = async user => {
    delete user._id
    const res = await fetch(`http://localhost:5000/user/${user?.email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ ...user, role: 'seller' })
    })
    const data = await res.json()
    return data;
}

//Email
export const getSellerProducts = async (email) => {
    const url = `http://localhost:5000/post-cars?email=${email}`;
    const res = await fetch(url)
    const data = await res.json()
    return data;
}



// set wishlist to cart
export const addToWishlist = async (addToCart) => {
    const url = `http://localhost:5000/carts/${addToCart?._id}`
    const res = await fetch(url, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(addToCart)
    })
    const data = await res.json()
    return data
}

//delete wishlist
export const deleteToWishlist = async(_id)=>{
    const url = `http://localhost:5000/carts/${_id}`
    const res = await fetch(url, {
        method: 'DELETE',
    })
    const data = await res.json()
    return data
}