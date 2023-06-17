import { useQuery } from "react-query"

const useMenu = () =>{
    const {data:carts=[],isLoading:loading,refetch} = useQuery({
        queryKey:['carts'],
        queryFn:async() =>{
            const res = await fetch('http://localhost:5000/allclass');
            return res.json();
        }
    })
    return[carts,loading,refetch]

}
export default useMenu;