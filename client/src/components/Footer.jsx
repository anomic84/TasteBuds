import React from 'react';

const Footer = () => {
    return (
        // mt-auto keeps footer at bottom of screen
        <div className='mt-auto sticky bottom-0 w-full h-10 bg-coral'>
            <p className='text-center py-2 text-manrope text-white'>
                <a
                    href='https://github.com/anomic84/TasteBuds'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    TasteBuds
                </a>{' '}
                © 2023
            </p>
        </div>
    );
};

export default Footer;
