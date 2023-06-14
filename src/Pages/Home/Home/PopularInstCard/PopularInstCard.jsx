

const PopularInstCard = ({ item }) => {
    const {image,_id,title,course_Experience,name,email} =item
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='w-[240px] h-[200px]' src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{title}</p>
                <p>Exprience:{course_Experience}</p>
                <p>email:{email}</p>
                
            </div>
        </div>
    );
};

export default PopularInstCard;