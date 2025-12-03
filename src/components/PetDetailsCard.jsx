import React from 'react';
import { FaStar } from 'react-icons/fa';

const PetDetailsCard = ({pet}) => {
    return (
        <div className='animate__animated animate__fadeIn'>
            <h2 className='font-bold text-3xl text-center mb-3 text-green-600 animate__animated animate__bounceInDown'>{pet.serviceName}</h2>
            <img className='h-120 w-full rounded-md animate__animated animate__zoomIn' src={pet.image} alt="" />
            <p className='animate__animated animate__fadeInUp'>{pet.description}</p>
            <div className='flex font-semibold justify-between mt-2 text-red-400 animate__animated animate__fadeInLeft'>
                <p>{pet.providerName}</p>
                <p>{pet.providerEmail}</p>
            </div>
            <div className='flex justify-between mt-3 text-shadow-blue-500 font-semibold animate__animated animate__fadeInRight'>
                <p>{pet.price}$</p>
                <p className='flex items-center gap-1'>{pet.rating} <FaStar className='text-yellow-400'></FaStar></p>
            </div>
        </div>
    );
};

export default PetDetailsCard;

