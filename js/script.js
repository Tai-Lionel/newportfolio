const heading = document.querySelector("#typing-name");
const text = "I am Tai Lionel";
for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
        heading.textContent += text[i];
    }, 100 * i);
}
