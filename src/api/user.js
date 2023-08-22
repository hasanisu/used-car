export const setUserToDb = async (name, email, image) =>{
    const currentUser = {
        name,
        email,
        image
    }
    const url = `http://localhost:5000/user/${email}`;
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