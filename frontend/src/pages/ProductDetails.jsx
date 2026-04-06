import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ProductDetails() {
    const { id } = useParams();
    const [part, setPart] = useState(null);

    useEffect(() => {
        const fetchPart = async () => {
            try {
                const res = await axios.get(`/api/inventory/${id}`);
                setPart(res.data);
            } catch (err) {
                setPart({
                    Id: id, Name: 'V-SERIES CYLINDER BLOCK ASSEMBLY', SKU: 'KP-A12-X09-2024', Price: 14250.00,
                    ImageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEeNqvSnv2kB6xfjYg3zBIVkq2UVn1mOk-k-Y71VBp83ageYGIjTteFLBkzVbwmQfqpBwtNK1sATjC53_AxxxVc3RB7XAayCp0YClxCjxl4yqYLHlX0w57BFP9CCy505dprVkNXazrbs8L9mnlteURu7DMfhouJZ3_TfvWeKOqOncF9F0WKLVz1rpFmC_eCDtVpzGtNlAbGpOcYBvcZqn4xLTPf6yMkOwKCkLJdVY1wqgKedIz8CeieJDcnXd0orQPIr7xFkbGby0',
                    Description: 'The V-Series Cylinder Block is machined from a single monolithic billet of aerospace-grade aluminum.',
                    Status: 'IN STOCK', Series: 'ALPHA-V12'
                });
            }
        };
        fetchPart();
    }, [id]);

    if (!part) return <div className="p-8 text-white">Loading...</div>;

    return (
        <div className="max-w-[1600px] mx-auto p-8 bg-background text-on-background font-body">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-outline-variant/10 min-h-[600px]">
                <div className="bg-surface p-12 flex flex-col justify-between">
                    <img className="w-full h-full object-contain grayscale brightness-110 opacity-90" src={part.ImageUrl}/>
                </div>
                <div className="bg-surface p-12 flex flex-col justify-start space-y-12">
                    <h1 className="text-6xl font-headline font-black tracking-tighter leading-none text-white uppercase">{part.Name}</h1>
                    <span className="text-5xl font-headline font-black tracking-tighter">${part.Price.toFixed(2)}</span>
                    <button className="bg-primary text-on-primary h-16 font-headline font-black text-lg tracking-[0.1em] uppercase hover:bg-primary-container">Add to Cart</button>
                    <p className="text-on-surface-variant font-body leading-relaxed">{part.Description}</p>
                </div>
            </div>
        </div>
    );
}
