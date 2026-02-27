'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, Euro, Eye, Crosshair } from 'lucide-react';

export default function ImpactSimulator() {
    const [vehiclePrice, setVehiclePrice] = useState(120000);

    // Simulation algorithm based on logic
    const valueMultiplier = vehiclePrice / 50000;
    const clicksIncrease = 40;
    const stockReductionDays = Math.min(10 + Math.floor(valueMultiplier * 2.5), 25);
    // 5% holding cost per year
    const inventoryCostSaved = Math.round((vehiclePrice * 0.05 / 365) * stockReductionDays);
    const perceivedValueAdded = Math.round(1500 * valueMultiplier);

    return (
        <div className="w-full max-w-5xl mx-auto p-[1px] bg-gradient-to-b from-[#222222] to-[#050505] font-sans">
            <div className="bg-[#0A0A0A] p-8 md:p-14 relative overflow-hidden">

                {/* Abstract metallic accent */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#E5A93C]/10 to-transparent blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#222222] to-transparent pointer-events-none" />

                <div className="mb-14 text-center relative z-10 flex flex-col items-center">
                    <Crosshair className="text-[#E5A93C] mb-4 opacity-70" size={28} strokeWidth={1.5} />
                    <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-4">
                        Analyse de de <span className="text-[#E5A93C]">Performance</span>
                    </h2>
                    <p className="text-[#888888] font-medium tracking-wide max-w-lg">
                        Calculez l'impact financier direct d'une captation cinématographique sur votre cycle de vente.
                    </p>
                </div>

                <div className="mb-16 relative z-10">
                    <div className="flex justify-between items-end mb-6">
                        <span className="text-xs font-bold tracking-[0.15em] text-[#888888] uppercase">Valeur du Modèle</span>
                        <span className="text-white text-3xl md:text-4xl font-black tracking-tighter">
                            {vehiclePrice.toLocaleString('fr-FR')} <span className="text-[#E5A93C]">€</span>
                        </span>
                    </div>

                    <div className="relative py-4">
                        <input
                            type="range"
                            min="50000"
                            max="300000"
                            step="5000"
                            value={vehiclePrice}
                            onChange={(e) => setVehiclePrice(Number(e.target.value))}
                            className="w-full h-1 bg-[#222222] appearance-none cursor-pointer absolute top-1/2 -translate-y-1/2 z-20 
              [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:bg-[#E5A93C] [&::-webkit-slider-thumb]:cursor-grab active:[&::-webkit-slider-thumb]:cursor-grabbing"
                        />
                        {/* Custom track fill */}
                        <div
                            className="absolute top-1/2 -translate-y-1/2 h-1 bg-[#E5A93C] z-10 pointer-events-none"
                            style={{ width: `${((vehiclePrice - 50000) / 250000) * 100}%` }}
                        />
                    </div>

                    <div className="flex justify-between text-[10px] font-bold tracking-[0.1em] text-[#555555] mt-2 uppercase">
                        <span>50 k€</span>
                        <span>300 k€+</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                    <motion.div
                        key={clicksIncrease}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="bg-[#111111] border border-white/5 p-8 flex flex-col items-start relative group hover:bg-[#151515] transition-colors"
                    >
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#888888]/20 to-transparent" />
                        <Eye className="text-[#888888] group-hover:text-white mb-6 transition-colors" size={24} strokeWidth={1.5} />
                        <div className="text-4xl font-black text-white mb-2 tracking-tighter">+{clicksIncrease}<span className="text-xl text-[#888888]">%</span></div>
                        <div className="text-xs font-semibold tracking-wide text-[#888888] uppercase mt-auto">Taux d'Engagement</div>
                        <p className="text-[11px] text-[#555555] mt-2 leading-relaxed">Augmentation des clics sur vos annonces par rapport à des photos standards.</p>
                    </motion.div>

                    <motion.div
                        key={stockReductionDays}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-[#111111] border border-[#E5A93C]/20 p-8 flex flex-col items-start relative group"
                    >
                        {/* Highlighted card */}
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-[#E5A93C]" />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#E5A93C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                        <Clock className="text-[#E5A93C] mb-6" size={24} strokeWidth={1.5} />
                        <div className="text-4xl font-black text-white mb-2 tracking-tighter">-{stockReductionDays}<span className="text-xl text-[#888888]">j</span></div>
                        <div className="text-xs font-semibold tracking-wide text-[#E5A93C] uppercase mt-auto">Rotation Stock</div>
                        <p className="text-[11px] text-[#888888] mt-2 leading-relaxed">Jours soustraits au temps d'immobilisation moyen du véhicule.</p>
                    </motion.div>

                    <motion.div
                        key={perceivedValueAdded}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-[#111111] border border-white/5 p-8 flex flex-col items-start relative group hover:bg-[#151515] transition-colors"
                    >
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#888888]/20 to-transparent" />
                        <TrendingUp className="text-[#888888] group-hover:text-white mb-6 transition-colors" size={24} strokeWidth={1.5} />
                        <div className="text-4xl font-black text-white mb-2 tracking-tighter">+{perceivedValueAdded.toLocaleString('fr-FR')}<span className="text-xl text-[#888888]">€</span></div>
                        <div className="text-xs font-semibold tracking-wide text-[#888888] uppercase mt-auto">Valeur Perçue</div>
                        <p className="text-[11px] text-[#555555] mt-2 leading-relaxed">Majoration psychologique du prix de vente justifiée par l'image de marque.</p>
                    </motion.div>
                </div>

                <div className="mt-8 border border-[#222222] bg-[#0A0A0A] p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 relative z-10">
                    <div className="p-3 bg-[#111111] border border-[#222222]">
                        <Euro className="text-[#E5A93C]" size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                        <div className="text-[10px] font-bold tracking-[0.2em] text-[#888888] uppercase mb-1">Conclusion Financière</div>
                        <p className="text-sm text-[#AAAAAA] font-medium leading-relaxed">
                            La réduction du parc de <span className="text-white font-bold">{stockReductionDays} jours</span> génère une économie mécanique de <span className="text-[#E5A93C] font-bold">{inventoryCostSaved.toLocaleString('fr-FR')} €</span> en frais financiers (BFR). L'investissement vidéo est immédiatement rentabilisé.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
