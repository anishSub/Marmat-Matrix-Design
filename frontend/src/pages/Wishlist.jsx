import React from 'react';

export default function Wishlist() {
    return (
        <div className="p-8 relative">
            <div className="flex justify-between items-baseline mb-12 border-b border-white/10 pb-6">
                <h1 className="font-headline text-5xl font-black tracking-tighter text-white">FAVORITE PARTS</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                <div className="bg-surface-container-low p-6">
                    <h3 className="font-headline text-xl font-bold text-white mb-1 uppercase">V8 FORGED PISTON</h3>
                    <div className="font-headline text-2xl font-light text-white">$1,450.00</div>
                    <button className="mt-4 bg-primary text-on-primary font-label font-bold text-[10px] tracking-widest px-6 py-3">ADD TO CART</button>
                </div>
            </div>
        </div>
    );
}
