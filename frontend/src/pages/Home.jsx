import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="bg-background text-on-background font-body selection:bg-primary selection:text-on-primary">
            <section className="relative h-[870px] w-full overflow-hidden bg-surface-container-lowest">
                <div className="absolute inset-0 z-0">
                    <img className="w-full h-full object-cover grayscale opacity-40 mix-blend-luminosity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvxM-6fN8PigmQ85DmtZR6RnSRv1BYenundHTapZfYNU9KIQNtxoZKXFjtk3PRVbp-sZYie3RpURR95DPz4eEhKheIUPZ5X_4h6UOv0kKES0XzHx2Jmh4CIpBvzgb-nlOsZSmkw-m7aMdJB9uz5KAOhwiTDSvjFlH9_iUH95-ft6RUVXQ8qkqitrZDy9LdNfpYwPBB8o-91XJUUPxMQRWmmF00Al6oULU4rX_8LElTQuluUQYXt4m5TFnNM2SbPoX7F0xergq3BXE"/>
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent"></div>
                </div>
                <div className="relative z-10 h-full flex flex-col justify-center px-12 md:px-24 max-w-7xl">
                    <div className="bg-primary h-1 w-24 mb-8"></div>
                    <h1 className="font-headline text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8 uppercase">
                        Keep Your Vehicle <br/>Running at <br/><span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-600">Peak Performance</span>
                    </h1>
                    <div className="flex flex-wrap gap-4">
                        <Link to="/diagnose" className="bg-primary text-on-primary px-10 py-4 font-headline font-bold text-lg uppercase tracking-widest hover:bg-primary-container transition-all">Initiate Diagnostic</Link>
                        <Link to="/parts" className="border border-white/20 text-white px-10 py-4 font-headline font-bold text-lg uppercase tracking-widest hover:bg-white hover:text-black transition-all">View Components</Link>
                    </div>
                </div>
            </section>

            <section className="bg-surface pt-24 px-6 md:px-12 pb-24">
                <div className="flex items-end justify-between mb-16 border-l-4 border-primary pl-6">
                    <div>
                        <span className="font-label text-xs uppercase tracking-[0.3em] text-neutral-500 mb-2 block">System Modules</span>
                        <h2 className="font-headline text-4xl font-bold text-white uppercase tracking-tighter">Featured Categories</h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="group relative aspect-[3/4] bg-surface-container-low overflow-hidden cursor-pointer" onClick={() => window.location.href='/parts'}>
                        <img className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 group-hover:opacity-40 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNlHLHXiB69ZTcpJfZr_3lBmnul7k5tZ4AykAJxbdmReEFVr7q6i-RLNatPwmeQ-lsROxuQ1r0C6x_ZnThuWgx5EGK4Pe94obIjn2wr6lqfv7uxGlsKfcuPpTzjgtfx2aMOyePF0lbP1uTiju4BrafTX0wKLJFoHmayYXzret1IlLVdFCsJ3fXrGvzMP8dBE67QyzVTQRCo6D9y8CJS6v2tfve7GEKJeUQM4v69aQu09vbKG2WDJUohvcFc0VLfZI3QwGm85LxCB0"/>
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            <h3 className="font-headline text-xl font-bold text-white mb-2 uppercase tracking-tight">Engine Core</h3>
                        </div>
                    </div>
                    <div className="group relative aspect-[3/4] bg-surface-container-low overflow-hidden cursor-pointer" onClick={() => window.location.href='/parts'}>
                        <img className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 group-hover:opacity-40 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDv3Wq2nPZA_uIHf9Glyz7QVVM7pH1fG7JjvcZbZ7TU0Dpp2iLqJpE_1RjB8WQDlGzYhF7i3RbF4Z1aT4uBt6raR3OHpAWq24Ra9cGUx-UYkZVAmNxaC4JNECk2Lc6rf9eqP7IP85XFONWD61DoFqwYdBOlNXRBQ1THujqIclqfDz_ObtgyaEy1iNN6vQQKJGIFXZ_PCd6nOBlfgBb65uXuBWJBYH5nEyp1aYLIy1qA8RjJHlomzs6OSJQqg7VvcbiuvrPfTGqZmoc"/>
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            <h3 className="font-headline text-xl font-bold text-white mb-2 uppercase tracking-tight">Fuel System</h3>
                        </div>
                    </div>
                    <div className="group relative aspect-[3/4] bg-surface-container-low overflow-hidden cursor-pointer" onClick={() => window.location.href='/parts'}>
                        <img className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 group-hover:opacity-40 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6zy8BjNRrRDcEC5Bs552scwSzRgWs66-qg_z2McHlygArkStacnDt-fHB3xxwXysZSYtHlwjEVV4au6koC24UzvkW7v44_0_OfOm4UFVZt062IN7KLCm_RPK5VeXCcapsxPOONoOKlp1gTKQyayMuioPDq8k4hFhLLS2anzQW5E7PKjGuFAYb8yub_0Jn-LqOqLywIdx21RTsnhOnzmLQSFPwTK4a7burSUDtwPk2fLa1o8akBi9z2CKZZTE8oyrgiHvH7yjrzEE"/>
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            <h3 className="font-headline text-xl font-bold text-white mb-2 uppercase tracking-tight">Transmission</h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
