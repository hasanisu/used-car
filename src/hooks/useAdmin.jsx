import { useEffect, useState } from "react";
const useAdmin =(email)=>{
    const [isAdmin, setIsAdmin]=useState(false)
    const [isAdminLoading, setIsAdminLoading]=useState(true);

    useEffect(()=>{
        if(email){
            fetch(`http://localhost:5000/user/${email}`,{
                headers: {
                    authorization : `bearer ${localStorage.getItem('usedCar-token')}`
                }
            }
            
            )
            .then(res => res.json())
            .then(data => {
                console.log('is Admin', data)
                setIsAdmin(data.role)
                setIsAdminLoading(false)
            })
        }
    }, [email])
    return [isAdmin, isAdminLoading]
}

export default useAdmin;