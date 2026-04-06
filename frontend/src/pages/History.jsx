import React from 'react';

export default function History() {
    return (
        <div className="p-10 max-w-6xl mx-auto space-y-12">
            <section>
                <h1 className="font-['Space_Grotesk'] text-6xl font-black tracking-tighter text-white mb-2 italic">SERVICE HISTORY</h1>
            </section>
            <section className="bg-surface p-6 border-l-4 border-primary">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-[10px] text-neutral-500 font-bold tracking-[0.2em] uppercase border-b border-white/10">
                                <th className="pb-4 pt-2 px-4">Timestamp</th>
                                <th className="pb-4 pt-2 px-4">Service_Designation</th>
                                <th className="pb-4 pt-2 px-4">Cost_Unit</th>
                                <th className="pb-4 pt-2 px-4">Status</th>
                            </tr>
                        </thead>
                        <tbody className="font-['Inter'] text-xs">
                            <tr className="border-b border-white/5 hover:bg-surface-container-lowest transition-colors text-white">
                                <td className="py-6 px-4 font-mono">2023-OCT-12</td>
                                <td className="py-6 px-4">CYLINDER_HEAD_MACHINING</td>
                                <td className="py-6 px-4">$1,450.00</td>
                                <td className="py-6 px-4"><span className="bg-white/10 text-white px-2 py-1 text-[10px] font-bold">COMPLETED</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}
