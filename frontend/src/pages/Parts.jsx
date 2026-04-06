import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Parts() {
    const [parts, setParts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchParts = async () => {
            try {
                const res = await axios.get('/api/inventory');
                setParts(res.data);
            } catch (err) {
                setParts([
                    { Id: 1, Name: 'V12 FORGED PISTON UNIT', Price: 845.00, ImageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBF9yZmvZr8gj0ZkOyO4fRwSLPk3tOHcim-MT8_WVHujdB-pNT5jbTKRQ_fAzJbNy6TTjvZmXzBLoZUxf8PP-as1w8spSg3-1Nr4j23uNdcjjt0T2Bm95RRzWOvnVz5NZY8hcgdNwMLR7rIpzg8d7ViCdenwFExgU7_-j1KwTP7ZLZ1EaLqDElMd5_sE8i4rCVm_oT_sm4gpoLjQhri9KD4aaqVeVUThTfzeiUNbC5n6UCR9FXAxzhWkTbHCa5NeA0aIkt5rf77v6c', Category: 'CORE_SERIES', Status: 'IN_STOCK' },
                    { Id: 2, Name: 'KINETIC TURBINE ASSEMBLY', Price: 2140.00, ImageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5SA0UdP9FZqpaN0VGIeSG-4vUmnLWvlc8VN2vHuEwa8rUY6hkjaUpwhu44aR3m7L09OFj0R_c0VSd0MGl1pkYSrgmSTxnWUqc98jYYZK2l3ApV1iYZJ55iOOlRfFGl7Qbpf2xmEnisyABa3DzbV4mEucSMpdYlkYBUK4R9R_bJbSb5D_-y89HV8wY_vyxyG2oXmMbV7B_ZkXmWooekJK0ojLWf2GwrcjNNo4pvKGERAzHMI2umCJnTmrxL1YNrjE6WGKUQIMTOFI', Category: 'TURBO_FLOW', Status: 'LIMITED' }
                ]);
            } finally {
                setLoading(false);
            }
        };
        fetchParts();
    }, []);

    return (
        <div className="flex min-h-screen bg-background">
            <div className="w-full p-10 bg-surface">
                <div className="mb-12 flex justify-between items-end border-b border-white/5 pb-6">
                    <div>
                        <div className="text-[10px] font-bold tracking-[0.3em] text-neutral-500 mb-2 font-['Inter'] uppercase">ASSEMBLY // PARTS_CATALOGUE</div>
                        <h1 className="font-['Space_Grotesk'] text-5xl font-black tracking-tighter text-white">MACHINED_COMPONENTS</h1>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                    {loading ? <p className="text-white">Loading...</p> : parts.map((part) => (
                        <div key={part.Id} className="bg-white group cursor-pointer transition-transform duration-100 active:scale-[0.98]">
                            <div className="relative h-64 bg-neutral-100 flex items-center justify-center p-8 overflow-hidden">
                                <Link to={`/parts/${part.Id}`}><img className="max-w-full max-h-full object-contain mix-blend-multiply grayscale contrast-125" src={part.ImageUrl} alt={part.Name} /></Link>
                            </div>
                            <div className="p-6">
                                <div className="text-[9px] font-bold tracking-[0.2em] text-neutral-400 mb-1 uppercase font-['Inter']">{part.Category}</div>
                                <Link to={`/parts/${part.Id}`}><h3 className="text-black font-['Space_Grotesk'] font-bold text-lg mb-4">{part.Name}</h3></Link>
                                <span className="text-black font-black text-xl tracking-tighter">${part.Price.toFixed(2)}</span>
                                <button className="w-full mt-6 bg-black text-white py-4 font-['Space_Grotesk'] font-black text-xs tracking-[0.2em] uppercase hover:bg-neutral-800">ADD TO CART</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
