import React from 'react';
import Feature from '../Feature/Feature';


const PriceOption = ({options}) => {
  const {name, price, features} = options;

    return (
            <div className='shadow-lg rounded-2xl  bg-slate-50 '>
                <div>
                    <p className='text-2xl bg-green-500 text-white font-semibold py-2 rounded-t-lg'>{name}</p>
                    <p className='font-bold text-5xl py-2 '>{price} <span className='text-2xl font-normal text-slate-500'>/mon</span></p>
                </div>
                <div className='py-5'>
                    {
                        features.map((feature, idx) => <Feature key={idx}  feature={feature}></Feature>)
                    }  
                </div>
                <div className='p-5'> 
                    <button className="btn w-full btn-success text-white font-bold">Success</button>
                </div>
             
            </div>
    );
};

export default PriceOption;