import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../../Component/SectionTitle/SectionTitle';
import PopularCard from '../../../Shared/PopularCard/PopularCard';


const PopularClass = () => {
    const [popular,setPopular] = useState([]);
    useEffect(() =>{
        fetch('popularClass.json')
        .then(res => res.json())
        .then(data =>setPopular(data))
    },[])
    return (
        <section>
            <SectionTitle
            heading={'Popular Class'}
            subHeading={'Our Class'}
            
            ></SectionTitle>
            <div className='md:flex gap-4 mt-20 mb-20'>
                {
                    popular.map(item => <PopularCard
                    key={item._id}
                    item ={item}
                    
                    ></PopularCard>)
                }
            </div>
        </section>
    );
};

export default PopularClass;