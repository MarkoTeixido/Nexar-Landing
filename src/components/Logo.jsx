import React from 'react';

const Logo = ({ size = 40 }) => {
    return (
        <img
            src="/logo.png"
            alt="Nexar Logo"
            style={{
                height: size,
                width: 'auto',
                maxWidth: '180px', // Prevent it from being too wide if the image is wide
                objectFit: 'contain'
            }}
        />
    );
};

export default Logo;
