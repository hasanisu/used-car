import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../context/AuthProvider';
import { async } from '@firebase/util';
const useCart = () =>{
    const {user} = useContext(AuthContext);
    const { isLoading, refetch, data: userCart = [] } = useQuery(({
        queryKey:['cart', user?.email],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
            return res.json();
        }
    }))

    return [userCart, isLoading, refetch]

}
export default useCart;