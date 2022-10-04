import React from 'react';
import {  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart , Line} from 'recharts';

const AssignmentMarks = () => {
    const data = [
        {name: 'Tauhid Hasan', marks: 60, quiz: 94},
        {name: 'Mehedi Hasan', marks: 42, quiz: 92},
        {name: 'Muaz Hasan', marks: 52, quiz: 90},
        {name: 'Mohsin Uddin', marks: 48, quiz: 85},
        {name: 'Rifat Hasan', marks: 57, quiz: 74},
        {name: 'Sakib Hakim', marks: 32, quiz: 80},
    ]

    return (
        <div className='mt-18 flex flex-col justify-center items-center p-10'>
                {/* <ResponsiveContainer width="100%" height="100%"> */}
                    <LineChart 
                    width={700}
                    height={400}
                    data={data} > 
                    <CartesianGrid strokeDasharray="3 3" />
                        <Line type="monotone" dataKey="marks" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="quiz" stroke="#82ca9d" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                    </LineChart>
                {/* </ResponsiveContainer> */}
            <div className='text-lg font-semibold text-slate-500'>
                <p>Chart-5: This is the average of the marks of the students in the classroom</p>
            </div>
        </div>
    );
};

export default AssignmentMarks;