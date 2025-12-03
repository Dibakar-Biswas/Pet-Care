import React from 'react';
import c1 from '../assets/c1.jpg'
import c2 from '../assets/c2.jpg'
import c3 from '../assets/c3.jpg'

const Extra = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold text-center mb-8'>What Our Customers Say</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div className='card shadow-xl p-6 '>
                    <p className='text-sm mb-4'>"I can’t recommend WarmPaws enough! Their team treats my cat like family, and the wellness checkups are so thorough. I always leave feeling confident my pet is in great hands."</p>
                    <div className='flex items-center gap-3'>
                        <img src={c1} className='w-12 rounded-full' alt="" />
                        <div>
                        <p className='font-bold'>Happy Customer</p>
                        <p className='text-xs text-gray-500'>Miss Wonder</p>
                        </div>
                    </div>
                </div>
                <div className='card shadow-xl p-6 '>
                    <p className='text-sm mb-4'>"WarmPaws is the only place I trust for my rabbit’s care. The staff is so gentle and knowledgeable about exotic pets. It’s clear they truly love what they do."</p>
                    <div className='flex items-center gap-3'>
                        <img src={c2} className='w-12 rounded-full' alt="" />
                        <div>
                        <p className='font-bold'>Happy Customer</p>
                        <p className='text-xs text-gray-500'>Miss Park</p>
                        </div>
                    </div>
                </div>
                <div className='card shadow-xl p-6 '>
                    <p className='text-sm mb-4'>"From grooming to nutrition advice, WarmPaws has exceeded my expectations. My golden retriever looks and feels amazing after every visit — thank you for the amazing service!"</p>
                    <div className='flex items-center gap-3'>
                        <img src={c3} className='w-12 rounded-full' alt="" />
                        <div>
                        <p className='font-bold'>Happy Customer</p>
                        <p className='text-xs text-gray-500'>Miss Noise</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Extra;