import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";


const MyClass = () => {
    const [cart,refetch] = useCart();
    //console.log(cart);
    const total = cart.reduce((sum, item) => {
        console.log("sum kot",sum)
        const price = parseFloat(item.course_Free);
        console.log(price);
        return price  + sum;
        
    },0);
    
    

    const handleDelete = (item) =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
               fetch(`https://summer-camp-server-ivory-mu.vercel.app/carts/${item._id}`,{
                method:'DELETE'
               })
               .then(res =>res.json())
               .then(data =>{
                if(data.deletedCount > 0){
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
               })
            }
          })

    }
    return (
        <div>

            <div className=" uppercase flex justify-evenly font-semibold items-center">
                <h3 className="text-3xl">Total Items:{cart.length}</h3>
                <h3 className="text-3xl">Total Price:${total}</h3>
                <button className="btn btn-warning btn-sm">Pay</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item,index) => <tr
                            key={item._id}
                            
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        
                                    
                                </td>
                                <td>
                                    {item.title}
                                   
                                </td>
                                <td>{item.course_Free}</td>
                                <td>
                                    <button onClick={()=>handleDelete(item)} className="btn btn-ghost bg-red-500"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr> )
                        }
                        
                     
                    </tbody>
                    
                   

                </table>
            </div>

        </div>
    );
};

export default MyClass;