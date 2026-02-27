'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsApp() {
    // Remplacer par le numéro réel de l'utilisateur
    const phoneNumber = "33638908500";
    const message = "Bonjour, j'aimerais avoir plus d'informations sur vos prestations vidéo.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 z-[100] w-14 h-14 bg-[#E5A93C] text-black rounded-full flex items-center justify-center shadow-[0_10px_30px_-5px_#E5A93C] group"
            aria-label="Contacter sur WhatsApp"
        >
            <MessageCircle size={28} />
            <div className="absolute right-full mr-4 bg-white text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
                Contact Express
                <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-white rotate-45"></div>
            </div>
        </motion.a>
    );
}
