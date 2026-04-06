import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

export default function Dashboard() {
    const { user } = useContext(AuthContext);

    return (
        <div className="p-12 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 border-b border-outline-variant/20 pb-12">
                <div className="flex flex-col gap-4">
                    <span className="font-['Inter'] text-xs font-bold tracking-[0.2em] text-primary/40 uppercase">AUTHENTICATED PROFILE</span>
                    <h1 className="font-headline text-7xl font-black tracking-tighter leading-none text-white">{user?.fullName || 'Alexander Vortek'}</h1>
                    <div className="flex gap-8 mt-2">
                        <div className="flex flex-col">
                            <span className="font-label text-[10px] text-neutral-500 uppercase tracking-widest">DESIGNATION</span>
                            <span className="font-headline text-xl font-bold text-white uppercase">{user?.role || 'OPERATOR'}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-label text-[10px] text-neutral-500 uppercase tracking-widest">SYSTEM_ID</span>
                            <span className="font-headline text-xl font-bold text-white">8842-KP</span>
                        </div>
                    </div>
                </div>
                <Link to="/config" className="bg-primary text-on-primary px-10 py-4 font-headline font-bold text-sm tracking-widest hover:bg-primary-container transition-all flex items-center gap-3">
                    EDIT PROFILE <span className="material-symbols-outlined text-sm">edit</span>
                </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-1 md:col-span-2 bg-surface-container-low p-8 border-l-2 border-primary">
                    <div className="flex justify-between items-start mb-8">
                        <h3 className="font-headline text-2xl font-bold tracking-tighter uppercase text-white">Operational Status</h3>
                        <span className="bg-primary text-on-primary text-[10px] font-bold px-2 py-1">ACTIVE</span>
                    </div>
                    <div className="grid grid-cols-3 gap-8">
                        <div className="flex flex-col gap-2">
                            <span className="text-[10px] text-neutral-500 uppercase tracking-widest">Efficiency</span>
                            <span className="text-4xl font-headline font-black text-white">98.4%</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-[10px] text-neutral-500 uppercase tracking-widest">Uptime</span>
                            <span className="text-4xl font-headline font-black text-white">4,282h</span>
                        </div>
                    </div>
                </div>

                <div className="bg-surface-container-highest p-8 flex flex-col justify-between">
                    <div>
                        <span className="material-symbols-outlined text-4xl mb-4 text-primary">verified_user</span>
                        <h3 className="font-headline text-xl font-bold uppercase tracking-tight mb-2 text-white">Security Clearance</h3>
                        <p className="text-[10px] text-neutral-400 uppercase tracking-widest">LEVEL 04 - COMMAND ACCESS</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
