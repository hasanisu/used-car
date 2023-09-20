import { useEffect, useState } from "react";
const useHost =(email)=>{
    const [isHost, setIsHost]=useState(false)
    const [isHostLoading, setIsHostLoading]=useState(true);

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
                console.log('is Host', data)
                setIsHost(data.role)
                setIsHostLoading(false)
            })
        }
    }, [email])
    return [isHost, isHostLoading]
}

export default useHost;