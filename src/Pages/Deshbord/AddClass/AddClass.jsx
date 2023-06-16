import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { useForm } from 'react-hook-form';


const AddClass = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
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
                        <span className="label-text ">Class Duration*</span>
                    </label>
                    <input type="text" placeholder="Class Duration Type here" {...register("duration", { required: true })} className="input input-bordered input-primary w-full max-w-xs" />
                    <label className="label">
                        <span className="label-text ">Class Price*</span>
                    </label>
                    <input type="number" placeholder="Course Free Type here" {...register("price", { required: true })} className="input input-bordered input-primary w-full max-w-xs" />
                    <label className="label">
                        <span className="label-text ">Class Avaliable Sit*</span>
                    </label>
                    <input type="number" placeholder="Avaliavle sit Type here" {...register("sit", { required: true })} className="input input-bordered input-primary w-full max-w-xs" />
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Add Class Image*</span>
                            
                        </label>
                        <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                       
                    </div>
                    <input className="btn btn-primary btn-sm my-4" type="submit" value="Add Class" />

                </div>
            </form>
        </div>
    );
};

export default AddClass;