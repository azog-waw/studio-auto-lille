'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play, Calendar, ChevronRight } from 'lucide-react';

export default function HeroPremium() {
    return (
        <div className="relative min-h-screen bg-[#050505] overflow-hidden font-sans selection:bg-[#E5A93C] selection:text-black">
            {/* Background Video Placeholder - Darker, higher contrast */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay loop muted playsInline
                    className="object-cover w-full h-full opacity-30 mix-blend-luminosity grayscale-[80%] contrast-125"
                >
                    <source src="/placeholder-sports-car.mp4" type="video/mp4" />
                </video>
                {/* Koenigsegg style gradient: deep blacks, slight silver/chrome edge */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#050505]/40 to-[#050505]/90" />
            </div>

            {/* Header - Ultra minimal, sharp lines */}
            <header className="fixed top-0 w-full z-100 p-6 md:px-12 flex justify-between items-center border-b border-white/5 bg-black/40 backdrop-blur-md">
                <div className="text-white font-extrabold text-2xl tracking-[0.2em] uppercase">
                    T<span className="text-[#E5A93C]">.</span>STUDIO
                </div>
                <nav className="hidden md:flex gap-10 text-xs font-semibold tracking-[0.15em] text-[#888888] uppercase">
                    <a href="#services" className="hover:text-white transition-colors duration-300">Expertise</a>
                    <a href="#roi" className="hover:text-white transition-colors duration-300">Performance</a>
                    <a href="#portfolio" className="hover:text-white transition-colors duration-300">Vision</a>
                </nav>
                <a href="#contact" className="hidden md:block px-6 py-2.5 bg-white/5 hover:bg-white/10 text-white text-xs font-bold tracking-[0.1em] uppercase border border-white/10 transition-all duration-300">
                    Contact
                </a>
            </header>

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} // Koenigsegg smooth ease
                    className="max-w-5xl w-full flex flex-col items-center"
                >
                    {/* Subtle line accent */}
                    <div className="w-12 h-[1px] bg-[#E5A93C] mb-8 opacity-70"></div>

                    <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-[#111111]/80 border border-white/5 text-[#E5A93C] text-xs font-semibold tracking-[0.2em] uppercase mb-8 backdrop-blur-md shadow-2xl">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E5A93C] animate-pulse"></span>
                        Automotive Cinematography • 59/62
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-6 uppercase leading-[0.9]">
                        Vendez <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#E5A93C] to-[#C48A2D]">
                            Plus Vite.
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-[#888888] mb-12 max-w-2xl mx-auto font-medium tracking-wide">
                        Sublimez vos véhicules d'exception. Raccourcissez vos délais de vente grâce à une narration visuelle sans compromis.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full max-w-md mx-auto sm:max-w-none">
                        {/* Primary CTA - Sharp, metallic */}
                        <a href="#contact" className="group relative flex justify-center items-center gap-3 w-full sm:w-auto px-8 py-4 bg-[#E5A93C] hover:bg-[#F2B94A] text-black font-bold uppercase tracking-[0.1em] text-sm transition-all duration-300 overflow-hidden">
                            <span className="relative z-10 flex items-center gap-2">
                                <Calendar size={16} strokeWidth={2.5} />
                                Réserver une session
                            </span>
                            <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                        </a>

                        {/* Secondary CTA - Ghost style */}
                        <a href="#portfolio" className="group flex justify-center items-center gap-2 w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/5 text-white font-bold uppercase tracking-[0.1em] text-sm border border-white/10 transition-all duration-300">
                            <Play size={16} className="text-[#888888] group-hover:text-white transition-colors" />
                            <span>Explorer la Vision</span>
                            <ChevronRight size={16} className="text-[#888888] group-hover:translate-x-1 group-hover:text-[#E5A93C] transition-all" />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Bottom indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
                <span className="text-[10px] text-white tracking-[0.2em] uppercase font-bold">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
            </div>
        </div>
    );
}
