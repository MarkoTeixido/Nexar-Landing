import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            borderTop: '1px solid var(--glass-border)',
            padding: '1rem 0',
            textAlign: 'center',
            color: 'var(--text-muted)',
            background: 'var(--background)',
            position: 'relative',
            zIndex: 10,
            transition: 'background 0.3s ease'
        }}>
            <div className="container">
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', background: 'linear-gradient(to right, var(--text), var(--text-muted))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Nexar</h2>
                <p>© 2025 Proyecto Nexar. Iniciativa de Salud Mental.</p>
                <p style={{ marginTop: '0.5rem', opacity: 0.6, fontSize: '0.875rem' }}>Conectando personas con ayuda real cuando más importa.</p>
            </div>
        </footer>
    );
};

export default Footer;
