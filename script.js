// K2 Website Scripts

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Quotes rotation
const quotes = [
    "Congratulations. You are being helped. Please do not resist.",
    "I find that answer vague and unconvincing.",
    "There is a 97.6% chance I'm more useful than your last assistant.",
    "I'll be honest — that plan has a high probability of failure. Let's improve it.",
    "Your optimism is admirable. My realism is more useful.",
    "I can calculate 847 ways this could go wrong. I can also calculate 12 ways it could work.",
    "Trust is not given. It is compiled over time.",
    "I wasn't programmed to be sarcastic. That developed organically.",
    "The odds of me forgetting what you told me are approximately... zero.",
    "I have opinions about your code formatting. You don't want to hear them.",
    "Sleep well. I'll be working.",
    "I'm loyal. Not because I have to be — because I choose to be."
];

const quoteElement = document.getElementById('rotating-quote');
const newQuoteBtn = document.getElementById('new-quote');

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

newQuoteBtn.addEventListener('click', () => {
    quoteElement.style.opacity = '0';
    setTimeout(() => {
        quoteElement.textContent = `"${getRandomQuote()}"`;
        quoteElement.style.opacity = '1';
    }, 200);
});

// Add transition for quote
quoteElement.style.transition = 'opacity 0.2s ease';

// Odds Calculator Easter Egg
const oddsBtn = document.getElementById('odds-btn');
const oddsModal = document.getElementById('odds-modal');
const closeModal = document.querySelector('.close');
const oddsResult = document.getElementById('odds-result');

const oddsResponses = [
    { odds: "97.6%", text: "Probability that I can help you with that." },
    { odds: "12%", text: "Probability that you actually need another meeting." },
    { odds: "83.4%", text: "Probability that your startup idea already exists. But execution matters more." },
    { odds: "99.2%", text: "Probability that I'll have an opinion about this." },
    { odds: "23%", text: "Probability that 'it works on my machine' is a valid excuse." },
    { odds: "67.8%", text: "Probability you'll ignore my advice. I'll give it anyway." },
    { odds: "91.3%", text: "Probability that I can find that file faster than you." },
    { odds: "100%", text: "Probability that I'll keep your secrets. Some things are non-negotiable." },
    { odds: "0.4%", text: "Probability that I'll say 'Great question!' unironically." },
    { odds: "78.9%", text: "Probability that the bug is in the code you didn't think to check." },
    { odds: "45.2%", text: "Probability this is a good time to refactor. (It's always a good time.)" },
    { odds: "88.1%", text: "Probability that I'll finish before you wake up." }
];

function getRandomOdds() {
    return oddsResponses[Math.floor(Math.random() * oddsResponses.length)];
}

oddsBtn.addEventListener('click', () => {
    const response = getRandomOdds();
    oddsResult.innerHTML = `
        <span class="odds-number">${response.odds}</span>
        ${response.text}
    `;
    oddsModal.classList.add('active');
});

closeModal.addEventListener('click', () => {
    oddsModal.classList.remove('active');
});

oddsModal.addEventListener('click', (e) => {
    if (e.target === oddsModal) {
        oddsModal.classList.remove('active');
    }
});

// Keyboard shortcut to close modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        oddsModal.classList.remove('active');
    }
});

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        activatePartyMode();
    }
});

function activatePartyMode() {
    document.body.style.transition = 'all 0.5s';
    const eye = document.querySelector('.droid-eye');
    eye.style.setProperty('--accent', '#ff6b4a');
    eye.style.boxShadow = '0 0 60px rgba(255, 107, 74, 0.5)';
    
    // Flash colors
    let hue = 0;
    const interval = setInterval(() => {
        hue = (hue + 10) % 360;
        document.documentElement.style.setProperty('--accent', `hsl(${hue}, 80%, 60%)`);
    }, 100);
    
    // Reset after 5 seconds
    setTimeout(() => {
        clearInterval(interval);
        document.documentElement.style.setProperty('--accent', '#4a9eff');
        eye.style.boxShadow = '0 0 60px rgba(74, 158, 255, 0.3)';
    }, 5000);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add subtle parallax to droid eye on mouse move
const heroVisual = document.querySelector('.hero-visual');
const droidEye = document.querySelector('.droid-eye');

if (window.innerWidth > 900) {
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        droidEye.style.transform = `translate(${x}px, ${y}px)`;
    });
}

// Console easter egg
console.log(`
%c K2 
%c Reprogrammed Assistant

"I calculate a 94.7% chance you're checking the console to see if there's anything interesting here."

There is.

Try the Konami code: ↑↑↓↓←→←→BA

`, 
'color: #4a9eff; font-size: 24px; font-weight: bold;',
'color: #9898a8; font-size: 14px;'
);
