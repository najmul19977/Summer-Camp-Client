

const AllInstructorCart = (item) => {
    const {image,name,email} =item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='w-[240px] h-[200px]' src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name:{name}</h2>
                <p>Email:{email}</p>
                
            </div>
        </div>
    );
};

export default AllInstructorCart;