import React from 'react';
import RegisterFrom from './components/RegisterFrom';
import Image from 'next/image';

const registerPage = () => {
    return (
        <div>
            <h2 className='my-10 text-4xl text-center'>Register page</h2>
            <section className='grid grid-cols-1 pb-10 md:mt-16 md:grid-cols-2 gap-6'>
                <div>
                    <Image className='w-full h-[400px]' width={300} height={100} alt='login' src={'/assets/images/login/login.svg'}/>
                </div>

            <div>
                <RegisterFrom></RegisterFrom>
            </div>
            </section>
        </div>
    );
};

export default registerPage;