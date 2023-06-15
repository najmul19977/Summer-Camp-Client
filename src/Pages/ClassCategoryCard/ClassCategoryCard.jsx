import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";



const ClassCategoryCard = ({ item }) => {
    const {image,title,course_Free,name,class_duration,sit,_id} =item;
    const {user} = useContext(AuthContext);
    const [,refetch] = useCart();
    
    const navigate = useNavigate();
    const location = useLocation();
    const handleAddToCart = item =>{
        console.log(item);
        if(user && user.email){
            const cartItem = {classItemId:_id,name,image,course_Free,class_duration,sit,title,email:user.email}
            fetch('http://localhost:5000/carts',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(cartItem)
            })
            .then(res =>res.json())
            .then(data =>{
                if(data.insertedId){
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'class added on the cart',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'please login and add to class',
                
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
              }).then((result) => {
                if (result.isConfirmed) {
                navigate('/login',{state:{from:location}});
                }
              })
        }


    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img style={{borderRadius:'200px 200px 200px 200px'}} className='w-[240px] h-[200px]' src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{title}</p>
                <p>{class_duration}</p>
                <p>Avaliable:{sit}</p>
                <p>Price:{course_Free}</p>
                <div className="card-actions justify-end">
                    <button onClick={() =>handleAddToCart(item)} className="btn btn-primary">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCategoryCard;