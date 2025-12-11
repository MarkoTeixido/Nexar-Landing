import React from 'react';
import { Activity, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '80px',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Decorative Glow */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, var(--gradient-noise-1) 0%, transparent 70%)',
                filter: 'blur(80px)',
                zIndex: -1
            }} />

            <div className="container" style={{ textAlign: 'center', maxWidth: '900px' }}>
                <div className="animate-in">
                    <div className="badge">
                        <Activity size={14} className="text-gradient-blue" />
                        <span>Sistema de Triaje de Emergencia de Salud Mental</span>
                    </div>

                    <h1 style={{ marginBottom: '1.5rem' }}>
                        Cuando el Silencio es Fatal,<br />
                        <span className="text-gradient-blue">la Conexión es Vital.</span>
                    </h1>

                    <p style={{ fontSize: '1.25rem', marginBottom: '3rem', color: 'var(--text-muted)', maxWidth: '600px', marginInline: 'auto' }}>
                        Una solución digital integral para cerrar la brecha crítica entre la crisis y la atención.
                        Transformando una <span style={{ color: 'var(--text)' }}>espera de 3 meses</span> en <span style={{ color: 'var(--accent)' }}>asistencia inmediata</span>.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="#solution" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                            Conocer la Solución <ArrowRight size={18} />
                        </a>
                        <a href="#features" className="btn btn-secondary">
                            Ver Funcionalidades
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
