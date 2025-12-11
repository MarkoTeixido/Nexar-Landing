import React from 'react';
import { AlertCircle, Clock } from 'lucide-react';

const Problem = () => {
    return (
        <section id="problem" className="section">
            <div className="container">
                <div style={{ marginBottom: '5rem', textAlign: 'center' }}>
                    <h2 className="animate-in">La Crisis Silenciosa</h2>
                    <p className="animate-in delay-100" style={{ maxWidth: '600px', margin: '0 auto' }}>
                        En una ciudad de 150,000 habitantes, la atención especializada está fallando a quienes más la necesitan.
                    </p>
                </div>

                <div className="grid grid-2">
                    {/* Story Card */}
                    <div className="glass-card animate-in delay-200" style={{ borderLeft: '4px solid var(--danger)' }}>
                        <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{
                                padding: '12px',
                                background: 'rgba(239, 68, 68, 0.1)',
                                borderRadius: '12px',
                                border: '1px solid rgba(239, 68, 68, 0.2)'
                            }}>
                                <AlertCircle color="var(--danger)" size={28} />
                            </div>
                            <h3 style={{ marginBottom: 0 }}>El Disparador</h3>
                        </div>
                        <p style={{ fontStyle: 'italic', fontSize: '1.2rem', color: 'var(--text)', lineHeight: 1.8, opacity: 0.9 }}>
                            "Tristemente, en la última semana, dos adolescentes se suicidaron. El último caso fue grave...
                            pidió ayuda psicológica y nadie ayudó. No tenía dinero para atención privada."
                        </p>
                    </div>

                    {/* Stats Card */}
                    <div className="glass-card animate-in delay-300">
                        <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{
                                padding: '12px',
                                background: 'rgba(245, 158, 11, 0.1)',
                                borderRadius: '12px',
                                border: '1px solid rgba(245, 158, 11, 0.2)'
                            }}>
                                <Clock color="var(--warning)" size={28} />
                            </div>
                            <h3 style={{ marginBottom: 0 }}>El Cuello de Botella</h3>
                        </div>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <li style={{ display: 'flex', alignItems: 'start', gap: '15px' }}>
                                <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--warning)', borderRadius: '50%', marginTop: '10px' }} />
                                <span style={{ fontSize: '1.1rem' }}>Los psicólogos públicos están desbordados.</span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'start', gap: '15px' }}>
                                <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--warning)', borderRadius: '50%', marginTop: '10px' }} />
                                <span style={{ fontSize: '1.1rem' }}>Tiempo de espera para un turno: <strong style={{ color: 'var(--text)', fontSize: '1.2rem' }}>2 a 3 meses</strong>.</span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'start', gap: '15px' }}>
                                <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--warning)', borderRadius: '50%', marginTop: '10px' }} />
                                <span style={{ fontSize: '1.1rem' }}>Resultado: Imposible intervenir eficazmente en crisis agudas.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Problem;
