import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/auth/register', { fullName, email, password, role: 'Customer' });
            navigate('/login');
        } catch (err) {
            setError('Registration failed. Please check your details.');
        }
    };

    return (
        <main className="flex min-h-screen w-full relative bg-[#131313]">
            <section className="hidden md:flex w-1/2 h-screen relative bg-surface-container-lowest overflow-hidden">
                <img className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 contrast-125 brightness-75 scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6ON5YYruENYRcN0H3dzqYaF1nFy2inab4f4wfcmk9BIqDMbu3jww7gGGMbZAOMP1idzKQY_UWHtmF4owRRpcXuwW2iwk1nYDaee2UUU8_24IddTlUvt3FRYW7R7el8fhMJj0OdUKWkWFkBJpbP8Z4CBszePcqnYcN4e0G4N1tA5jhLFk9lcsKP8QTRMXRPKWi6bBHl0BZNfph_oYfZhr6SaZBo4wb483DLhowf6XZN_YrdSCI-FiHekVn9cMnxP74QOcXkenXll0"/>
                <div className="absolute top-12 left-12 z-20">
                    <h1 className="font-headline text-4xl font-black tracking-tighter text-white leading-none">KINETIC<br/>PRECISION</h1>
                </div>
            </section>
            
            <section className="w-full md:w-1/2 h-screen overflow-y-auto bg-primary flex flex-col items-center justify-center p-8 md:p-16 relative">
                <div className="w-full max-w-xl space-y-12">
                    <header className="space-y-4">
                        <h2 className="font-headline text-5xl font-extrabold tracking-tighter text-on-primary leading-tight">OPERATOR<br/>ENROLLMENT</h2>
                    </header>
                    {error && <p className="text-error font-bold text-sm">{error}</p>}
                    
                    <form className="space-y-10" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="group">
                                <label className="block font-label text-[10px] font-bold uppercase tracking-widest text-on-primary/60 mb-2">Full Name</label>
                                <input className="w-full bg-primary-container/20 border-0 border-b-2 border-on-primary/10 px-0 py-3 text-on-primary" type="text" value={fullName} onChange={e => setFullName(e.target.value)} required />
                            </div>
                            <div className="group">
                                <label className="block font-label text-[10px] font-bold uppercase tracking-widest text-on-primary/60 mb-2">Email</label>
                                <input className="w-full bg-primary-container/20 border-0 border-b-2 border-on-primary/10 px-0 py-3 text-on-primary" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                            </div>
                            <div className="group">
                                <label className="block font-label text-[10px] font-bold uppercase tracking-widest text-on-primary/60 mb-2">Auth Key</label>
                                <input className="w-full bg-primary-container/20 border-0 border-b-2 border-on-primary/10 px-0 py-3 text-on-primary" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
                            </div>
                        </div>
                        <button className="w-full bg-on-primary text-primary font-headline font-black py-5 text-xl tracking-widest hover:opacity-90 transition-all" type="submit">REGISTER OPERATOR</button>
                        <div className="flex justify-between items-center text-[10px] font-label font-bold text-on-primary/40 uppercase">
                            <Link to="/login" className="hover:text-on-primary">Already Enrolled? Login</Link>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}
