'use client';

import React from 'react';
import { Camera } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Showreel() {
    return (
        <section id="portfolio" className="py-16 md:py-32 px-4 bg-[#050505] relative border-t border-white/5 font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col items-center mb-12 md:mb-20 text-center">
                    <Camera className="text-[#E5A93C] mb-6 opacity-80" size={32} strokeWidth={1} />
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                        Vision <span className="text-[#E5A93C]">Cinématique</span>
                    </h2>
                    <p className="text-[#888888] font-medium tracking-wide max-w-2xl">
                        L'excellence n'est pas une option. Découvrez nos dernières réalisations pensées pour l'algorithme et la conversion.
                    </p>
                    <a rel="noopener noreferrer" target="_blank" href="https://instagram.com/tom.carx" className="mt-8 text-xs font-bold tracking-[0.2em] text-[#E5A93C] uppercase hover:text-white transition-colors flex items-center gap-2">
                        <span className="w-8 h-[1px] bg-[#E5A93C]"></span>
                        @tom.carx
                        <span className="w-8 h-[1px] bg-[#E5A93C]"></span>
                    </a>
                </div>

                {/* Note: In a real environment with react-instagram-embed, you need to provide specific post URLs.
            I've mocked the structure to ensure the design is visible even if specific links aren't provided yet.
            To display actual reels, replace url prop with the exact URL of your reels.
        */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-full max-w-[328px] bg-[#0A0A0A] p-2 border border-white/10 relative group"
                    >
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#E5A93C] -translate-y-1 translate-x-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#E5A93C] translate-y-1 -translate-x-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="bg-[#111] w-full min-h-[550px] flex items-center justify-center p-1">
                            <iframe
                                src="https://www.instagram.com/reel/DU6DLk9jKQm/embed/captioned"
                                className="w-full h-[550px] border-none"
                                scrolling="no"
                                allowTransparency={true}
                                allow="encrypted-media"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="w-full max-w-[328px] bg-[#0A0A0A] p-2 border border-white/10 relative group"
                    >
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#E5A93C] -translate-y-1 translate-x-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#E5A93C] translate-y-1 -translate-x-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="bg-[#111] w-full min-h-[550px] flex items-center justify-center p-1">
                            <iframe
                                src="https://www.instagram.com/reel/DUJF7j3jI5n/embed/captioned"
                                className="w-full h-[550px] border-none"
                                scrolling="no"
                                allowTransparency={true}
                                allow="encrypted-media"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="w-full max-w-[328px] bg-[#0A0A0A] p-2 border border-white/10 relative group"
                    >
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#E5A93C] -translate-y-1 translate-x-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#E5A93C] translate-y-1 -translate-x-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="bg-[#111] w-full min-h-[550px] flex items-center justify-center p-1">
                            <iframe
                                src="https://www.instagram.com/reel/DU_NloCDDz7/embed/captioned"
                                className="w-full h-[550px] border-none"
                                scrolling="no"
                                allowTransparency={true}
                                allow="encrypted-media"
                            />
                        </div>
                    </motion.div>
                </div>

                <div className="mt-20 flex justify-center">
                    <a
                        href="https://instagram.com/tom.carx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-10 py-4 bg-transparent hover:bg-white/5 text-white font-bold uppercase tracking-[0.1em] text-sm border border-white/20 transition-all duration-300"
                    >
                        Voir tout le portfolio
                    </a>
                </div>
            </div>
        </section>
    );
}
