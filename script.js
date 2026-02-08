function showScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    // Show the target screen
    const target = document.getElementById(screenId);
    target.classList.remove('hidden');
    target.style.opacity = 1;
}

function showGift(giftType) {
    const overlay = document.getElementById('gift-overlay');
    const content = document.getElementById('gift-content');
    overlay.classList.remove('hidden');

    if (giftType === 'bouquet') {
        content.innerHTML = `
            <h2>Your Rose Bouquet</h2>
            <img src="https://illustrations.popsy.co/pink/flower-delivery.svg" style="width:200px">
            <p>🌹 I will always love you</p>
            <p>💖 You are the best part of my life</p>
        `;
    } else if (giftType === 'letter') {
        content.innerHTML = `
            <h2>Words from my Heart</h2>
            <div style="background: white; padding: 20px; border-radius: 10px; color: black; text-align: left;">
                To the love of my life, you make my life so meaningful... Always, Forever.
            </div>
        `;
    }
}

function closeGift() {
    document.getElementById('gift-overlay').classList.add('hidden');
}