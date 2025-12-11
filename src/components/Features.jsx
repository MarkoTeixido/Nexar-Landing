import React from 'react';
import { User, Stethoscope, ShieldCheck, Users, Calendar, Bell } from 'lucide-react';

const Features = () => {
    return (
        <section id="features" className="section">
            <div className="container">
                <div style={{ marginBottom: '5rem', textAlign: 'center' }}>
                    <h2 className="animate-in">Funcionalidades MVP</h2>
                    <p className="animate-in delay-100">Características núcleo requeridas para el Producto Mínimo Viable.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>

                    {/* Public / Anonymous */}
                    <div className="glass-card animate-in delay-100">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                            <h3 style={{ margin: 0 }}>Ciudadanos / Pacientes</h3>
                            <div style={{ padding: '8px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '10px' }}>
                                <User color="var(--accent)" size={24} />
                            </div>
                        </div>

                        <div className="grid grid-2" style={{ gap: '1.5rem' }}>
                            <div style={{ padding: '1.5rem', background: 'var(--glass-bg)', borderRadius: '1rem', border: '1px solid var(--glass-border)' }}>
                                <h4 style={{ fontSize: '1rem', color: 'var(--accent)', marginBottom: '1rem' }}>Anónimo</h4>
                                <ul style={{ listStyle: 'none', fontSize: '0.9rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <li>• Acceso a Recursos Generales</li>
                                    <li>• Chat/Video Inmediato (Alto Riesgo)</li>
                                    <li>• Solicitar Turno (Requiere Validación)</li>
                                </ul>
                            </div>
                            <div style={{ padding: '1.5rem', background: 'var(--glass-bg)', borderRadius: '1rem', border: '1px solid var(--glass-border)' }}>
                                <h4 style={{ fontSize: '1rem', color: 'var(--accent)', marginBottom: '1rem' }}>Registrado</h4>
                                <ul style={{ listStyle: 'none', fontSize: '0.9rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <li>• Panel Personal</li>
                                    <li>• Ver/Gestionar Turnos</li>
                                    <li>• Gestión de Perfil</li>
                                    <li>• Centro de Notificaciones</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Professional */}
                    <div className="glass-card animate-in delay-200" style={{ border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                            <h3 style={{ margin: 0 }}>Profesionales</h3>
                            <div style={{ padding: '8px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '10px' }}>
                                <Stethoscope color="#10b981" />
                            </div>
                        </div>
                        <ul style={{ listStyle: 'none', display: 'grid', gap: '1.5rem' }}>
                            <li style={{ display: 'flex', gap: '1rem' }}>
                                <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '8px', borderRadius: '8px', height: 'fit-content' }}>
                                    <Users size={18} color="#10b981" />
                                </div>
                                <div>
                                    <strong style={{ display: 'block', fontSize: '1rem', marginBottom: '0.25rem' }}>Gestión de Pacientes</strong>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Ver pacientes pasados/actuales, notas clínicas, metas de tratamiento.</span>
                                </div>
                            </li>
                            <li style={{ display: 'flex', gap: '1rem' }}>
                                <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '8px', borderRadius: '8px', height: 'fit-content' }}>
                                    <Calendar size={18} color="#10b981" />
                                </div>
                                <div>
                                    <strong style={{ display: 'block', fontSize: '1rem', marginBottom: '0.25rem' }}>Calendario Inteligente</strong>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Turnos codificados por color (Chat, Video, Presencial).</span>
                                </div>
                            </li>
                            <li style={{ display: 'flex', gap: '1rem' }}>
                                <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '8px', borderRadius: '8px', height: 'fit-content' }}>
                                    <Bell size={18} color="#10b981" />
                                </div>
                                <div>
                                    <strong style={{ display: 'block', fontSize: '1rem', marginBottom: '0.25rem' }}>Alertas</strong>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Notificaciones instantáneas para nuevos turnos o mensajes.</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Admin */}
                    <div className="glass-card animate-in delay-300" style={{ gridColumn: '1 / -1', border: '1px solid rgba(244, 63, 94, 0.2)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                            <h3 style={{ margin: 0 }}>Administración del Sistema</h3>
                            <div style={{ padding: '8px', background: 'rgba(244, 63, 94, 0.1)', borderRadius: '10px' }}>
                                <ShieldCheck color="#f43f5e" />
                            </div>
                        </div>

                        <div className="grid grid-3" style={{ gap: '2rem' }}>
                            <div>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#f43f5e' }}>Gestión de Usuarios</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                    Dar de alta profesionales con credenciales generadas.
                                </p>
                            </div>

                            <div>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#f43f5e' }}>Historial de Casos</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                    Vista de tabla de casos filtrada por Fecha, Nivel de Riesgo, Tipo de Atención. (Datos Anonimizados).
                                </p>
                            </div>

                            <div>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#f43f5e' }}>Estadísticas y Reportes</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                    Reportes exportables a PDF.
                                    <br />
                                    • Intervenciones por período
                                    <br />
                                    • Distribución de riesgos
                                    <br />
                                    • Uso de canales de comunicación
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Features;
