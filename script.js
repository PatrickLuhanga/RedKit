const messages = [
    "A sudden shift, a quiet spark,<br>A sudden light within the dark.<br>A glimpse of something truly rare,<br>I knew right then, right then and there,<br>That you were one I'd not forget,<br>The brightest soul I'd ever met.",
    "Your energy, a gentle sun,<br>That warms the room when day is done.<br>Your kindness makes the shadows fade,<br>And lightens every heavy shade.<br>For simply being who you are,<br>You are my brightest, guiding star.",
    "If I stepped back, it wasn't fear,<br>But wanting only sunshine near.<br>I fought my storms behind the scenes,<br>To keep you safe from what that means.<br>You always deserved the very best,<br>While I weathered the rain and the test.",
    "So hold onto your brilliant light,<br>Your mind so sharp, your spirit bright.<br>Please never change the heart you bear,<br>It’s what makes you so beautifully rare.<br>Stay exactly as you are today,<br>And never let that fade away.",
    "They say all good things come to an end. Even though our chapter is closing, I am so grateful for the time we shared, and I truly wish you nothing but the absolute best in everything you do."
];

let currentStage = 0;
let isTyping = false;
let typingTimeouts = [];

const startBtn = document.getElementById('start-btn');
const container = document.getElementById('experience-container');
const textContainer = document.getElementById('text-container');
const hint = document.getElementById('hint');
const flowerWrapper = document.getElementById('flower-wrapper');
const finalMessage = document.getElementById('final-message');
const bgMusic = document.getElementById('bg-music');

startBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    startBtn.style.display = 'none';
    container.style.display = 'block';
    
    bgMusic.play();
    
    updateStage();
});

container.addEventListener('click', () => {
    if (isTyping) {
        typingTimeouts.forEach(clearTimeout);
        document.querySelectorAll('.word').forEach(el => el.classList.add('visible'));
        isTyping = false;
    } else if (currentStage < 4) {
        currentStage++;
        updateStage();
    }
});

function typeText(text, targetContainer, callback) {
    targetContainer.innerHTML = '';
    const tokens = text.replace(/<br>/g, ' <br> ').split(' ').filter(t => t !== '');
    isTyping = true;
    typingTimeouts = [];
    let delayIndex = 0;

    tokens.forEach((token, index) => {
        if (token === '<br>') {
            targetContainer.appendChild(document.createElement('br'));
        } else {
            const span = document.createElement('span');
            span.className = 'word';
            span.innerHTML = token + '&nbsp;';
            targetContainer.appendChild(span);

            const timeout = setTimeout(() => {
                span.classList.add('visible');
                
                if (index === tokens.length - 1 || (index === tokens.length - 2 && tokens[tokens.length-1] === '<br>')) {
                    isTyping = false;
                    if (callback) callback();
                }
            }, delayIndex * 250); 

            typingTimeouts.push(timeout);
            delayIndex++;
        }
    });
}

function updateStage() {
    textContainer.innerHTML = ''; 
    
    if (currentStage < 4) {
        document.getElementById(`p${currentStage + 1}`).style.opacity = '1';
        typeText(messages[currentStage], textContainer);
    } else {
        textContainer.style.display = 'none';
        hint.style.display = 'none';
        
        flowerWrapper.style.opacity = '1';
        flowerWrapper.classList.add('grow');
        
        setTimeout(() => {
            typeText(messages[4], finalMessage);
        }, 5500); 
    }
}