import React from 'react';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            borderBottom: '1px solid var(--glass-border)',
            background: 'var(--glass-bg)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            transition: 'all 0.3s ease'
        }}>
            <div className="container" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: '80px',
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                    <Logo size={65} />
                    <span style={{
                        fontSize: '1.8rem',
                        fontWeight: 600,
                        letterSpacing: '-0.03em',
                        background: 'linear-gradient(135deg, var(--text) 0%, var(--text-muted) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontFamily: "'Outfit', sans-serif",
                        lineHeight: 1
                    }}>
                        Nexar
                    </span>
                </div>

                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', '@media (max-width: 768px)': { display: 'none' } }}>
                        <a href="#problem" style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: 500 }}>El Problema</a>
                        <a href="#solution" style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: 500 }}>La Solución</a>
                        <a href="#features" style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: 500 }}>MVP</a>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
