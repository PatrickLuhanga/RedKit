const canvas = document.getElementById('treeCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 400;

const growBtn = document.getElementById('growBtn');
const messagesDiv = document.getElementById('messages');

// Replace these with your personal messages 💌
const messages = [
    "Hey... you’re amazing 💖",
    "I really like you 😳",
    "Will you be my girlfriend? ❤️"
];

growBtn.addEventListener('click', () => {
    growBtn.disabled = true;
    drawTree(canvas.width / 2, canvas.height, -90, 80, 10);
});

// Recursive tree drawing
function drawTree(x, y, angle, length, depth) {
    if (depth === 0) {
        // Draw heart leaves
        ctx.fillStyle = 'red';
        ctx.font = '20px Arial';
        ctx.fillText('❤️', x-10, y);
        showMessages();
        return;
    }

    const rad = angle * (Math.PI / 180);
    const x2 = x + length * Math.cos(rad);
    const y2 = y + length * Math.sin(rad);

    ctx.strokeStyle = '#663300';
    ctx.lineWidth = depth;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.stroke();

    setTimeout(() => {
        drawTree(x2, y2, angle - 20, length * 0.7, depth - 1);
        drawTree(x2, y2, angle + 20, length * 0.7, depth - 1);
    }, 300);
}

// Show messages floating up
function showMessages() {
    messages.forEach((msg, i) => {
        setTimeout(() => {
            const div = document.createElement('div');
            div.className = 'message';
            div.style.left = `${canvas.width / 2 - 100 + Math.random() * 200}px`;
            div.textContent = msg;
            messagesDiv.appendChild(div);
        }, i * 2000);
    });
}