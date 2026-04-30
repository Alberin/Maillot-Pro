// Petit script pour les boutons "Commander"
document.addEventListener('DOMContentLoaded', () => {
    const boutons = document.querySelectorAll('.achat');

    boutons.forEach(btn => {
        btn.addEventListener('click', () => {
            alert("🔜 Paiement bientôt disponible. Contacte-nous sur WhatsApp :)");
        });
    });

    console.log("Site prêt pour Netlify ✅");
});
