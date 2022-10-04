import React, { useState } from 'react';
import axios from 'axios';
import { BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend,  } from 'recharts';

const PhoneBar = () => {
    /* https://openapi.programming-hero.com/api/phones?search=iphone */
    const [phones, setPhones] = useState();
    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(data => {
        const phonesLoaded = data.data.data;
        const phones = phonesLoaded.map(phone => {
            const parts = phone.slug.split('-');
            const price = parseInt(parts[1]);
            const singlePhone = {
                name: phone.phone_name, 
                price: price,
            }
            return singlePhone;
        })
        setPhones(phones)
    })
    
    return (
        <div className='flex  justify-center'>
           <BarChart width={700} height={250} data={phones}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="price" fill="red" />
                        
            </BarChart>
        </div>
    );
};

export default PhoneBar;