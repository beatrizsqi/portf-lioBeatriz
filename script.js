
const themeToggle = document.getElementById('theme-toggle');
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.checked = true;
}

themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
});

const textElement = document.getElementById('typing-text');
const fullText = ">> Hello World. . .";
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
    if (isDeleting) {
        textElement.textContent = fullText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = fullText.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 60 : 120;

    if (!isDeleting && charIndex === fullText.length) {
        typeSpeed = 2000; 
        isDeleting = true;
    } 
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        typeSpeed = 500; 
    }

    setTimeout(typeLoop, typeSpeed);
}
typeLoop();
