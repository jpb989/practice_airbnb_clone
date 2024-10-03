"use client";
import useSignupModal from '@/app/hooks/useSignupModal';
import React, { useState } from 'react';
import Modal from './Modal';
import CustomButton from '../forms/CustomButton';

const SignupModal = () => {
    const signupModal = useSignupModal()
    const content = (
        <>
            <form className='space-y-4'>
                <input placeholder='Email' type="email" className='w-full h-[54px] px-4 border border-gray-300 rounded-xl'/>
                <input placeholder='Password' type="password" className='w-full h-[54px] px-4 border border-gray-300 rounded-xl'/>
                <input placeholder='Repeat Password' type="password" className='w-full h-[54px] px-4 border border-gray-300 rounded-xl'/>
                <div className='p-5 bg-airbnb text-white rounded-xl opacity-80'>
                    Error Message
                </div>
                <CustomButton
                label='Submit'
                onClick={() => console.log("Test Submit")}
                />
            </form>
        </>
    )
    const [] = useState();
    return (
        <Modal
            isOpen={signupModal.isOpen}
            close={signupModal.close}
            label="Signup"
            content={content}
        />
    )
}

export default SignupModal;