'use client';

import React, { useState } from 'react';
import { Send, Calendar, Mail, MapPin, AlertCircle } from 'lucide-react';
import { sendBookingEmail } from '@/app/actions';

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError(null);

        const formData = new FormData(e.currentTarget);
        const result = await sendBookingEmail(formData);

        setIsSubmitting(false);

        if (result.success) {
            setIsSubmitted(true);
            setTimeout(() => setIsSubmitted(false), 5000);
            (e.target as HTMLFormElement).reset();
        } else {
            setSubmitError(result.error || "Une erreur est survenue.");
        }
    };

    return (
        <section id="contact" className="py-16 md:py-32 px-4 bg-[#050505] relative border-t border-white/5 font-sans overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-[#E5A93C]/5 via-transparent to-transparent opacity-50"></div>
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">

                {/* Information Side (Left) */}
                <div className="flex-1 w-full text-left">
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6 relative">
                        Passez à la <br /><span className="text-[#E5A93C]">Vitesse Supérieure</span>
                        <div className="absolute -left-4 top-2 w-1 h-12 bg-[#E5A93C]"></div>
                    </h2>

                    <p className="text-[#888888] font-medium tracking-wide mb-12 text-lg max-w-lg">
                        Prêt à transformer l'image de votre garage ou de votre collection privée ? Réservez votre session dès aujourd'hui.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-center gap-6 group">
                            <div className="w-14 h-14 bg-[#111] border border-white/10 flex items-center justify-center group-hover:border-[#E5A93C]/50 transition-colors">
                                <Calendar className="text-[#E5A93C]" size={24} strokeWidth={1.5} />
                            </div>
                            <div>
                                <div className="text-[10px] text-[#555] font-bold uppercase tracking-[0.2em] mb-1">Disponibilité</div>
                                <div className="text-white font-medium tracking-wide">Réservation 2 à 3 semaines à l'avance</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 group">
                            <div className="w-14 h-14 bg-[#111] border border-white/10 flex items-center justify-center group-hover:border-[#E5A93C]/50 transition-colors">
                                <MapPin className="text-[#E5A93C]" size={24} strokeWidth={1.5} />
                            </div>
                            <div>
                                <div className="text-[10px] text-[#555] font-bold uppercase tracking-[0.2em] mb-1">Zone d'intervention</div>
                                <div className="text-white font-medium tracking-wide">Hauts-de-France (59/62) & Belgique</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 group">
                            <div className="w-14 h-14 bg-[#111] border border-white/10 flex items-center justify-center group-hover:border-[#E5A93C]/50 transition-colors">
                                <Mail className="text-[#E5A93C]" size={24} strokeWidth={1.5} />
                            </div>
                            <div>
                                <div className="text-[10px] text-[#555] font-bold uppercase tracking-[0.2em] mb-1">Contact Direct</div>
                                <a href="mailto:contact@studioauto.fr" className="text-white font-medium tracking-wide hover:text-[#E5A93C] transition-colors">
                                    tom.carx@instagram
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form Side (Right) */}
                <div className="flex-1 w-full max-w-xl">
                    <div className="bg-[#0A0A0A] p-8 md:p-12 border border-white/10 relative shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]">
                        {/* Decorative Corners */}
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#E5A93C] -translate-y-[2px] translate-x-[2px]" />
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#E5A93C] translate-y-[2px] -translate-x-[2px]" />

                        <div className="mb-10 flex items-center gap-4">
                            <div className="w-12 h-px bg-[#E5A93C]"></div>
                            <h3 className="text-white uppercase tracking-[0.2em] font-bold text-sm">Demande de Devis</h3>
                        </div>

                        {isSubmitted ? (
                            <div className="h-[400px] flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                                <div className="w-20 h-20 rounded-full border border-[#E5A93C]/30 flex items-center justify-center mb-6 bg-[#E5A93C]/10">
                                    <Send className="text-[#E5A93C]" size={32} />
                                </div>
                                <h4 className="text-2xl text-white font-black uppercase tracking-widest mb-2">Message Envoyé</h4>
                                <p className="text-[#888] font-medium max-w-sm">Je vous recontacterai dans les 24h pour discuter de votre projet.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] text-[#888] font-bold uppercase tracking-[0.1em]">Nom complet</label>
                                        <input required name="name" type="text" className="w-full bg-[#111] border border-white/10 focus:border-[#E5A93C] px-4 py-3 text-white outline-none transition-colors placeholder:text-[#333] text-sm font-medium" placeholder="Jean Dupont" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] text-[#888] font-bold uppercase tracking-[0.1em]">Téléphone</label>
                                        <input required name="phone" type="tel" className="w-full bg-[#111] border border-white/10 focus:border-[#E5A93C] px-4 py-3 text-white outline-none transition-colors placeholder:text-[#333] text-sm font-medium" placeholder="06 12 34 56 78" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] text-[#888] font-bold uppercase tracking-[0.1em]">Date souhaitée</label>
                                        <input required name="date" type="date" className="w-full bg-[#111] border border-white/10 focus:border-[#E5A93C] px-4 py-3 text-white outline-none transition-colors [color-scheme:dark] text-sm font-medium" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] text-[#888] font-bold uppercase tracking-[0.1em]">Type de prestation</label>
                                    <div className="relative">
                                        <select name="service" className="w-full bg-[#111] border border-white/10 focus:border-[#E5A93C] px-4 py-3 text-white outline-none transition-colors appearance-none cursor-pointer text-sm font-medium">
                                            <option value="particulier">Particulier Prestige</option>
                                            <option value="concession">Concession / Stock</option>
                                            <option value="detailing">Centre Detailing</option>
                                            <option value="autre">Autre demande</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <div className="w-2 h-2 border-r border-b border-[#E5A93C] rotate-45" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] text-[#888] font-bold uppercase tracking-[0.1em]">Détails du projet (Voiture, lieu, délai...)</label>
                                    <textarea required name="message" rows={4} className="w-full bg-[#111] border border-white/10 focus:border-[#E5A93C] px-4 py-3 text-white outline-none transition-colors placeholder:text-[#333] resize-none text-sm font-medium" placeholder="Dites-moi en plus sur votre vision..."></textarea>
                                </div>

                                {submitError && (
                                    <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium">
                                        <AlertCircle size={16} />
                                        {submitError}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full relative group overflow-hidden bg-[#E5A93C] text-[#050505] font-black uppercase tracking-[0.2em] text-sm py-4 transition-all duration-300 hover:bg-white disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        {isSubmitting ? 'Traitement en cours...' : 'Planifier une Session'}
                                    </span>
                                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
