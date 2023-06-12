import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Component/SectionTitle/SectionTitle';
import ClassCategoryCard from '../ClassCategoryCard/ClassCategoryCard';

const ClassCategory = () => {
    const [clas,setClas] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/allclass')
        .then(res => res.json())
        .then(data =>setClas(data))
    },[])
    return (
        <div>
            <SectionTitle
            heading={'All Class'}
            subHeading={'Our Class'}
            
            ></SectionTitle>
            <div className='grid md:grid-cols-3 gap-2 mt-20 mb-20'>
                {
                    clas.map(item => <ClassCategoryCard
                    key={item._id}
                    item={item}
                    ></ClassCategoryCard>)
                }
            </div>
            
        </div>
    );
};

export default ClassCategory;