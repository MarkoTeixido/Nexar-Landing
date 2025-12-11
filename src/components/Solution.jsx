import React from 'react';
import { Smartphone, ShieldCheck, HeartHandshake } from 'lucide-react';

const Solution = () => {
    return (
        <section id="solution" className="section" style={{ background: 'linear-gradient(to bottom, transparent, var(--gradient-noise-2), transparent)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 className="animate-in">Presentando Nexar</h2>
                    <p className="animate-in delay-100" style={{ maxWidth: '700px', margin: '0 auto' }}>
                        Una plataforma unificada para democratizar el acceso a la salud mental.
                        Eliminando barreras entre el paciente y el profesional.
                    </p>
                </div>

                <div className="grid grid-3">
                    <div className="glass-card animate-in delay-100" style={{ textAlign: 'center' }}>
                        <div style={{
                            margin: '0 auto 1.5rem',
                            width: '70px',
                            height: '70px',
                            background: 'rgba(59, 130, 246, 0.1)',
                            borderRadius: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid rgba(59, 130, 246, 0.2)'
                        }}>
                            <Smartphone color="var(--accent)" size={32} />
                        </div>
                        <h3>Acceso Inmediato</h3>
                        <p style={{ fontSize: '1rem' }}>
                            Los usuarios simplemente ingresan, eligen el tipo de atención (Género, Tipo de Ayuda) y formato (Chat, Llamada, Presencial).
                        </p>
                    </div>

                    <div className="glass-card animate-in delay-200" style={{ textAlign: 'center' }}>
                        <div style={{
                            margin: '0 auto 1.5rem',
                            width: '70px',
                            height: '70px',
                            background: 'rgba(16, 185, 129, 0.1)',
                            borderRadius: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid rgba(16, 185, 129, 0.2)'
                        }}>
                            <ShieldCheck color="#10b981" size={32} />
                        </div>
                        <h3>Triaje Inteligente</h3>
                        <p style={{ fontSize: '1rem' }}>
                            Filtrado por riesgo que permite conectar casos de alta prioridad de inmediato vía chat o video, mientras otros agendan sin esfuerzo.
                        </p>
                    </div>

                    <div className="glass-card animate-in delay-300" style={{ textAlign: 'center' }}>
                        <div style={{
                            margin: '0 auto 1.5rem',
                            width: '70px',
                            height: '70px',
                            background: 'rgba(244, 63, 94, 0.1)',
                            borderRadius: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid rgba(244, 63, 94, 0.2)'
                        }}>
                            <HeartHandshake color="#f43f5e" size={32} />
                        </div>
                        <h3>Integración Pública</h3>
                        <p style={{ fontSize: '1rem' }}>
                            Diseñado para ser adoptado por el estado, optimizando los recursos públicos de psicología y siguiendo el historial del paciente eficientemente.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solution;
