import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../../Component/SectionTitle/SectionTitle';
import PopularInstCard from '../PopularInstCard/PopularInstCard';

const PopularInst = () => {
    const [instructor,setInstructor] = useState([]);
    useEffect(() =>{
        fetch('https://summer-camp-server-ivory-mu.vercel.app/popularInstractor')
        .then(res => res.json())
        .then(data =>setInstructor(data))
    },[])
    console.log(instructor);
    return (
        <section>
             <SectionTitle
            heading={'Popular Instructor'}
            subHeading={'Our Instructor'}
            
            ></SectionTitle>
            <div className=' grid md:grid-cols-3 gap-4 mt-20 mb-20'>
                {
                    instructor.map(item => <PopularInstCard
                    key={item._id}
                    item={item}
                    ></PopularInstCard>)
                }
            </div>
        </section>
    );
};

export default PopularInst;