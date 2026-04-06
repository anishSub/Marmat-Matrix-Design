import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/auth/login', { email, password });
            login(res.data);
            navigate('/dashboard');
        } catch (err) {
            setError('Authentication failed. Verify credentials.');
        }
    };

    return (
        <main className="flex min-h-screen w-full overflow-hidden bg-background text-on-background">
            <section className="hidden md:flex md:w-1/2 relative bg-surface-container-lowest overflow-hidden items-center justify-center border-r border-outline-variant/20">
                <div className="absolute inset-0 z-0">
                    <img alt="Engine" className="w-full h-full object-cover grayscale brightness-50 contrast-125" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9G4xn2RyZC6SvMWTXXPfXalEKkzAwdz5zLkpqc07HgLIAPP2TSQqpbDdtkv-WHAVwSuHZMR8nLttLcXf_DJJYh8mflBGiZi265DpBVK_nmCqpUV3myM-5N_TSoSpwv1e7ge_HLsK9eHjvZoX_SoFvFEsku2sDMBBpm2rs3voITrMVJF9naBjn02ZNBN4gf9QMZ85ldz-9To5LerVl1j_FzRLMIFwob2oKbbPDe8RnNPzRxMzJpXHU6hQuIf6axUbtpfTxUW5M5YQ" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-transparent opacity-80"></div>
                </div>
                <div className="relative z-10 p-12 w-full">
                    <div className="mb-8">
                        <span className="inline-block px-3 py-1 bg-primary text-on-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Core Authentication</span>
                        <h1 className="font-headline text-6xl lg:text-8xl font-black tracking-tighter text-white leading-none">
                            KINETIC<br/>PRECISION
                        </h1>
                    </div>
                </div>
                <div className="machined-grain absolute inset-0 z-20"></div>
            </section>
            
            <section className="w-full md:w-1/2 bg-white flex items-center justify-center p-8 md:p-24 relative overflow-hidden">
                <div className="w-full max-w-md relative z-10">
                    <div className="mb-12">
                        <h2 className="font-headline text-4xl font-bold tracking-tight text-black mb-2">SYSTEM LOGIN</h2>
                        <p className="text-neutral-500 text-sm font-label uppercase tracking-wider">Authentication Protocol Required</p>
                    </div>
                    {error && <p className="text-error font-bold mb-4 text-sm">{error}</p>}
                    
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="space-y-2">
                            <label className="block text-[10px] font-bold text-black uppercase tracking-widest">Email Access</label>
                            <input 
                                className="w-full px-4 py-4 bg-neutral-50 border-2 border-black text-black placeholder:text-neutral-300 focus:outline-none" 
                                type="email" value={email} onChange={(e) => setEmail(e.target.value)} required 
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-[10px] font-bold text-black uppercase tracking-widest">Auth Key</label>
                            <input 
                                className="w-full px-4 py-4 bg-neutral-50 border-2 border-black text-black placeholder:text-neutral-300 focus:outline-none" 
                                type="password" value={password} onChange={(e) => setPassword(e.target.value)} required 
                            />
                        </div>
                        <div className="pt-4">
                            <button className="w-full py-5 bg-black text-white font-bold uppercase tracking-[0.2em] text-sm hover:bg-neutral-800 transition-all flex items-center justify-center gap-2" type="submit">
                                Establish Connection
                            </button>
                        </div>
                    </form>
                    <div className="mt-12 text-center">
                        <p className="text-neutral-500 text-xs font-medium">New operator? <Link to="/register" className="text-black font-bold underline hover:bg-black hover:text-white px-1">Enlist</Link></p>
                    </div>
                </div>
            </section>
        </main>
    );
}
