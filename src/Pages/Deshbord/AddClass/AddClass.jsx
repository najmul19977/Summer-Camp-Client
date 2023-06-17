import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { useForm } from 'react-hook-form';
import useAxiosSecure from "../../../Hooks/useAxiousSecure";
import Swal from "sweetalert2";

const img_hostiong_token = import.meta.env.VITE_Image_Upload_Token;

const AddClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit,reset ,formState:{errors} } = useForm();
   const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hostiong_token}`
    const onSubmit = data =>{
        const formData = new FormData();
        formData.append('image',data.image[0])
        fetch(img_hosting_url,{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then(imgResponse =>{
            if(imgResponse.success){
                const imgURL =imgResponse.data.display_url;
                const {name,title,class_duration,sit,course_Free} = data;
                const newItem = {name,title,image:imgURL,class_duration,sit,course_Free:parseFloat(course_Free)}
                console.log(newItem);
                axiosSecure.post('/allclass',newItem)
                .then(data =>{
                    console.log('after posting new menu item',data.data);
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Add a new Class Successful',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
        })

    };
    console.log(errors);
    console.log(img_hostiong_token);
    return (
        <div className="w-full">
            <SectionTitle subHeading="What's new" heading="Add New Class"></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs px-10">

                    <label className="label">
                        <span className="label-text ">Class name*</span>
                    </label>
                    <input type="text" placeholder="Type Class Name" 
                    {...register("name", {required: true, maxLength: 80})}
                     className="input input-bordered input-primary w-full max-w-xs" />

                    <label className="label">
                        <span className="label-text ">Title*</span>
                    </label>
                    <input type="text" placeholder="Type Class Name" 
                    {...register("title", {required: true, maxLength: 80})}
                     className="input input-bordered input-primary w-full max-w-xs" />
                    <label className="label">
                        <span className="label-text ">Class Duration*</span>
                    </label>
                    <input type="text" placeholder="Class Duration Type here" {...register("class_duration", { required: true })} className="input input-bordered input-primary w-full max-w-xs" />
                    <label className="label">
                        <span className="label-text ">Class Price*</span>
                    </label>
                    <input type="number" placeholder="Course Free Type here" {...register("course_Free", { required: true })} className="input input-bordered input-primary w-full max-w-xs" />
                    <label className="label">
                        <span className="label-text ">Class Avaliable Sit*</span>
                    </label>
                    <input type="number" placeholder="Avaliavle sit Type here" {...register("sit", { required: true })} className="input input-bordered input-primary w-full max-w-xs" />
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Add Class Image*</span>
                            
                        </label>
                        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
                       
                    </div>
                    <input className="btn btn-primary btn-sm my-4" type="submit" value="Add Class" />

                </div>
            </form>
        </div>
    );
};

export default AddClass;