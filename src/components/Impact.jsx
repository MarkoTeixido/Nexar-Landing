import React from 'react';
import { Lightbulb, TrendingUp, Users, Award } from 'lucide-react';

const Impact = () => {
    return (
        <section className="section" style={{ textAlign: 'center', position: 'relative' }}>
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to top, var(--gradient-noise-1), transparent)',
                zIndex: -1
            }} />

            <div className="container" style={{ maxWidth: '1000px' }}>
                <h2 className="animate-in" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
                    Impacto y Oportunidad
                </h2>

                <p className="animate-in delay-100" style={{ fontSize: '1.25rem', marginBottom: '4rem', color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '800px', marginInline: 'auto' }}>
                    Nexar no es solo una aplicación, es una respuesta estructural a una necesidad latente.
                    Representa la modernización necesaria de la atención pública en salud mental.
                </p>

                <div className="grid grid-3">
                    <div className="glass-card animate-in delay-200" style={{ textAlign: 'left' }}>
                        <div style={{ marginBottom: '1rem' }}><Lightbulb color="var(--accent)" size={32} /></div>
                        <h3 style={{ fontSize: '1.25rem' }}>Innovación Social</h3>
                        <p style={{ fontSize: '0.95rem' }}>
                            Introduce tecnología accesible para resolver un problema humano crítico,
                            reduciendo barreras burocráticas y estigma.
                        </p>
                    </div>
                    <div className="glass-card animate-in delay-200" style={{ textAlign: 'left' }}>
                        <div style={{ marginBottom: '1rem' }}><TrendingUp color="var(--success)" size={32} /></div>
                        <h3 style={{ fontSize: '1.25rem' }}>Optimización de Recursos</h3>
                        <p style={{ fontSize: '0.95rem' }}>
                            Permite al estado gestionar la demanda de profesionales de manera eficiente
                            mediante triaje automático y turnos organizados.
                        </p>
                    </div>
                    <div className="glass-card animate-in delay-200" style={{ textAlign: 'left' }}>
                        <div style={{ marginBottom: '1rem' }}><Users color="var(--warning)" size={32} /></div>
                        <h3 style={{ fontSize: '1.25rem' }}>Alcance Masivo</h3>
                        <p style={{ fontSize: '0.95rem' }}>
                            Escalable para cubrir a toda la población, asegurando que nadie
                            quede sin atención en momentos críticos.
                        </p>
                    </div>
                    <div className="glass-card animate-in delay-300" style={{ textAlign: 'left', border: '1px solid var(--accent-2)', background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), transparent)' }}>
                        <div style={{ marginBottom: '1rem' }}><Award color="var(--accent-2)" size={32} /></div>
                        <h3 style={{ fontSize: '1.25rem' }}>Pioneros en Acción</h3>
                        <p style={{ fontSize: '0.95rem' }}>
                            Posiciona a la provincia como líder vanguardista en la implementación de
                            soluciones tecnológicas para la salud mental pública.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Impact;
