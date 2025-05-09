import React, { useEffect, useState } from 'react';
import SectionTitle from '../Shared/SectionTitle';
import FoodCard from '../Shared/FishCard';

const Recomend = () => {
    const [items,setItems]=useState([]);
    useEffect(()=>{
        fetch("menu.json")
        .then(res=>res.json())
        .then(res=> setItems(res))
    },[])
    return (
      <section>
        <SectionTitle
          subTitle="--- প্রয়োজনীয় পণ্য বাছাই ---"
          title={"অধিক বিক্রিত"}
        ></SectionTitle>
        <div className='grid grid-cols-4 gap-4'>
          {items.slice(0, 4).map((item) => (
            <FoodCard key={item._id} item={item}></FoodCard>
          ))}
        </div>
      </section>
    );
};

export default Recomend;