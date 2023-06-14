import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Component/SectionTitle/SectionTitle';
import AllInstructorCart from '../AllInstructorCart/AllInstructorCart';


const Instructor = () => {
    const [allinstructor,setAllinstructor] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/allInstractor')
        .then(res => res.json())
        .then(data =>setAllinstructor(data))
    },[])
    return (
        <section>
        <SectionTitle
        heading={'Our All Instructor'}
        subHeading={'Our Instructor'}
        
        ></SectionTitle>
         <div className=' grid md:grid-cols-3 gap-4 mt-20 mb-20'>
                {
                    allinstructor.map(item => <AllInstructorCart
                    key={item._id}
                    item={item}
                    ></AllInstructorCart>)
                }
            </div>
        </section>
    );
};

export default Instructor;