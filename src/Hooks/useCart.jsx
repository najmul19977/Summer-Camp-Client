import { useContext } from 'react';
import { useQuery } from 'react-query'
import { AuthContext } from '../Provider/AuthProvider';

const useCart = () =>{
    const {user} = useContext(AuthContext);

    const { isLoading,refetch, data :cart= []} = useQuery({
        queryKey:['carts',user?.email],
        queryFn: async () =>{
            const response = await fetch(`http://localhost:5000/carts?email=${user.email}`)
            return response.json();
        },

    })
    return [cart,isLoading,refetch]



}
export default useCart;