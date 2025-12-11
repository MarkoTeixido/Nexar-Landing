import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', zIndex: 1002 }}>
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

                {/* Desktop Menu */}
                <div className="desktop-menu">
                    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                        <a href="#problem" style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: 500 }}>El Problema</a>
                        <a href="#solution" style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: 500 }}>La Solución</a>
                        <a href="#features" style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: 500 }}>MVP</a>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <ThemeToggle />
                    </div>
                </div>

                {/* Mobile Toggle */}
                <div className="mobile-toggle" style={{ alignItems: 'center', gap: '1rem', zIndex: 1002 }}>
                    <ThemeToggle />
                    <button onClick={toggleMenu} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text)' }}>
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Sidebar */}
                <div style={{
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    width: '100%',
                    maxWidth: '300px',
                    background: 'var(--glass-bg)',
                    backdropFilter: 'blur(30px)',
                    WebkitBackdropFilter: 'blur(30px)',
                    borderLeft: '1px solid var(--glass-border)',
                    padding: '6rem 2rem',
                    transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
                    transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    zIndex: 1001,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem'
                }}>
                    <a href="#problem" onClick={toggleMenu} style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text)' }}>El Problema</a>
                    <a href="#solution" onClick={toggleMenu} style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text)' }}>La Solución</a>
                    <a href="#features" onClick={toggleMenu} style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text)' }}>MVP</a>
                </div>

                {/* Overlay */}
                {isMenuOpen && (
                    <div onClick={toggleMenu} style={{
                        position: 'fixed',
                        inset: 0,
                        background: 'rgba(0,0,0,0.5)',
                        zIndex: 1000
                    }} />
                )}

            </div>
        </nav>
    );
};

export default Navbar;
