import React from 'react';
import PriceOption from '../PriceOptions/PriceOption';

const Pricing = () => {
    const pricingOptions = [
        {id:1, name: "Basic", price: 0.00 , features:[
            '1 month access',
            'Read and watch only',
            'No download',
            '20 hours watch time',
            'Limited Access',
        ]},
        {id:2, name: "Standard", price: 9.99, features:[
            '12 month access',
            'Read, watch , bookmark, resources etc',
            'limited download',
            'Unlimited watch time',
            'Limited Access',
        ]},
        {id:3, name: "Premium", price: 19.99, features:[
            'Unlimited access',
            'Everything allowed',
            'Unlimited download',
            'Unlimited watch time',
            'Unlimited Access',
        ]},
    ]
    return (
        <div className='text-center py-3 px-20'>
            <h2 className='text-4xl font font-semibold py-5'>Best Deal of the town</h2>
            <div className='grid grid-cols-3  gap-4 '>
                {
                    pricingOptions.map(options => <PriceOption key={options.id} options={options} ></PriceOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;