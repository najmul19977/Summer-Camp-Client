import React from 'react';

const PopularCard = ({item}) => {
    const {image,_id,title,course_Free,name,class_duration,sit} =item
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img style={{borderRadius:'200px 200px 200px 200px'}} className='w-[240px] h-[200px]' src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{title}</p>
                <p>duration :{class_duration}</p>
                <p> avaliable sit:{sit}</p>

                <p>Price :{course_Free}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary ">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default PopularCard;