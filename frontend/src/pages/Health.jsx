import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Health() {
    const [telemetry, setTelemetry] = useState(null);

    useEffect(() => {
        const fetchTelemetry = async () => {
            try {
                // Vehicle ID 1 as mock
                const res = await axios.get('/api/health/telemetry/1');
                setTelemetry(res.data);
            } catch (err) {
                // Fallback telemetry
                setTelemetry({
                    HealthScore: 94,
                    Status: 'CRITICAL: CYLINDER 4 THERMAL TOLERANCE EXCEEDED BY 0.04%',
                    LastSync: new Date().toISOString()
                });
            }
        };
        fetchTelemetry();
    }, []);

    return (
        <div className="p-8 min-h-[calc(100vh-64px)] bg-[#e2e2e2] text-neutral-900 relative">
            <div className="relative z-10">
                <section className="mb-8 grid grid-cols-1 md:grid-cols-12 gap-0 bg-neutral-950 text-white border-t-8 border-white overflow-hidden">
                    <div className="col-span-8 p-10 flex flex-col justify-between border-r border-white/5 relative overflow-hidden">
                        <h1 className="text-7xl font-black tracking-tighter uppercase mb-6 leading-[0.9]">AI VEHICLE<br/>HEALTH MONITOR</h1>
                        <div className="flex gap-12 mt-10">
                            <div>
                                <span className="text-[10px] text-neutral-500 font-bold tracking-widest uppercase block mb-1">HEALTH SCORE</span>
                                <div className="text-5xl font-black font-['Space_Grotesk']">{telemetry?.HealthScore || '---'}<span className="text-xl text-neutral-500">%</span></div>
                            </div>
                            <div className="flex-1 max-w-md">
                                <span className="text-[10px] text-neutral-500 font-bold tracking-widest uppercase block mb-1">STATUS REPORT</span>
                                <div className="bg-error text-on-error px-4 py-2 text-xs font-bold tracking-tight uppercase flex items-center gap-3">
                                    <span className="material-symbols-outlined text-sm">warning</span>
                                    {telemetry?.Status || 'AWAITING SYNC...'}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {['TELEMETRY PULL', 'SYSTEM RECAL', 'MAINTENANCE LOGS', 'STATION DISPATCH'].map((cmd, i) => (
                        <div key={i} className="bg-white p-6 flex flex-col justify-between group hover:bg-neutral-950 hover:text-white transition-colors duration-150 cursor-pointer border-l border-neutral-300">
                            <h3 className="text-xl font-bold uppercase tracking-tighter mb-2">{cmd}</h3>
                            <div className="mt-8 flex justify-between items-end">
                                <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase">CMD_00{i+1}</span>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
}
