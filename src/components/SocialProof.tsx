'use client';

import React from 'react';

const specialties = [
    "SUPERCARS",
    "HYPERCARS",
    "SPORTIVES GT",
    "COLLECTION",
    "DETAILING PREMIUM",
    "MOTORSPORT",
    "VÉHICULES PRESTIGE"
];

export default function SocialProof() {
    return (
        <section className="py-16 md:py-24 bg-[#050505] border-t border-white/5 overflow-hidden font-sans relative">
            {/* Gradient Mask for fading out the edges */}
            <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>

            <div className="text-center mb-12 relative z-20">
                <p className="text-[10px] md:text-xs text-[#E5A93C] font-bold uppercase tracking-[0.3em] mb-2">Spécialisé dans la captation de</p>
                <div className="w-12 h-px bg-[#E5A93C]/50 mx-auto"></div>
            </div>

            {/* Infinite Ticker Container */}
            <div className="flex w-full relative">
                <div className="flex w-fit animate-marquee whitespace-nowrap">
                    {/* First set of logos/names */}
                    {specialties.map((specialty, index) => (
                        <div key={index} className="flex items-center justify-center px-8 md:px-16 text-white/30 hover:text-white/80 transition-colors duration-500 cursor-default">
                            <span className="text-xl md:text-3xl font-black uppercase tracking-widest">{specialty}</span>
                        </div>
                    ))}
                    {/* Duplicate set for infinite loop */}
                    {specialties.map((specialty, index) => (
                        <div key={`dup-${index}`} className="flex items-center justify-center px-8 md:px-16 text-white/30 hover:text-white/80 transition-colors duration-500 cursor-default">
                            <span className="text-xl md:text-3xl font-black uppercase tracking-widest">{specialty}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
