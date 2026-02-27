'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "Quels sont vos délais de livraison ?",
        answer: "Pour les packs Particulier et Concession, nous livrons la vidéo finale sous 48h à 72h. Les projets plus complexes (Premium) peuvent prendre jusqu'à une semaine selon les exigences de montage."
    },
    {
        question: "Fournissez-vous les fichiers bruts (Rushs) ?",
        answer: "Par défaut, nous livrons uniquement le montage final étalonné. La livraison des fichiers bruts peut être incluse en option dans le contrat de prestation."
    },
    {
        question: "Le contenu est-il optimisé pour les réseaux sociaux ?",
        answer: "Absolument. Chaque vidéo est pensée dès le storyboard pour le format 9:16 (Reels, TikTok, Shorts) afin de maximiser votre engagement et votre portée organique."
    },
    {
        question: "Quel matériel utilisez-vous pour les tournages ?",
        answer: "Nous utilisons du matériel de cinéma hybride 4K (Sony Alpha), des stabilisateurs professionnels (Ronin) et des drones FPV pour des prises de vue dynamiques uniques sur le marché."
    },
    {
        question: "Vous déplacez-vous en dehors de Lille (59) ?",
        answer: "Oui, nous intervenons dans toute la région Hauts-de-France et en Belgique. Des frais de déplacement minimes peuvent être appliqués au-delà de 30km autour de Lille."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 px-4 bg-[#050505] font-sans">
            <div className="max-w-3xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-4">
                        Questions <span className="text-[#E5A93C]">Fréquentes</span>
                    </h2>
                    <div className="w-12 h-1 bg-[#E5A93C]"></div>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-white/5">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full py-6 flex justify-between items-center text-left group"
                            >
                                <span className={`text-lg font-bold uppercase tracking-wide transition-colors ${openIndex === index ? 'text-[#E5A93C]' : 'text-white'}`}>
                                    {faq.question}
                                </span>
                                <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${openIndex === index ? 'border-[#E5A93C] bg-[#E5A93C] text-black' : 'border-white/10 text-white'}`}>
                                    {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                                </div>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pb-8 text-[#888] font-medium leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
