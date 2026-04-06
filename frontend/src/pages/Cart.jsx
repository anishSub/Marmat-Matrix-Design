import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Cart() {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([
        { Id: 1, Name: 'V12 FORGED PISTON', Price: 1240.00, Quantity: 1, ImageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfPFUXOn7pizlMc7amGRLq507J-94Z2LnGqSgWBD7_w2REbeGIGAA9oGkS46uxIKiW9r8NYSPATl0aJiacS0G9OWYoQ9qYcBfyhyQF_qVeEhD92J5I5UaT97drh_JONcHViGCMnYNlHDqUIVg0DnjlSuzalVkq-CYZyfQQsUBHTznZ6rxt6pIbVoFsqkKHtmNfDe4fHkXBNH9-MsiGo60JEkxrHqztnkczNACbTZ_9MdELpXqtxBQMo27REmkbWFp3BVmDfnb1qYE' }
    ]);
    const total = cartItems.reduce((sum, item) => sum + (item.Price * item.Quantity), 0) + 125 + (cartItems.reduce((sum, item) => sum + (item.Price * item.Quantity), 0) * 0.0825);

    return (
        <div className="bg-background text-on-background min-h-screen py-12 px-6 max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-10 gap-12">
            <section className="md:col-span-7 flex flex-col gap-6">
                <h1 className="font-headline text-5xl font-black uppercase tracking-tighter text-primary">Your Assembly</h1>
                {cartItems.map(item => (
                    <div key={item.Id} className="bg-surface-container-low flex gap-6 p-4 border-l-4 border-primary">
                        <img className="w-48 h-48 object-cover grayscale" src={item.ImageUrl} />
                        <div>
                            <h2 className="font-headline text-2xl font-bold uppercase">{item.Name}</h2>
                            <span className="font-headline text-xl font-bold">${item.Price.toFixed(2)}</span>
                            <p className="mt-4 text-white">Qty: {item.Quantity}</p>
                        </div>
                    </div>
                ))}
            </section>
            <aside className="md:col-span-3">
                <div className="bg-primary text-on-primary-container p-8 flex flex-col gap-8 shadow-2xl">
                    <h2 className="font-headline text-3xl font-black uppercase tracking-tighter">Summary</h2>
                    <span className="font-headline text-4xl font-black">${total.toFixed(2)}</span>
                    <button onClick={() => navigate('/checkout')} className="bg-on-primary-container text-primary font-headline font-bold py-5 uppercase hover:bg-zinc-800">PROCEED TO CHECKOUT</button>
                </div>
            </aside>
        </div>
    );
}
