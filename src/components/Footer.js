import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="w-full bg-[#000B2C] py-16">
                <div className="container mx-auto px-4">
                    <p className="text-center text-white text-lg">
                        © {new Date().getFullYear()} All Rights Reserved. Designed & Developed By
                        <a href='https://brandshow.in/'> Brandshow</a>
                    </p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
