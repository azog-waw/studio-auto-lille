'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Shield, Zap, Sparkles } from 'lucide-react';

const services = [
    {
        title: "Particulier Prestige",
        price: "À partir de 190€",
        description: "Immortalisez votre véhicule avec un rendu cinématographique digne des plus grands magazines automobiles.",
        icon: <Sparkles className="text-[#E5A93C] mb-4" size={32} strokeWidth={1.5} />,
        features: [
            "Session shooting (1h)",
            "1x Vidéo Réel (format vertical 4k)",
            "Photos en supplément sur demande",
            "Lieu d'exception dans le 59/62"
        ],
        highlight: false,
    },
    {
        title: "Concession & Stock",
        price: "Sur Devis",
        description: "Accélérez vos ventes en augmentant la valeur perçue de votre parc automobile grâce à du contenu premium.",
        icon: <Zap className="text-[#050505] mb-4" size={32} strokeWidth={1.5} />,
        features: [
            "Shooting du parc récurrent",
            "Vidéos dynamiques de présentation",
            "Mise en avant des options (Détails intérieurs)",
            "Format optimisé conversion Instagram/TikTok"
        ],
        highlight: true, // This one gets the special gold styling
    },
    {
        title: "Centre Detailing",
        price: "Sur Devis",
        description: "Mettez en lumière votre expertise technique et le résultat miroir de vos traitements céramiques.",
        icon: <Shield className="text-[#E5A93C] mb-4" size={32} strokeWidth={1.5} />,
        features: [
            "Vidéo Avant/Après impactante",
            "Macro-vidéo (Poussière, reflets, déperlance)",
            "Mise en avant du processus technique",
            "Interview & voix-off possibles"
        ],
        highlight: false,
    }
];

export default function Services() {
    return (
        <section id="services" className="py-16 md:py-32 px-4 bg-[#0A0A0A] relative border-t border-white/5 font-sans overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[400px] bg-[#E5A93C]/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-12 md:mb-20">
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                        Offres <span className="text-[#E5A93C]">Exclusives</span>
                    </h2>
                    <p className="text-[#888888] font-medium tracking-wide max-w-2xl mx-auto">
                        Des solutions sur-mesure conçues pour élever votre image de marque et générer un retour sur investissement mesurable.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className={`relative group p-8 ${service.highlight
                                ? "bg-[#E5A93C] md:-translate-y-4 shadow-[0_0_40px_rgba(229,169,60,0.15)]"
                                : "bg-[#111] border border-white/10 hover:border-white/20"
                                } transition-colors duration-300`}
                        >
                            {service.highlight && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-[#E5A93C] text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1 whitespace-nowrap z-20">
                                    Plus Populaire • Février Complet
                                </div>
                            )}

                            {/* Koenigsegg-style corner accents for non-highlighted cards */}
                            {!service.highlight && (
                                <>
                                    <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/20 -translate-y-[1px] translate-x-[1px] opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/20 translate-y-[1px] -translate-x-[1px] opacity-0 group-hover:opacity-100 transition-opacity" />
                                </>
                            )}

                            {service.icon}

                            <h3 className={`text-2xl font-bold uppercase tracking-wide mb-2 ${service.highlight ? "text-[#050505]" : "text-white"}`}>
                                {service.title}
                            </h3>

                            <div className={`text-xl font-medium tracking-widest uppercase mb-6 ${service.highlight ? "text-[#050505]/80" : "text-[#E5A93C]"}`}>
                                {service.price}
                            </div>

                            <p className={`text-sm mb-8 leading-relaxed ${service.highlight ? "text-[#050505]/70 font-medium" : "text-[#888888]"}`}>
                                {service.description}
                            </p>

                            <div className="w-full h-px bg-current opacity-10 mb-8"></div>

                            <ul className="space-y-4 mb-8">
                                {service.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-start gap-3">
                                        <Check
                                            className={`mt-1 shrink-0 ${service.highlight ? "text-[#050505]" : "text-[#E5A93C]"}`}
                                            size={16}
                                            strokeWidth={3}
                                        />
                                        <span className={`text-sm ${service.highlight ? "text-[#050505] font-medium" : "text-white/80"}`}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#contact"
                                className={`w-full block text-center py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 ${service.highlight
                                    ? "bg-[#050505] text-[#E5A93C] hover:bg-[#111]"
                                    : "bg-white/5 text-white hover:bg-white/10"
                                    }`}
                            >
                                Réserver
                            </a>
                        </motion.div>
                    ))}
                </div>
                <div className="mt-20 text-center">
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#111] border border-white/5 shadow-2xl">
                        <Shield className="text-[#E5A93C]" size={18} />
                        <span className="text-white text-[11px] font-bold uppercase tracking-widest leading-none">
                            Satisfaction Garantie • Révisions illimitées sur le montage
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
