
import { useQuery } from 'react-query'

import useAxiosSecure from './useAxiousSecure';
import useAuth from './useAuth';

const useCart = () =>{
    const {user,loading} = useAuth();
    //const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data :cart= []} = useQuery({
    /*     queryKey:['carts',user?.email],
        queryFn: async () =>{
            const response = await fetch(`http://localhost:5000/carts?email=${user.email}`,{headers:{
                authorization:`bearer ${token }`
            }})
            return response.json();
        }, */
        queryKey:['carts',user?.email],
        enabled:!loading && !!user?.email,
        queryFn: async () =>{
            const res = await axiosSecure(`/carts?email=${user.email}`)
            console.log('res from axios',res)
            return res.data;
        },

    })
    return [cart,refetch]



}
export default useCart;