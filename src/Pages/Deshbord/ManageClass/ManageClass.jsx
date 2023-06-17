import React from 'react';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import useMenu from '../../../Hooks/useMenu';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiousSecure';

const ManageClass = () => {
    const [carts,,refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure();
    const handleDelete = item =>{
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
             /*  Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              ) */
              axiosSecure.delete(`/allclass/${item._id}`)
              .then(res =>{
                console.log('deleted res',res.data);
                if(res.data.deletedCount > 0 ){
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
                refetch();
              })

            }
          })
    }
    return (
        <div className='w-full'>
            <SectionTitle heading="Manage All Class" subHeading="Hurry Up"></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>image</th>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Delet</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carts.map((item,index) => <tr
                        key={item._id}
                        
                        >
                            <td>
                               {index+1}
                            </td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image}alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                   
                                </div>
                            </td>
                            <td>
                              {item.name}
                            </td>
                            <td>{item.title}</td>
                            <td>${item.course_Free}</td>
                            <td>
                                    <button onClick={()=>handleDelete(item)} className="btn btn-ghost bg-red-500"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                        </tr>
                             )}
                        
                        
                       
                    </tbody>
                   

                </table>
            </div>
        </div>
    );
};

export default ManageClass;