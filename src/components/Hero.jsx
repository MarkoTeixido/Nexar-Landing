import React from 'react';
import { Activity, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'flex-start', // Top align to reduce empty space above
            justifyContent: 'center',
            paddingTop: '160px', // Fixed space (80px navbar + 80px gap)
            paddingBottom: '80px',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Decorative Glow */}
            <div style={{
                position: 'absolute',
                top: '30%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 'min(800px, 90vw)',
                height: 'min(800px, 90vw)',
                background: 'radial-gradient(circle, var(--gradient-noise-1) 0%, transparent 60%)',
                filter: 'blur(100px)',
                zIndex: -1,
                opacity: 0.8
            }} />
            <div style={{
                position: 'absolute',
                bottom: '10%',
                right: '10%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, var(--gradient-noise-2) 0%, transparent 60%)',
                filter: 'blur(80px)',
                zIndex: -1,
                opacity: 0.5
            }} />

            <div className="container" style={{ textAlign: 'center', maxWidth: '1000px' }}>
                <div className="animate-in">

                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 1rem',
                        background: 'rgba(59, 130, 246, 0.08)',
                        border: '1px solid rgba(59, 130, 246, 0.2)',
                        borderRadius: '100px',
                        marginBottom: '2rem',
                        backdropFilter: 'blur(10px)',
                    }}>
                        <div style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            background: 'var(--primary)',
                            boxShadow: '0 0 8px var(--primary)'
                        }} />
                        <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--primary)', letterSpacing: '0.02em' }}>
                            Sistema de Triaje Inteligente
                        </span>
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(3rem, 5vw, 4.2rem)', // Increased size slightly
                        lineHeight: 1.15,
                        marginBottom: '2rem',
                        fontWeight: 800,
                        letterSpacing: '-0.03em',
                        color: 'var(--text)'
                    }}>
                        Cuando el Silencio es Fatal,<br />
                        <span className="text-gradient-blue" style={{ fontSize: '105%' }}>
                            la Conexión lo es Todo.
                        </span>
                    </h1>

                    <p style={{
                        fontSize: '1.25rem',
                        marginBottom: '3rem',
                        color: 'var(--text-muted)',
                        maxWidth: '700px',
                        marginInline: 'auto',
                        lineHeight: 1.6
                    }}>
                        Transformamos la espera de <span style={{ color: 'var(--text)', fontWeight: 600 }}>3 meses</span> en <span style={{ color: 'var(--primary)', fontWeight: 600 }}>asistencia inmediata</span>.
                        Una respuesta estructural para una crisis urgente.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="#solution" className="btn btn-primary" style={{
                            padding: '1rem 2rem',
                            fontSize: '1.05rem',
                            borderRadius: '50px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            background: 'var(--primary)',
                            color: '#fff',
                            boxShadow: '0 8px 20px -4px rgba(59, 130, 246, 0.5)'
                        }}>
                            Descubrir Solución <ArrowRight size={19} />
                        </a>
                        <a href="#features" className="btn btn-secondary" style={{
                            padding: '1rem 2rem',
                            fontSize: '1.05rem',
                            borderRadius: '50px',
                            background: 'white', // Solid white for contrast against glass
                            border: '1px solid var(--glass-border)',
                            color: 'var(--text-muted)',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
                        }}>
                            Ver Funcionalidades
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
