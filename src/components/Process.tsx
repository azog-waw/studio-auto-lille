'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Camera, SendHorizontal } from 'lucide-react';

const steps = [
    {
        icon: <Target className="text-[#E5A93C]" size={32} />,
        title: "01. Stratégie",
        description: "Analyse de votre image de marque et définition du story-board pour capturer l'essence de vos véhicules."
    },
    {
        icon: <Camera className="text-[#E5A93C]" size={32} />,
        title: "02. Production",
        description: "Tournage haute performance en 4K avec matériel de pointe pour des angles impossibles."
    },
    {
        icon: <SendHorizontal className="text-[#E5A93C]" size={32} />,
        title: "03. Livraison",
        description: "Montage dynamique optimisé pour les réseaux sociaux. Prêt à générer de l'impact en 48h."
    }
];

export default function Process() {
    return (
        <section className="py-24 px-4 bg-[#050505] font-sans overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                        Votre succès est <span className="text-[#E5A93C]">millimétré</span>
                    </h2>
                    <div className="w-20 h-1 bg-[#E5A93C] mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[1px] bg-white/10 z-0"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative z-10 flex flex-col items-center text-center group"
                        >
                            <div className="w-24 h-24 bg-[#111] border border-white/10 flex items-center justify-center mb-8 group-hover:border-[#E5A93C] transition-all duration-300 relative shadow-2xl">
                                <div className="absolute -top-3 -right-3 text-[10px] font-bold text-[#555] uppercase tracking-widest bg-[#050505] px-2">Step 0{index + 1}</div>
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-4 group-hover:text-[#E5A93C] transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-[#888] font-medium leading-relaxed max-w-xs">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
