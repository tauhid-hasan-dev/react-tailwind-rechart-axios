import React from 'react';
import { CheckCircleIcon} from '@heroicons/react/24/solid';

const Feature = ({feature}) => {
    return (
        <div className='flex text-center px-10 gap-2 p-1'>
                    <CheckCircleIcon className='h-6 w-6 text-green-600'></CheckCircleIcon>
                    <h1>{feature}</h1>
                </div>
    );
};

export default Feature;