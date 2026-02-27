'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendBookingEmail(formData: FormData) {
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const date = formData.get('date') as string;
    const service = formData.get('service') as string;
    const message = formData.get('message') as string;

    if (!name || !phone || !date || !service || !message) {
        return { error: "Veuillez remplir tous les champs obligatoires." };
    }

    try {
        const { data, error } = await resend.emails.send({
            from: 'Studio Auto <onboarding@resend.dev>',
            to: ['tomayforza@gmail.com'],
            subject: `Nouveau devis : ${service} - ${name}`,
            html: `
                <div style="font-family: sans-serif; padding: 20px; color: #333;">
                    <h2 style="color: #E5A93C;">Nouvelle Demande de Devis</h2>
                    <p><strong>Nom :</strong> ${name}</p>
                    <p><strong>Téléphone :</strong> ${phone}</p>
                    <p><strong>Date souhaitée :</strong> ${date}</p>
                    <p><strong>Type de prestation :</strong> ${service}</p>
                    <p><strong>Message/Détails :</strong></p>
                    <p style="background: #f4f4f4; padding: 15px; border-radius: 5px;">${message}</p>
                </div>
            `,
        });

        if (error) {
            console.error('Resend Error:', error);
            return { error: "Erreur lors de l'envoi de l'email." };
        }

        return { success: true };
    } catch (err) {
        console.error('Email Action Error:', err);
        return { error: "Une erreur inattendue est survenue." };
    }
}
